import {ethers, deployments, getNamedAccounts} from 'hardhat';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import {expect} from 'chai';

import {Oracle} from '../types/Oracle';
import {BigNumber} from 'ethers';

describe('Oracle.unit', () => {
  let alice: SignerWithAddress;
  let issuer: SignerWithAddress;
  let nonissuer: SignerWithAddress;
  let oracle: Oracle;

  beforeEach(async () => {
    const {deployer} = await getNamedAccounts();
    [alice, issuer, nonissuer] = await ethers.getSigners();

    await deployments.fixture(['Oracle']);
    oracle = <Oracle>await ethers.getContract('Oracle', deployer);
  });

  for (const {period, price, revert} of [
    {
      period: 1,
      price: BigNumber.from(406262024960685),
      revert: undefined,
    },
    {
      period: 500,
      price: BigNumber.from(406180784741928),
      revert: undefined,
    },
    {
      period: 5000,
      price: BigNumber.from(408788547317852),
      revert: undefined,
    },
    {
      period: 50000,
      revert: 'OLD',
    },
    {
      period: 0,
      revert: 'BP',
    },
  ]) {
    it('observes the price', async () => {
      if (revert) {
        await expect(oracle.observe(period)).to.be.revertedWith(revert);
      } else {
        expect(await oracle.observe(period)).to.equal(price);
      }
    });
  }
});
