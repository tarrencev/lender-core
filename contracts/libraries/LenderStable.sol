// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "../interfaces/INUSD.sol";

/// @title LenderStable
/// @notice Updates represent an owner address' liquidity between a lower and upper tick boundary
/// @dev Updates store additional state for tracking fees owed to the position
library LenderStable {
    function update(INUSD token, int256 debtDelta) internal {
        if (debtDelta < 0) {
            token.burn(msg.sender, uint256(-debtDelta));
        } else if (debtDelta > 0) {
            token.mint(msg.sender, uint256(debtDelta));
        }
    }
}
