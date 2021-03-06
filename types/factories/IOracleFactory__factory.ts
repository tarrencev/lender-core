/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IOracleFactory,
  IOracleFactoryInterface,
} from "../IOracleFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOracleFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleFactoryInterface {
    return new utils.Interface(_abi) as IOracleFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOracleFactory {
    return new Contract(address, _abi, signerOrProvider) as IOracleFactory;
  }
}
