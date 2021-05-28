// SPDX-License-Identifier: BUSL-1.1

pragma solidity =0.7.6;
pragma abicoder v2;

import "uniswap-v3-staker/contracts/UniswapV3Staker.sol";

contract Staker is UniswapV3Staker {
    constructor(address factory, address nonfungiblePositionManager) UniswapV3Staker(factory, nonfungiblePositionManager) {

    }

    
}
