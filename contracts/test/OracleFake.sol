// SPDX-License-Identifier: MIT

pragma solidity =0.7.6;

import "@uniswap/v3-core/contracts/libraries/TickMath.sol";

import "../interfaces/IOracle.sol";

contract OracleFake is IOracle {
    uint256 public _price;

    function set(uint256 price) external {
        _price = price;
    }

    function observe(uint32) external view override returns (uint256) {
        return _price;
    }

    function getTickForQuote(uint160 sqrtPriceX96) internal pure returns (int24) {
        return TickMath.getTickAtSqrtRatio(sqrtPriceX96);
    }
}
