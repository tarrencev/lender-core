// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "@uniswap/v3-core/contracts/libraries/FullMath.sol";

import "./CollateralMath.sol";
import "./Position.sol";

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

    function nominal(
        Info memory self,
        Position.Info memory lReal,
        Position.Info memory lNominal
    ) internal pure returns (Info memory) {
        int256 coll;
        if (self.coll < 0) {
            coll = -int256(FullMath.mulDiv(uint128(-self.coll), lNominal.coll, lReal.coll));
        } else {
            coll = int256(FullMath.mulDiv(uint128(self.coll), lNominal.coll, lReal.coll));
        }

        int256 debt;
        if (self.debt < 0) {
            debt = -int256(FullMath.mulDiv(uint128(-self.debt), lNominal.debt, lReal.debt));
        } else {
            debt = int256(FullMath.mulDiv(uint128(self.debt), lNominal.debt, lReal.debt));
        }
        return Info(coll, debt);
    }
}
