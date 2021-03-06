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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface OracleInterface extends ethers.utils.Interface {
  functions: {
    "_pool()": FunctionFragment;
    "observe(uint32)": FunctionFragment;
    "uniswapV3Factory()": FunctionFragment;
    "usdcAddress()": FunctionFragment;
    "wethAddress()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "observe",
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

  decodeFunctionResult(functionFragment: "_pool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
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

export class Oracle extends BaseContract {
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

  interface: OracleInterface;

  functions: {
    _pool(overrides?: CallOverrides): Promise<[string]>;

    observe(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<[string]>;

    usdcAddress(overrides?: CallOverrides): Promise<[string]>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  _pool(overrides?: CallOverrides): Promise<string>;

  observe(period: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

  usdcAddress(overrides?: CallOverrides): Promise<string>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _pool(overrides?: CallOverrides): Promise<string>;

    observe(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

    usdcAddress(overrides?: CallOverrides): Promise<string>;

    wethAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _pool(overrides?: CallOverrides): Promise<BigNumber>;

    observe(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<BigNumber>;

    usdcAddress(overrides?: CallOverrides): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    observe(
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    usdcAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
