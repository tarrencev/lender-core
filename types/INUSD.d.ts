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

interface INUSDInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class INUSD extends BaseContract {
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

  interface: INUSDInterface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  permit(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}