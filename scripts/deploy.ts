// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, network } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { constants, ContractFactory, utils } from "ethers";
import { parseEther as toWei } from "@ethersproject/units";
import fs from "fs";

import { GovernorBravoDelegate } from "../types/GovernorBravoDelegate";
import { GovernorBravoDelegator } from "../types/GovernorBravoDelegator";
import { Timelock } from "../types/Timelock";
import { Token } from "../types/Token";

import { NUSD } from "../types/NUSD";
import { LenderFactory } from "../types/LenderFactory";
import { OracleFactory } from "../types/OracleFactory";

const VOTING_PERIOD = ethers.BigNumber.from(17280); // ~3 days
const VOTING_DELAY = ethers.BigNumber.from(5760); // ~24 hrs
const TIMELOCK_DELAY = ethers.BigNumber.from(7 * 24 * 60 * 60); // ~1 week
const PROPOSAL_THRESHOLD = utils.parseUnits("50000", 18);

const CHAIN_ID = 1337;
const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";
const ISSUER_ROLE = utils.keccak256(utils.toUtf8Bytes("ISSUER_ROLE"));
const WSTETH = "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0";

async function deployGovernance(admin: SignerWithAddress): Promise<{
  nmk: Token;
  timelock: Timelock;
  governorBraveDelegate: GovernorBravoDelegate;
  governorBraveDelegator: GovernorBravoDelegator;
}> {
  const TokenFactory: ContractFactory = await ethers.getContractFactory("Token");
  const nmk = <Token>await TokenFactory.deploy(admin.address);
  await nmk.deployed();

  const TimelockFactory: ContractFactory = await ethers.getContractFactory("Timelock");
  const timelock = <Timelock>await TimelockFactory.deploy(admin.address, TIMELOCK_DELAY);
  await timelock.deployed();

  const GovernorBravoDelegateFactory: ContractFactory = await ethers.getContractFactory("GovernorBravoDelegate");
  const governorBraveDelegate = <GovernorBravoDelegate>await GovernorBravoDelegateFactory.deploy();
  await governorBraveDelegate.deployed();

  const GovernorBravoDelegatorFactory: ContractFactory = await ethers.getContractFactory("GovernorBravoDelegator");
  const governorBraveDelegator = <GovernorBravoDelegator>(
    await GovernorBravoDelegatorFactory.deploy(
      timelock.address,
      nmk.address,
      admin.address,
      governorBraveDelegate.address,
      VOTING_PERIOD,
      VOTING_DELAY,
      PROPOSAL_THRESHOLD,
    )
  );
  await governorBraveDelegator.deployed();

  return {
    nmk,
    timelock,
    governorBraveDelegate,
    governorBraveDelegator,
  };
}

async function main(): Promise<void> {
  const addresses: { [name: string]: { [name: string]: string } } = {};
  addresses[CHAIN_ID] = {};
  const [admin] = await ethers.getSigners();

  const { timelock } = await deployGovernance(admin);

  const NUSDFactory: ContractFactory = await ethers.getContractFactory("NUSD");
  const nusd = <NUSD>await NUSDFactory.deploy();
  await nusd.deployed();
  addresses[CHAIN_ID]["NUSD"] = nusd.address;
  console.log("NUSD deployed to: ", nusd.address);

  const oracleFactoryFactory: ContractFactory = await ethers.getContractFactory("OracleFactory");
  const oracleFactory = <OracleFactory>await oracleFactoryFactory.deploy(nusd.address);
  await oracleFactory.transferOwnership(timelock.address);
  addresses[CHAIN_ID]["OracleFactory"] = oracleFactory.address;
  console.log("OracleFactory deployed to: ", oracleFactory.address);

  const lenderFactoryFactory: ContractFactory = await ethers.getContractFactory("LenderFactory");
  const lenderFactory = <LenderFactory>await lenderFactoryFactory.deploy(nusd.address);
  await lenderFactory.transferOwnership(timelock.address);
  await nusd.grantRole(DEFAULT_ADMIN_ROLE, lenderFactory.address);
  addresses[CHAIN_ID]["LenderFactory"] = lenderFactory.address;
  console.log("LenderFactory deployed to: ", lenderFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
