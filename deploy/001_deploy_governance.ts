import {ethers} from 'hardhat';
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const {utils} = ethers;

const VOTING_PERIOD = ethers.BigNumber.from(17280); // ~3 days
const VOTING_DELAY = ethers.BigNumber.from(5760); // ~24 hrs
const TIMELOCK_DELAY = ethers.BigNumber.from(7 * 24 * 60 * 60); // ~1 week
const PROPOSAL_THRESHOLD = utils.parseUnits('50000', 18);

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deterministic} = deployments;

  const {deployer} = await getNamedAccounts();

  const token = await deterministic('Token', {
    from: deployer,
    args: [deployer],
    log: true,
  });
  await token.deploy();

  const timelock = await deterministic('Timelock', {
    from: deployer,
    args: [deployer, TIMELOCK_DELAY],
    log: true,
  });
  await timelock.deploy();

  const governorBraveDelegate = await deterministic('GovernorBravoDelegate', {
    from: deployer,
    log: true,
  });
  await governorBraveDelegate.deploy();

  const governorBravoDelegator = await deterministic('GovernorBravoDelegator', {
    from: deployer,
    args: [
      timelock.address,
      token.address,
      deployer,
      governorBraveDelegate.address,
      VOTING_PERIOD,
      VOTING_DELAY,
      PROPOSAL_THRESHOLD,
    ],
    log: true,
  });
  await governorBravoDelegator.deploy();
};
export default func;
func.tags = ['Token'];
func.tags = ['Timelock'];
func.tags = ['GovernorBravoDelegate'];
func.tags = ['GovernorBravoDelegator'];
