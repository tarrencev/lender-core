// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./interfaces/IOracleFactory.sol";

import "./Oracle.sol";

/// @title Canonical Lender factory
/// @notice Deploys Lenders
contract OracleFactory is IOracleFactory {
    /// ethusd oracle.
    address public _ethusdOracle;

    constructor(address ethusdOracle) {
        _ethusdOracle = ethusdOracle;
    }

    function deploy(address token, uint24 fee) external override returns (address oracle) {
        oracle = address(new Oracle(msg.sender, _ethusdOracle, token, fee));
    }
}
