// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

/// @title LenderCollateral
/// @notice Updates represent an owner address' liquidity between a lower and upper tick boundary
/// @dev Updates store additional state for tracking fees owed to the position
library LenderCollateral {
    using SafeERC20 for IERC20;

    function update(IERC20 token, int256 collDelta) internal {
        if (collDelta < 0) {
            token.safeTransfer(msg.sender, uint256(-collDelta));
        } else if (collDelta > 0) {
            token.safeTransferFrom(msg.sender, address(this), uint256(collDelta));
        }
    }
}
