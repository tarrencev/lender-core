// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/ILenderFactory.sol";
import "./interfaces/INUSD.sol";
import "./Lender.sol";

/// @title Canonical Lender factory
/// @notice Deploys Lenders
contract LenderFactory is ILenderFactory, Ownable {
    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");

    // Stable coin token.
    INUSD public _stable;

    constructor(address stable) {
        _stable = INUSD(stable);
    }

    function deploy(
        address collateral,
        address oracle,
        uint256 fee,
        uint256 minDebt,
        uint256 minPositionCollateralizationRatio,
        uint256 minSystemCollateralizationRatio
    ) external override returns (address lender) {
        lender = address(
            new Lender(
                owner(),
                collateral,
                address(_stable),
                oracle,
                fee,
                minDebt,
                minPositionCollateralizationRatio,
                minSystemCollateralizationRatio
            )
        );
        _stable.grantRole(ISSUER_ROLE, lender);
    }
}
