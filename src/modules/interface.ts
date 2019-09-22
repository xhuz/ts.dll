/*
 * @Author: huz
 * @Date: 2019-09-21 18:19:09
 * @LastEditTime: 2019-09-22 23:28:32
 */
export enum TsRet {
  Failed,
  Success
}

export enum TsSwitch {
  Off,
  On
}

export enum GetWindowFlag {
  Parent,
  FirstChild,
  First,
  Last,
  Next,
  Previous,
  Own,
  top
}

export enum WindowStateFlag {
  Exist,
  Active,
  Visible,
  Minimize,
  Maximize,
  Top,
  Response,
  Available
}

export enum SpecialWindowFlag {
  Desktop,
  Taskbar
}

export enum EnumWindowFilter {
  Title = 1,
  ClassName = 2,
  FirstChild = 4,
  Top = 8,
  visible = 16
}

export enum BindWindowMode {
  Normal = 0,
  Normal1 = 1,
  Super = 101,
  Drive = 201,
  DriveCanHideProcess = 203
}

export enum LockMode {
  Close,
  Open,
  MouseOnly,
  KeypadOnly
}

export enum TsMode {
  Normal,
  Advanced
}

export enum MemoryBitNum {
  Bit32,
  Bit16,
  Bit8
}

export enum MemoryIntByte {
  Byte4,
  Byte2,
  Byte1
}

export enum MemoryCharType {
  Ascii,
  Unicode
}

export enum MemoryState {
  Writable,
  NotWritable
}
export interface Coordinate {
  x: number;
  y: number;
}

export interface Area {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface VariantPointerParams {
  ret: number | string;
  [key: string]: any;
}

export interface MoveRange extends Coordinate {
  w: number;
  h: number;
}

export type displayMode = 'normal' | 'dx' | 'gdi' | 'gdi2' | 'dx2';
export type mouseMode = 'normal' | 'dx' | 'windows';
export type keypadMode = mouseMode;
