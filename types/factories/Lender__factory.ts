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
        name: "collateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "nusd",
        type: "address",
      },
      {
        internalType: "address",
        name: "ethusdOracle",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "oraclePoolFee",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "oraclePeriod",
        type: "uint32",
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
    name: "Liquidate",
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
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "_actualColl",
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
    name: "_actualDebt",
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
    name: "_minPositionCollateralizationRatio",
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
    name: "_minSystemCollateralizationRatio",
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
    name: "_openedColl",
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
    name: "_openedDebt",
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
        internalType: "uint256",
        name: "coll",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ratio",
        type: "uint256",
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
        name: "coll",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
    ],
    name: "computePostion",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "coll",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ratio",
            type: "uint256",
          },
        ],
        internalType: "struct Lender.Position",
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
        name: "holder",
        type: "address",
      },
    ],
    name: "positionOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "coll",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ratio",
            type: "uint256",
          },
        ],
        internalType: "struct Lender.Position",
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
        name: "fee",
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
        internalType: "uint256",
        name: "minPositionCollateralizationRatio",
        type: "uint256",
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
        internalType: "uint256",
        name: "minSystemCollateralizationRatio",
        type: "uint256",
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
    inputs: [
      {
        internalType: "int256",
        name: "collDelta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "debtDelta",
        type: "int256",
      },
    ],
    name: "update",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "coll",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ratio",
            type: "uint256",
          },
        ],
        internalType: "struct Lender.Position",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b50604051620026d2380380620026d28339810160408190526200003491620002c0565b60008054336001600160a01b03199182161790915560016002556003805482166001600160a01b038c8116919091179091556004805483168b8316179055600580549092169089161790556006805463ffffffff60a01b1916600160a01b63ffffffff881602179055620000f4731f98431c8ad98523631ae4a59f267346ea31f984620000e38b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc28a62000132602090811b620011b117901c565b6200018b60201b620012131760201c565b600680546001600160a01b0319166001600160a01b0392909216919091179055600793909355600891909155600955600a55506200036a9350505050565b6200013c62000283565b826001600160a01b0316846001600160a01b031611156200015b579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600081602001516001600160a01b031682600001516001600160a01b031610620001b457600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b6001600160601b03191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b604080516060810182526000808252602082018190529181019190915290565b80516001600160a01b0381168114620002bb57600080fd5b919050565b60008060008060008060008060006101208a8c031215620002df578485fd5b620002ea8a620002a3565b9850620002fa60208b01620002a3565b97506200030a60408b01620002a3565b965060608a015162ffffff8116811462000322578586fd5b60808b015190965063ffffffff811681146200033c578586fd5b8095505060a08a0151935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b612358806200037a6000396000f3fe608060405234801561001057600080fd5b50600436106101bb5760003560e01c80637183634f116100fa578063b598f9b41161009d578063b598f9b414610338578063c0c8fb8014610340578063c5b37c2214610363578063d3b837581461036b578063dc3e030414610373578063ebbc49651461037b578063f356533d14610383578063f79649a21461038b578063fd2d39c514610393576101bb565b80637183634f146102ca5780637adbf973146102df5780637bd46d05146102f25780638acaabe9146102fa5780638da5cb5b1461030d578063a9c75c8214610315578063acd38d2a1461031d578063b2bdfa7b14610330576101bb565b80634c2e9c1d116101625780634c2e9c1d146102695780634f0e0ef31461027157806359d0bf2d146102795780635abeea75146102815780635b549182146102895780636234dc211461029157806367d64048146102a457806369fe0e2d146102b7576101bb565b8063046a4e7d146101c05780630eccd2c9146101de57806313af4035146101f357806314fc78fc146102065780631a3f98b11461021b5780631d4d957c1461023b5780633f5ce5d11461024e57806346115f8e14610256575b600080fd5b6101c86103a6565b6040516101d59190612106565b60405180910390f35b6101f16101ec366004612013565b6103b5565b005b6101f1610201366004611ff9565b610647565b61020e6106b0565b6040516101d59190612286565b61022e610229366004612091565b6107a7565b6040516101d5919061225b565b6101f16102493660046120e2565b610d23565b6101c8610d90565b6101f16102643660046120b2565b610d9f565b61020e610deb565b6101c8610df1565b61020e610e09565b61020e610e0f565b6101c8610e15565b6101f161029f3660046120b2565b610e2d565b61020e6102b23660046120b2565b610e79565b6101f16102c53660046120b2565b610e92565b6102d2610ede565b6040516101d591906122e7565b6101f16102ed366004611ff9565b610ef1565b61020e610f5a565b61022e610308366004612091565b610f60565b6101c8610fb9565b61020e610fc8565b6101f161032b3660046120b2565b610fce565b6101c861101a565b6101c8611029565b61035361034e366004611ff9565b611038565b6040516101d594939291906122cc565b61020e61105f565b6101c8611065565b6101c8611074565b6101f1611083565b61020e6110e5565b61020e6110eb565b61022e6103a1366004611ff9565b6110f1565b6004546001600160a01b031681565b60028054141561040c576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002805560008061041c856112f7565b91509150806000141561044a5760405162461bcd60e51b81526004016104419061222d565b60405180910390fd5b60006104546106b0565b905061046a81610465858585611381565b61139b565b6104865760405162461bcd60e51b81526004016104419061216d565b60035461049d906001600160a01b031633856113c3565b60405163ede9d97360e01b8152339063ede9d973906104c690869086908a908a9060040161228f565b600060405180830381600087803b1580156104e057600080fd5b505af11580156104f4573d6000803e3d6000fd5b5050600e54610506925090508361141a565b600e55600d54610516908461141a565b600d556001600160a01b0386166000908152600f6020526040902054600b5461053e9161141a565b600b556001600160a01b0386166000908152600f6020526040902060020154600c546105699161141a565b600c556001600160a01b038087166000908152600f6020526040808220828155600181018390556002810183905560030191909155600480549151632770a7eb60e21b81529190921691639dc29fac916105c791339187910161211a565b600060405180830381600087803b1580156105e157600080fd5b505af11580156105f5573d6000803e3d6000fd5b50505050856001600160a01b03167fc3d81b2125598b9a2b024afe09e33981f0aa5b7bcbe3e30c4303a4dec209ddb4336040516106329190612106565b60405180910390a25050600160025550505050565b6000546001600160a01b0316331461068e576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60055460065460405163115f3ad160e01b815260009283926001600160a01b039091169163115f3ad1916106f591600160a01b90910463ffffffff16906004016122e7565b60206040518083038186803b15801561070d57600080fd5b505afa158015610721573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074591906120ca565b60065490915060009061076f906001600160a01b03811690600160a01b900463ffffffff1661142a565b6003549091506107a090829084906001600160a01b031673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2611726565b9250505090565b6107af611f9a565b600280541415610806576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600280558215158061081757508115155b6108335760405162461bcd60e51b815260040161044190612208565b60008061083f336112f7565b909250905060006108508387611818565b9050600061085e8387611818565b600b5490915061086e9088611818565b600b55600c5461087e9087611818565b600c55600d5461088e9088611818565b600d55600e5461089e9087611818565b600e55811580156108ad575080155b156109ce57336000818152600f60205260408082208281556001810183905560028101839055600301829055600480549151632770a7eb60e21b81526001600160a01b0390921693639dc29fac9361090c939192908c9003910161211a565b600060405180830381600087803b15801561092657600080fd5b505af115801561093a573d6000803e3d6000fd5b505060035461095a92506001600160a01b031690503360008a90036113c3565b336001600160a01b03167f5429acfa1bb2f4dabe79b6340b7d91d801c2d985aabad7148c2476bbd9421cf8600080604051610996929190612133565b60405180910390a260405180608001604052806000815260200160008152602001600081526020016000815250945050505050610d18565b6000861315610a7f576007546109e59082906118a6565b90506109fe600754600c546118a690919063ffffffff16565b600c55600754600e54610a10916118a6565b600e556004546001600160a01b03166340c10f19610a2c610fb9565b6007546040518363ffffffff1660e01b8152600401610a4c92919061211a565b600060405180830381600087803b158015610a6657600080fd5b505af1158015610a7a573d6000803e3d6000fd5b505050505b6000610a896106b0565b90506000610a98848484611381565b9050600854831015610abc5760405162461bcd60e51b815260040161044190612141565b600a54610ace600d54600e5485611381565b1015610afb57600a54811015610af65760405162461bcd60e51b81526004016104419061219a565b610b60565b600a54600d54610b2290610b0f90876118a6565b600e54610b1c90876118a6565b85611381565b11610b3f5760405162461bcd60e51b8152600401610441906121d1565b6009548111610b605760405162461bcd60e51b8152600401610441906121d1565b336000908152600f60205260408120858155600201849055881215610beb5760048054604051632770a7eb60e21b81526001600160a01b0390911691639dc29fac91610bb491339160008e9003910161211a565b600060405180830381600087803b158015610bce57600080fd5b505af1158015610be2573d6000803e3d6000fd5b50505050610c58565b6000881315610c5857600480546040516340c10f1960e01b81526001600160a01b03909116916340c10f1991610c259133918d910161211a565b600060405180830381600087803b158015610c3f57600080fd5b505af1158015610c53573d6000803e3d6000fd5b505050505b6000891215610c8157600354610c7c906001600160a01b03163360008c90036113c3565b610ca2565b6000891315610ca257600354610ca2906001600160a01b031633308c6118b6565b336001600160a01b03167f5429acfa1bb2f4dabe79b6340b7d91d801c2d985aabad7148c2476bbd9421cf88585604051610cdd929190612133565b60405180910390a2604080516080810190915284815260208101610d018685611916565b815260208101949094526040909301525093505050505b600160025592915050565b6000546001600160a01b03163314610d6a576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b6006805463ffffffff909216600160a01b0263ffffffff60a01b19909216919091179055565b6005546001600160a01b031681565b6000546001600160a01b03163314610de6576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600955565b60095481565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b60085481565b600a5481565b731f98431c8ad98523631ae4a59f267346ea31f98481565b6000546001600160a01b03163314610e74576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600855565b6000610e8a600d54600e5484611381565b90505b919050565b6000546001600160a01b03163314610ed9576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600755565b600654600160a01b900463ffffffff1681565b6000546001600160a01b03163314610f38576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600c5481565b610f68611f9a565b6000610f726106b0565b90506000610f808583611916565b90506000610f8f868685611381565b60408051608081018252888152602081019490945283018690526060830152509150505b92915050565b6000546001600160a01b031690565b600b5481565b6000546001600160a01b03163314611015576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600a55565b6000546001600160a01b031681565b6003546001600160a01b031681565b600f6020526000908152604090208054600182015460028301546003909301549192909184565b60075481565b6001546001600160a01b031681565b6006546001600160a01b031681565b6001546001600160a01b031633146110d1576040805162461bcd60e51b815260206004820152600c60248201526b3832b73234b733a7bbb732b960a11b604482015290519081900360640190fd5b600080546001600160a01b03191633179055565b600e5481565b600d5481565b6110f9611f9a565b6001600160a01b0382166000908152600f602052604090205461114257604051806080016040528060008152602001600081526020016000815260200160008152509050610e8d565b6001600160a01b0382166000908152600f6020526040812054600d54600b5461116c92919061193a565b6001600160a01b0384166000908152600f6020526040812060020154600e54600c54939450919261119d929061193a565b90506111a98282610f60565b949350505050565b6111b9611fc2565b826001600160a01b0316846001600160a01b031611156111d7579192915b6040518060600160405280856001600160a01b03168152602001846001600160a01b031681526020018362ffffff1681525090505b9392505050565b600081602001516001600160a01b031682600001516001600160a01b03161061123b57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b6001600160a01b0381166000908152600f602052604081205481906113215750600090508061137c565b6001600160a01b0383166000908152600f6020526040902054600d54600b5461134b92919061193a565b6001600160a01b0384166000908152600f6020526040902060020154600e54600c549294506113799261193a565b90505b915091565b6000826113905750600061120c565b6111a984838561193a565b60006113a6836119e9565b80156113b35750600a5482105b8061120c57505060095411919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526114159084906119fe565b505050565b80820382811115610fb357600080fd5b600063ffffffff8216611469576040805162461bcd60e51b8152602060048201526002602482015261042560f41b604482015290519081900360640190fd5b604080516002808252606082018352600092602083019080368337019050509050828160008151811061149857fe5b602002602001019063ffffffff16908163ffffffff16815250506000816001815181106114c157fe5b63ffffffff90921660209283029190910182015260405163883bdbfd60e01b8152600481018281528351602483015283516000936001600160a01b0389169363883bdbfd938793909283926044019185820191028083838b5b8381101561153257818101518382015260200161151a565b505050509050019250505060006040518083038186803b15801561155557600080fd5b505afa158015611569573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604090815281101561159257600080fd5b8101908080516040519392919084600160201b8211156115b157600080fd5b9083019060208201858111156115c657600080fd5b82518660208202830111600160201b821117156115e257600080fd5b82525081516020918201928201910280838360005b8381101561160f5781810151838201526020016115f7565b5050505090500160405260200180516040519392919084600160201b82111561163757600080fd5b90830190602082018581111561164c57600080fd5b82518660208202830111600160201b8211171561166857600080fd5b82525081516020918201928201910280838360005b8381101561169557818101518382015260200161167d565b505050509050016040525050505090506000816000815181106116b457fe5b6020026020010151826001815181106116c957fe5b60200260200101510390508463ffffffff168160060b816116e657fe5b05935060008160060b12801561171057508463ffffffff168160060b8161170957fe5b0760060b15155b1561171d57600019909301925b50505092915050565b60008061173286611aaf565b90506001600160801b036001600160a01b038216116117a1576001600160a01b03808216800290848116908616106117815761177c600160c01b876001600160801b03168361193a565b611799565b61179981876001600160801b0316600160c01b61193a565b92505061180f565b60006117bb6001600160a01b03831680600160401b61193a565b9050836001600160a01b0316856001600160a01b0316106117f3576117ee600160801b876001600160801b03168361193a565b61180b565b61180b81876001600160801b0316600160801b61193a565b9250505b50949350505050565b600080821215611868578282600003840391508110611863576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b610fb3565b5080820182811015610fb3576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b80820182811015610fb357600080fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526119109085906119fe565b50505050565b60008215806119315750508181028183828161192e57fe5b04145b610fb357600080fd5b6000808060001985870986860292508281109083900303905080611970576000841161196557600080fd5b50829004905061120c565b80841161197c57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000600a546119f783610e79565b1092915050565b6000611a53826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611dd69092919063ffffffff16565b80519091501561141557808060200190516020811015611a7257600080fd5b50516114155760405162461bcd60e51b815260040180806020018281038252602a8152602001806122f9602a913960400191505060405180910390fd5b60008060008360020b12611ac6578260020b611ace565b8260020b6000035b9050620d89e8811115611b0c576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b600060018216611b2057600160801b611b32565b6ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b031690506002821615611b5c576ffff97272373d413259a46990580e213a0260801c5b6004821615611b7b576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615611b9a576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611bb9576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615611bd8576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611bf7576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611c16576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611c36576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611c56576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611c76576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615611c96576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615611cb6576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615611cd6576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611cf6576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611d16576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611d37576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611d57576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611d76576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611d93576b048a170391f7dc42444e8fa20260801c5b60008460020b1315611dae578060001981611daa57fe5b0490505b600160201b810615611dc1576001611dc4565b60005b60ff16602082901c0192505050919050565b60606111a9848460008585611dea85611ef0565b611e3b576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310611e795780518252601f199092019160209182019101611e5a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611edb576040519150601f19603f3d011682016040523d82523d6000602084013e611ee0565b606091505b509150915061180b828286611ef6565b3b151590565b60608315611f0557508161120c565b825115611f155782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f5f578181015183820152602001611f47565b50505050905090810190601f168015611f8c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604080516060810182526000808252602082018190529181019190915290565b80356001600160a01b0381168114610e8d57600080fd5b60006020828403121561200a578081fd5b61120c82611fe2565b600080600060408486031215612027578182fd5b61203084611fe2565b9250602084013567ffffffffffffffff8082111561204c578384fd5b818601915086601f83011261205f578384fd5b81358181111561206d578485fd5b87602082850101111561207e578485fd5b6020830194508093505050509250925092565b600080604083850312156120a3578182fd5b50508035926020909101359150565b6000602082840312156120c3578081fd5b5035919050565b6000602082840312156120db578081fd5b5051919050565b6000602082840312156120f3578081fd5b813563ffffffff8116811461120c578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b918252602082015260400190565b6020808252601290820152711b195cdcc81d1a185b881b5a5b881919589d60721b604082015260600190565b60208082526013908201527234b73b30b634b2103634b8bab4b230ba34b7b760691b604082015260600190565b6020808252601c908201527f756e646572636f6c6c61746572616c697a656420706f736974696f6e00000000604082015260600190565b6020808252601a908201527f756e646572636f6c6c61746572616c697a65642073797374656d000000000000604082015260600190565b6020808252600b908201526a6e6f6f702075706461746560a81b604082015260600190565b6020808252601490820152731c1bdcda5d1a5bdb881a185cc81b9bc81919589d60621b604082015260600190565b8151815260208083015190820152604080830151908201526060918201519181019190915260800190565b90815260200190565b60008582528460208301526060604083015282606083015282846080840137818301608090810191909152601f909201601f191601019392505050565b93845260208401929092526040830152606082015260800190565b63ffffffff9190911681526020019056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220ba8c483df188775e2fb692c06b96797ab9b87be718d908d010a88f597b0487a664736f6c63430007060033";

export class Lender__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    collateral: string,
    nusd: string,
    ethusdOracle: string,
    oraclePoolFee: BigNumberish,
    oraclePeriod: BigNumberish,
    fee: BigNumberish,
    minDebt: BigNumberish,
    minPositionCollateralizationRatio: BigNumberish,
    minSystemCollateralizationRatio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Lender> {
    return super.deploy(
      collateral,
      nusd,
      ethusdOracle,
      oraclePoolFee,
      oraclePeriod,
      fee,
      minDebt,
      minPositionCollateralizationRatio,
      minSystemCollateralizationRatio,
      overrides || {}
    ) as Promise<Lender>;
  }
  getDeployTransaction(
    collateral: string,
    nusd: string,
    ethusdOracle: string,
    oraclePoolFee: BigNumberish,
    oraclePeriod: BigNumberish,
    fee: BigNumberish,
    minDebt: BigNumberish,
    minPositionCollateralizationRatio: BigNumberish,
    minSystemCollateralizationRatio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      collateral,
      nusd,
      ethusdOracle,
      oraclePoolFee,
      oraclePeriod,
      fee,
      minDebt,
      minPositionCollateralizationRatio,
      minSystemCollateralizationRatio,
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
