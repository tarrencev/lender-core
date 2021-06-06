import {config as dotenvConfig} from 'dotenv';
import {resolve} from 'path';
dotenvConfig({path: resolve(__dirname, './.env')});

import {HardhatUserConfig} from 'hardhat/types';

import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-truffle5';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import '@typechain/hardhat';

import chai from 'chai';
import {solidity} from 'ethereum-waffle';
import {url, accounts} from './utils/network';

chai.use(solidity);

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {
      // process.env.HARDHAT_FORK will specify the network that the fork is made from.
      // this line ensure the use of the corresponding accounts
      accounts: accounts(process.env.HARDHAT_FORK),
      forking: process.env.HARDHAT_FORK
        ? {
            url: url(process.env.HARDHAT_FORK),
            blockNumber: process.env.HARDHAT_FORK_NUMBER
              ? parseInt(process.env.HARDHAT_FORK_NUMBER)
              : undefined,
          }
        : undefined,
    },
    localhost: {
      url: url('localhost'),
      accounts: accounts(),
    },
    staging: {
      url: url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    production: {
      url: url('mainnet'),
      accounts: accounts('mainnet'),
    },
    mainnet: {
      url: url('mainnet'),
      accounts: accounts('mainnet'),
    },
    rinkeby: {
      url: url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    kovan: {
      url: url('kovan'),
      accounts: accounts('kovan'),
    },
    goerli: {
      url: url('goerli'),
      accounts: accounts('goerli'),
    },
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: {
    compilers: [
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: '0.5.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
    ],
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP,
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  external: {
    deployments: process.env.HARDHAT_FORK
      ? {
          // process.env.HARDHAT_FORK will specify the network that the fork is made from.
          // these lines allow it to fetch the deployments from the network being forked from both for node and deploy task
          hardhat: ['deployments/' + process.env.HARDHAT_FORK],
          localhost: ['deployments/' + process.env.HARDHAT_FORK],
        }
      : undefined,
  },
};

export default config;
