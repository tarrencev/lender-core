// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity =0.7.6;

import "@uniswap/v3-periphery/contracts/libraries/OracleLibrary.sol";
import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

import "./interfaces/IOracle.sol";
import "./utils/Ownable.sol";

/*
 * Oracle that leverages uniswap v3 oracles to
 */
contract Oracle is IOracle, Ownable {
    IOracle public _ethusdOracle;
    address public _token;
    address public _pool;

    address public constant uniswapV3Factory = 0x1F98431c8aD98523631AE4a59f267346ea31F984;
    address public constant wethAddress = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    constructor(
        address owner,
        address ethusdOracle,
        address token,
        uint24 fee
    ) Ownable(owner) {
        _token = token;
        _ethusdOracle = IOracle(ethusdOracle);
        _pool = PoolAddress.computeAddress(uniswapV3Factory, PoolAddress.getPoolKey(_token, wethAddress, fee));
    }

    /// @notice Fetches time-weighted token conversion rate using Uniswap V3 pool oracle.
    function observe(uint32 period) external view override returns (uint256) {
        uint128 ethusd = uint128(_ethusdOracle.observe(period));
        int24 tick = OracleLibrary.consult(_pool, period);
        return OracleLibrary.getQuoteAtTick(tick, ethusd, _token, wethAddress);
    }

    /// @notice Set the usdeth price oracle.
    /// @param ethusdOracle Set usdeth oracle.
    function setUSDETHOracle(address ethusdOracle) external onlyOwner {
        _ethusdOracle = IOracle(ethusdOracle);

        // Sanity check it returns a nonzero value.
        require(_ethusdOracle.observe(1) != 0, "observe failure");
    }
}
