// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

/// @title Callback for Issuer#liquidate
/// @notice Any contract that calls Issuer#liquidate must implement this interface
interface ILiquidateCallback {
    /// @notice Called to `msg.sender` after transferring to the recipient from Issuer#liquidate;
    /// @dev In the implementation you must pay the issuer the liquidated debt.
    /// @param data Any data passed through by the caller via the Issuer#liquidate call
    function liquidateCallback(uint256 coll, uint256 debt, bytes calldata data) external;
}
