import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deterministic} = deployments;

  const {deployer} = await getNamedAccounts();

  const nusd = await deterministic('NUSD', {
    from: deployer,
    args: [deployer],
    log: true,
  });
  await nusd.deploy();

  const oracle = await deterministic('Oracle', {
    from: deployer,
    log: true,
  });
  await oracle.deploy();

  const lenderFactory = await deterministic('LenderFactory', {
    from: deployer,
    args: [deployer, nusd.address],
    log: true,
  });
  await lenderFactory.deploy();
};
export default func;
func.tags = ['NUSD'];
func.tags = ['OracleFactory'];
func.tags = ['LenderFactory'];
