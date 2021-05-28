// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/drafts/ERC20Permit.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract NUSD is AccessControl, ERC20Permit {
    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");

    constructor() ERC20("nUSD Stablecoin", "nUSD") ERC20Permit("NUSD Stablecoin") {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    /// @notice Mint nusd.
    /// @param account Account to mint to.
    /// @param amount Amount to mint.
    function mint(address account, uint256 amount) external {
        require(hasRole(ISSUER_ROLE, _msgSender()), "NUSD: unauthorized");
        _mint(account, amount);
    }

    /// @notice Mint nusd.
    /// @param account Account to burn from.
    /// @param amount Amount to burn.
    function burn(address account, uint256 amount) external {
        require(hasRole(ISSUER_ROLE, _msgSender()), "NUSD: unauthorized");
        _burn(account, amount);
    }
}
