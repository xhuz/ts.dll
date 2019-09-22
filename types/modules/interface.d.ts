export declare enum TsRet {
    Failed = 0,
    Success = 1
}
export declare enum TsSwitch {
    Off = 0,
    On = 1
}
export declare enum GetWindowFlag {
    Parent = 0,
    FirstChild = 1,
    First = 2,
    Last = 3,
    Next = 4,
    Previous = 5,
    Own = 6,
    top = 7
}
export declare enum WindowStateFlag {
    Exist = 0,
    Active = 1,
    Visible = 2,
    Minimize = 3,
    Maximize = 4,
    Top = 5,
    Response = 6,
    Available = 7
}
export declare enum SpecialWindowFlag {
    Desktop = 0,
    Taskbar = 1
}
export declare enum EnumWindowFilter {
    Title = 1,
    ClassName = 2,
    FirstChild = 4,
    Top = 8,
    visible = 16
}
export declare enum BindWindowMode {
    Normal = 0,
    Normal1 = 1,
    Super = 101,
    Drive = 201,
    DriveCanHideProcess = 203
}
export declare enum LockMode {
    Close = 0,
    Open = 1,
    MouseOnly = 2,
    KeypadOnly = 3
}
export declare enum TsMode {
    Normal = 0,
    Advanced = 1
}
export declare enum MemoryBitNum {
    Bit32 = 0,
    Bit16 = 1,
    Bit8 = 2
}
export declare enum MemoryIntByte {
    Byte4 = 0,
    Byte2 = 1,
    Byte1 = 2
}
export declare enum MemoryCharType {
    Ascii = 0,
    Unicode = 1
}
export declare enum MemoryState {
    Writable = 0,
    NotWritable = 1
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
export declare type displayMode = 'normal' | 'dx' | 'gdi' | 'gdi2' | 'dx2';
export declare type mouseMode = 'normal' | 'dx' | 'windows';
export declare type keypadMode = mouseMode;
