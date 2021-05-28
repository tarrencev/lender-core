// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "@uniswap/v3-core/contracts/libraries/FullMath.sol";

/// @title CollateralMath
/// @dev Used to compute collateralization modifications.
library CollateralMath {
    /// @notice Compute a position's collateral ratio.
    /// @param coll The position's collateral.
    /// @param debt The position's debt.
    /// @param price The collateral's price.
    /// @return The position's collateral ratio.
    function ratio(
        uint256 coll,
        uint256 debt,
        uint256 price
    ) internal pure returns (uint256) {
        if (debt == 0) {
            return 0;
        }
        return FullMath.mulDiv(coll, price, debt);
    }

    /// @notice Add a signed liquidity delta to liquidity and revert if it overflows or underflows
    /// @param x The liquidity before change
    /// @param y The delta by which liquidity should be changed
    /// @return z The liquidity delta
    function addDelta(uint256 x, int256 y) internal pure returns (uint256 z) {
        if (y < 0) {
            require((z = x - uint256(-y)) < x, "LS");
        } else {
            require((z = x + uint256(y)) >= x, "LA");
        }
    }
}
