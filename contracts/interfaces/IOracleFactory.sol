// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

interface IOracleFactory {
    function deploy(address token, uint24 fee) external returns (address oracle);
}
