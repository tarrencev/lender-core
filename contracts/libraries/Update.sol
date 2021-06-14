// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "@uniswap/v3-core/contracts/libraries/FullMath.sol";

import "./CollateralMath.sol";
import "./Position.sol";

import "hardhat/console.sol";

/// @title Update
/// @notice Updates represent an owner address' liquidity between a lower and upper tick boundary
/// @dev Updates store additional state for tracking fees owed to the position
library Update {
    using CollateralMath for uint128;
    using Position for Position.Info;

    struct Info {
        int256 coll;
        int256 debt;
    }

    function _computeNominal(
        int256 uReal,
        uint128 bNominal,
        uint128 lNominal,
        uint128 lReal
    ) internal view returns (int256 n, int256 r) {
        r = uReal;
        if (r < 0) {
            n = -int256(FullMath.mulDiv(uint128(-r), lNominal, lReal));

            // Check if the users nominal repayment exceeds the borrowers nominal.
            if (-n > bNominal) {
                n = -int256(bNominal); // repay full. uint128 cast to int256
                r = -int256(FullMath.mulDiv(bNominal, lReal, lNominal));
            }
        } else {
            n = int256(FullMath.mulDiv(uint128(r), lNominal, lReal));
        }
    }

    function nominal(
        Info memory uReal,
        Position.Info memory bNominal,
        Position.Info memory lReal,
        Position.Info memory lNominal
    ) internal view returns (Info memory, Info memory) {
        Info memory uNominal;
        (uNominal.coll, uReal.coll) = _computeNominal(uReal.coll, bNominal.coll, lNominal.coll, lReal.coll);
        (uNominal.debt, uReal.debt) = _computeNominal(uReal.debt, bNominal.debt, lNominal.debt, lReal.debt);
        return (uNominal, uReal);
    }
}
