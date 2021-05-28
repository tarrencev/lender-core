// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IOracleFactory.sol";
import "./Oracle.sol";

/// @title Canonical Lender factory
/// @notice Deploys Lenders
contract OracleFactory is IOracleFactory, Ownable {
    // Stable coin token.
    address public _stable;

    constructor(address stable) {
        _stable = stable;
    }

    function deploy(address token) external override returns (address oracle) {
        oracle = address(new Oracle(owner(), token));
    }
}
