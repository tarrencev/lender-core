import {ethers} from 'hardhat';
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

import {FeeAmount} from '../utils/constants';
import {LenderFactory} from '../types/LenderFactory';
import {Oracle} from '../types/Oracle';

const {utils} = ethers;

const MIN_DEBT = utils.parseUnits('1', 18);
const MIN_POSITION_COLLATERALIZATION_RATIO = utils.parseUnits('110', 18);
const MIN_SYSTEM_COLLATERALIZATION_RATIO = utils.parseUnits('150', 18);
const WSTETH = '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {getNamedAccounts} = hre;
  const {deployer} = await getNamedAccounts();

  const oracle = <Oracle>await ethers.getContract('Oracle', deployer);
};
export default func;
func.skip = async (hre: HardhatRuntimeEnvironment) => hre.network.live;
