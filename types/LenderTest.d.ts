/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface LenderTestInterface extends ethers.utils.Interface {
  functions: {
    "UNISWAP_V3_FACTORY()": FunctionFragment;
    "WETH_ADDRESS()": FunctionFragment;
    "_collateral()": FunctionFragment;
    "_ethusdOracle()": FunctionFragment;
    "_fee()": FunctionFragment;
    "_minBCR()": FunctionFragment;
    "_minDebt()": FunctionFragment;
    "_minLCR()": FunctionFragment;
    "_nusd()": FunctionFragment;
    "_oraclePeriod()": FunctionFragment;
    "_oraclePool()": FunctionFragment;
    "_owner()": FunctionFragment;
    "_pendingOwner()": FunctionFragment;
    "_positions(address)": FunctionFragment;
    "acceptOwner()": FunctionFragment;
    "fee(uint256)": FunctionFragment;
    "initialize(tuple)": FunctionFragment;
    "lNominal()": FunctionFragment;
    "lReal()": FunctionFragment;
    "liquidate(address,bytes)": FunctionFragment;
    "observe()": FunctionFragment;
    "owner()": FunctionFragment;
    "positionOf(address)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setMinDebt(uint256)": FunctionFragment;
    "setMinPositionCollateralizationRatio(uint128)": FunctionFragment;
    "setMinSystemCollateralizationRatio(uint128)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setOraclePeriod(uint32)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setPrice(uint256)": FunctionFragment;
    "totalCollateralizationRatio(uint256)": FunctionFragment;
    "update(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "UNISWAP_V3_FACTORY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WETH_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_collateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_ethusdOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "_minBCR", values?: undefined): string;
  encodeFunctionData(functionFragment: "_minDebt", values?: undefined): string;
  encodeFunctionData(functionFragment: "_minLCR", values?: undefined): string;
  encodeFunctionData(functionFragment: "_nusd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_oraclePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_oraclePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_positions", values: [string]): string;
  encodeFunctionData(
    functionFragment: "acceptOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [{ coll: BigNumberish; debt: BigNumberish }]
  ): string;
  encodeFunctionData(functionFragment: "lNominal", values?: undefined): string;
  encodeFunctionData(functionFragment: "lReal", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "observe", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "positionOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinDebt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinPositionCollateralizationRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinSystemCollateralizationRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setOraclePeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalCollateralizationRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [{ coll: BigNumberish; debt: BigNumberish }]
  ): string;

  decodeFunctionResult(
    functionFragment: "UNISWAP_V3_FACTORY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WETH_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_collateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_ethusdOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_minBCR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_minDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_minLCR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_nusd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_oraclePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_oraclePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lNominal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lReal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positionOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMinDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinPositionCollateralizationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinSystemCollateralizationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOraclePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalCollateralizationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {
    "Liquidated(address,address)": EventFragment;
    "Updated(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Liquidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Updated"): EventFragment;
}

