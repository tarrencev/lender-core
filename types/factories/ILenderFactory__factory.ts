/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILenderFactory,
  ILenderFactoryInterface,
} from "../ILenderFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minPositionCollateralizationRatio",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minSystemCollateralizationRatio",
        type: "uint256",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ILenderFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ILenderFactoryInterface {
    return new utils.Interface(_abi) as ILenderFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILenderFactory {
    return new Contract(address, _abi, signerOrProvider) as ILenderFactory;
  }
}
