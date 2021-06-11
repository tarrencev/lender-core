import {
  ethers,
  deployments,
  getNamedAccounts,
  artifacts,
  network,
} from 'hardhat';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import {expect} from 'chai';

import {OracleTest} from '../types/OracleTest';
import {ObservableFake} from '../types/ObservableFake';

import {BigNumber} from 'ethers';

const setup = deployments.createFixture(async (): Promise<{
  contracts: {
    observable: ObservableFake;
    oracle: OracleTest;
  };
  accounts: {
    deployer: SignerWithAddress;
  };
}> => {
  await deployments.fixture(undefined, {
    keepExistingDeployments: true, // global option to test network like that
  });
  const {deployer} = await getNamedAccounts();

  await deployments.deploy('ObservableFake', {
    from: deployer,
  });
  const observable = <ObservableFake>(
    await ethers.getContract('ObservableFake', deployer)
  );

  await deployments.deploy('OracleTest', {
    args: [observable.address],
    from: deployer,
  });
  const oracle = <OracleTest>await ethers.getContract('OracleTest', deployer);

  return {
    contracts: {
      observable,
      oracle,
    },
    accounts: {
      deployer: await ethers.getSigner(deployer),
    },
  };
});

describe('Oracle.unit', () => {
  for (const {period, price, revert} of [
    {
      period: 1,
      price: BigNumber.from(1000000),
      revert: undefined,
    },
    {
      period: 500,
      price: BigNumber.from(1000000),
      revert: undefined,
    },
    {
      period: 5000,
      price: BigNumber.from(1000000),
      revert: undefined,
    },
    {
      period: 0,
      revert: 'BP',
    },
  ]) {
    it('observes the price', async () => {
      const {
        contracts: {observable, oracle},
      } = await setup();
      const tickCumulatives = [BigNumber.from(12), BigNumber.from(12)];
      await observable.set([period, 0], tickCumulatives, [0, 0]);

      if (revert) {
        await expect(oracle.observe(period)).to.be.revertedWith(revert);
      } else {
        expect(await oracle.observe(period)).to.equal(price);
      }
    });
  }
});
