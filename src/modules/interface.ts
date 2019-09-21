export enum TsRet {
  Failed,
  Success
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

export type displayMode = 'normal' | 'dx' | 'gdi' | 'gdi2' | 'dx2';
export type mouseMode = 'normal' | 'dx' | 'windows';
export type keypadMode = mouseMode;
