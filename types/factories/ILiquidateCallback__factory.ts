/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILiquidateCallback,
  ILiquidateCallbackInterface,
} from "../ILiquidateCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "coll",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "liquidateCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ILiquidateCallback__factory {
  static readonly abi = _abi;
  static createInterface(): ILiquidateCallbackInterface {
    return new utils.Interface(_abi) as ILiquidateCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILiquidateCallback {
    return new Contract(address, _abi, signerOrProvider) as ILiquidateCallback;
  }
}
