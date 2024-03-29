/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fx.migrate.v1";

export interface MsgMigrateAccount {
  from: string;
  to: string;
  signature: string;
}

export interface MsgMigrateAccountResponse {}

function createBaseMsgMigrateAccount(): MsgMigrateAccount {
  return { from: "", to: "", signature: "" };
}

export const MsgMigrateAccount = {
  encode(message: MsgMigrateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.signature !== "") {
      writer.uint32(26).string(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.to = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.signature = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateAccount {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },

  toJSON(message: MsgMigrateAccount): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMigrateAccount>, I>>(base?: I): MsgMigrateAccount {
    return MsgMigrateAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateAccount>, I>>(object: I): MsgMigrateAccount {
    const message = createBaseMsgMigrateAccount();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

function createBaseMsgMigrateAccountResponse(): MsgMigrateAccountResponse {
  return {};
}

export const MsgMigrateAccountResponse = {
  encode(_: MsgMigrateAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgMigrateAccountResponse {
    return {};
  },

  toJSON(_: MsgMigrateAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMigrateAccountResponse>, I>>(base?: I): MsgMigrateAccountResponse {
    return MsgMigrateAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateAccountResponse>, I>>(_: I): MsgMigrateAccountResponse {
    const message = createBaseMsgMigrateAccountResponse();
    return message;
  },
};

/** Msg defines the state transitions possible within gravity */
export interface Msg {
  MigrateAccount(request: MsgMigrateAccount): Promise<MsgMigrateAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.migrate.v1.Msg";
    this.rpc = rpc;
    this.MigrateAccount = this.MigrateAccount.bind(this);
  }
  MigrateAccount(request: MsgMigrateAccount): Promise<MsgMigrateAccountResponse> {
    const data = MsgMigrateAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "MigrateAccount", data);
    return promise.then((data) => MsgMigrateAccountResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
