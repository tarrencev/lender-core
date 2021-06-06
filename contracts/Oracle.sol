// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity =0.7.6;

import "@uniswap/v3-periphery/contracts/libraries/OracleLibrary.sol";
import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

import "./interfaces/IOracle.sol";

/*
 * Oracle that leverages uniswap v3 oracles to compute the current ethusd price.
 */
contract Oracle is IOracle {
    address public constant uniswapV3Factory = 0x1F98431c8aD98523631AE4a59f267346ea31F984;
    address public constant wethAddress = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant usdcAddress = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    address public _pool;

    constructor() {
        _pool = PoolAddress.computeAddress(uniswapV3Factory, PoolAddress.getPoolKey(wethAddress, usdcAddress, 3000));
    }

    /// @notice Fetches time-weighted token conversion rate using Uniswap V3 pool oracle.
    function observe(uint32 period) external view override returns (uint256) {
        int24 tick = OracleLibrary.consult(_pool, period);
        return OracleLibrary.getQuoteAtTick(tick, 1 ether, usdcAddress, wethAddress);
    }
}
