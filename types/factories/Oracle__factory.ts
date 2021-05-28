/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Oracle, OracleInterface } from "../Oracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
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
    name: "_token",
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
    inputs: [],
    name: "renounceOwnership",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
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
  "0x60806040526000805463ffffffff60a01b1916600160a01b17905534801561002657600080fd5b5060405162001131380380620011318339818101604052604081101561004b57600080fd5b508051602090910151600061005e6100c2565b600080546001600160a01b0319166001600160a01b03831690811782556040519293509160008051602062001111833981519152908290a350600180546001600160a01b0319166001600160a01b0383161790556100bb826100c6565b50506101d9565b3390565b6100ce6100c2565b6001600160a01b03166100df6101ca565b6001600160a01b03161461013a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166101805760405162461bcd60e51b8152600401808060200182810382526026815260200180620010eb6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216916000805160206200111183398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b610f0280620001e96000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063715018a611610066578063715018a6146101125780638da5cb5b1461011c578063b8ec2d3814610124578063ecd0c0c314610147578063f2fde38b1461014f5761009e565b806302d45457146100a357806314fc78fc146100c75780634630f02e146100e15780634f0e0ef3146101025780635b5491821461010a575b600080fd5b6100ab610175565b604080516001600160a01b039092168252519081900360200190f35b6100cf61018d565b60408051918252519081900360200190f35b6100e96102c1565b6040805163ffffffff9092168252519081900360200190f35b6100ab6102d4565b6100ab6102ec565b61011a610304565b005b6100ab6103b0565b61011a6004803603602081101561013a57600080fd5b503563ffffffff166103bf565b6100ab610447565b61011a6004803603602081101561016557600080fd5b50356001600160a01b0316610456565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4881565b60015460009081906101f7906101e290731f98431c8ad98523631ae4a59f267346ea31f984906101dd906001600160a01b031673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26101f4610558565b6105ba565b600054600160a01b900463ffffffff1661069e565b600154909150600090610233908390670de0b6b3a7640000906001600160a01b031673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc261099a565b90506102856101e2731f98431c8ad98523631ae4a59f267346ea31f9846101dd73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48610bb8610558565b6001549092506000906102b990849084906001600160a01b031673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc261099a565b935050505090565b600054600160a01b900463ffffffff1681565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b731f98431c8ad98523631ae4a59f267346ea31f98481565b61030c610a8c565b6001600160a01b031661031d6103b0565b6001600160a01b031614610366576040805162461bcd60e51b81526020600482018190526024820152600080516020610ead833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6103c7610a8c565b6001600160a01b03166103d86103b0565b6001600160a01b031614610421576040805162461bcd60e51b81526020600482018190526024820152600080516020610ead833981519152604482015290519081900360640190fd5b6000805463ffffffff909216600160a01b0263ffffffff60a01b19909216919091179055565b6001546001600160a01b031681565b61045e610a8c565b6001600160a01b031661046f6103b0565b6001600160a01b0316146104b8576040805162461bcd60e51b81526020600482018190526024820152600080516020610ead833981519152604482015290519081900360640190fd5b6001600160a01b0381166104fd5760405162461bcd60e51b8152600401808060200182810382526026815260200180610e876026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b610560610e66565b826001600160a01b0316846001600160a01b0316111561057e579192915b6040518060600160405280856001600160a01b03168152602001846001600160a01b031681526020018362ffffff1681525090505b9392505050565b600081602001516001600160a01b031682600001516001600160a01b0316106105e257600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b600063ffffffff82166106dd576040805162461bcd60e51b8152602060048201526002602482015261042560f41b604482015290519081900360640190fd5b604080516002808252606082018352600092602083019080368337019050509050828160008151811061070c57fe5b602002602001019063ffffffff16908163ffffffff168152505060008160018151811061073557fe5b63ffffffff90921660209283029190910182015260405163883bdbfd60e01b8152600481018281528351602483015283516000936001600160a01b0389169363883bdbfd938793909283926044019185820191028083838b5b838110156107a657818101518382015260200161078e565b505050509050019250505060006040518083038186803b1580156107c957600080fd5b505afa1580156107dd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604090815281101561080657600080fd5b8101908080516040519392919084600160201b82111561082557600080fd5b90830190602082018581111561083a57600080fd5b82518660208202830111600160201b8211171561085657600080fd5b82525081516020918201928201910280838360005b8381101561088357818101518382015260200161086b565b5050505090500160405260200180516040519392919084600160201b8211156108ab57600080fd5b9083019060208201858111156108c057600080fd5b82518660208202830111600160201b821117156108dc57600080fd5b82525081516020918201928201910280838360005b838110156109095781810151838201526020016108f1565b5050505090500160405250505050905060008160008151811061092857fe5b60200260200101518260018151811061093d57fe5b60200260200101510390508463ffffffff168160060b8161095a57fe5b05935060008160060b12801561098457508463ffffffff168160060b8161097d57fe5b0760060b15155b1561099157600019909301925b50505092915050565b6000806109a686610a90565b90506001600160801b036001600160a01b03821611610a15576001600160a01b03808216800290848116908616106109f5576109f0600160c01b876001600160801b031683610db7565b610a0d565b610a0d81876001600160801b0316600160c01b610db7565b925050610a83565b6000610a2f6001600160a01b03831680600160401b610db7565b9050836001600160a01b0316856001600160a01b031610610a6757610a62600160801b876001600160801b031683610db7565b610a7f565b610a7f81876001600160801b0316600160801b610db7565b9250505b50949350505050565b3390565b60008060008360020b12610aa7578260020b610aaf565b8260020b6000035b9050620d89e8811115610aed576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b600060018216610b0157600160801b610b13565b6ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b031690506002821615610b3d576ffff97272373d413259a46990580e213a0260801c5b6004821615610b5c576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615610b7b576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615610b9a576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615610bb9576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615610bd8576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615610bf7576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610c17576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610c37576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610c57576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610c77576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610c97576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615610cb7576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615610cd7576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615610cf7576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610d18576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610d38576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610d57576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610d74576b048a170391f7dc42444e8fa20260801c5b60008460020b1315610d8f578060001981610d8b57fe5b0490505b600160201b810615610da2576001610da5565b60005b60ff16602082901c0192505050919050565b6000808060001985870986860292508281109083900303905080610ded5760008411610de257600080fd5b5082900490506105b3565b808411610df957600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b60408051606081018252600080825260208201819052918101919091529056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220d0161d379efd3bbc00faf150c832a4a6454ff9c5c7a5abb49349ded7d495955464736f6c634300070600334f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573738be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";

export class Oracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    owner: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Oracle> {
    return super.deploy(owner, token, overrides || {}) as Promise<Oracle>;
  }
  getDeployTransaction(
    owner: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, token, overrides || {});
  }
  attach(address: string): Oracle {
    return super.attach(address) as Oracle;
  }
  connect(signer: Signer): Oracle__factory {
    return super.connect(signer) as Oracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleInterface {
    return new utils.Interface(_abi) as OracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Oracle {
    return new Contract(address, _abi, signerOrProvider) as Oracle;
  }
}