export class LenderTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LenderTestInterface;

  functions: {
    UNISWAP_V3_FACTORY(overrides?: CallOverrides): Promise<[string]>;

    WETH_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    _collateral(overrides?: CallOverrides): Promise<[string]>;

    _ethusdOracle(overrides?: CallOverrides): Promise<[string]>;

    _fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    _minBCR(overrides?: CallOverrides): Promise<[BigNumber]>;

    _minDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    _minLCR(overrides?: CallOverrides): Promise<[BigNumber]>;

    _nusd(overrides?: CallOverrides): Promise<[string]>;

    _oraclePeriod(overrides?: CallOverrides): Promise<[number]>;

    _oraclePool(overrides?: CallOverrides): Promise<[string]>;

    _owner(overrides?: CallOverrides): Promise<[string]>;

    _pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    _positions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

    acceptOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee(ratio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      u: { coll: BigNumberish; debt: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lNominal(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

    lReal(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

    liquidate(
      owner: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    observe(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    positionOf(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }]>;

    setFee(
      fee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinDebt(
      minDebt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinPositionCollateralizationRatio(
      minBCR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinSystemCollateralizationRatio(
      minLCR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOraclePeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalCollateralizationRatio(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    update(
      uReal: { coll: BigNumberish; debt: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  UNISWAP_V3_FACTORY(overrides?: CallOverrides): Promise<string>;

  WETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

  _collateral(overrides?: CallOverrides): Promise<string>;

  _ethusdOracle(overrides?: CallOverrides): Promise<string>;

  _fee(overrides?: CallOverrides): Promise<BigNumber>;

  _minBCR(overrides?: CallOverrides): Promise<BigNumber>;

  _minDebt(overrides?: CallOverrides): Promise<BigNumber>;

  _minLCR(overrides?: CallOverrides): Promise<BigNumber>;

  _nusd(overrides?: CallOverrides): Promise<string>;

  _oraclePeriod(overrides?: CallOverrides): Promise<number>;

  _oraclePool(overrides?: CallOverrides): Promise<string>;

  _owner(overrides?: CallOverrides): Promise<string>;

  _pendingOwner(overrides?: CallOverrides): Promise<string>;

  _positions(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

  acceptOwner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee(ratio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    u: { coll: BigNumberish; debt: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lNominal(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

  lReal(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

  liquidate(
    owner: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  observe(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  positionOf(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

  setFee(
    fee_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinDebt(
    minDebt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinPositionCollateralizationRatio(
    minBCR: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinSystemCollateralizationRatio(
    minLCR: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOraclePeriod(
    period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPrice(
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalCollateralizationRatio(
    price: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  update(
    uReal: { coll: BigNumberish; debt: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    UNISWAP_V3_FACTORY(overrides?: CallOverrides): Promise<string>;

    WETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

    _collateral(overrides?: CallOverrides): Promise<string>;

    _ethusdOracle(overrides?: CallOverrides): Promise<string>;

    _fee(overrides?: CallOverrides): Promise<BigNumber>;

    _minBCR(overrides?: CallOverrides): Promise<BigNumber>;

    _minDebt(overrides?: CallOverrides): Promise<BigNumber>;

    _minLCR(overrides?: CallOverrides): Promise<BigNumber>;

    _nusd(overrides?: CallOverrides): Promise<string>;

    _oraclePeriod(overrides?: CallOverrides): Promise<number>;

    _oraclePool(overrides?: CallOverrides): Promise<string>;

    _owner(overrides?: CallOverrides): Promise<string>;

    _pendingOwner(overrides?: CallOverrides): Promise<string>;

    _positions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

    acceptOwner(overrides?: CallOverrides): Promise<void>;

    fee(ratio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      u: { coll: BigNumberish; debt: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    lNominal(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

    lReal(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

    liquidate(
      owner: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    observe(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    positionOf(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { coll: BigNumber; debt: BigNumber }>;

    setFee(fee_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setMinDebt(minDebt: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setMinPositionCollateralizationRatio(
      minBCR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinSystemCollateralizationRatio(
      minLCR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(oracle: string, overrides?: CallOverrides): Promise<void>;

    setOraclePeriod(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(owner_: string, overrides?: CallOverrides): Promise<void>;

    setPrice(price: BigNumberish, overrides?: CallOverrides): Promise<void>;

    totalCollateralizationRatio(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    update(
      uReal: { coll: BigNumberish; debt: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Liquidated(
      owner?: string | null,
      liquidator?: null
    ): TypedEventFilter<
      [string, string],
      { owner: string; liquidator: string }
    >;

    Updated(
      owner?: string | null,
      coll?: null,
      debt?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; coll: BigNumber; debt: BigNumber }
    >;
  };

  estimateGas: {
    UNISWAP_V3_FACTORY(overrides?: CallOverrides): Promise<BigNumber>;

    WETH_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    _collateral(overrides?: CallOverrides): Promise<BigNumber>;

    _ethusdOracle(overrides?: CallOverrides): Promise<BigNumber>;

    _fee(overrides?: CallOverrides): Promise<BigNumber>;

    _minBCR(overrides?: CallOverrides): Promise<BigNumber>;

    _minDebt(overrides?: CallOverrides): Promise<BigNumber>;

    _minLCR(overrides?: CallOverrides): Promise<BigNumber>;

    _nusd(overrides?: CallOverrides): Promise<BigNumber>;

    _oraclePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    _oraclePool(overrides?: CallOverrides): Promise<BigNumber>;

    _owner(overrides?: CallOverrides): Promise<BigNumber>;

    _pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    _positions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee(ratio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      u: { coll: BigNumberish; debt: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lNominal(overrides?: CallOverrides): Promise<BigNumber>;

    lReal(overrides?: CallOverrides): Promise<BigNumber>;

    liquidate(
      owner: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    observe(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    positionOf(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;

    setFee(
      fee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinDebt(
      minDebt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinPositionCollateralizationRatio(
      minBCR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinSystemCollateralizationRatio(
      minLCR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOraclePeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalCollateralizationRatio(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    update(
      uReal: { coll: BigNumberish; debt: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    UNISWAP_V3_FACTORY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WETH_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _collateral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _ethusdOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _minBCR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _minDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _minLCR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _nusd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _oraclePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _oraclePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _positions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee(
      ratio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      u: { coll: BigNumberish; debt: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lNominal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lReal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidate(
      owner: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    observe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionOf(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFee(
      fee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinDebt(
      minDebt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinPositionCollateralizationRatio(
      minBCR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinSystemCollateralizationRatio(
      minLCR: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOraclePeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPrice(
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalCollateralizationRatio(
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    update(
      uReal: { coll: BigNumberish; debt: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
