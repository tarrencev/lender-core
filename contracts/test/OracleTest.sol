// SPDX-License-Identifier: MIT

pragma solidity =0.7.6;

import "../Oracle.sol";

contract OracleTest is Oracle {
    constructor(address pool) {
        _pool = pool;
    }
}
