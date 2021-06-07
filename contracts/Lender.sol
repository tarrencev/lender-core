// SPDX-License-Identifier: BUSL-1.1

pragma solidity =0.7.6;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import "@uniswap/v3-core/contracts/libraries/FullMath.sol";
import "@uniswap/v3-core/contracts/libraries/LowGasSafeMath.sol";
import "@uniswap/v3-periphery/contracts/libraries/OracleLibrary.sol";
import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";

import "./interfaces/ILiquidateCallback.sol";
import "./interfaces/INUSD.sol";
import "./interfaces/IOracle.sol";

import "./libraries/CollateralMath.sol";
import "./utils/Ownable.sol";

/// @title Collateralized lender.
contract Lender is Ownable, ReentrancyGuard {
    address public constant uniswapV3Factory = 0x1F98431c8aD98523631AE4a59f267346ea31F984;
    address public constant wethAddress = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    using LowGasSafeMath for uint256;
    using CollateralMath for uint256;
    using SafeERC20 for IERC20;
    using SafeERC20 for INUSD;

    struct Position {
        uint256 debt;
        uint256 value;
        uint256 coll;
        uint256 ratio;
    }

    event Update(address indexed owner, uint256 coll, uint256 debt);
    event Liquidate(address indexed owner, address liquidator);

    // Lender collateral token.
    IERC20 public _collateral;
    // Stable coin token.
    INUSD public _nusd;
    // Lender oracle.
    IOracle public _ethusdOracle;
    // UniswapV3 Pool Address;
    address public _oraclePool;
    // Oracle period.
    uint32 public _oraclePeriod;

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
        address ethusdOracle,
        uint24 oraclePoolFee,
        uint32 oraclePeriod,
        uint256 fee,
        uint256 minDebt,
        uint256 minPositionCollateralizationRatio,
        uint256 minSystemCollateralizationRatio
    ) Ownable(msg.sender) {
        _collateral = IERC20(collateral);
        _nusd = INUSD(nusd);
        _ethusdOracle = IOracle(ethusdOracle);
        _oraclePeriod = oraclePeriod;
        _oraclePool = PoolAddress.computeAddress(
            uniswapV3Factory,
            PoolAddress.getPoolKey(collateral, wethAddress, oraclePoolFee)
        );

        _fee = fee;
        _minDebt = minDebt;
        _minPositionCollateralizationRatio = minPositionCollateralizationRatio;
        _minSystemCollateralizationRatio = minSystemCollateralizationRatio;
    }

    /// @notice Update a position.
    /// @param collDelta The collateral delta to apply to the position.
    /// @param debtDelta The debt delta to apply to the position.
    function update(int256 collDelta, int256 debtDelta) external nonReentrant returns (Position memory) {
        require(collDelta != 0 || debtDelta != 0, "noop update");

        (uint256 coll, uint256 debt) = _positionOf(msg.sender);

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
            return Position(0, 0, 0, 0);
        }

        // Charge a fee for debt increases.
        if (debtDelta > 0) {
            nextDebt = nextDebt.add(_fee);
            _openedDebt = _openedDebt.add(_fee);
            _actualDebt = _actualDebt.add(_fee);
            _nusd.mint(owner(), _fee);
        }

        uint256 price = observe();
        uint256 ratio = CollateralMath.ratio(nextColl, nextDebt, price);

        require(nextDebt >= _minDebt, "less than min debt");

        if (CollateralMath.ratio(_actualColl, _actualDebt, price) < _minSystemCollateralizationRatio) {
            // System is in recovery mode.
            require(ratio >= _minSystemCollateralizationRatio, "undercollateralized position");
        } else {
            // Position would push system under ratio.
            require(
                CollateralMath.ratio(_actualColl.add(nextColl), _actualDebt.add(nextDebt), price) >
                    _minSystemCollateralizationRatio,
                "undercollateralized system"
            );
            require(ratio > _minPositionCollateralizationRatio, "undercollateralized system");
        }

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

        return Position(nextColl, nextColl.mul(price), nextDebt, ratio);
    }

    /// @notice Liquidate a position.
    /// @param owner The position owner.
    function liquidate(address owner, bytes calldata data) external nonReentrant {
        (uint256 coll, uint256 debt) = _positionOf(owner);
        require(debt != 0, "position has no debt");

        uint256 price = observe();
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

    function observe() public view returns (uint256) {
        uint128 ethusd = uint128(_ethusdOracle.observe(_oraclePeriod));
        int24 tick = OracleLibrary.consult(_oraclePool, _oraclePeriod);
        return OracleLibrary.getQuoteAtTick(tick, ethusd, address(_collateral), wethAddress);
    }

    /// @notice Compute the current collateral, debt, and ratio of a position by owner.
    /// @param holder The position holder.
    /// @return position The holders position.
    function positionOf(address holder) external view returns (Position memory) {
        if (_positions[holder].coll == 0) {
            return Position(0, 0, 0, 0);
        }

        uint256 price = observe();
        uint256 coll = FullMath.mulDiv(_positions[holder].coll, _actualColl, _openedColl);
        uint256 value = coll.mul(price);
        uint256 debt = FullMath.mulDiv(_positions[holder].debt, _actualDebt, _openedDebt);
        uint256 ratio = CollateralMath.ratio(coll, debt, price);
        return Position(coll, value, debt, ratio);
    }

    /// @notice Compute the current collateral and debt position by holder.
    /// @param holder The position holder.
    /// @return coll The positions collateral balance.
    /// @return debt The positions debt balance.
    function _positionOf(address holder) internal view returns (uint256 coll, uint256 debt) {
        if (_positions[holder].coll == 0) {
            return (0, 0);
        }
        coll = FullMath.mulDiv(_positions[holder].coll, _actualColl, _openedColl);
        debt = FullMath.mulDiv(_positions[holder].debt, _actualDebt, _openedDebt);
    }

    /// @notice Compute the total collateralization ratio of the issuer.
    /// @param price The collateral price.
    /// @return The total collateralization of the issuer.
    function totalCollateralizationRatio(uint256 price) public view returns (uint256) {
        return CollateralMath.ratio(_actualColl, _actualDebt, price);
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
        _ethusdOracle = IOracle(oracle);
    }

    /// @notice Set oracle period.
    /// @param period Oracle period.
    function setOraclePeriod(uint32 period) external onlyOwner {
        _oraclePeriod = period;
    }
}
