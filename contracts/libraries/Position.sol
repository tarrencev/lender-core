// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "@uniswap/v3-core/contracts/libraries/FullMath.sol";

import "hardhat/console.sol";

import "./CollateralMath.sol";
import "./Update.sol";

/// @title Position
/// @notice Positions represent an owner address' liquidity between a lower and upper tick boundary
/// @dev Positions store additional state for tracking fees owed to the position
library Position {
    using CollateralMath for uint128;
    using Update for Update.Info;

    // info stored for each user's position
    struct Info {
        uint128 coll;
        uint128 debt;
    }

    /// @notice Returns the Info struct of a position, given an owner and position boundaries
    /// @param self The mapping containing all user positions
    /// @param owner The address of the position owner
    /// @return position The position info struct of the given owners' position
    function get(mapping(address => Info) storage self, address owner)
        internal
        view
        returns (Position.Info storage position)
    {
        position = self[owner];
    }

    /// @notice Update a position.
    /// @param self The position to update
    /// @param u Nominal update to apply to the position.
    function update(Info storage self, Update.Info memory u) internal {
        Info memory _self = self;

        self.coll = _self.coll.addDelta(u.coll);
        self.debt = _self.debt.addDelta(u.debt);
    }

    /// @notice Compute a positions collateral ratio.
    /// @param self The position to compute the ratio for.
    /// @param price The collaterals price.
    function ratio(Info memory self, uint256 price) internal pure returns (int256) {
        return CollateralMath.ratio(self.coll, self.debt, price);
    }
}
