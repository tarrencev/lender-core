import {ethers} from 'hardhat';
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

import {FeeAmount} from '../utils/constants';
import {NUSD} from '../types/NUSD';
import {Oracle} from '../types/Oracle';

const {constants, utils} = ethers;

const MIN_DEBT = utils.parseUnits('1', 18);
const MIN_POSITION_COLLATERALIZATION_RATIO = utils.parseUnits('110', 18);
const MIN_SYSTEM_COLLATERALIZATION_RATIO = utils.parseUnits('150', 18);

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deployer} = await getNamedAccounts();

  const nusd = <NUSD>await ethers.getContract('NUSD', deployer);
  const stETH = await ethers.getContract('StETH', deployer);
  const wstETH = await ethers.getContract('WStETH', deployer);
  const oracle = <Oracle>await ethers.getContract('Oracle', deployer);

  await stETH.submit(constants.AddressZero, {
    value: utils.parseUnits('1', 21),
  });
  await stETH.approve(wstETH.address, constants.MaxUint256);
  const balance = await stETH.balanceOf(deployer);
  await wstETH.wrap(balance);

  await deployments.deploy('Lender', {
    from: deployer,
    args: [
      wstETH.address,
      nusd.address,
      oracle.address,
      FeeAmount.LOW,
      1,
      0,
      MIN_DEBT,
      MIN_POSITION_COLLATERALIZATION_RATIO,
      MIN_SYSTEM_COLLATERALIZATION_RATIO,
    ],
    log: true,
  });
};
export default func;
func.skip = async (hre: HardhatRuntimeEnvironment) => hre.network.live;
