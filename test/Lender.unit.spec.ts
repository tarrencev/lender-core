import {deployments, ethers, getNamedAccounts} from 'hardhat';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import {expect} from 'chai';

import {CollateralFake} from '../types/CollateralFake';
import {TestCallee} from '../types/TestCallee';
import {IERC20} from '../types/IERC20';
import {LenderTest} from '../types/LenderTest';
import {NUSD} from '../types/NUSD';
import {ObservableFake} from '../types/ObservableFake';
import {OracleFake} from '../types/OracleFake';
import {FeeAmount} from '../utils/constants';

const {BigNumber, constants, utils} = ethers;

const MIN_DEBT = utils.parseUnits('1', 18);
const MIN_POSITION_COLLATERALIZATION_RATIO = utils.parseUnits('110', 16);
const MIN_SYSTEM_COLLATERALIZATION_RATIO = utils.parseUnits('150', 16);

const setup = deployments.createFixture(async (): Promise<{
  contracts: {
    callee: TestCallee;
    lender: LenderTest;
    nusd: NUSD;
    collateral: IERC20;
  };
  accounts: {
    deployer: SignerWithAddress;
    alice: SignerWithAddress;
    bob: SignerWithAddress;
    carol: SignerWithAddress;
    sudo: SignerWithAddress;
  };
}> => {
  await deployments.fixture(undefined, {
    keepExistingDeployments: true, // global option to test network like that
  });
  const {deployer} = await getNamedAccounts();
  let [sudo, alice, bob, carol] = await ethers.getSigners();

  await deployments.deploy('TestCallee', {
    from: deployer,
  });
  await deployments.deploy('OracleFake', {
    from: deployer,
  });
  await deployments.deploy('ObservableFake', {
    from: deployer,
  });
  await deployments.deploy('CollateralFake', {
    args: ['collateral', 'fake'],
    from: deployer,
  });

  const callee = <TestCallee>await ethers.getContract('TestCallee', deployer);
  const nusd = <NUSD>await ethers.getContract('NUSD', deployer);
  const oracle = <OracleFake>await ethers.getContract('OracleFake', deployer);
  const observable = <ObservableFake>(
    await ethers.getContract('ObservableFake', deployer)
  );
  const collateral = <CollateralFake>(
    await ethers.getContract('CollateralFake', deployer)
  );

  await deployments.deploy('LenderTest', {
    from: deployer,
    args: [
      collateral.address,
      nusd.address,
      oracle.address,
      FeeAmount.LOW,
      1,
      0,
      MIN_DEBT,
      MIN_POSITION_COLLATERALIZATION_RATIO,
      MIN_SYSTEM_COLLATERALIZATION_RATIO,
      observable.address,
    ],
    log: true,
  });

  const lender = <LenderTest>await ethers.getContract('LenderTest', deployer);

  await nusd.addIssuer(lender.address);
  await nusd.addIssuer(sudo.address);

  await collateral.approve(lender.address, constants.MaxUint256);
  await collateral.mint(deployer, MIN_SYSTEM_COLLATERALIZATION_RATIO);
  await lender.setPrice(utils.parseUnits('1', 18));
  await lender.initialize({
    coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
    debt: MIN_DEBT,
  });

  const accounts = {
    deployer: await ethers.getSigner(deployer),
    sudo,
    alice,
    bob,
    carol,
  };

  for (let account of Object.values(accounts)) {
    await collateral.mint(account.address, utils.parseUnits('1', 25));
    await collateral
      .connect(account)
      .approve(lender.address, constants.MaxUint256);
  }

  return {
    contracts: {
      callee,
      lender,
      nusd,
      collateral: collateral as IERC20,
    },
    accounts,
  };
});

