/*
 * @Author: huz
 * @Date: 2019-09-21 18:19:09
 * @LastEditTime: 2019-09-22 21:34:35
 */
import {GetWindowFlag, TsRet, WindowStateFlag, SpecialWindowFlag, EnumWindowFilter, displayMode, mouseMode, keypadMode, BindWindowMode, LockMode, Coordinate, MemoryBitNum, MemoryCharType, TsSwitch, MemoryIntByte, MemoryState, TsMode} from '../modules/interface';
export interface TSInstance {
  // 窗口
  FindWindow(className: string, title: string): number;
  FindWindowEx(parent: string, className: string, title: string): number;
  SendString(hWnd: number, str: string): TsRet;
  SendString2(hWnd: number, str: string): TsRet;
  SendStringIme(str: string): TsRet;
  GetWindow(hWnd: number, flag: GetWindowFlag): number;
  GetWindowTitle(hWnd: number): string;
  GetWindowClass(hWnd: number): string;
  GetWindowRect(hWnd: number, x1: number, y1: number, x2: number, y2: number): TsRet;
  GetWindowProcessPath(hWnd: number): string;
  GetWindowState(hWnd: number, flag: WindowStateFlag): TsRet;
  GetClientRect(hWnd: number, x1: number, y1: number, x2: number, y2: number): TsRet;
  GetForegroundWindow(): number;
  GetForegroundFocus(): number;
  GetWindowProcessId(hWnd: number): number;
  GetProcessInfo(pid: number): string;
  GetClientSize(hWnd: string, width: Winax.Variant, height: Winax.Variant): TsRet;
  GetMousePointWindow(): number;
  GetSpecialWindow(flag: SpecialWindowFlag): number;
  GetPointWindow(x: number, y: number): number;
  EnumWindow(parent: number, title: string, className: string, filter: EnumWindowFilter): string;
  EnumProcess(processName: string): string;
  EnumWindowByProcess(processName: string, title: string, className: string, filter: EnumWindowFilter): string;
  ScreenToClient(hWnd: number, x: number, y: number): number;
  SetWindowText(hWnd: number, title: string): TsRet;
  SetWindowSize(hWnd: number, width: number, height: number): TsRet;
  SetWindowState(hWnd: number, flag: WindowStateFlag): TsRet;
  GetClipboard(): string;
  SendPaste(hWnd: number): TsRet;
  SetClipboard(value: string): TsRet;
  SetClientSize(hWnd: number, width: number, height: number): TsRet;
  SetWindowTransparent(hWnd: number, trans: number): TsRet;
  MoveWindow(hWnd: number, x: number, y: number): TsRet;
  // 后台
  BindWindow(hWnd: number, display: displayMode, mouse: mouseMode, keypad: keypadMode, mode: BindWindowMode): TsRet;
  UnBindWindow(): TsRet;
  DownCpu(rate: number): TsRet;
  LockInput(lock: LockMode): TsRet;
  IsBind(hWnd: number): TsRet;
  EnableRealKeypad(enable: TsSwitch): TsRet;
  EnableRealMouse(enable: TsSwitch, delay: number, step: number): TsRet;
  // 键盘和鼠标
  KeyPress(keyCode: number): TsRet;
  WaitKey(keyCode: number, timeOut: number): TsRet;
  KeyPressChar(keyName: string): TsRet;
  KeyPressStr(keyName: string, delay: number): TsRet;
  GetCursorShape(): string;
  MoveToEx(x: number, y: number, w: number, h: number): Coordinate;
  GetCursorPos(x: Winax.Variant, y: Winax.Variant): TsRet;
  KeyDown(keyCode: number): TsRet;
  KeyDownChar(keyName: string): TsRet;
  KeyUp(keyCode: number): TsRet;
  KeyUpChar(keyName: string): TsRet;
  MoveR(rx: number, ry: number): TsRet;
  MoveTo(x: number, y: number): TsRet;
  RightDown(): TsRet;
  RightUp(): TsRet;
  RightClick(): TsRet;
  MiddleClick(): TsRet;
  WheelUp(): TsRet;
  WheelDown(): TsRet;
  LeftDown(): TsRet;
  LeftUp(): TsRet;
  LeftClick(): TsRet;
  LeftDoubleClick(): TsRet;
  SetSimMode(mode: TsMode): TsRet;
  SetKeypadDelay(type: 'windows' | 'dx', delay: number): TsRet;
  SetMouseDelay(type: 'windows' | 'dx', delay: number): TsRet;
  // 设置
  Ver(): string;
  Delay(ms: number): TsRet;
  Reg(regCode: string, type: TsMode): number;
  GetPath(): string;
  SetPath(path: string): TsRet;
  GetBasePath(): string;
  SetShowErrorMsg(show: TsSwitch): TsRet;
  GetMachineCode(): string;
  // 图片和颜色
  Capture(x1: number, y1: number, x2: number, y2: number, filename: string): TsRet;
  CaptureGif(x1: number, y1: number, x2: number, y2: number, filename: string): TsRet;
  CaptureJpg(x1: number, y1: number, x2: number, y2: number, filename: string): TsRet;
  CapturePng(x1: number, y1: number, x2: number, y2: number, filename: string): TsRet;
  GetColor(x: number, y: number): string;
  FindColor(x1: number, y1: number, x2: number, y2: number, color: string, sim: number, direction: number, x: Winax.Variant, y: Winax.Variant): number;
  FindColorEx(x1: number, y1: number, x2: number, y2: number, color: string, sim: number): string;
  FindPic(x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, direction: number, x: Winax.Variant, y: Winax.Variant): number;
  FindPicS(x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, direction: number, x: Winax.Variant, y: Winax.Variant): string;
  FindPicEx(x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, direction: number, x: Winax.Variant, y: Winax.Variant): string;
  FindPicExS(x1: number, y1: number, x2: number, y2: number, picName: string, deltaColor: string, sim: number, direction: number, x: Winax.Variant, y: Winax.Variant): string;
  IsDisplayDead(x1: number, y1: number, x2: number, y2: number): TsRet;
  GetScreenData(x1: number, y1: number, x2: number, y2: number): number;
  CmpColor(x: number, y: number, color: string, sim: number): TsRet;
  SetPicPwd(password: string): TsRet;
  MatchPicName(picName: string): string;
  FindMultiColor(x1: number, y1: number, x2: number, y2: number, firstColor: string, offsetColor: string, sim: number, direction: number, x: Winax.Variant, y: Winax.Variant): TsRet;
  FindMultiColorEx(x1: number, y1: number, x2: number, y2: number, firstColor: string, offsetColor: string, sim: number, direction: number): string;
  // 文字
  Ocr(x1: number, y1: number, x2: number, y2: number, color: string, sim: number): string;
  OcrEx(x1: number, y1: number, x2: number, y2: number, color: string, sim: number): string;
  FindStr(x1: number, y1: number, x2: number, y2: number, str: string, color: string, sim: number, x: Winax.Variant, y: Winax.Variant): number;
  FindStrS(x1: number, y1: number, x2: number, y2: number, str: string, color: string, sim: number, x: Winax.Variant, y: Winax.Variant): string;
  FindStrEx(x1: number, y1: number, x2: number, y2: number, str: string, color: string, sim: number): string;
  FindStrExS(x1: number, y1: number, x2: number, y2: number, str: string, color: string, sim: number): string;
  FindStrFast(x1: number, y1: number, x2: number, y2: number, str: string, color: string, sim: number, x: Winax.Variant, y: Winax.Variant): number;
  FindStrFastS(x1: number, y1: number, x2: number, y2: number, str: string, color: string, sim: number, x: Winax.Variant, y: Winax.Variant): string;
  FindStrFastEx(x1: number, y1: number, x2: number, y2: number, str: string, color: string, sim: number): string;
  FindStrFastExS(x1: number, y1: number, x2: number, y2: number, str: string, color: string, sim: number): string;
  UseDict(index: number): TsRet;
  SetDict(index: number, file: string): TsRet;
  SetDictPwd(password: string): TsRet;
  ClearDict(index: number): TsRet;
  GetNowDict(): number;
  // 系统
  DisableFontSmooth(): TsRet;
  CheckFontSmooth(): TsRet;
  CheckUAC(): TsRet;
  SetUAC(enable: TsSwitch): TsRet;
  // 汇编
  AsmCode(baseAddress: number): string;
  Assemble(code: string, baseAddress: number, isUpper: TsSwitch): string;
  AsmClear(): TsRet;
  AsmAdd(instruction: string): TsRet;
  AsmCall(hWnd: number, mode: TsMode): number;
  // 保护
  TSGuardProtect(enable: TsSwitch, type: string): TsRet;
  TSGuardProtectToHide(enable: TsSwitch): TsRet;
  TSGuardProtectToHide2(enable: TsSwitch): TsRet;
  TSGuardProtectToNP(enable: TsSwitch): TsRet;
  TSDXKmProtect(enable: TsSwitch, type: string): TsRet;
  TSDXGraphicProtect(enable: TsSwitch): TsRet;
  // 内存
  FindInt(hWnd: number, addressRange: string, min: number, max: number, type: MemoryBitNum): string;
  FindString(hWnd: number, addressRange: string, value: string, type: MemoryCharType): string;
  FindData(hWnd: number, addressRange: string, data: string): string;
  FindFloat(hWnd: number, addressRange: string, min: number, max: number): string;
  FindDouble(hWnd: number, addressRange: number, min: number, max: number): string;
  FindIntEx(hWnd: number, addressRange: number, min: number, max: number, type: MemoryBitNum, step: number, multi: TsSwitch, fast: TsSwitch): string;
  FindStringEx(hWnd: number, addressRange: number, value: string, type: MemoryBitNum, step: number, multi: TsSwitch, fast: TsSwitch): string;
  FindDataEx(hWnd: number, addressRange: number, data: string, step: number, multi: TsSwitch, fast: TsSwitch): string;
  FindFloatEx(hWnd: number, addressRange: number, min: number, max: number, type: MemoryBitNum, step: number, multi: TsSwitch, fast: TsSwitch): string;
  FindDoubleEx(hWnd: number, addressRange: number, min: number, max: number, type: MemoryBitNum, step: number, multi: TsSwitch, fast: TsSwitch): string;
  WriteInt(hWnd: number, address: string, type: MemoryBitNum, value: number): TsRet;
  WriteString(hWnd: number, address: string, type: MemoryBitNum, value: string): TsRet;
  WriteData(hWnd: number, address: string, data: string): TsRet;
  WriteFloat(hWnd: number, address: string, type: MemoryBitNum, value: number): TsRet;
  WriteDouble(hWnd: number, address: string, type: MemoryBitNum, value: number): TsRet;
  ReadInt(hWnd: number, Address: string, type: MemoryBitNum): number;
  ReadString(hWnd: number, address: string, type: MemoryBitNum, length: number): string;
  ReadFloat(hWnd: number, address: string): number;
  ReadData(hWnd: number, address: string, length: number): string;
  ReadDouble(hWnd: number, address: string): number;
  StringToData(value: string, type: MemoryCharType): string;
  IntToData(value: number, type: MemoryIntByte): string;
  FloatToData(value: number): string;
  DoubleToData(value: number): string;
  VirtualAllocEx(hWnd: number, address: string, size: number, type: MemoryState): number;
  VirtualFreeEx(hWnd: number, address: string): TsRet;
  TerminateProcess(pid: number): TsRet;
  GetCommandLine(hWnd: number): string;
  GetModuleBaseAddr(hWnd: number, module: string): number;
  FreeProcessMemory(hWnd: number): TsRet;
}
