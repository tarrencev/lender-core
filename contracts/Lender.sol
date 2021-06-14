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
import "./libraries/LenderCollateral.sol";
import "./libraries/LenderStable.sol";
import "./libraries/Position.sol";
import "./libraries/Update.sol";
import "./libraries/SafeCast.sol";

import "./utils/Ownable.sol";

/// @title Collateralized lender.
contract Lender is Ownable, ReentrancyGuard {
    address public constant UNISWAP_V3_FACTORY = 0x1F98431c8aD98523631AE4a59f267346ea31F984;
    address public constant WETH_ADDRESS = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    using LowGasSafeMath for uint256;
    using LowGasSafeMath for int256;
    using CollateralMath for uint256;
    using SafeCast for uint256;
    using SafeCast for int256;
    using LenderStable for INUSD;
    using LenderCollateral for IERC20;
    using SafeERC20 for IERC20;
    using Position for Position.Info;
    using Position for mapping(address => Position.Info);
    using Update for Update.Info;

    event Updated(address indexed owner, uint256 coll, uint256 debt);
    event Liquidated(address indexed owner, address liquidator);

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
    uint128 public _minBCR;
    // Minimum collateralization ratio of the system before recovery mode is enabled.
    uint128 public _minLCR;

    // Lenders opened postion.
    Position.Info public lNominal;

    // Lenders real postion.
    Position.Info public lReal;

    // Borrower to position mapping.
    mapping(address => Position.Info) public _positions;

    constructor(
        address collateral_,
        address nusd,
        address ethusdOracle_,
        uint24 oraclePoolFee_,
        uint32 oraclePeriod_,
        uint256 fee_,
        uint256 minDebt_,
        uint128 minBCR_,
        uint128 minLCR_
    ) Ownable(msg.sender) {
        _collateral = IERC20(collateral_);
        _nusd = INUSD(nusd);
        _ethusdOracle = IOracle(ethusdOracle_);
        _oraclePeriod = oraclePeriod_;
        _oraclePool = PoolAddress.computeAddress(
            UNISWAP_V3_FACTORY,
            PoolAddress.getPoolKey(collateral_, WETH_ADDRESS, oraclePoolFee_)
        );

        _fee = fee_;
        _minDebt = minDebt_;
        _minBCR = minBCR_;
        _minLCR = minLCR_;
    }

    /// @notice Initialize the lender.
    /// @param u The initialization update apply to the position. It is required to
    ///          put the lender at the minimum lender collateralization level or above.
    function initialize(Update.Info calldata u) public onlyOwner {
        if (lNominal.coll > 0) {
            return;
        }

        Position.Info storage bNominal = _positions.get(msg.sender);
        lReal.update(u);
        lNominal.update(u);
        bNominal.update(u);

        uint256 price = observe();
        require(lReal.ratio(price) >= _minLCR, "init undercollateralized system");

        _nusd.update(u.debt);
        _collateral.update(u.coll);
    }

    /// @notice Update a position.
    /// @param uReal The real update apply to the position.
    function update(Update.Info memory uReal) external initialized nonReentrant {
        require(uReal.coll != 0 || uReal.debt != 0, "noop update");

        Position.Info storage bNominal = _positions.get(msg.sender);
        Update.Info memory uNominal;

        // Computes the nominal update. In the event that the user overpays their debt,
        // this function will mutate the real update (uReal) to reflect the correct
        // debt adjustment that zeros the debt. In this case, even if a user overpays
        // their debt we will only draw the necessary amount.
        (uNominal, uReal) = uReal.nominal(bNominal, lReal, lNominal);

        lReal.update(uReal);
        lNominal.update(uNominal);
        bNominal.update(uNominal);

        // Position was closed.
        if (bNominal.coll == 0 && bNominal.debt == 0) {
            delete _positions[msg.sender];
            _nusd.update(uReal.debt);
            _collateral.update(uReal.coll);
            emit Updated(msg.sender, 0, 0);
            return;
        }

        uint256 price = observe();
        int256 ratio = bNominal.ratio(price);

        // Charge a fee for operations that occur when the position is below lender collateralization ratio.
        int256 fee_ = 0;
        if (ratio < _minLCR) {
            fee_ = fee(uint256(ratio)).toInt256();
            bNominal.update(Update.Info(0, fee_)); // TODO: use real fee
            lNominal.update(Update.Info(0, fee_));
            lReal.update(Update.Info(0, fee_));

            // TODO: Where to mint the fee to?
            _nusd.mint(owner(), uint256(fee_));
        }

        require(bNominal.debt >= _minDebt, "less than min debt");

        ratio = bNominal.ratio(price);

        // System is in recovery mode.
        if (lReal.ratio(price) < _minLCR) {
            require(ratio >= _minLCR, "undercollateralized system");
        } else {
            require(ratio >= _minBCR, "undercollateralized borrower");
        }

        // // If the system is fully withdrawn, it needs to be zero'd out such that it can be reinitialized.
        // require(
        //     (lNominal.coll > 0 && lNominal.debt > 0) || (lNominal.coll == 0 && lNominal.debt == 0),
        //     "invalid liquidation"
        // );

        _nusd.update(uReal.debt.sub(fee_));
        _collateral.update(uReal.coll);

        emit Updated(msg.sender, bNominal.coll, bNominal.debt);
    }

    /// @notice Liquidate a position.
    /// @param owner The position owner.
    function liquidate(address owner, bytes calldata data) external initialized nonReentrant {
        Position.Info memory bNominal = _positions[owner];
        require(bNominal.debt != 0, "position has no debt");

        Position.Info memory bReal = CollateralMath.real(bNominal, lNominal, lReal);

        uint256 price = observe();
        require(isValidLiquidation(price, bReal.ratio(price)), "invalid liquidation");

        _collateral.safeTransfer(msg.sender, bReal.coll);

        ILiquidateCallback(msg.sender).liquidateCallback(bReal.coll, bReal.debt, data);

        // We cast the positon values (uint128) to update values (int256) and negate
        // them to subtract the values from the system. This cast is safe since a uint128
        // can not overflow a int256.
        lReal.update(Update.Info(-int256(bReal.coll), -int256(bReal.debt)));
        lNominal.update(Update.Info(-int256(bNominal.coll), -int256(bNominal.debt)));
        delete _positions[owner];

        // If we fully liquidate the system, it needs to be fully zero'd out such that it can be reinitialized.
        require(
            (lNominal.coll > 0 && lNominal.debt > 0) || (lNominal.coll == 0 && lNominal.debt == 0),
            "invalid liquidation: system drained"
        );

        _nusd.burn(msg.sender, bReal.debt);

        emit Liquidated(owner, msg.sender);
    }

    /// @notice Compute an updates fee.
    /// @param ratio How far below the lender colalteralization ratio is the borrower.
    function fee(uint256 ratio) public view returns (uint256) {
        if (ratio >= _minLCR) {
            return 0;
        }

        if (ratio < _minBCR) {
            return _fee;
        }

        // Borrower is below the minimum borrower collateralization ratio. They
        // own the full liquidation fee.
        int256 below = ratio.toInt256().sub(_minLCR);
        if (below <= uint256(_minBCR).toInt256().sub(_minLCR)) {
            return _fee;
        }

        // We compute
        uint256 fee_ = (1 - (uint256(-below) / uint256(_minLCR).add(_minBCR))).mul(_fee);
        assert(fee_ > 0); // Fee should never be allowed to go negative.
        return fee_;
    }

    function observe() public view virtual returns (uint256) {
        uint128 ethusd = uint128(_ethusdOracle.observe(_oraclePeriod));
        int24 tick = OracleLibrary.consult(_oraclePool, _oraclePeriod);
        return OracleLibrary.getQuoteAtTick(tick, ethusd, address(_collateral), WETH_ADDRESS);
    }

    // function redeem() public {

    // }

    /// @notice Compute the current collateral, debt, and ratio of a position by owner.
    /// @param borrower The position borrower.
    /// @return position The borrowers position.
    function positionOf(address borrower) external view returns (Position.Info memory) {
        if (_positions[borrower].coll == 0) {
            return Position.Info(0, 0);
        }

        return CollateralMath.real(_positions[borrower], lNominal, lReal);
    }

    /// @notice Compute the total collateralization ratio of the issuer.
    /// @param price The collateral price.
    /// @return The total collateralization of the issuer.
    function totalCollateralizationRatio(uint256 price) public view returns (int256) {
        return lReal.ratio(price);
    }

    /// @notice Validates a position's liquidation.
    /// @param price Current collateral price.
    /// @param ratio Positions collateralization ratio.
    /// @return True if the position can be liquidated, else false.
    function isValidLiquidation(uint256 price, int256 ratio) internal view returns (bool) {
        return (isRecovering(price) && ratio < _minLCR) || ratio < _minBCR;
    }

    /// @notice Checks if the issuer is in recovery mode.
    /// @param price Current collateral price.
    /// @return True if system is in recovery, else false.
    function isRecovering(uint256 price) internal view returns (bool) {
        return totalCollateralizationRatio(price) < _minLCR;
    }

    /// @notice Set lender issuance fee.
    /// @param fee_ Issuance fee.
    function setFee(uint256 fee_) external onlyOwner {
        _fee = fee_;
    }

    /// @notice Set lender min debt.
    /// @param minDebt Mimimum debt threshold.
    function setMinDebt(uint256 minDebt) external onlyOwner {
        _minDebt = minDebt;
    }

    /// @notice Set minimum position collateralization ratio.
    /// @param minBCR Minimum position collateralization ratio.
    function setMinPositionCollateralizationRatio(uint128 minBCR) external onlyOwner {
        _minBCR = minBCR;
    }

    /// @notice Set minimum system collateralization ratio.
    /// @param minLCR Minimum system collateralization ratio.
    function setMinSystemCollateralizationRatio(uint128 minLCR) external onlyOwner {
        _minLCR = minLCR;
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

    /// @notice Proceeds if the system has been initialized. Initializaion is defined
    ///         as having a lender collateral and debt balance greater than 0. This
    ///         is required for the lenders math to function (avoid division by zero).
    modifier initialized {
        require(lNominal.coll > 0 && lNominal.debt > 0, "not initialized");
        _;
    }
}