describe('Lender.unit', () => {
  describe('opening a position', async () => {
    for (const {name, update, price, revert} of [
      {
        name: 'with minimum debt and minimum collateralization succeeds',
        update: {
          coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
          debt: MIN_DEBT,
        },
        price: utils.parseUnits('1', 18),
        revert: undefined,
      },
      {
        name: 'with less than min debt and reverts',
        update: {
          coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
          debt: MIN_DEBT.sub(1),
        },
        price: utils.parseUnits('1', 18),
        revert: 'less than min debt',
      },
      {
        name: 'with less than min system collateral ratio for first loan and reverts',
        update: {
          coll: MIN_POSITION_COLLATERALIZATION_RATIO,
          debt: utils.parseUnits('1', 18),
        },
        price: utils.parseUnits('1', 18),
        revert: 'undercollateralized system',
      },
      {
        name: 'with negative collateral and reverts',
        update: {
          coll: MIN_POSITION_COLLATERALIZATION_RATIO.mul(-1),
          debt: utils.parseUnits('1', 18),
        },
        price: utils.parseUnits('1', 18),
        revert: 'revert undercollateralized system',
      },
      {
        name: 'with negative debt and reverts',
        update: {
          coll: MIN_POSITION_COLLATERALIZATION_RATIO,
          debt: utils.parseUnits('1', 18).mul(-1),
        },
        price: utils.parseUnits('1', 18),
        revert: 'less than min debt',
      },
    ]) {
      it(name, async () => {
        const {
          contracts: {lender, nusd, collateral: collateral},
          accounts: {alice},
        } = await setup();

        if (update.coll.gt(0)) {
          await collateral.connect(alice).approve(lender.address, update.coll);
        }
        await lender.setPrice(price);

        if (revert) {
          await expect(lender.connect(alice).update(update)).to.be.revertedWith(
            revert
          );
        } else {
          await lender.connect(alice).update(update);
          expect(await nusd.balanceOf(alice.address)).to.equal(update.debt);
          expect(await collateral.balanceOf(lender.address)).to.equal(
            MIN_SYSTEM_COLLATERALIZATION_RATIO.add(update.coll)
          );
          const got = await lender.positionOf(alice.address);
          expect(got.coll).to.equal(update.coll);
          expect(got.debt).to.equal(update.debt);
        }
      });
    }
  });

  describe('updating a position', async () => {
    const open = {
      coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
      debt: utils.parseUnits('1', 18),
    };

    for (const {name, update, want, price, revert} of [
      {
        name: 'with additonal collateral succeeds',
        update: {
          coll: utils.parseUnits('10', 18),
          debt: constants.Zero,
        },
        want: {
          coll: open.coll.add(utils.parseUnits('10', 18)),
          debt: open.debt,
        },
        price: utils.parseUnits('1', 18),
      },
      {
        name: 'with additonal collateral when price has dropped succeeds',
        update: {
          coll: open.coll,
          debt: constants.Zero,
        },
        want: {
          coll: open.coll.add(open.coll),
          debt: open.debt,
        },
        price: utils.parseUnits('1', 18).div(2),
      },
      {
        name: 'to repay debt and withdraw all collateral succeeds',
        update: {
          coll: open.coll.mul(-1),
          debt: utils.parseUnits('1', 18).mul(-1),
        },
        want: {
          coll: BigNumber.from(0),
          debt: BigNumber.from(0),
        },
        price: utils.parseUnits('1', 18),
      },
      {
        name: 'to only repay necessary debt when overpaying debt',
        update: {
          coll: open.coll.mul(-1),
          debt: open.debt.mul(-2),
        },
        want: {
          coll: BigNumber.from(0),
          debt: BigNumber.from(0),
        },
        price: utils.parseUnits('1', 18),
      },
      {
        name: 'to only repay necessary coll when overpaying coll',
        update: {
          coll: open.coll.mul(-2),
          debt: open.debt.mul(-1),
        },
        want: {
          coll: BigNumber.from(0),
          debt: BigNumber.from(0),
        },
        price: utils.parseUnits('1', 18),
      },
      {
        name: 'to full repay with max',
        update: {
          coll: constants.MaxInt256.mul(-1),
          debt: constants.MaxInt256.mul(-1),
        },
        want: {
          coll: BigNumber.from(0),
          debt: BigNumber.from(0),
        },
        price: utils.parseUnits('1', 18),
      },
      {
        name: 'that pushes the system under collateralization ratio reverts',
        update: {
          coll: MIN_SYSTEM_COLLATERALIZATION_RATIO.div(2).mul(-1),
          debt: constants.Zero,
        },
        price: utils.parseUnits('1', 18),
        revert: 'undercollateralized system',
      },
      {
        name: 'with a noop reverts',
        update: {
          coll: constants.Zero,
          debt: constants.Zero,
        },
        price: utils.parseUnits('1', 18),
        revert: 'noop update',
      },
    ]) {
      it(name, async () => {
        const {
          contracts: {lender, nusd, collateral},
          accounts: {alice},
        } = await setup();

        // setup
        await lender.setPrice(utils.parseUnits('1', 18));
        await lender.connect(alice).update(open);

        // test
        await lender.setPrice(price);

        if (revert) {
          await expect(lender.connect(alice).update(update)).to.be.revertedWith(
            revert
          );
        } else if (want) {
          await lender.connect(alice).update(update);
          expect(await nusd.balanceOf(alice.address)).to.equal(want.debt);
          const position = await lender.positionOf(alice.address);
          expect(position.coll).to.equal(want.coll);
          expect(position.debt).to.equal(want.debt);
        } else {
          expect(false, 'no assertions');
        }
      });
    }
  });

  describe('liquidating a position', async () => {
    for (const {name, positions, price, want, revert} of [
      {
        name: 'that is undercollateralized succeeds',
        price: utils.parseUnits('1', 17),
        positions: {
          alice: {
            open: {
              coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
              debt: utils.parseUnits('1', 18),
            },
            price: utils.parseUnits('1', 18),
          },
          bob: {
            open: {
              coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
              debt: utils.parseUnits('1', 18),
            },
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
            open: {
              coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
              debt: utils.parseUnits('1', 18),
            },
            price: utils.parseUnits('1', 18),
          },
          bob: {
            open: {
              coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
              debt: utils.parseUnits('1', 18),
            },
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
            open: {
              coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
              debt: utils.parseUnits('1', 18),
            },
            price: utils.parseUnits('1', 18),
          },
          bob: {
            open: {
              coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
              debt: utils.parseUnits('1', 18),
            },
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
            open: {
              coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
              debt: utils.parseUnits('1', 18),
            },
            price: utils.parseUnits('1', 18),
          },
        },
        revert: 'position has no debt',
      },
    ]) {
      it(name, async () => {
        const {
          contracts: {lender, callee, nusd, collateral: collateral},
          accounts: {alice, bob},
        } = await setup();

        await lender.setPrice(utils.parseUnits('1', 18));

        if (positions.alice) {
          await lender.setPrice(positions.alice.price);
          await lender.connect(alice).update(positions.alice.open);
        }

        await lender.setPrice(positions.bob.price);
        await lender.connect(bob).update(positions.bob.open);

        if (positions.callee) {
          await nusd
            .connect(bob)
            .approve(lender.address, positions.callee.approve);
          await nusd
            .connect(bob)
            .transfer(callee.address, positions.callee.nusd);
        }

        await lender.setPrice(price);

        if (revert) {
          expect(
            callee.connect(bob).liquidate(lender.address, alice.address)
          ).to.be.revertedWith(revert);
        } else if (want) {
          await callee.connect(bob).liquidate(lender.address, alice.address);

          expect(await nusd.totalSupply()).to.equal(
            want.nusd.supply.add(MIN_DEBT)
          );
          expect(await collateral.balanceOf(lender.address)).to.equal(
            want.lender.coll.add(MIN_SYSTEM_COLLATERALIZATION_RATIO)
          );

          // Assert alice state
          let position = await lender.positionOf(alice.address);
          expect(await nusd.balanceOf(alice.address)).to.equal(want.alice.nusd);
          expect(position.debt).to.equal(want.alice.debt);
          expect(position.coll).to.equal(want.alice.coll);

          // Assert bob state
          position = await lender.positionOf(bob.address);
          expect(await nusd.balanceOf(bob.address)).to.equal(want.bob.nusd);
          expect(position.debt).to.equal(want.bob.debt);
          expect(position.coll).to.equal(want.bob.coll);
        }
      });
    }
  });

  describe('interacting with positions', async () => {
    it('interacting with positions', async () => {
      const {
        accounts: {deployer, alice, bob, carol},
        contracts: {lender, callee, nusd},
      } = await setup();

      for (const {name, action, sender, update, want, transfer, price} of [
        {
          name: 'initialize price to 1.0',
          action: 'price',
          price: utils.parseUnits('1', 18),
        },
        {
          name: 'alice opens a minimally collateralized position',
          action: 'update',
          sender: alice,
          update: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: MIN_DEBT,
          },
          want: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO,
            debt: MIN_DEBT,
          },
        },
        {
          name: 'bob opens a minimally collateralized position',
          action: 'update',
          sender: bob,
          update: {
            coll: utils.parseUnits('150', 18),
            debt: utils.parseUnits('100', 18),
          },
          want: {
            coll: utils.parseUnits('150', 18),
            debt: utils.parseUnits('100', 18),
          },
        },
        {
          name: 'update price to 0.5',
          action: 'price',
          price: utils.parseUnits('5', 17),
        },
        {
          name: 'bob updates his position to be minimally collateralized',
          action: 'update',
          sender: bob,
          update: {
            coll: utils.parseUnits('150', 18),
            debt: constants.Zero,
          },
          want: {
            coll: utils.parseUnits('300', 18),
            debt: utils.parseUnits('100', 18),
          },
        },
        {
          name: 'carol opens a large positon',
          action: 'update',
          sender: carol,
          update: {
            coll: utils.parseUnits('150', 20),
            debt: utils.parseUnits('100', 19),
          },
          want: {
            coll: utils.parseUnits('150', 20),
            debt: utils.parseUnits('100', 19),
          },
        },
        {
          name: 'carol liquidates alice',
          action: 'liquidate',
          sender: carol,
          want: {
            borrower: alice,
            coll: constants.Zero,
            debt: constants.Zero,
          },
        },
        {
          name: 'alice transfers her nusd to carol',
          action: 'transfer',
          transfer: {
            from: alice,
            to: carol,
            amount: MIN_DEBT,
          },
        },
        {
          name: 'carol closes her position',
          action: 'update',
          sender: carol,
          update: {
            coll: utils.parseUnits('150', 20).mul(-1),
            debt: constants.MaxInt256.mul(-1),
          },
          want: {
            coll: constants.Zero,
            debt: constants.Zero,
          },
        },
        {
          name: 'bob closes his position',
          action: 'update',
          sender: bob,
          update: {
            coll: utils.parseUnits('300', 18).mul(-1),
            debt: utils.parseUnits('100', 18).mul(-1),
          },
          want: {
            coll: constants.Zero,
            debt: constants.Zero,
          },
        },
        {
          name: 'deployer unwinds lender',
          action: 'update',
          sender: deployer,
          update: {
            coll: MIN_SYSTEM_COLLATERALIZATION_RATIO.mul(-1),
            debt: MIN_DEBT.mul(-1),
          },
          want: {
            coll: constants.Zero,
            debt: constants.Zero,
          },
        },
      ]) {
        console.log(`\t${name}`);

        switch (action) {
          case 'price': {
            if (!price) {
              expect(price).is.not.null;
              break;
            }

            await lender.setPrice(price);
            break;
          }
          case 'transfer': {
            if (!transfer) {
              expect(transfer).is.not.null;
              break;
            }
            await nusd
              .connect(transfer.from)
              .transfer(transfer.to.address, transfer.amount);
            break;
          }
          case 'update': {
            if (!sender || !update || !want) {
              expect(sender).is.not.null;
              expect(update).is.not.null;
              expect(want).is.not.null;
              break;
            }

            await lender.connect(sender).update(update);
            const position = await lender.positionOf(sender.address);
            expect(position.debt).to.equal(want.debt);
            expect(position.coll).to.equal(want.coll);
            break;
          }
          case 'liquidate': {
            if (!sender || !want || !want.borrower) {
              expect(sender).is.not.null;
              expect(want).is.not.null;
              expect(want?.borrower).is.not.null;
              break;
            }

            const borrower = await lender.positionOf(want.borrower.address);
            await nusd.connect(sender).transfer(callee.address, borrower.debt);
            await callee
              .connect(sender)
              .liquidate(lender.address, alice.address);
            const position = await lender.positionOf(want.borrower.address);
            expect(position.debt).to.equal(want.debt);
            expect(position.coll).to.equal(want.coll);
            break;
          }
        }
      }
    });
  });
});
