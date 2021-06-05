// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/drafts/ERC20Permit.sol";

import "./utils/Ownable.sol";

/// @title nUSD stable coin.
contract NUSD is Ownable, ERC20Permit {
    mapping(address => bool) private _issuers;

    constructor(address owner) ERC20("nUSD Stablecoin", "nUSD") ERC20Permit("nUSD Stablecoin") Ownable(owner) {}

    /// @notice Mint nusd.
    /// @param account Account to mint to.
    /// @param amount Amount to mint.
    function mint(address account, uint256 amount) external onlyIssuer {
        _mint(account, amount);
    }

    /// @notice Mint nusd.
    /// @param account Account to burn from.
    /// @param amount Amount to burn.
    function burn(address account, uint256 amount) external onlyIssuer {
        _burn(account, amount);
    }

    function revokeIssuer(address issuer) external onlyOwner {
        _issuers[issuer] = false;
    }

    function addIssuer(address issuer) external onlyOwner {
        _issuers[issuer] = true;
    }

    modifier onlyIssuer {
        require(_issuers[msg.sender], "unauthorized");
        _;
    }
}
