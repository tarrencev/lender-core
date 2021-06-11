// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "@uniswap/v3-core/contracts/libraries/FullMath.sol";

import "./Position.sol";
import "./SafeCast.sol";

/// @title CollateralMath
/// @dev Used to compute collateralization modifications.
library CollateralMath {
    using Position for Position.Info;
    using SafeCast for uint256;

    /// @notice Compute a position's collateral ratio.
    /// @param coll The position's collateral.
    /// @param debt The position's debt.
    /// @param price The collateral's price.
    /// @return The position's collateral ratio.
    function ratio(
        uint128 coll,
        uint128 debt,
        uint256 price
    ) internal pure returns (int256) {
        if (debt == 0) {
            return 0;
        }
        return int256(FullMath.mulDiv(coll, price, debt));
    }

    /// @notice Compute the real position of a borrower.
    /// @param pOpened The pO position to convert to real.
    /// @param lOpened The lenders opened position.
    /// @param lReal The lenders actual position.
    /// @return The borrowers real position.
    function real(
        Position.Info memory pOpened,
        Position.Info memory lOpened,
        Position.Info memory lReal
    ) internal pure returns (Position.Info memory) {
        uint256 coll = FullMath.mulDiv(pOpened.coll, lReal.coll, lOpened.coll);
        uint256 debt = FullMath.mulDiv(pOpened.debt, lReal.debt, lOpened.debt);
        return Position.Info(coll.toUint128(), debt.toUint128());
    }

    /// @notice Add a signed liquidity delta to liquidity and revert if it overflows or underflows
    /// @param x The liquidity before change
    /// @param y The delta by which liquidity should be changed
    /// @return z The liquidity delta
    function addDelta(uint128 x, int256 y) internal pure returns (uint128 z) {
        if (y < 0) {
            require((z = x - uint128(-y)) < x, "LS");
        } else {
            require((z = x + uint128(y)) >= x, "LA");
        }
    }
}
