/*
 * @Author: huz
 * @Date: 2019-09-23 00:28:31
 * @LastEditTime: 2019-09-23 00:28:31
 */
declare module 'winax' {
  const Object: Winax.Object;
  const Variant: typeof Winax.Variant;
}
declare namespace Winax {
  interface Object {
    new(COM: string): any;
  }
  class Variant {
    constructor(val: any, type: keyof Variant.Types);
    assign(val: any): void;
    cast(type: keyof Variant.Types): void;
    clear(): void;
  }
}
declare namespace Variant {
  interface Types {
    int: string;
    uint: string;
    int8: string;
    uint8: string;
    int16: string;
    uint16: string;
    int32: string;
    uint32: string;
    int64: string;
    uint64: string;
    currency: string;
    float: string;
    double: string;
    string: string;
    date: string;
    decimal: string;
    variant: string;
    null: string;
    empty: string;
    byref: string;
    char: string;
    uchar: string;
    byte: string;
    short: string;
    ushort: string;
    long: string;
    ulong: string;
  }
}
