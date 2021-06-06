// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

interface IOracle {
    function observe(uint32) external view returns (uint256);
}
