/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staker, StakerInterface } from "../Staker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161048d38038061048d8339818101604052606081101561003357600080fd5b50805160208083015160409093015191929190600090610060908590859085906100cd6100b4821b17901c565b905061008a731f98431c8ad98523631ae4a59f267346ea31f9848261010a60201b6101231760201c565b600080546001600160a01b0319166001600160a01b03929092169190911790555061022192505050565b6100bc610201565b826001600160a01b0316846001600160a01b031611156100da579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600081602001516001600160a01b031682600001516001600160a01b03161061013257600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b6001600160601b03191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b604080516060810182526000808252602082018190529181019190915290565b61025d806102306000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806316f0115b14610046578063c45a01551461006a578063f9609f0814610072575b600080fd5b61004e6100a2565b604080516001600160a01b039092168252519081900360200190f35b61004e6100b1565b6100a06004803603604081101561008857600080fd5b506001600160a01b03813581169160200135166100c9565b005b6000546001600160a01b031681565b731f98431c8ad98523631ae4a59f267346ea31f98481565b5050565b6100d5610207565b826001600160a01b0316846001600160a01b031611156100f3579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600081602001516001600160a01b031682600001516001600160a01b03161061014b57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b60408051606081018252600080825260208201819052918101919091529056fea26469706673582212206c511aad54d4dc2830f31f3869ee6fcbf9001fa0fd6bcdcb8fb0d7190cf40c9764736f6c63430007060033";

export class Staker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    token0: string,
    token1: string,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staker> {
    return super.deploy(
      token0,
      token1,
      fee,
      overrides || {}
    ) as Promise<Staker>;
  }
  getDeployTransaction(
    token0: string,
    token1: string,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token0, token1, fee, overrides || {});
  }
  attach(address: string): Staker {
    return super.attach(address) as Staker;
  }
  connect(signer: Signer): Staker__factory {
    return super.connect(signer) as Staker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakerInterface {
    return new utils.Interface(_abi) as StakerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Staker {
    return new Contract(address, _abi, signerOrProvider) as Staker;
  }
}