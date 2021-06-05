import {ethers} from 'hardhat';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import {expect} from 'chai';

import {TestCallee} from '../types/TestCallee';
import {CollateralFake} from '../types/CollateralFake';
import {Lender} from '../types/Lender';
import {NUSD} from '../types/NUSD';
import {OracleFake} from '../types/OracleFake';

const {constants, utils} = ethers;

const MIN_DEBT = utils.parseUnits('1', 18);
const MIN_LOAN_COLLATERALIZATION_RATIO = utils.parseUnits('110', 18);
const MIN_SYSTEM_COLLATERALIZATION_RATIO = utils.parseUnits('150', 18);

describe('Lender.unit', () => {
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let carol: SignerWithAddress;
  let sudo: SignerWithAddress;

  let callee: TestCallee;
  let collateral: CollateralFake;
  let lender: Lender;
  let nusd: NUSD;
  let oracle: OracleFake;

  beforeEach(async () => {
    [sudo, alice, bob, carol] = await ethers.getSigners();

    const calleeFactory = await ethers.getContractFactory('TestCallee');
    callee = (await calleeFactory.deploy()) as TestCallee;

    const collateralFactory = await ethers.getContractFactory('CollateralFake');
    collateral = (await collateralFactory.deploy(
      'collateral',
      'collateral'
    )) as CollateralFake;

    const nusdFactory = await ethers.getContractFactory('NUSD');
    nusd = (await nusdFactory.deploy(sudo.address)) as NUSD;

    const oracleFactory = await ethers.getContractFactory('OracleFake');
    oracle = (await oracleFactory.deploy()) as OracleFake;

    const lenderFactory = await ethers.getContractFactory('Lender');
    lender = (await lenderFactory.deploy(
      collateral.address,
      nusd.address,
      oracle.address,
      0,
      MIN_DEBT,
      MIN_LOAN_COLLATERALIZATION_RATIO,
      MIN_SYSTEM_COLLATERALIZATION_RATIO
    )) as Lender;

    await collateral.mint(alice.address, utils.parseUnits('1', 50));
    await collateral.mint(bob.address, utils.parseUnits('1', 50));
    await collateral.mint(carol.address, utils.parseUnits('1', 50));
    await nusd.addIssuer(lender.address);
    await nusd.addIssuer(sudo.address);
  });

  describe('opening a position', async () => {
    for (const {name, coll, debt, price, revert} of [
      {
        name: 'with minimum debt and minimum collateralization succeeds',
        coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
        debt: utils.parseUnits('1', 18),
        price: utils.parseUnits('1', 18),
        revert: undefined,
      },
      {
        name: 'with less than min debt and reverts',
        coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
        debt: MIN_DEBT.sub(1),
        price: utils.parseUnits('1', 18),
        revert: 'less than min debt',
      },
      {
        name: 'with less than min system collateral ratio for first loan and reverts',
        coll: MIN_LOAN_COLLATERALIZATION_RATIO,
        debt: utils.parseUnits('1', 18),
        price: utils.parseUnits('1', 18),
        revert: 'undercollateralized position',
      },
      {
        name: 'with negative collateral and reverts',
        coll: MIN_LOAN_COLLATERALIZATION_RATIO.mul(-1),
        debt: utils.parseUnits('1', 18),
        price: utils.parseUnits('1', 18),
        revert: 'LS',
      },
      {
        name: 'with negative debt and reverts',
        coll: MIN_LOAN_COLLATERALIZATION_RATIO,
        debt: utils.parseUnits('1', 18).mul(-1),
        price: utils.parseUnits('1', 18),
        revert: 'LS',
      },
    ]) {
      it(name, async () => {
        if (coll.gt(0)) {
          await collateral.connect(alice).approve(lender.address, coll);
        }
        await oracle.set(price);

        if (revert) {
          await expect(
            lender.connect(alice).update(coll, debt)
          ).to.be.revertedWith(revert);
        } else {
          await lender.connect(alice).update(coll, debt);
          expect(await nusd.balanceOf(alice.address)).to.equal(debt);
          expect(await collateral.balanceOf(lender.address)).to.equal(coll);
          const got = await lender.positionOf(alice.address);
          expect(got.coll).to.equal(coll);
          expect(got.debt).to.equal(debt);
        }
      });
    }
  });

  describe('updating a positon', async () => {
    const coll = MIN_SYSTEM_COLLATERALIZATION_RATIO;
    const debt = utils.parseUnits('1', 18);

    beforeEach(async () => {
      const price = utils.parseUnits('1', 18);
      await collateral
        .connect(alice)
        .approve(lender.address, constants.MaxUint256);
      await oracle.set(price);
      await lender.connect(alice).update(coll, debt);
    });

    for (const {name, collDelta, debtDelta, price, revert} of [
      {
        name: 'with additonal collateral succeeds',
        collDelta: utils.parseUnits('10', 18),
        debtDelta: constants.Zero,
        price: utils.parseUnits('1', 18),
      },
      {
        name: 'with additonal collateral when price has dropped succeeds',
        collDelta: MIN_SYSTEM_COLLATERALIZATION_RATIO,
        debtDelta: constants.Zero,
        price: utils.parseUnits('1', 18).div(2),
      },
      {
        name: 'to repay debt and withdraw all collateral succeeds',
        collDelta: MIN_SYSTEM_COLLATERALIZATION_RATIO.mul(-1),
        debtDelta: utils.parseUnits('1', 18).mul(-1),
        price: utils.parseUnits('1', 18),
      },
      {
        name: 'that pushes the system under collateralization ratio reverts',
        collDelta: constants.NegativeOne,
        debtDelta: constants.Zero,
        price: utils.parseUnits('1', 18),
        revert: 'undercollateralized position',
      },
      {
        name: 'with a noop reverts',
        collDelta: constants.Zero,
        debtDelta: constants.Zero,
        price: utils.parseUnits('1', 18),
        revert: 'noop update',
      },
    ]) {
      it(name, async () => {
        await oracle.set(price);

        if (revert) {
          await expect(
            lender.connect(alice).update(collDelta, debtDelta)
          ).to.be.revertedWith(revert);
        } else {
          const supply = await nusd.totalSupply();
          const balance = await collateral.balanceOf(alice.address);
          await lender.connect(alice).update(collDelta, debtDelta);
          expect(await nusd.balanceOf(alice.address)).to.equal(
            debt.add(debtDelta)
          );
          expect(await nusd.totalSupply()).to.equal(supply.add(debtDelta));
          expect(await collateral.balanceOf(lender.address)).to.equal(
            coll.add(collDelta)
          );
          expect(await collateral.balanceOf(alice.address)).to.equal(
            balance.sub(collDelta)
          );
        }
      });
    }
  });

  describe('liquidating a positon', async () => {
    beforeEach(async () => {
      await collateral
        .connect(alice)
        .approve(lender.address, constants.MaxUint256);
      await collateral
        .connect(bob)
        .approve(lender.address, constants.MaxUint256);
    });

    for (const {name, positions, price, want, revert} of [
      {
        name: 'that is undercollateralized succeeds',
        price: utils.parseUnits('1', 17),
        positions: {
          alice: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: utils.parseUnits('1', 18),
            price: utils.parseUnits('1', 18),
          },
          bob: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: utils.parseUnits('1', 18),
            price: utils.parseUnits('1', 18),
            stability: utils.parseUnits('1', 18),
          },
          callee: {
            approve: constants.MaxUint256,
            nusd: utils.parseUnits('1', 18),
          },
        },
        want: {
          alice: {
            nusd: utils.parseUnits('1', 18),
            coll: 0,
            debt: 0,
          },
          bob: {
            nusd: 0,
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: utils.parseUnits('1', 18),
          },
          lender: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
          },
          nusd: {
            supply: utils.parseUnits('1', 18),
          },
        },
      },
      {
        name: "that is undercollateralized reverts if liquidator can't cover debt",
        price: utils.parseUnits('1', 17),
        positions: {
          alice: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: utils.parseUnits('1', 18),
            price: utils.parseUnits('1', 18),
          },
          bob: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: utils.parseUnits('1', 18),
            price: utils.parseUnits('1', 18),
            stability: utils.parseUnits('1', 18),
          },
          callee: {
            approve: constants.MaxUint256,
            nusd: utils.parseUnits('1', 17),
          },
        },
        revert: 'ERC20: burn amount exceeds balance',
      },
      {
        name: 'that is fully collateralized reverts',
        price: utils.parseUnits('1', 18),
        positions: {
          alice: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: utils.parseUnits('1', 18),
            price: utils.parseUnits('1', 18),
          },
          bob: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: utils.parseUnits('1', 18),
            price: utils.parseUnits('1', 18),
          },
        },
        revert: 'invalid liquidation',
      },
      {
        name: 'that is fully collateralized reverts',
        price: utils.parseUnits('1', 18),
        positions: {
          bob: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: utils.parseUnits('1', 18),
            price: utils.parseUnits('1', 18),
          },
        },
        revert: 'position has no debt',
      },
    ]) {
      it(name, async () => {
        if (positions.alice) {
          await oracle.set(positions.alice.price);
          await lender
            .connect(alice)
            .update(positions.alice.coll, positions.alice.debt);
        }

        await oracle.set(positions.bob.price);
        await lender
          .connect(bob)
          .update(positions.bob.coll, positions.bob.debt);

        if (positions.callee) {
          await nusd
            .connect(bob)
            .approve(lender.address, positions.callee.approve);
          await nusd
            .connect(bob)
            .transfer(callee.address, positions.callee.nusd);
        }

        await oracle.set(price);

        if (revert) {
          expect(
            callee.connect(bob).liquidate(lender.address, alice.address)
          ).to.be.revertedWith(revert);
        } else if (want) {
          await callee.connect(bob).liquidate(lender.address, alice.address);

          expect(await nusd.totalSupply()).to.equal(want.nusd.supply);
          expect(await collateral.balanceOf(lender.address)).to.equal(
            want.lender.coll
          );

          // Assert alice state
          let positon = await lender.positionOf(alice.address);
          expect(await nusd.balanceOf(alice.address)).to.equal(want.alice.nusd);
          expect(positon.debt).to.equal(want.alice.debt);
          expect(positon.coll).to.equal(want.alice.coll);

          // Assert bob state
          positon = await lender.positionOf(bob.address);
          expect(await nusd.balanceOf(bob.address)).to.equal(want.bob.nusd);
          expect(positon.debt).to.equal(want.bob.debt);
          expect(positon.coll).to.equal(want.bob.coll);
        }
      });
    }
  });

  // describe("interacting with positons:", async () => {
  //   const coll = MIN_SYSTEM_COLLATERALIZATION_RATIO;
  //   const debt = utils.parseUnits("1", 18);

  //   const price = utils.parseUnits("1", 18);
  //   await collateral.connect(alice).approve(lender.address, constants.MaxUint256);
  //   await collateral.connect(bob).approve(lender.address, constants.MaxUint256);
  //   await collateral.connect(carol).approve(lender.address, constants.MaxUint256);

  //   await oracle.set(price);
  //   await lender.connect(alice).open(coll, debt);

  //   for (const { name, action, sender, coll, debt, price } of [
  //     {
  //       name: "alice creates a position",
  //       action: "open",
  //       sender: alice,
  //       coll: utils.parseUnits("10", 18),
  //       debt: constants.Zero,
  //       price: utils.parseUnits("1", 18),
  //     },
  //   ]) {
  //     it(name, async () => {
  //       await oracle.set(price);
  //       switch (action) {
  //         case "open":
  //           break;
  //         case "update":
  //           break;
  //       }
  //     });
  //   }
  // });
});
