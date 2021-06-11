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
import type { LenderTest, LenderTestInterface } from "../LenderTest";

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
      {
        internalType: "address",
        name: "pool_",
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
    name: "setPrice",
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
  "0x60806040523480156200001157600080fd5b50604051620026c3380380620026c3833981016040819052620000349162000509565b60008054336001600160a01b03199182161790915560016002556003805482166001600160a01b038d8116919091179091556004805483168c831617905560058054909216908a161790556006805463ffffffff60a01b1916600160a01b63ffffffff891602179055898989898989898989620000fd731f98431c8ad98523631ae4a59f267346ea31f984620000ec8b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc28a6200020c602090811b620011f317901c565b6200026560201b620012551760201c565b600680546001600160a01b03929092166001600160a01b031990921691909117905560078490556008839055600980546001600160801b03838116600160801b028186166001600160801b03199093169290921716179055604080518082019091526714d1120d7b1600008152670de0b6b3a76400006020808301919091526200019391600a91620013396200035d821b17901c565b620001d260405180604001604052806714d1120d7b1600008152602001670de0b6b3a7640000815250600b6200035d60201b620013391790919060201c565b5050600680546001600160a01b0319166001600160a01b03999099169890981790975550620005d89e505050505050505050505050505050565b62000216620004b4565b826001600160a01b0316846001600160a01b0316111562000235579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600081602001516001600160a01b031682600001516001600160a01b0316106200028e57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b6001600160601b03191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b6040805180820190915282546001600160801b03808216808452600160801b909204166020808401919091528351620003a09291620013b9620003f7821b17901c565b83546001600160801b0319166001600160801b0391821617845560208381015183820151620003da931691620003f7811b620013b917901c565b83546001600160801b03918216600160801b029116179092555050565b6000808212156200045c57826001600160801b03168260000384039150816001600160801b03161062000456576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b620004ae565b826001600160801b03168284019150816001600160801b03161015620004ae576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b92915050565b604080516060810182526000808252602082018190529181019190915290565b80516001600160a01b0381168114620004ec57600080fd5b919050565b80516001600160801b0381168114620004ec57600080fd5b6000806000806000806000806000806101408b8d03121562000529578586fd5b620005348b620004d4565b99506200054460208c01620004d4565b98506200055460408c01620004d4565b975060608b015162ffffff811681146200056c578687fd5b60808c015190975063ffffffff8116811462000586578687fd5b60a08c015160c08d015191975095509350620005a560e08c01620004f1565b9250620005b66101008c01620004f1565b9150620005c76101208c01620004d4565b90509295989b9194979a5092959850565b6120db80620005e86000396000f3fe608060405234801561001057600080fd5b50600436106101b05760003560e01c806369fe0e2d116100ef578063c0c8fb8011610092578063c0c8fb8014610346578063c5b37c2214610359578063d3b8375814610361578063dc3e030414610369578063dc5fb25d14610371578063ebbc496514610379578063f73e5aab14610381578063fd2d39c514610389576101b0565b806369fe0e2d146102d85780637183634f146102eb5780637adbf973146103005780638da5cb5b1461031357806391b7f5ed1461031b578063a19d5cca1461032e578063b2bdfa7b14610336578063b598f9b41461033e576101b0565b80633599294b116101575780633599294b1461025457806339b37ab0146102675780633f5ce5d11461027a57806351fda3811461028257806359d0bf2d146102955780635fb580801461029d5780636234dc21146102b257806367d64048146102c5576101b0565b8063040141e5146101b5578063046a4e7d146101d35780630eccd2c9146101db57806313af4035146101f057806314fc78fc146102035780631a373734146102185780631d4d957c1461022e57806322ec406514610241575b600080fd5b6101bd6103a9565b6040516101ca9190611e50565b60405180910390f35b6101bd6103c1565b6101ee6101e9366004611d10565b6103d0565b005b6101ee6101fe366004611cf6565b610700565b61020b610769565b6040516101ca9190611e9f565b61022061076f565b6040516101ca929190612007565b6101ee61023c366004611e2c565b610789565b6101ee61024f366004611ded565b6107f6565b6101ee610262366004611ded565b61085f565b61020b610275366004611e14565b6108c5565b6101bd6109a9565b6101ee610290366004611d8e565b6109b8565b61020b610ea0565b6102a5610ea6565b6040516101ca9190611ff3565b6101ee6102c0366004611e14565b610ebc565b61020b6102d3366004611e14565b610f08565b6101ee6102e6366004611e14565b610f43565b6102f3610f8f565b6040516101ca919061206a565b6101ee61030e366004611cf6565b610fa2565b6101bd61100b565b6101ee610329366004611e14565b61101a565b6102a561101f565b6101bd61102e565b6101bd61103d565b610220610354366004611cf6565b61104c565b61020b611072565b6101bd611078565b6101bd611087565b610220611096565b6101ee6110b0565b6101bd611112565b61039c610397366004611cf6565b61112a565b6040516101ca9190611fd0565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b6004546001600160a01b031681565b600280541415610427576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600280556001600160a01b0383166000908152600c60209081526040918290208251808401909352546001600160801b038082168452600160801b909104169082018190526104915760405162461bcd60e51b815260040161048890611f6b565b60405180910390fd5b604080518082018252600a546001600160801b038082168352600160801b9182900481166020808501919091528451808601909552600b5480831686529290920416908301526000916104e591849161146c565b905060006104f1610769565b9050610506816105018482611520565b611535565b6105225760405162461bcd60e51b815260040161048890611ee2565b8151600354610547916001600160a01b039091169033906001600160801b0316611576565b8151602083015160405163ede9d97360e01b8152339263ede9d97392610573928a908a90600401612021565b600060405180830381600087803b15801561058d57600080fd5b505af11580156105a1573d6000803e3d6000fd5b505050506105ed604051806040016040528084600001516001600160801b0316600003815260200184602001516001600160801b0316600003815250600b61133990919063ffffffff16565b610635604051806040016040528085600001516001600160801b0316600003815260200185602001516001600160801b0316600003815250600a61133990919063ffffffff16565b6001600160a01b038087166000908152600c602090815260408083209290925560048054918601519251632770a7eb60e21b81529190931692639dc29fac9261068092339201611e64565b600060405180830381600087803b15801561069a57600080fd5b505af11580156106ae573d6000803e3d6000fd5b50505050856001600160a01b03167facd74f5a0eb0d086de0eebe2d1e70d5742838c88cb2cf492fc201d39e056f7e0336040516106eb9190611e50565b60405180910390a25050600160025550505050565b6000546001600160a01b03163314610747576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600d5490565b600a546001600160801b0380821691600160801b90041682565b6000546001600160a01b031633146107d0576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b6006805463ffffffff909216600160a01b0263ffffffff60a01b19909216919091179055565b6000546001600160a01b0316331461083d576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600980546001600160801b0319166001600160801b0392909216919091179055565b6000546001600160a01b031633146108a6576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600980546001600160801b03928316600160801b029216919091179055565b600954600090600160801b90046001600160801b031682106108e9575060006109a4565b6009546001600160801b031682101561090557506007546109a4565b60095460009061092e90600160801b90046001600160801b0316610928856115cd565b906115e3565b600954909150610954906001600160801b03600160801b820481169161092891166115cd565b81136109645750506007546109a4565b6007546009546109a0919061098b906001600160801b03600160801b8204811691166115f9565b836000038161099657fe5b0460010390611609565b9150505b919050565b6005546001600160a01b031681565b600280541415610a0f576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600280558035151580610a255750602081013515155b610a415760405162461bcd60e51b815260040161048890611f46565b6000610a4e600c3361162d565b604080518082018252600b546001600160801b038082168352600160801b9182900481166020808501919091528451808601909552600a548083168652929092041690830152919250600091610ab491610aad36879003870187611da5565b9190611648565b9050610ad0610ac836859003850185611da5565b600b90611339565b610adb600a82611339565b610ae58282611339565b81546001600160801b0316158015610b0c57508154600160801b90046001600160801b0316155b15610ba357336000908152600c60209081526040822091909155600454610b41916001600160a01b039091169085013561175b565b600354610b58906001600160a01b03168435611842565b336001600160a01b03167f99cc044fd36aeecc372e0e5efa3b9fb561c7bd355a7c7de464a05776716b1476600080604051610b94929190611ea8565b60405180910390a25050610e98565b6000610bad610769565b6040805180820190915284546001600160801b038082168352600160801b909104166020820152909150600090610be49083611520565b600954909150600090600160801b90046001600160801b0316821215610cfb57610c15610c10836108c5565b6115cd565b9050610c3f604051806040016040528060008152602001838152508661133990919063ffffffff16565b610c6860405180604001604052806000815260200183815250600a61133990919063ffffffff16565b610c9160405180604001604052806000815260200183815250600b61133990919063ffffffff16565b6004546001600160a01b03166340c10f19610caa61100b565b836040518363ffffffff1660e01b8152600401610cc8929190611e86565b600060405180830381600087803b158015610ce257600080fd5b505af1158015610cf6573d6000803e3d6000fd5b505050505b6008548554600160801b90046001600160801b03161015610d2e5760405162461bcd60e51b815260040161048890611eb6565b6040805180820190915285546001600160801b038082168352600160801b909104166020820152610d5f9084611520565b60095460408051808201909152600b546001600160801b038082168352600160801b918290048116602084015293955090910490911690610da09085611520565b1215610ddd57600954600160801b90046001600160801b0316821215610dd85760405162461bcd60e51b815260040161048890611f0f565b610e08565b6009546001600160801b0316821215610e085760405162461bcd60e51b815260040161048890611f99565b610e2b610e196020880135836115e3565b6004546001600160a01b03169061175b565b600354610e42906001600160a01b03168735611842565b845460405133917f99cc044fd36aeecc372e0e5efa3b9fb561c7bd355a7c7de464a05776716b147691610e8a916001600160801b0380821692600160801b9092041690612007565b60405180910390a250505050505b506001600255565b60085481565b600954600160801b90046001600160801b031681565b6000546001600160a01b03163314610f03576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600855565b60408051808201909152600b546001600160801b038082168352600160801b909104166020820152600090610f3d9083611520565b92915050565b6000546001600160a01b03163314610f8a576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600755565b600654600160a01b900463ffffffff1681565b6000546001600160a01b03163314610fe9576040805162461bcd60e51b815260206004820152600560248201526437bbb732b960d91b604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b600d55565b6009546001600160801b031681565b6000546001600160a01b031681565b6003546001600160a01b031681565b600c602052600090815260409020546001600160801b0380821691600160801b90041682565b60075481565b6001546001600160a01b031681565b6006546001600160a01b031681565b600b546001600160801b0380821691600160801b90041682565b6001546001600160a01b031633146110fe576040805162461bcd60e51b815260206004820152600c60248201526b3832b73234b733a7bbb732b960a11b604482015290519081900360640190fd5b600080546001600160a01b03191633179055565b731f98431c8ad98523631ae4a59f267346ea31f98481565b611132611c8e565b6001600160a01b0382166000908152600c60205260409020546001600160801b0316611172575060408051808201909152600080825260208201526109a4565b6001600160a01b0382166000908152600c60209081526040918290208251808401845290546001600160801b038082168352600160801b9182900481168385015284518086018652600a5480831682528390048216818601528551808701909652600b548083168752929092041692840192909252610f3d9290919061146c565b6111fb611ca5565b826001600160a01b0316846001600160a01b03161115611219579192915b6040518060600160405280856001600160a01b03168152602001846001600160a01b031681526020018362ffffff1681525090505b9392505050565b600081602001516001600160a01b031682600001516001600160a01b03161061127d57600080fd5b50805160208083015160409384015184516001600160a01b0394851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301206001600160f81b031960a085015294901b6bffffffffffffffffffffffff191660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b6040805180820190915282546001600160801b03808216808452600160801b909204166020830152825161136d91906113b9565b83546001600160801b0319166001600160801b039182161784556020838101519083015161139c9216906113b9565b83546001600160801b03918216600160801b029116179092555050565b60008082121561141b57826001600160801b03168260000384039150816001600160801b031610611416576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b610f3d565b826001600160801b03168284019150816001600160801b03161015610f3d576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b611474611c8e565b60006114a885600001516001600160801b031684600001516001600160801b031686600001516001600160801b0316611886565b905060006114de86602001516001600160801b031685602001516001600160801b031687602001516001600160801b0316611886565b905060405180604001604052806114f484611935565b6001600160801b0316815260200161150b83611935565b6001600160801b031690529695505050505050565b600061124e836000015184602001518461194b565b600061154083611988565b801561155d5750600954600160801b90046001600160801b031682125b8061124e5750506009546001600160801b031613919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526115c89084906119ae565b505050565b6000600160ff1b82106115df57600080fd5b5090565b80820382811315600083121514610f3d57600080fd5b80820182811015610f3d57600080fd5b60008215806116245750508181028183828161162157fe5b04145b610f3d57600080fd5b6001600160a01b031660009081526020919091526040902090565b611650611cc5565b6000808560000151121561169d5761169385600001516000036001600160801b031684600001516001600160801b031686600001516001600160801b0316611886565b60000390506116bf565b8451835185516116bc926001600160801b039081169281169116611886565b90505b6000808660200151121561170c5761170286602001516000036001600160801b031685602001516001600160801b031687602001516001600160801b0316611886565b6000039050611741565b61173e86602001516001600160801b031685602001516001600160801b031687602001516001600160801b0316611886565b90505b604080518082019091529182526020820152949350505050565b60008112156117ce5760408051632770a7eb60e21b81523360048201526000838103602483015291516001600160a01b03851692639dc29fac926044808201939182900301818387803b1580156117b157600080fd5b505af11580156117c5573d6000803e3d6000fd5b5050505061183e565b600081131561183e57604080516340c10f1960e01b81523360048201526024810183905290516001600160a01b038416916340c10f1991604480830192600092919082900301818387803b15801561182557600080fd5b505af1158015611839573d6000803e3d6000fd5b505050505b5050565b6000811215611868576118636001600160a01b038316336000849003611576565b61183e565b600081131561183e5761183e6001600160a01b038316333084611a5f565b60008080600019858709868602925082811090839003039050806118bc57600084116118b157600080fd5b50829004905061124e565b8084116118c857600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b806001600160801b03811681146109a457600080fd5b60006001600160801b0383166119635750600061124e565b611980846001600160801b031683856001600160801b0316611886565b949350505050565b600954600090600160801b90046001600160801b03166119a783610f08565b1292915050565b6000611a03826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611abf9092919063ffffffff16565b8051909150156115c857808060200190516020811015611a2257600080fd5b50516115c85760405162461bcd60e51b815260040180806020018281038252602a81526020018061207c602a913960400191505060405180910390fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052611ab99085906119ae565b50505050565b6060611980848460008585611ad385611be4565b611b24576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310611b625780518252601f199092019160209182019101611b43565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611bc4576040519150601f19603f3d011682016040523d82523d6000602084013e611bc9565b606091505b5091509150611bd9828286611bea565b979650505050505050565b3b151590565b60608315611bf957508161124e565b825115611c095782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c53578181015183820152602001611c3b565b50505050905090810190601f168015611c805780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b604080518082019091526000808252602082015290565b604080516060810182526000808252602082018190529181019190915290565b604051806040016040528060008152602001600081525090565b80356001600160a01b03811681146109a457600080fd5b600060208284031215611d07578081fd5b61124e82611cdf565b600080600060408486031215611d24578182fd5b611d2d84611cdf565b9250602084013567ffffffffffffffff80821115611d49578384fd5b818601915086601f830112611d5c578384fd5b813581811115611d6a578485fd5b876020828501011115611d7b578485fd5b6020830194508093505050509250925092565b600060408284031215611d9f578081fd5b50919050565b600060408284031215611db6578081fd5b6040516040810181811067ffffffffffffffff82111715611dd357fe5b604052823581526020928301359281019290925250919050565b600060208284031215611dfe578081fd5b81356001600160801b038116811461124e578182fd5b600060208284031215611e25578081fd5b5035919050565b600060208284031215611e3d578081fd5b813563ffffffff8116811461124e578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b039290921682526001600160801b0316602082015260400190565b6001600160a01b03929092168252602082015260400190565b90815260200190565b918252602082015260400190565b6020808252601290820152711b195cdcc81d1a185b881b5a5b881919589d60721b604082015260600190565b60208082526013908201527234b73b30b634b2103634b8bab4b230ba34b7b760691b604082015260600190565b6020808252601a908201527f756e646572636f6c6c61746572616c697a65642073797374656d000000000000604082015260600190565b6020808252600b908201526a6e6f6f702075706461746560a81b604082015260600190565b6020808252601490820152731c1bdcda5d1a5bdb881a185cc81b9bc81919589d60621b604082015260600190565b6020808252601c908201527f756e646572636f6c6c61746572616c697a656420626f72726f77657200000000604082015260600190565b81516001600160801b039081168252602092830151169181019190915260400190565b6001600160801b0391909116815260200190565b6001600160801b0392831681529116602082015260400190565b6001600160801b038581168252841660208201526060604082018190528101829052600082846080840137818301608090810191909152601f909201601f191601019392505050565b63ffffffff9190911681526020019056fe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122044aa14c50e4ec403fee1638c8f20ec4afaa5d6d69dbf82d34d66a49a677cd1d764736f6c63430007060033";

export class LenderTest__factory extends ContractFactory {
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
    pool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LenderTest> {
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
      pool_,
      overrides || {}
    ) as Promise<LenderTest>;
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
    pool_: string,
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
      pool_,
      overrides || {}
    );
  }
  attach(address: string): LenderTest {
    return super.attach(address) as LenderTest;
  }
  connect(signer: Signer): LenderTest__factory {
    return super.connect(signer) as LenderTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LenderTestInterface {
    return new utils.Interface(_abi) as LenderTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LenderTest {
    return new Contract(address, _abi, signerOrProvider) as LenderTest;
  }
}
