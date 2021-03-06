// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

interface ILenderFactory {
    function deploy(
        address collateral,
        address oracle,
        uint24 oraclePoolFee,
        uint32 oraclePeriod,
        uint256 fee,
        uint256 minDebt,
        uint128 minPositionCollateralizationRatio,
        uint128 minSystemCollateralizationRatio
    ) external returns (address pool);
}
