// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0 <0.8.0;

/// @title Oracle library
/// @notice Provides functions to integrate with V3 pool oracle
library OracleLibrary {
    /// @notice Fetches time-weighted average tick using Uniswap V3 oracle
    /// @return timeWeightedAverageTick The time-weighted average tick from (block.timestamp - period) to block.timestamp
    function consult(address, uint32) internal pure returns (int24 timeWeightedAverageTick) {
        return 1;
    }

    /// @notice Given a tick and a token amount, calculates the amount of token received in exchange
    /// @return quoteAmount Amount of quoteToken received for baseAmount of baseToken
    function getQuoteAtTick(
        int24,
        uint128,
        address,
        address
    ) internal pure returns (uint256 quoteAmount) {
        return 1;
    }
}
