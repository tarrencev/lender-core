/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "GovernorBravoDelegate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegate__factory>;
    getContractFactory(
      name: "GovernorBravoDelegator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegator__factory>;
    getContractFactory(
      name: "CompInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompInterface__factory>;
    getContractFactory(
      name: "GovernorAlpha",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorAlpha__factory>;
    getContractFactory(
      name: "GovernorBravoDelegateStorageV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegateStorageV1__factory>;
    getContractFactory(
      name: "GovernorBravoDelegatorStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegatorStorage__factory>;
    getContractFactory(
      name: "GovernorBravoEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoEvents__factory>;
    getContractFactory(
      name: "TimelockInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockInterface__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "ILender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILender__factory>;
    getContractFactory(
      name: "ILenderFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILenderFactory__factory>;
    getContractFactory(
      name: "ILiquidateCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILiquidateCallback__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "INUSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INUSD__factory>;
    getContractFactory(
      name: "IOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>;
    getContractFactory(
      name: "IOracleFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracleFactory__factory>;
    getContractFactory(
      name: "Lender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lender__factory>;
    getContractFactory(
      name: "LenderFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LenderFactory__factory>;
    getContractFactory(
      name: "NUSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NUSD__factory>;
    getContractFactory(
      name: "Oracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Oracle__factory>;
    getContractFactory(
      name: "OracleFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleFactory__factory>;
    getContractFactory(
      name: "CollateralFake",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CollateralFake__factory>;
    getContractFactory(
      name: "OracleFake",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleFake__factory>;
    getContractFactory(
      name: "TestCallee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestCallee__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}