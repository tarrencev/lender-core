import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";

import { NUSD } from "../types/NUSD";

const { utils } = ethers;

const ISSUER_ROLE = utils.keccak256(utils.toUtf8Bytes("ISSUER_ROLE"));

describe("NUSD.unit", () => {
  let alice: SignerWithAddress;
  let issuer: SignerWithAddress;

  let coin: NUSD;

  beforeEach(async () => {
    [alice, issuer] = await ethers.getSigners();
    const coinFactory = await ethers.getContractFactory("NUSD");
    coin = (await coinFactory.deploy()) as NUSD;

    await coin.grantRole(ISSUER_ROLE, issuer.address);
    await coin.connect(issuer).mint(alice.address, 150);
  });

  it("mint succeeds when called from issuer", async () => {
    expect(await coin.balanceOf(alice.address)).to.equal(150);
    await coin.connect(issuer).mint(alice.address, 100);
    expect(await coin.balanceOf(alice.address)).to.equal(250);
  });

  it("mint reverts when not called from issuer", async () => {
    expect(coin.connect(alice).mint(alice.address, 100)).to.be.revertedWith("NUSD: unauthorized");
  });

  it("burn succeeds when called from issuer", async () => {
    expect(await coin.balanceOf(alice.address)).to.equal(150);
    await coin.connect(issuer).burn(alice.address, 70);
    expect(await coin.balanceOf(alice.address)).to.equal(80);
  });

  it("burn reverts when not called from issuer", async () => {
    expect(coin.connect(alice).burn(alice.address, 100)).to.be.revertedWith("NUSD: unauthorized");
  });
});
