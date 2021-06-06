// SPDX-License-Identifier: MIT

pragma solidity =0.7.6;

import "../interfaces/ILiquidateCallback.sol";
import "../interfaces/ILender.sol";

contract TestCallee is ILiquidateCallback {
    event LiquidateCallback(address sender, uint256 coll, uint256 debt);

    function liquidate(address lender, address owner) external {
        ILender(lender).liquidate(owner, abi.encode(msg.sender));
    }

    function liquidateCallback(
        uint256 coll,
        uint256 debt,
        bytes calldata data
    ) external override {
        address sender = abi.decode(data, (address));
        emit LiquidateCallback(sender, coll, debt);
    }
}
