// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

import "./interfaces/ILenderFactory.sol";
import "./interfaces/INUSD.sol";
import "./utils/Ownable.sol";

import "./Lender.sol";

/// @title Canonical Lender factory
/// @notice Deploys Lenders
contract LenderFactory is ILenderFactory, Ownable {
    // Stable coin token.
    INUSD public _stable;

    constructor(address owner, address stable) Ownable(owner) {
        _stable = INUSD(stable);
    }

    function deploy(
        address collateral,
        address oracle,
        uint24 oraclePoolFee,
        uint32 oraclePeriod,
        uint256 fee,
        uint256 minDebt,
        uint128 minBCR,
        uint128 minLCR
    ) external override returns (address) {
        Lender lender =
            new Lender(collateral, address(_stable), oracle, oraclePoolFee, oraclePeriod, fee, minDebt, minBCR, minLCR);
        lender.setOwner(owner());
        return address(lender);
    }
}
