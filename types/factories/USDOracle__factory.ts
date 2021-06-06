/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { USDOracle, USDOracleInterface } from "../USDOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_owner",
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
    name: "_pendingOwner",
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
    name: "_period",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "observe",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "period",
        type: "uint32",
      },
    ],
    name: "setPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapV3Factory",
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
    name: "usdcAddress",
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
    name: "wethAddress",
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
];

const _bytecode =
  "0x60806040526001805463ffffffff60a01b1916600160a01b17905534801561002657600080fd5b50604051610dd7380380610dd78339818101604052602081101561004957600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610d5c8061007b6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80635b549182116100715780635b5491821461013d5780638da5cb5b14610145578063b2bdfa7b1461014d578063b8ec2d3814610155578063d3b8375814610178578063ebbc496514610180576100a9565b806302d45457146100ae57806313af4035146100d257806314fc78fc146100fa5780634630f02e146101145780634f0e0ef314610135575b600080fd5b6100b6610188565b604080516001600160a01b039092168252519081900360200190f35b6100f8600480360360208110156100e857600080fd5b50356001600160a01b03166101a0565b005b610102610209565b60408051918252519081900360200190f35b61011c6102bd565b6040805163ffffffff9092168252519081900360200190f35b6100b66102d0565b6100b66102e8565b6100b6610300565b6100b661030f565b6100f86004803603602081101561016b57600080fd5b503563ffffffff1661031e565b6100b661038b565b6100f861039a565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4881565b6000546001600160a01b031633146101e7576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080610276610261731f98431c8ad98523631ae4a59f267346ea31f98461025c73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48610bb86103fc565b61045e565b600154600160a01b900463ffffffff16610542565b905060006102b682670de0b6b3a764000073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873c02aaa39b223fe8d0a0e5c4f27ead9083c756cc261083e565b9250505090565b600154600160a01b900463ffffffff1681565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b731f98431c8ad98523631ae4a59f267346ea31f98481565b6000546001600160a01b031690565b6000546001600160a01b031681565b6000546001600160a01b03163314610365576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b6001805463ffffffff909216600160a01b0263ffffffff60a01b19909216919091179055565b6001546001600160a01b031681565b6001546001600160a01b031633146103e8576040805162461bcd60e51b815260206004820152600c60248201526b3832b73234b733a7bbb732b960a11b604482015290519081900360640190fd5b600080546001600160a01b03191633179055565b610404610d06565b826001600160a01b0316846001600160a01b03161115610422579192915b6040518060600160405280856001600160a01b03168152602001846001600160a01b031681526020018362ffffff1681525090505b9392505050565b600081602001516001600160a01b031682600001516001600160a01b03161061048657600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b600063ffffffff8216610581576040805162461bcd60e51b8152602060048201526002602482015261042560f41b604482015290519081900360640190fd5b60408051600280825260608201835260009260208301908036833701905050905082816000815181106105b057fe5b602002602001019063ffffffff16908163ffffffff16815250506000816001815181106105d957fe5b63ffffffff90921660209283029190910182015260405163883bdbfd60e01b8152600481018281528351602483015283516000936001600160a01b0389169363883bdbfd938793909283926044019185820191028083838b5b8381101561064a578181015183820152602001610632565b505050509050019250505060006040518083038186803b15801561066d57600080fd5b505afa158015610681573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160409081528110156106aa57600080fd5b8101908080516040519392919084600160201b8211156106c957600080fd5b9083019060208201858111156106de57600080fd5b82518660208202830111600160201b821117156106fa57600080fd5b82525081516020918201928201910280838360005b8381101561072757818101518382015260200161070f565b5050505090500160405260200180516040519392919084600160201b82111561074f57600080fd5b90830190602082018581111561076457600080fd5b82518660208202830111600160201b8211171561078057600080fd5b82525081516020918201928201910280838360005b838110156107ad578181015183820152602001610795565b505050509050016040525050505090506000816000815181106107cc57fe5b6020026020010151826001815181106107e157fe5b60200260200101510390508463ffffffff168160060b816107fe57fe5b05935060008160060b12801561082857508463ffffffff168160060b8161082157fe5b0760060b15155b1561083557600019909301925b50505092915050565b60008061084a86610930565b90506001600160801b036001600160a01b038216116108b9576001600160a01b038082168002908481169086161061089957610894600160c01b876001600160801b031683610c57565b6108b1565b6108b181876001600160801b0316600160c01b610c57565b925050610927565b60006108d36001600160a01b03831680600160401b610c57565b9050836001600160a01b0316856001600160a01b03161061090b57610906600160801b876001600160801b031683610c57565b610923565b61092381876001600160801b0316600160801b610c57565b9250505b50949350505050565b60008060008360020b12610947578260020b61094f565b8260020b6000035b9050620d89e881111561098d576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b6000600182166109a157600160801b6109b3565b6ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b0316905060028216156109dd576ffff97272373d413259a46990580e213a0260801c5b60048216156109fc576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615610a1b576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615610a3a576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615610a59576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615610a78576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615610a97576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610ab7576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610ad7576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610af7576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610b17576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610b37576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615610b57576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615610b77576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615610b97576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610bb8576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610bd8576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610bf7576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610c14576b048a170391f7dc42444e8fa20260801c5b60008460020b1315610c2f578060001981610c2b57fe5b0490505b600160201b810615610c42576001610c45565b60005b60ff16602082901c0192505050919050565b6000808060001985870986860292508281109083900303905080610c8d5760008411610c8257600080fd5b508290049050610457565b808411610c9957600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b60408051606081018252600080825260208201819052918101919091529056fea2646970667358221220c7548111629288513bf23ef7efcbe405410a1d07f69165badb25856491cbe50264736f6c63430007060033";

export class USDOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<USDOracle> {
    return super.deploy(owner, overrides || {}) as Promise<USDOracle>;
  }
  getDeployTransaction(
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  attach(address: string): USDOracle {
    return super.attach(address) as USDOracle;
  }
  connect(signer: Signer): USDOracle__factory {
    return super.connect(signer) as USDOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDOracleInterface {
    return new utils.Interface(_abi) as USDOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): USDOracle {
    return new Contract(address, _abi, signerOrProvider) as USDOracle;
  }
}
