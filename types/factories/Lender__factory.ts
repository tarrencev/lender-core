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
import type { Lender, LenderInterface } from "../Lender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "collateral_",
        type: "address",
      },
      {
        internalType: "address",
        name: "nusd",
        type: "address",
      },
      {
        internalType: "address",
        name: "ethusdOracle_",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "oraclePoolFee_",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "oraclePeriod_",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "fee_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minDebt_",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "minBCR_",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "minLCR_",
        type: "uint128",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
    ],
    name: "Liquidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coll",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
    ],
    name: "Updated",
    type: "event",
  },
  {
    inputs: [],
    name: "UNISWAP_V3_FACTORY",
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
    name: "WETH_ADDRESS",
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
    name: "_collateral",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_ethusdOracle",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_fee",
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
    name: "_minBCR",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_minDebt",
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
    name: "_minLCR",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_nusd",
    outputs: [
      {
        internalType: "contract INUSD",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_oraclePeriod",
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
    name: "_oraclePool",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_positions",
    outputs: [
      {
        internalType: "uint128",
        name: "coll",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "debt",
        type: "uint128",
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
    inputs: [
      {
        internalType: "uint256",
        name: "ratio",
        type: "uint256",
      },
    ],
    name: "fee",
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
    name: "lNominal",
    outputs: [
      {
        internalType: "uint128",
        name: "coll",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "debt",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lReal",
    outputs: [
      {
        internalType: "uint128",
        name: "coll",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "debt",
        type: "uint128",
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
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "liquidate",
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
        name: "borrower",
        type: "address",
      },
    ],
    name: "positionOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "coll",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "debt",
            type: "uint128",
          },
        ],
        internalType: "struct Position.Info",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee_",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDebt",
        type: "uint256",
      },
    ],
    name: "setMinDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "minBCR",
        type: "uint128",
      },
    ],
    name: "setMinPositionCollateralizationRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "minLCR",
        type: "uint128",
      },
    ],
    name: "setMinSystemCollateralizationRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "setOracle",
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
    name: "setOraclePeriod",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "totalCollateralizationRatio",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "int256",
            name: "coll",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "debt",
            type: "int256",
          },
        ],
        internalType: "struct Update.Info",
        name: "uReal",
        type: "tuple",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002e6b38038062002e6b8339810160408190526200003491620004d5565b60008054336001600160a01b03199182161790915560016002556003805482166001600160a01b038c8116919091179091556004805483168b8316179055600580549092169089161790556006805463ffffffff60a01b1916600160a01b63ffffffff881602179055620000f4731f98431c8ad98523631ae4a59f267346ea31f984620000e38b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc28a620001d8602090811b620012c117901c565b6200023160201b620013231760201c565b600680546001600160a01b03929092166001600160a01b031990921691909117905560078490556008839055600980546001600160801b03838116600160801b028186166001600160801b03199093169290921716179055604080518082019091526714d1120d7b1600008152670de0b6b3a76400006020808301919091526200018a91600a916200140762000329821b17901c565b620001c960405180604001604052806714d1120d7b1600008152602001670de0b6b3a7640000815250600b6200032960201b620014071790919060201c565b50505050505050505062000590565b620001e262000480565b826001600160a01b0316846001600160a01b0316111562000201579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600081602001516001600160a01b031682600001516001600160a01b0316106200025a57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b6001600160601b03191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b6040805180820190915282546001600160801b03808216808452600160801b9092041660208084019190915283516200036c929162001487620003c3821b17901c565b83546001600160801b0319166001600160801b0391821617845560208381015183820151620003a6931691620003c3811b6200148717901c565b83546001600160801b03918216600160801b029116179092555050565b6000808212156200042857826001600160801b03168260000384039150816001600160801b03161062000422576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b6200047a565b826001600160801b03168284019150816001600160801b031610156200047a576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b92915050565b604080516060810182526000808252602082018190529181019190915290565b80516001600160a01b0381168114620004b857600080fd5b919050565b80516001600160801b0381168114620004b857600080fd5b60008060008060008060008060006101208a8c031215620004f4578485fd5b620004ff8a620004a0565b98506200050f60208b01620004a0565b97506200051f60408b01620004a0565b965060608a015162ffffff8116811462000537578586fd5b60808b015190965063ffffffff8116811462000551578586fd5b60a08b015160c08c0151919650945092506200057060e08b01620004bd565b9150620005816101008b01620004bd565b90509295985092959850929598565b6128cb80620005a06000396000f3fe608060405234801561001057600080fd5b50600436106101a55760003560e01c806367d64048116100ef578063c0c8fb8011610092578063c0c8fb8014610328578063c5b37c221461033b578063d3b8375814610343578063dc3e03041461034b578063dc5fb25d14610353578063ebbc49651461035b578063f73e5aab14610363578063fd2d39c51461036b576101a5565b806367d64048146102ba57806369fe0e2d146102cd5780637183634f146102e05780637adbf973146102f55780638da5cb5b14610308578063a19d5cca14610310578063b2bdfa7b14610318578063b598f9b414610320576101a5565b806322ec40651161015757806322ec4065146102365780633599294b1461024957806339b37ab01461025c5780633f5ce5d11461026f57806351fda3811461027757806359d0bf2d1461028a5780635fb58080146102925780636234dc21146102a7576101a5565b8063040141e5146101aa578063046a4e7d146101c85780630eccd2c9146101d057806313af4035146101e557806314fc78fc146101f85780631a3737341461020d5780631d4d957c14610223575b600080fd5b6101b261038b565b6040516101bf9190612640565b60405180910390f35b6101b26103a3565b6101e36101de3660046124e8565b6103b2565b005b6101e36101f33660046124ce565b6106e2565b61020061074b565b6040516101bf919061268f565b610215610842565b6040516101bf9291906127f7565b6101e361023136600461261c565b61085c565b6101e36102443660046125c5565b6108c9565b6101e36102573660046125c5565b610932565b61020061026a3660046125ec565b610998565b6101b2610a7c565b6101e3610285366004612566565b610a8b565b610200610f73565b61029a610f79565b6040516101bf91906127e3565b6101e36102b53660046125ec565b610f8f565b6102006102c83660046125ec565b610fdb565b6101e36102db3660046125ec565b611016565b6102e8611062565b6040516101bf919061285a565b6101e36103033660046124ce565b611075565b6101b26110de565b61029a6110ed565b6101b26110fc565b6101b261110b565b6102156103363660046124ce565b61111a565b610200611140565b6101b2611146565b6101b2611155565b610215611164565b6101e361117e565b6101b26111e0565b61037e6103793660046124ce565b6111f8565b6040516101bf91906127c0565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b6004546001600160a01b031681565b600280541415610409576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600280556001600160a01b0383166000908152600c60209081526040918290208251808401909352546001600160801b038082168452600160801b909104169082018190526104735760405162461bcd60e51b815260040161046a9061275b565b60405180910390fd5b604080518082018252600a546001600160801b038082168352600160801b9182900481166020808501919091528451808601909552600b5480831686529290920416908301526000916104c791849161153a565b905060006104d361074b565b90506104e8816104e384826115ee565b611603565b6105045760405162461bcd60e51b815260040161046a906126d2565b8151600354610529916001600160a01b039091169033906001600160801b0316611644565b8151602083015160405163ede9d97360e01b8152339263ede9d97392610555928a908a90600401612811565b600060405180830381600087803b15801561056f57600080fd5b505af1158015610583573d6000803e3d6000fd5b505050506105cf604051806040016040528084600001516001600160801b0316600003815260200184602001516001600160801b0316600003815250600b61140790919063ffffffff16565b610617604051806040016040528085600001516001600160801b0316600003815260200185602001516001600160801b0316600003815250600a61140790919063ffffffff16565b6001600160a01b038087166000908152600c602090815260408083209290925560048054918601519251632770a7eb60e21b81529190931692639dc29fac9261066292339201612654565b600060405180830381600087803b15801561067c57600080fd5b505af1158015610690573d6000803e3d6000fd5b50505050856001600160a01b03167facd74f5a0eb0d086de0eebe2d1e70d5742838c88cb2cf492fc201d39e056f7e0336040516106cd9190612640565b60405180910390a25050600160025550505050565b6000546001600160a01b03163314610729576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60055460065460405163115f3ad160e01b815260009283926001600160a01b039091169163115f3ad19161079091600160a01b90910463ffffffff169060040161285a565b60206040518083038186803b1580156107a857600080fd5b505afa1580156107bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e09190612604565b60065490915060009061080a906001600160a01b03811690600160a01b900463ffffffff1661169b565b60035490915061083b90829084906001600160a01b031673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2611997565b9250505090565b600a546001600160801b0380821691600160801b90041682565b6000546001600160a01b031633146108a3576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b6006805463ffffffff909216600160a01b0263ffffffff60a01b19909216919091179055565b6000546001600160a01b03163314610910576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600980546001600160801b0319166001600160801b0392909216919091179055565b6000546001600160a01b03163314610979576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600980546001600160801b03928316600160801b029216919091179055565b600954600090600160801b90046001600160801b031682106109bc57506000610a77565b6009546001600160801b03168210156109d85750600754610a77565b600954600090610a0190600160801b90046001600160801b03166109fb85611a89565b90611a9f565b600954909150610a27906001600160801b03600160801b82048116916109fb9116611a89565b8113610a37575050600754610a77565b600754600954610a739190610a5e906001600160801b03600160801b820481169116611ab5565b8360000381610a6957fe5b0460010390611ac5565b9150505b919050565b6005546001600160a01b031681565b600280541415610ae2576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600280558035151580610af85750602081013515155b610b145760405162461bcd60e51b815260040161046a90612736565b6000610b21600c33611ae9565b604080518082018252600b546001600160801b038082168352600160801b9182900481166020808501919091528451808601909552600a548083168652929092041690830152919250600091610b8791610b803687900387018761257d565b9190611b04565b9050610ba3610b9b3685900385018561257d565b600b90611407565b610bae600a82611407565b610bb88282611407565b81546001600160801b0316158015610bdf57508154600160801b90046001600160801b0316155b15610c7657336000908152600c60209081526040822091909155600454610c14916001600160a01b0390911690850135611c17565b600354610c2b906001600160a01b03168435611cfe565b336001600160a01b03167f99cc044fd36aeecc372e0e5efa3b9fb561c7bd355a7c7de464a05776716b1476600080604051610c67929190612698565b60405180910390a25050610f6b565b6000610c8061074b565b6040805180820190915284546001600160801b038082168352600160801b909104166020820152909150600090610cb790836115ee565b600954909150600090600160801b90046001600160801b0316821215610dce57610ce8610ce383610998565b611a89565b9050610d12604051806040016040528060008152602001838152508661140790919063ffffffff16565b610d3b60405180604001604052806000815260200183815250600a61140790919063ffffffff16565b610d6460405180604001604052806000815260200183815250600b61140790919063ffffffff16565b6004546001600160a01b03166340c10f19610d7d6110de565b836040518363ffffffff1660e01b8152600401610d9b929190612676565b600060405180830381600087803b158015610db557600080fd5b505af1158015610dc9573d6000803e3d6000fd5b505050505b6008548554600160801b90046001600160801b03161015610e015760405162461bcd60e51b815260040161046a906126a6565b6040805180820190915285546001600160801b038082168352600160801b909104166020820152610e3290846115ee565b60095460408051808201909152600b546001600160801b038082168352600160801b918290048116602084015293955090910490911690610e7390856115ee565b1215610eb057600954600160801b90046001600160801b0316821215610eab5760405162461bcd60e51b815260040161046a906126ff565b610edb565b6009546001600160801b0316821215610edb5760405162461bcd60e51b815260040161046a90612789565b610efe610eec602088013583611a9f565b6004546001600160a01b031690611c17565b600354610f15906001600160a01b03168735611cfe565b845460405133917f99cc044fd36aeecc372e0e5efa3b9fb561c7bd355a7c7de464a05776716b147691610f5d916001600160801b0380821692600160801b90920416906127f7565b60405180910390a250505050505b506001600255565b60085481565b600954600160801b90046001600160801b031681565b6000546001600160a01b03163314610fd6576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600855565b60408051808201909152600b546001600160801b038082168352600160801b90910416602082015260009061101090836115ee565b92915050565b6000546001600160a01b0316331461105d576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600755565b600654600160a01b900463ffffffff1681565b6000546001600160a01b031633146110bc576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b6009546001600160801b031681565b6000546001600160a01b031681565b6003546001600160a01b031681565b600c602052600090815260409020546001600160801b0380821691600160801b90041682565b60075481565b6001546001600160a01b031681565b6006546001600160a01b031681565b600b546001600160801b0380821691600160801b90041682565b6001546001600160a01b031633146111cc576040805162461bcd60e51b815260206004820152600c60248201526b3832b73234b733a7bbb732b960a11b604482015290519081900360640190fd5b600080546001600160a01b03191633179055565b731f98431c8ad98523631ae4a59f267346ea31f98481565b611200612466565b6001600160a01b0382166000908152600c60205260409020546001600160801b031661124057506040805180820190915260008082526020820152610a77565b6001600160a01b0382166000908152600c60209081526040918290208251808401845290546001600160801b038082168352600160801b9182900481168385015284518086018652600a5480831682528390048216818601528551808701909652600b5480831687529290920416928401929092526110109290919061153a565b6112c961247d565b826001600160a01b0316846001600160a01b031611156112e7579192915b6040518060600160405280856001600160a01b03168152602001846001600160a01b031681526020018362ffffff1681525090505b9392505050565b600081602001516001600160a01b031682600001516001600160a01b03161061134b57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b6040805180820190915282546001600160801b03808216808452600160801b909204166020830152825161143b9190611487565b83546001600160801b0319166001600160801b039182161784556020838101519083015161146a921690611487565b83546001600160801b03918216600160801b029116179092555050565b6000808212156114e957826001600160801b03168260000384039150816001600160801b0316106114e4576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b611010565b826001600160801b03168284019150816001600160801b03161015611010576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b611542612466565b600061157685600001516001600160801b031684600001516001600160801b031686600001516001600160801b0316611d42565b905060006115ac86602001516001600160801b031685602001516001600160801b031687602001516001600160801b0316611d42565b905060405180604001604052806115c284611df1565b6001600160801b031681526020016115d983611df1565b6001600160801b031690529695505050505050565b600061131c8360000151846020015184611e07565b600061160e83611e44565b801561162b5750600954600160801b90046001600160801b031682125b8061131c5750506009546001600160801b031613919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611696908490611e6a565b505050565b600063ffffffff82166116da576040805162461bcd60e51b8152602060048201526002602482015261042560f41b604482015290519081900360640190fd5b604080516002808252606082018352600092602083019080368337019050509050828160008151811061170957fe5b602002602001019063ffffffff16908163ffffffff168152505060008160018151811061173257fe5b63ffffffff90921660209283029190910182015260405163883bdbfd60e01b8152600481018281528351602483015283516000936001600160a01b0389169363883bdbfd938793909283926044019185820191028083838b5b838110156117a357818101518382015260200161178b565b505050509050019250505060006040518083038186803b1580156117c657600080fd5b505afa1580156117da573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604090815281101561180357600080fd5b8101908080516040519392919084600160201b82111561182257600080fd5b90830190602082018581111561183757600080fd5b82518660208202830111600160201b8211171561185357600080fd5b82525081516020918201928201910280838360005b83811015611880578181015183820152602001611868565b5050505090500160405260200180516040519392919084600160201b8211156118a857600080fd5b9083019060208201858111156118bd57600080fd5b82518660208202830111600160201b821117156118d957600080fd5b82525081516020918201928201910280838360005b838110156119065781810151838201526020016118ee565b5050505090500160405250505050905060008160008151811061192557fe5b60200260200101518260018151811061193a57fe5b60200260200101510390508463ffffffff168160060b8161195757fe5b05935060008160060b12801561198157508463ffffffff168160060b8161197a57fe5b0760060b15155b1561198e57600019909301925b50505092915050565b6000806119a386611f1b565b90506001600160801b036001600160a01b03821611611a12576001600160a01b03808216800290848116908616106119f2576119ed600160c01b876001600160801b031683611d42565b611a0a565b611a0a81876001600160801b0316600160c01b611d42565b925050611a80565b6000611a2c6001600160a01b03831680600160401b611d42565b9050836001600160a01b0316856001600160a01b031610611a6457611a5f600160801b876001600160801b031683611d42565b611a7c565b611a7c81876001600160801b0316600160801b611d42565b9250505b50949350505050565b6000600160ff1b8210611a9b57600080fd5b5090565b8082038281131560008312151461101057600080fd5b8082018281101561101057600080fd5b6000821580611ae057505081810281838281611add57fe5b04145b61101057600080fd5b6001600160a01b031660009081526020919091526040902090565b611b0c61249d565b60008085600001511215611b5957611b4f85600001516000036001600160801b031684600001516001600160801b031686600001516001600160801b0316611d42565b6000039050611b7b565b845183518551611b78926001600160801b039081169281169116611d42565b90505b60008086602001511215611bc857611bbe86602001516000036001600160801b031685602001516001600160801b031687602001516001600160801b0316611d42565b6000039050611bfd565b611bfa86602001516001600160801b031685602001516001600160801b031687602001516001600160801b0316611d42565b90505b604080518082019091529182526020820152949350505050565b6000811215611c8a5760408051632770a7eb60e21b81523360048201526000838103602483015291516001600160a01b03851692639dc29fac926044808201939182900301818387803b158015611c6d57600080fd5b505af1158015611c81573d6000803e3d6000fd5b50505050611cfa565b6000811315611cfa57604080516340c10f1960e01b81523360048201526024810183905290516001600160a01b038416916340c10f1991604480830192600092919082900301818387803b158015611ce157600080fd5b505af1158015611cf5573d6000803e3d6000fd5b505050505b5050565b6000811215611d2457611d1f6001600160a01b038316336000849003611644565b611cfa565b6000811315611cfa57611cfa6001600160a01b038316333084612242565b6000808060001985870986860292508281109083900303905080611d785760008411611d6d57600080fd5b50829004905061131c565b808411611d8457600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b806001600160801b0381168114610a7757600080fd5b60006001600160801b038316611e1f5750600061131c565b611e3c846001600160801b031683856001600160801b0316611d42565b949350505050565b600954600090600160801b90046001600160801b0316611e6383610fdb565b1292915050565b6000611ebf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166122a29092919063ffffffff16565b80519091501561169657808060200190516020811015611ede57600080fd5b50516116965760405162461bcd60e51b815260040180806020018281038252602a81526020018061286c602a913960400191505060405180910390fd5b60008060008360020b12611f32578260020b611f3a565b8260020b6000035b9050620d89e8811115611f78576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b600060018216611f8c57600160801b611f9e565b6ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b031690506002821615611fc8576ffff97272373d413259a46990580e213a0260801c5b6004821615611fe7576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615612006576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615612025576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615612044576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615612063576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615612082576ffe5dee046a99a2a811c461f1969c30530260801c5b6101008216156120a2576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156120c2576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156120e2576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615612102576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615612122576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615612142576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615612162576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615612182576f31be135f97d08fd981231505542fcfa60260801c5b620100008216156121a3576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156121c3576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156121e2576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156121ff576b048a170391f7dc42444e8fa20260801c5b60008460020b131561221a57806000198161221657fe5b0490505b600160201b81061561222d576001612230565b60005b60ff16602082901c0192505050919050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261229c908590611e6a565b50505050565b6060611e3c8484600085856122b6856123bc565b612307576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106123455780518252601f199092019160209182019101612326565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146123a7576040519150601f19603f3d011682016040523d82523d6000602084013e6123ac565b606091505b5091509150611a7c8282866123c2565b3b151590565b606083156123d157508161131c565b8251156123e15782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561242b578181015183820152602001612413565b50505050905090810190601f1680156124585780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b604080518082019091526000808252602082015290565b604080516060810182526000808252602082018190529181019190915290565b604051806040016040528060008152602001600081525090565b80356001600160a01b0381168114610a7757600080fd5b6000602082840312156124df578081fd5b61131c826124b7565b6000806000604084860312156124fc578182fd5b612505846124b7565b9250602084013567ffffffffffffffff80821115612521578384fd5b818601915086601f830112612534578384fd5b813581811115612542578485fd5b876020828501011115612553578485fd5b6020830194508093505050509250925092565b600060408284031215612577578081fd5b50919050565b60006040828403121561258e578081fd5b6040516040810181811067ffffffffffffffff821117156125ab57fe5b604052823581526020928301359281019290925250919050565b6000602082840312156125d6578081fd5b81356001600160801b038116811461131c578182fd5b6000602082840312156125fd578081fd5b5035919050565b600060208284031215612615578081fd5b5051919050565b60006020828403121561262d578081fd5b813563ffffffff8116811461131c578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b039290921682526001600160801b0316602082015260400190565b6001600160a01b03929092168252602082015260400190565b90815260200190565b918252602082015260400190565b6020808252601290820152711b195cdcc81d1a185b881b5a5b881919589d60721b604082015260600190565b60208082526013908201527234b73b30b634b2103634b8bab4b230ba34b7b760691b604082015260600190565b6020808252601a908201527f756e646572636f6c6c61746572616c697a65642073797374656d000000000000604082015260600190565b6020808252600b908201526a6e6f6f702075706461746560a81b604082015260600190565b6020808252601490820152731c1bdcda5d1a5bdb881a185cc81b9bc81919589d60621b604082015260600190565b6020808252601c908201527f756e646572636f6c6c61746572616c697a656420626f72726f77657200000000604082015260600190565b81516001600160801b039081168252602092830151169181019190915260400190565b6001600160801b0391909116815260200190565b6001600160801b0392831681529116602082015260400190565b6001600160801b038581168252841660208201526060604082018190528101829052600082846080840137818301608090810191909152601f909201601f191601019392505050565b63ffffffff9190911681526020019056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212201b4500a1823bf6887794199734570d9d35308f512772f8c4aaf0040878c0606c64736f6c63430007060033";

