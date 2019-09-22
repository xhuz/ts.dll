"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: huz
 * @Date: 2019-09-21 18:19:09
 * @LastEditTime: 2019-09-22 23:28:32
 */
var TsRet;
(function (TsRet) {
    TsRet[TsRet["Failed"] = 0] = "Failed";
    TsRet[TsRet["Success"] = 1] = "Success";
})(TsRet = exports.TsRet || (exports.TsRet = {}));
var TsSwitch;
(function (TsSwitch) {
    TsSwitch[TsSwitch["Off"] = 0] = "Off";
    TsSwitch[TsSwitch["On"] = 1] = "On";
})(TsSwitch = exports.TsSwitch || (exports.TsSwitch = {}));
var GetWindowFlag;
(function (GetWindowFlag) {
    GetWindowFlag[GetWindowFlag["Parent"] = 0] = "Parent";
    GetWindowFlag[GetWindowFlag["FirstChild"] = 1] = "FirstChild";
    GetWindowFlag[GetWindowFlag["First"] = 2] = "First";
    GetWindowFlag[GetWindowFlag["Last"] = 3] = "Last";
    GetWindowFlag[GetWindowFlag["Next"] = 4] = "Next";
    GetWindowFlag[GetWindowFlag["Previous"] = 5] = "Previous";
    GetWindowFlag[GetWindowFlag["Own"] = 6] = "Own";
    GetWindowFlag[GetWindowFlag["top"] = 7] = "top";
})(GetWindowFlag = exports.GetWindowFlag || (exports.GetWindowFlag = {}));
var WindowStateFlag;
(function (WindowStateFlag) {
    WindowStateFlag[WindowStateFlag["Exist"] = 0] = "Exist";
    WindowStateFlag[WindowStateFlag["Active"] = 1] = "Active";
    WindowStateFlag[WindowStateFlag["Visible"] = 2] = "Visible";
    WindowStateFlag[WindowStateFlag["Minimize"] = 3] = "Minimize";
    WindowStateFlag[WindowStateFlag["Maximize"] = 4] = "Maximize";
    WindowStateFlag[WindowStateFlag["Top"] = 5] = "Top";
    WindowStateFlag[WindowStateFlag["Response"] = 6] = "Response";
    WindowStateFlag[WindowStateFlag["Available"] = 7] = "Available";
})(WindowStateFlag = exports.WindowStateFlag || (exports.WindowStateFlag = {}));
var SpecialWindowFlag;
(function (SpecialWindowFlag) {
    SpecialWindowFlag[SpecialWindowFlag["Desktop"] = 0] = "Desktop";
    SpecialWindowFlag[SpecialWindowFlag["Taskbar"] = 1] = "Taskbar";
})(SpecialWindowFlag = exports.SpecialWindowFlag || (exports.SpecialWindowFlag = {}));
var EnumWindowFilter;
(function (EnumWindowFilter) {
    EnumWindowFilter[EnumWindowFilter["Title"] = 1] = "Title";
    EnumWindowFilter[EnumWindowFilter["ClassName"] = 2] = "ClassName";
    EnumWindowFilter[EnumWindowFilter["FirstChild"] = 4] = "FirstChild";
    EnumWindowFilter[EnumWindowFilter["Top"] = 8] = "Top";
    EnumWindowFilter[EnumWindowFilter["visible"] = 16] = "visible";
})(EnumWindowFilter = exports.EnumWindowFilter || (exports.EnumWindowFilter = {}));
var BindWindowMode;
(function (BindWindowMode) {
    BindWindowMode[BindWindowMode["Normal"] = 0] = "Normal";
    BindWindowMode[BindWindowMode["Normal1"] = 1] = "Normal1";
    BindWindowMode[BindWindowMode["Super"] = 101] = "Super";
    BindWindowMode[BindWindowMode["Drive"] = 201] = "Drive";
    BindWindowMode[BindWindowMode["DriveCanHideProcess"] = 203] = "DriveCanHideProcess";
})(BindWindowMode = exports.BindWindowMode || (exports.BindWindowMode = {}));
var LockMode;
(function (LockMode) {
    LockMode[LockMode["Close"] = 0] = "Close";
    LockMode[LockMode["Open"] = 1] = "Open";
    LockMode[LockMode["MouseOnly"] = 2] = "MouseOnly";
    LockMode[LockMode["KeypadOnly"] = 3] = "KeypadOnly";
})(LockMode = exports.LockMode || (exports.LockMode = {}));
var TsMode;
(function (TsMode) {
    TsMode[TsMode["Normal"] = 0] = "Normal";
    TsMode[TsMode["Advanced"] = 1] = "Advanced";
})(TsMode = exports.TsMode || (exports.TsMode = {}));
var MemoryBitNum;
(function (MemoryBitNum) {
    MemoryBitNum[MemoryBitNum["Bit32"] = 0] = "Bit32";
    MemoryBitNum[MemoryBitNum["Bit16"] = 1] = "Bit16";
    MemoryBitNum[MemoryBitNum["Bit8"] = 2] = "Bit8";
})(MemoryBitNum = exports.MemoryBitNum || (exports.MemoryBitNum = {}));
var MemoryIntByte;
(function (MemoryIntByte) {
    MemoryIntByte[MemoryIntByte["Byte4"] = 0] = "Byte4";
    MemoryIntByte[MemoryIntByte["Byte2"] = 1] = "Byte2";
    MemoryIntByte[MemoryIntByte["Byte1"] = 2] = "Byte1";
})(MemoryIntByte = exports.MemoryIntByte || (exports.MemoryIntByte = {}));
var MemoryCharType;
(function (MemoryCharType) {
    MemoryCharType[MemoryCharType["Ascii"] = 0] = "Ascii";
    MemoryCharType[MemoryCharType["Unicode"] = 1] = "Unicode";
})(MemoryCharType = exports.MemoryCharType || (exports.MemoryCharType = {}));
var MemoryState;
(function (MemoryState) {
    MemoryState[MemoryState["Writable"] = 0] = "Writable";
    MemoryState[MemoryState["NotWritable"] = 1] = "NotWritable";
})(MemoryState = exports.MemoryState || (exports.MemoryState = {}));
