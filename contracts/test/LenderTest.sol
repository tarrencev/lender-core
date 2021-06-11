// SPDX-License-Identifier: MIT

pragma solidity =0.7.6;
pragma abicoder v2;

import "../Lender.sol";

contract LenderTest is Lender {
    uint256 private _price;

    constructor(
        address collateral_,
        address nusd,
        address ethusdOracle_,
        uint24 oraclePoolFee_,
        uint32 oraclePeriod_,
        uint256 fee_,
        uint256 minDebt_,
        uint128 minBCR_,
        uint128 minLCR_,
        address pool_
    ) Lender(collateral_, nusd, ethusdOracle_, oraclePoolFee_, oraclePeriod_, fee_, minDebt_, minBCR_, minLCR_) {
        _oraclePool = pool_;
    }

    function setPrice(uint256 price) public {
        _price = price;
    }

    function observe() public view override returns (uint256) {
        return _price;
    }
}