export class Lender__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    collateral_: string,
    nusd: string,
    ethusdOracle_: string,
    oraclePoolFee_: BigNumberish,
    oraclePeriod_: BigNumberish,
    fee_: BigNumberish,
    minDebt_: BigNumberish,
    minBCR_: BigNumberish,
    minLCR_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lender> {
    return super.deploy(
      collateral_,
      nusd,
      ethusdOracle_,
      oraclePoolFee_,
      oraclePeriod_,
      fee_,
      minDebt_,
      minBCR_,
      minLCR_,
      overrides || {}
    ) as Promise<Lender>;
  }
  getDeployTransaction(
    collateral_: string,
    nusd: string,
    ethusdOracle_: string,
    oraclePoolFee_: BigNumberish,
    oraclePeriod_: BigNumberish,
    fee_: BigNumberish,
    minDebt_: BigNumberish,
    minBCR_: BigNumberish,
    minLCR_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      collateral_,
      nusd,
      ethusdOracle_,
      oraclePoolFee_,
      oraclePeriod_,
      fee_,
      minDebt_,
      minBCR_,
      minLCR_,
      overrides || {}
    );
  }
  attach(address: string): Lender {
    return super.attach(address) as Lender;
  }
  connect(signer: Signer): Lender__factory {
    return super.connect(signer) as Lender__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LenderInterface {
    return new utils.Interface(_abi) as LenderInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lender {
    return new Contract(address, _abi, signerOrProvider) as Lender;
  }
}
