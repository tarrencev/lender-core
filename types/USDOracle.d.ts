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

interface USDOracleInterface extends ethers.utils.Interface {
  functions: {
    "_owner()": FunctionFragment;
    "_pendingOwner()": FunctionFragment;
    "_period()": FunctionFragment;
    "acceptOwner()": FunctionFragment;
    "observe()": FunctionFragment;
    "owner()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setPeriod(uint32)": FunctionFragment;
    "uniswapV3Factory()": FunctionFragment;
    "usdcAddress()": FunctionFragment;
    "wethAddress()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_period", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "observe", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3Factory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usdcAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_period", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPeriod", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3Factory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdcAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export class USDOracle extends BaseContract {
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

  interface: USDOracleInterface;

  functions: {
    _owner(overrides?: CallOverrides): Promise<[string]>;

    _pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    _period(overrides?: CallOverrides): Promise<[number]>;

    acceptOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    observe(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setOwner(
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<[string]>;

    usdcAddress(overrides?: CallOverrides): Promise<[string]>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  _owner(overrides?: CallOverrides): Promise<string>;

  _pendingOwner(overrides?: CallOverrides): Promise<string>;

  _period(overrides?: CallOverrides): Promise<number>;

  acceptOwner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  observe(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  setOwner(
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPeriod(
    period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

  usdcAddress(overrides?: CallOverrides): Promise<string>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _owner(overrides?: CallOverrides): Promise<string>;

    _pendingOwner(overrides?: CallOverrides): Promise<string>;

    _period(overrides?: CallOverrides): Promise<number>;

    acceptOwner(overrides?: CallOverrides): Promise<void>;

    observe(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    setOwner(owner: string, overrides?: CallOverrides): Promise<void>;

    setPeriod(period: BigNumberish, overrides?: CallOverrides): Promise<void>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

    usdcAddress(overrides?: CallOverrides): Promise<string>;

    wethAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _owner(overrides?: CallOverrides): Promise<BigNumber>;

    _pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    _period(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    observe(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<BigNumber>;

    usdcAddress(overrides?: CallOverrides): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _period(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    observe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPeriod(
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdcAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}