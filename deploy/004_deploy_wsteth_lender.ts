import {ethers} from 'hardhat';
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

import {LenderFactory} from '../types/LenderFactory';
import {NUSD} from '../types/NUSD';
import {Timelock} from '../types/Timelock';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {getNamedAccounts} = hre;
  const {deployer} = await getNamedAccounts();

  const timelock = <Timelock>await ethers.getContract('Timelock', deployer);

  const nusd = <NUSD>await ethers.getContract('NUSD', deployer);
  await nusd.setOwner(timelock.address);

  const lenderFactory = <LenderFactory>(
    await ethers.getContract('LenderFactory', deployer)
  );
  await lenderFactory.setOwner(timelock.address);
};
export default func;
func.skip = async (hre: HardhatRuntimeEnvironment) => hre.network.live;
