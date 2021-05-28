// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

/// @title Lender interface
/// @notice Lenders must implement this interface
interface ILender {
   /// @notice Update a position.
    /// @param collDelta The collateral delta to apply to the position.
    /// @param debtDelta The debt delta to apply to the position.
    function update(int256 collDelta, int256 debtDelta) external;

    /// @notice Liquidate a position.
    /// @param owner The position owner.
    function liquidate(address owner, bytes calldata data) external;

    /// @notice Compute the current collateral and debt position by owner.
    /// @param owner The position owner.
    /// @return coll The positions collateral balance.
    /// @return debt The positions debt balance.
    function positionOf(address owner) external view returns (uint256 coll, uint256 debt);
}
