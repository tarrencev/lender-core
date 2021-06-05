// SPDX-License-Identifier: BUSL-1.1

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";

pragma solidity =0.7.6;

contract Staker {
    address public constant factory = 0x1F98431c8aD98523631AE4a59f267346ea31F984;
    IUniswapV3Pool public pool;

    constructor(
        address token0,
        address token1,
        uint24 fee
    ) {
        PoolAddress.PoolKey memory key = PoolAddress.getPoolKey(token0, token1, fee);
        pool = IUniswapV3Pool(PoolAddress.computeAddress(factory, key));
    }

    function deposit(address token0, address token1) public {
        
    }
}
