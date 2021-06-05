// SPDX-License-Identifier: BUSL-1.1

pragma solidity =0.7.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import "@uniswap/v3-core/contracts/libraries/FullMath.sol";
import "@uniswap/v3-core/contracts/libraries/LowGasSafeMath.sol";

import "./interfaces/ILiquidateCallback.sol";
import "./interfaces/INUSD.sol";
import "./interfaces/IOracle.sol";

import "./libraries/CollateralMath.sol";
import "./utils/Ownable.sol";

/// @title Collateralized lender.
contract Lender is Ownable, ReentrancyGuard {
    using LowGasSafeMath for uint256;
    using CollateralMath for uint256;
    using SafeERC20 for IERC20;
    using SafeERC20 for INUSD;

    struct Position {
        uint256 debt;
        uint256 coll;
    }

    event Update(address indexed owner, uint256 coll, uint256 debt);
    event Liquidate(address indexed owner, address liquidator);

    // Lender collateral token.
    IERC20 public _collateral;
    // Stable coin token.
    INUSD public _nusd;
    // Lender oracle.
    IOracle public _oracle;

    // Fee charged to open a position in nUSD.
    uint256 public _fee;
    // Minimum debt of a position.
    uint256 public _minDebt;
    // Minimum collateralization ratio of a position.
    uint256 public _minPositionCollateralizationRatio;
    // Minimum collateralization ratio of the system before recovery mode is enabled.
    uint256 public _minSystemCollateralizationRatio;

    // Aggregate opened collateral.
    uint256 public _openedColl;
    // Aggregate opened debt.
    uint256 public _openedDebt;
    // Actual collateral balance. Opened - Redeemed + Redistributed.
    uint256 public _actualColl;
    // Actual debt balance. Opened - Redeemed + Redistributed.
    uint256 public _actualDebt;
    // User to position mapping.
    mapping(address => Position) public _positions;

    constructor(
        address collateral,
        address nusd,
        address oracle,
        uint256 fee,
        uint256 minDebt,
        uint256 minPositionCollateralizationRatio,
        uint256 minSystemCollateralizationRatio
    ) Ownable(msg.sender) {
        _collateral = IERC20(collateral);
        _nusd = INUSD(nusd);
        _oracle = IOracle(oracle);

        _fee = fee;
        _minDebt = minDebt;
        _minPositionCollateralizationRatio = minPositionCollateralizationRatio;
        _minSystemCollateralizationRatio = minSystemCollateralizationRatio;
    }

    /// @notice Update a position.
    /// @param collDelta The collateral delta to apply to the position.
    /// @param debtDelta The debt delta to apply to the position.
    function update(int256 collDelta, int256 debtDelta) external nonReentrant {
        require(collDelta != 0 || debtDelta != 0, "noop update");

        (uint256 coll, uint256 debt) = positionOf(msg.sender);

        uint256 nextColl = coll.addDelta(collDelta);
        uint256 nextDebt = debt.addDelta(debtDelta);

        _openedColl = _openedColl.addDelta(collDelta);
        _openedDebt = _openedDebt.addDelta(debtDelta);
        _actualColl = _actualColl.addDelta(collDelta);
        _actualDebt = _actualDebt.addDelta(debtDelta);

        // Position was closed.
        if (nextColl == 0 && nextDebt == 0) {
            delete _positions[msg.sender];
            _nusd.burn(msg.sender, uint256(-debtDelta));
            _collateral.safeTransfer(msg.sender, uint256(-collDelta));
            emit Update(msg.sender, 0, 0);
            return;
        }

        // Charge a fee for debt increases.
        if (debtDelta > 0) {
            nextDebt = nextDebt.add(_fee);
            _openedDebt = _openedDebt.add(_fee);
            _actualDebt = _actualDebt.add(_fee);
            _nusd.mint(owner(), _fee);
        }

        require(isValidPosition(nextColl, nextDebt), "undercollateralized position");
        _positions[msg.sender].coll = nextColl;
        _positions[msg.sender].debt = nextDebt;

        if (debtDelta < 0) {
            _nusd.burn(msg.sender, uint256(-debtDelta));
        } else if (debtDelta > 0) {
            _nusd.mint(msg.sender, uint256(debtDelta));
        }

        if (collDelta < 0) {
            _collateral.safeTransfer(msg.sender, uint256(-collDelta));
        } else if (collDelta > 0) {
            _collateral.safeTransferFrom(msg.sender, address(this), uint256(collDelta));
        }

        emit Update(msg.sender, nextColl, nextDebt);
    }

    /// @notice Liquidate a position.
    /// @param owner The position owner.
    function liquidate(address owner, bytes calldata data) external nonReentrant {
        (uint256 coll, uint256 debt) = positionOf(owner);
        require(debt != 0, "position has no debt");

        uint256 price = _oracle.observe();
        require(isValidLiquidation(price, CollateralMath.ratio(coll, debt, price)), "invalid liquidation");

        _collateral.safeTransfer(msg.sender, coll);

        ILiquidateCallback(msg.sender).liquidateCallback(coll, debt, data);

        _actualDebt = _actualDebt.sub(debt);
        _actualColl = _actualColl.sub(coll);

        _openedColl = _openedColl.sub(_positions[owner].coll);
        _openedDebt = _openedDebt.sub(_positions[owner].debt);
        delete _positions[owner];

        _nusd.burn(msg.sender, debt);

        emit Liquidate(owner, msg.sender);
    }

    /// @notice Compute the current collateral and debt position by owner.
    /// @param owner The position owner.
    /// @return coll The positions collateral balance.
    /// @return debt The positions debt balance.
    function positionOf(address owner) public view returns (uint256 coll, uint256 debt) {
        if (_positions[owner].coll == 0) {
            return (0, 0);
        }
        coll = FullMath.mulDiv(_positions[owner].coll, _actualColl, _openedColl);
        debt = FullMath.mulDiv(_positions[owner].debt, _actualDebt, _openedDebt);
    }

    /// @notice Compute the total collateralization ratio of the issuer.
    /// @param price The collateral price.
    /// @return The total collateralization of the issuer.
    function totalCollateralizationRatio(uint256 price) public view returns (uint256) {
        return CollateralMath.ratio(_actualColl, _actualDebt, price);
    }

    /// @notice Validates a given position is valid.
    /// @param coll The position's collateral.
    /// @param debt The position's debt.
    /// @return True if the position is valid, else false.
    function isValidPosition(uint256 coll, uint256 debt) internal view returns (bool) {
        require(debt >= _minDebt, "less than min debt");

        uint256 price = _oracle.observe();
        uint256 ratio = CollateralMath.ratio(coll, debt, price);

        if (CollateralMath.ratio(_actualColl, _actualDebt, price) < _minSystemCollateralizationRatio) {
            // System is in recovery mode.
            return ratio >= _minSystemCollateralizationRatio;
        } else if (
            CollateralMath.ratio(_actualColl.add(coll), _actualDebt.add(debt), price) < _minSystemCollateralizationRatio
        ) {
            // Position would push system under ratio.
            return false;
        }

        return ratio >= _minPositionCollateralizationRatio;
    }

    /// @notice Validates a position's liquidation.
    /// @param price Current collateral price.
    /// @param ratio Positions collateralization ratio.
    /// @return True if the position can be liquidated, else false.
    function isValidLiquidation(uint256 price, uint256 ratio) internal view returns (bool) {
        return
            (isRecovering(price) && ratio < _minSystemCollateralizationRatio) ||
            ratio < _minPositionCollateralizationRatio;
    }

    /// @notice Checks if the issuer is in recovery mode.
    /// @param price Current collateral price.
    /// @return True if system is in recovery, else false.
    function isRecovering(uint256 price) internal view returns (bool) {
        return totalCollateralizationRatio(price) < _minSystemCollateralizationRatio;
    }

    /// @notice Set lender issuance fee.
    /// @param fee Issuance fee.
    function setFee(uint256 fee) external onlyOwner {
        _fee = fee;
    }

    /// @notice Set lender min debt.
    /// @param minDebt Mimimum debt threshold.
    function setMinDebt(uint256 minDebt) external onlyOwner {
        _minDebt = minDebt;
    }

    /// @notice Set minimum position collateralization ratio.
    /// @param minPositionCollateralizationRatio Minimum position collateralization ratio.
    function setMinPositionCollateralizationRatio(uint256 minPositionCollateralizationRatio) external onlyOwner {
        _minPositionCollateralizationRatio = minPositionCollateralizationRatio;
    }

    /// @notice Set minimum system collateralization ratio.
    /// @param minSystemCollateralizationRatio Minimum system collateralization ratio.
    function setMinSystemCollateralizationRatio(uint256 minSystemCollateralizationRatio) external onlyOwner {
        _minSystemCollateralizationRatio = minSystemCollateralizationRatio;
    }

    /// @notice Set collateral oracle.
    /// @param oracle Collateral oracle.
    function setOracle(address oracle) external onlyOwner {
        _oracle = IOracle(oracle);
    }
}
