import {ethers, deployments, getNamedAccounts} from 'hardhat';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import {expect} from 'chai';

import {NUSD} from '../types/NUSD';

describe('NUSD.unit', () => {
  let alice: SignerWithAddress;
  let issuer: SignerWithAddress;
  let nonissuer: SignerWithAddress;
  let coin: NUSD;

  beforeEach(async () => {
    const {deployer} = await getNamedAccounts();
    [alice, issuer, nonissuer] = await ethers.getSigners();

    await deployments.fixture(['NUSD']);
    coin = <NUSD>await ethers.getContract('NUSD', deployer);

    await coin.addIssuer(issuer.address);
    await coin.connect(issuer).mint(alice.address, 150);
  });

  it('mint succeeds when called from issuer', async () => {
    expect(await coin.balanceOf(alice.address)).to.equal(150);
    await coin.connect(issuer).mint(alice.address, 100);
    expect(await coin.balanceOf(alice.address)).to.equal(250);
  });

  it('mint reverts when not called from issuer', async () => {
    expect(
      coin.connect(nonissuer).mint(nonissuer.address, 100)
    ).to.be.revertedWith('unauthorized');
  });

  it('burn succeeds when called from issuer', async () => {
    expect(await coin.balanceOf(alice.address)).to.equal(150);
    await coin.connect(issuer).burn(alice.address, 70);
    expect(await coin.balanceOf(alice.address)).to.equal(80);
  });

  it('burn reverts when not called from issuer', async () => {
    expect(
      coin.connect(nonissuer).burn(nonissuer.address, 100)
    ).to.be.revertedWith('unauthorized');
  });
});
