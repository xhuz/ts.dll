/*
 * @Author: huz
 * @Date: 2019-09-21 18:19:09
 * @LastEditTime: 2019-09-23 00:30:11
 */
import * as winax from 'winax';
import {execSync} from 'child_process';
import {resolve} from 'path';
import {TSInstance} from './types/plugin';
import {TsRet, Area, GetWindowFlag, WindowStateFlag, SpecialWindowFlag, EnumWindowFilter, Coordinate, displayMode, mouseMode, keypadMode, BindWindowMode, LockMode, TsSwitch, MoveRange, VariantPointerParams, MemoryIntByte, MemoryCharType, MemoryBitNum, TsMode, MemoryState} from './modules/interface';

export default class TSPlug {
  private ts: TSInstance;

  constructor() {
    this.ts = TSPlug.init('ts.tssoft');
  }

  private static init(COM: string): TSInstance {
    try {
      return new winax.Object(COM);
    } catch {
      execSync(`regsvr32 ${resolve(__dirname, '../lib/TSPlug.dll')}`);
      return new winax.Object(COM);
    }
  }

  // 窗口
  findWindow(className: string, title: string): number {
    return this.ts.FindWindow(className, title);
  }

  findWindowEx(parent: string, className: string, title: string): number {
    return this.ts.FindWindowEx(parent, className, title);
  }

  sendString(hWnd: number, str: string): TsRet {
    return this.ts.SendString(hWnd, str);
  }

  sendString2(hWnd: number, str: string): TsRet {
    return this.ts.SendString2(hWnd, str);
  }

  sendStringIme(str: string): TsRet {
    return this.ts.SendStringIme(str);
  }

  getWindow(hWnd: number, flag: GetWindowFlag): number {
    return this.ts.GetWindow(hWnd, flag);
  }

  getWindowTitle(hWnd: number): string {
    return this.ts.GetWindowTitle(hWnd);
  }

  getWindowClass(hWnd: number): string {
    return this.ts.GetWindowClass(hWnd);
  }

  getWindowRect<T = number>(hWnd: T, x1: T, y1: T, x2: T, y2: T): TsRet;
  getWindowRect(hWnd: number, {x1, y1, x2, y2}: Area): TsRet;
  getWindowRect(hWnd: number, ...args: number[] | Area[]): TsRet {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.GetWindowRect(hWnd, x1, y1, x2, y2);
  }

  getWindowProcessPath(hWnd: number): string {
    return this.ts.GetWindowProcessPath(hWnd);
  }

  getWindowState(hWnd: number, flag: WindowStateFlag): TsRet {
    return this.ts.GetWindowState(hWnd, flag);
  }

  getClientRect<T = number>(hWnd: T, x1: T, y1: T, x2: T, y2: T): TsRet;
  getClientRect(hWnd: number, {x1, y1, x2, y2}: Area): TsRet;
  getClientRect(hWnd: number, ...args: number[] | Area[]): TsRet {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.getClientRect(hWnd, x1, y2, x2, y2);
  }

  getForegroundWindow(): number {
    return this.ts.GetForegroundWindow();
  }

  getForegroundFocus(): number {
    return this.ts.GetForegroundFocus();
  }

  getWindowProcessId(hWnd: number): number {
    return this.ts.GetWindowProcessId(hWnd);
  }

  getProcessInfo(pid: number): string {
    return this.ts.GetProcessInfo(pid);
  }

  getClientSize(hWnd: string): VariantPointerParams {
    const width = new winax.Variant(-1, 'byref');
    const height = new winax.Variant(-1, 'byref');
    const ret = this.ts.GetClientSize(hWnd, width, height);
    return {width: Number(width), height: Number(height), ret};
  }

  getMousePointWindow(): number {
    return this.ts.GetMousePointWindow();
  }

  getSpecialWindow(flag: SpecialWindowFlag): number {
    return this.ts.GetSpecialWindow(flag);
  }

  getPointWindow(x: number, y: number): number {
    return this.ts.GetPointWindow(x, y);
  }

  enumWindow(parent: number, title: string, className: string, filter: EnumWindowFilter): string {
    return this.ts.EnumWindow(parent, title, className, filter);
  }

  enumProcess(processName: string): string {
    return this.ts.EnumProcess(processName);
  }

  enumWindowByProcess(processName: string, title: string, className: string, filter: EnumWindowFilter): string {
    return this.ts.EnumWindowByProcess(processName, title, className, filter);
  }

  screenToClient<T = number>(hWnd: T, x: T, y: T): T;
  screenToClient(hWnd: number, {x, y}: Coordinate): number;
  screenToClient(hWnd: number, ...args: number[] | Coordinate[]): number {
    let [x, y] = [] as number[];
    if (args.length > 1) {
      [x, y] = args as number[];
    } else {
      ({x, y} = args[0] as Coordinate);
    }
    return this.ts.ScreenToClient(hWnd, x, y);
  }

  setWindowText(hWnd: number, title: string): TsRet {
    return this.ts.SetWindowText(hWnd, title);
  }

  setWindowSize(hWnd: number, width: number, height: number): TsRet {
    return this.ts.SetWindowSize(hWnd, width, height);
  }

  setWindowState(hWnd: number, flag: WindowStateFlag): TsRet {
    return this.ts.SetWindowState(hWnd, flag);
  }

  getClipboard(): string {
    return this.ts.GetClipboard();
  }

  sendPaste(hWnd: number): TsRet {
    return this.ts.SendPaste(hWnd);
  }

  setClipboard(value: string): TsRet {
    return this.ts.SetClipboard(value);
  }

  setClientSize(hWnd: number, width: number, height: number): TsRet {
    return this.ts.SetClientSize(hWnd, width, height);
  }

  setWindowTransparent(hWnd: number, trans: number): TsRet {
    return this.ts.SetWindowTransparent(hWnd, trans);
  }

  moveWindow(hWnd: number, x: number, y: number): TsRet {
    return this.ts.MoveWindow(hWnd, x, y);
  }

  // 后台
  bindWindow(hWnd: number, display: displayMode, mouse: mouseMode, keypad: keypadMode, mode: BindWindowMode): TsRet {
    return this.ts.BindWindow(hWnd, display, mouse, keypad, mode);
  }

  unBindWindow(): TsRet {
    return this.ts.UnBindWindow();
  }

  downCpu(rate: number): TsRet {
    return this.downCpu(rate);
  }

  lockInput(lock: LockMode): TsRet {
    return this.ts.LockInput(lock);
  }

  isBind(hWnd: number): TsRet {
    return this.isBind(hWnd);
  }

  enableRealKeypad(enable: TsSwitch): TsRet {
    return this.ts.EnableRealKeypad(enable);
  }

  enableRealMouse(enable: TsSwitch, delay: number, step: number): TsRet {
    return this.ts.EnableRealMouse(enable, delay, step);
  }

  // 键盘和鼠标
  keyPress(keyCode: number): TsRet {
    return this.ts.KeyPress(keyCode);
  }

  waitKey(keyCode: number, timeOut: number): TsRet {
    return this.ts.WaitKey(keyCode, timeOut);
  }

  keyPressChar(keyName: string): TsRet {
    return this.ts.KeyPressChar(keyName);
  }

  keyPressStr(keyName: string, delay: number): TsRet {
    return this.ts.KeyPressStr(keyName, delay);
  }

  getCursorShape(): string {
    return this.ts.GetCursorShape();
  }

  moveToEx<T = number>(x: T, y: T, w: T, h: T): Coordinate;
  moveToEx({x, y, w, h}: MoveRange): Coordinate;
  moveToEx(...args: number[] | MoveRange[]): Coordinate {
    let [x, y, w, h] = [] as number[];
    if (args.length > 1) {
      [x, y, w, h] = args as number[];
    } else {
      ({x, y, w, h} = args[0] as MoveRange);
    }
    return this.ts.MoveToEx(x, y, w, h);
  }

  getCursorPos(): VariantPointerParams {
    const x = new winax.Variant(-1, 'byref');
    const y = new winax.Variant(-1, 'byref');
    const ret = this.ts.GetCursorPos(x, y);
    return {x: Number(x), y: Number(y), ret};
  }

  keyDown(keyCode: number): TsRet {
    return this.ts.KeyDown(keyCode);
  }

  keyDownChar(keyName: string): TsRet {
    return this.keyDownChar(keyName);
  }

  keyUp(keyCode: number): TsRet {
    return this.ts.KeyUp(keyCode);
  }

  keyUpChar(keyName: string): TsRet {
    return this.keyUpChar(keyName);
  }

  moveR<T = number>(rx: T, ry: T): TsRet;
  moveR({x: rx, y: ry}: Coordinate): TsRet;
  moveR(...args: number[] | Coordinate[]): TsRet {
    let [rx, ry] = [] as number[];
    if (args.length > 1) {
      [rx, ry] = args as number[];
    } else {
      ({x: rx, y: ry} = args[0] as Coordinate);
    }
    return this.ts.MoveR(rx, ry);
  }

  moveTo<T = number>(rx: T, ry: T): TsRet;
  moveTo({x, y}: Coordinate): TsRet;
  moveTo(...args: number[] | Coordinate[]): TsRet {
    let [x, y] = [] as number[];
    if (args.length > 1) {
      [x, y] = args as number[];
    } else {
      ({x, y} = args[0] as Coordinate);
    }
    return this.ts.MoveTo(x, y);
  }

  rightDown(): TsRet {
    return this.ts.RightDown();
  }

  rightUp(): TsRet {
    return this.ts.RightUp();
  }

  rightClick(): TsRet {
    return this.ts.RightClick();
  }

  middleClick(): TsRet {
    return this.ts.MiddleClick();
  }

  wheelUp(): TsRet {
    return this.ts.WheelUp();
  }

  wheelDown(): TsRet {
    return this.ts.WheelDown();
  }

  leftDown(): TsRet {
    return this.ts.LeftDown();
  }

  leftUp(): TsRet {
    return this.ts.LeftUp();
  }

  leftClick(): TsRet {
    return this.ts.LeftClick();
  }

  leftDoubleClick(): TsRet {
    return this.ts.LeftDoubleClick();
  }

  setSimMode(mode: TsMode): TsRet {
    return this.ts.SetSimMode(mode);
  }

  setKeypadDelay(type: 'windows' | 'dx', delay: number): TsRet {
    return this.ts.SetKeypadDelay(type, delay);
  }

  setMouseDelay(type: 'windows' | 'dx', delay: number): TsRet {
    return this.ts.SetMouseDelay(type, delay);
  }

  // 设置
  ver(): string {
    return this.ts.Ver();
  }

  delay(ms: number): TsRet {
    return this.ts.Delay(ms);
  }

  reg(regCode: string, type: TsMode): number {
    return this.ts.Reg(regCode, type);
  }

  getPath(): string {
    return this.ts.GetPath();
  }

  setPath(path: string): TsRet {
    return this.ts.SetPath(path);
  }

  getBasePath(): string {
    return this.ts.GetBasePath();
  }

  setShowErrorMsg(show: TsSwitch): TsRet {
    return this.ts.SetShowErrorMsg(show);
  }

  getMachineCode(): string {
    return this.ts.GetMachineCode();
  }

  // 图片和颜色
  capture<T = number>(filename: string, x1: T, y1: T, x2: T, y2: T): TsRet;
  capture(filename: string, {x1, y1, x2, y2}: Area): TsRet;
  capture(filename: string, ...args: number[] | Area[]): TsRet {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.Capture(x1, y1, x2, y2, filename);
  }

  captureGif<T = number>(filename: string, x1: T, y1: T, x2: T, y2: T): TsRet;
  captureGif(filename: string, {x1, y1, x2, y2}: Area): TsRet;
  captureGif(filename: string, ...args: number[] | Area[]): TsRet {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.CaptureGif(x1, y1, x2, y2, filename);
  }

  captureJpg<T = number>(filename: string, x1: T, y1: T, x2: T, y2: T): TsRet;
  captureJpg(filename: string, {x1, y1, x2, y2}: Area): TsRet;
  captureJpg(filename: string, ...args: number[] | Area[]): TsRet {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.CaptureJpg(x1, y1, x2, y2, filename);
  }

  capturePng<T = number>(filename: string, x1: T, y1: T, x2: T, y2: T): TsRet;
  capturePng(filename: string, {x1, y1, x2, y2}: Area): TsRet;
  capturePng(filename: string, ...args: number[] | Area[]): TsRet {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.CapturePng(x1, y1, x2, y2, filename);
  }

  getColor(x: number, y: number): string;
  getColor({x, y}: Coordinate): string;
  getColor(...args: number[] | Coordinate[]): string {
    let [x, y] = [] as number[];
    if (args.length > 1) {
      [x, y] = args as number[];
    } else {
      ({x, y} = args[0] as Coordinate);
    }
    return this.ts.GetColor(x, y);
  }

  findColor<T = number>(color: string, sim: T, direction: T, x1: T, y1: T, x2: T, Y2: T): VariantPointerParams;
  findColor(color: string, sim: number, direction: number, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findColor(color: string, sim: number, direction: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindColor(x1, y1, x2, y2, color, sim, direction, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  findColorEx<T = number>(color: string, sim: T, x1: T, y1: T, x2: T, y2: T): string;
  findColorEx(color: string, sim: number, {x1, y1, x2, y2}: Area): string;
  findColorEx(color: string, sim: number, ...args: number[] | Area[]): string {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.FindColorEx(x1, y1, x2, y2, color, sim);
  }

  findPic<T = number, K = string>(picName: K, deltaColor: K, sim: T, direction: T, x1: T, y1: T, x2: T, Y2: T): VariantPointerParams;
  findPic<T = number, K = string>(picName: K, deltaColor: K, sim: T, direction: T, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findPic(picName: string, deltaColor: string, sim: number, direction: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindPic(x1, y1, x2, y2, picName, deltaColor, sim, direction, x, y);
    return {x: Number(x), y: Number(y), ret};
  }

  findPicS<T = number, K = string>(picName: K, deltaColor: K, sim: T, direction: T, x1: T, y1: T, x2: T, Y2: T): VariantPointerParams;
  findPicS<T = number, K = string>(picName: K, deltaColor: K, sim: T, direction: T, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findPicS(picName: string, deltaColor: string, sim: number, direction: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindPicS(x1, y1, x2, y2, picName, deltaColor, sim, direction, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  findPicEx<T = number, K = string>(picName: K, deltaColor: K, sim: T, direction: T, x1: T, y1: T, x2: T, Y2: T): VariantPointerParams;
  findPicEx<T = number, K = string>(picName: K, deltaColor: K, sim: T, direction: T, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findPicEx(picName: string, deltaColor: string, sim: number, direction: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindPicEx(x1, y1, x2, y2, picName, deltaColor, sim, direction, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  findPicExS<T = number, K = string>(picName: K, deltaColor: K, sim: T, direction: T, x1: T, y1: T, x2: T, Y2: T): VariantPointerParams;
  findPicExS<T = number, K = string>(picName: K, deltaColor: K, sim: T, direction: T, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findPicExS(picName: string, deltaColor: string, sim: number, direction: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindPicExS(x1, y1, x2, y2, picName, deltaColor, sim, direction, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  isDisplayDead<T = number>(x1: T, y1: T, x2: T, y2: T): TsRet;
  isDisplayDead({x1, y1, x2, y2}: Area): TsRet;
  isDisplayDead(...args: number[] | Area[]): TsRet {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.IsDisplayDead(x1, y1, x2, y2);
  }

  getScreenData<T = number>(x1: T, y1: T, x2: T, y2: T): number;
  getScreenData({x1, y1, x2, y2}: Area): number;
  getScreenData(...args: number[] | Area[]): number {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.GetScreenData(x1, x2, y1, x2);
  }

  cmpColor<T = number>(color: string, sim: T, x: T, y: T): TsRet;
  cmpColor(color: string, sim: number, {x, y}: Coordinate): TsRet;
  cmpColor(color: string, sim: number, ...args: number[] | Coordinate[]): TsRet {
    let [x, y] = [] as number[];
    if (args.length > 1) {
      [x, y] = args as number[];
    } else {
      ({x, y} = args[0] as Coordinate);
    }
    return this.ts.CmpColor(x, y, color, sim);
  }

  setPicPwd(password: string): TsRet {
    return this.ts.SetPicPwd(password);
  }

  matchPicName(picName: string): string {
    return this.ts.MatchPicName(picName);
  }

  findMultiColor<T = number, K = string>(firstColor: K, offsetColor: T, sim: T, direction: T, x1: T, y1: T, x2: T, y2: T): VariantPointerParams;
  findMultiColor<T = number, K = string>(firstColor: K, offsetColor: T, sim: T, direction: T, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findMultiColor(firstColor: string, offsetColor: string, sim: number, direction: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindMultiColor(x1, y1, x2, y2, firstColor, offsetColor, sim, direction, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  findMultiColorEx<T = number, K = string>(firstColor: K, offsetColor: T, sim: T, direction: T, x1: T, y1: T, x2: T, y2: T): string;
  findMultiColorEx<T = number, K = string>(firstColor: K, offsetColor: T, sim: T, direction: T, {x1, y1, x2, y2}: Area): string;
  findMultiColorEx(firstColor: string, offsetColor: string, sim: number, direction: number, ...args: number[] | Area[]): string {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.FindMultiColorEx(x1, y1, x2, y2, firstColor, offsetColor, sim, direction);
  }

  // 文字
  ocr<T = number>(color: string, sim: T, x1: T, y1: T, x2: T, y2: T): string;
  ocr<T = number>(color: string, sim: T, {x1, y1, x2, y2}: Area): string;
  ocr(color: string, sim: number, ...args: number[] | Area[]): string {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.Ocr(x1, y1, x2, y2, color, sim);
  }

  ocrEx<T = number>(color: string, sim: T, x1: T, y1: T, x2: T, y2: T): string;
  ocrEx<T = number>(color: string, sim: T, {x1, y1, x2, y2}: Area): string;
  ocrEx(color: string, sim: number, ...args: number[] | Area[]): string {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.OcrEx(x1, y1, x2, y2, color, sim);
  }

  findStr<T = number, K = string>(str: K, color: K, sim: T, x1: T, y1: T, x2: T, y2: T): VariantPointerParams;
  findStr<K = string>(str: K, color: K, sim: number, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findStr(str: string, color: string, sim: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindStr(x1, y1, x2, y2, str, color, sim, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  findStrS<T = number, K = string>(str: K, color: K, sim: T, x1: T, y1: T, x2: T, y2: T): VariantPointerParams;
  findStrS<K = string>(str: K, color: K, sim: number, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findStrS(str: string, color: string, sim: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindStrS(x1, y1, x2, y2, str, color, sim, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  findStrEx<T = number, K = string>(str: K, color: K, sim: T, x1: T, y1: T, x2: T, y2: T): string;
  findStrEx<K = string>(str: K, color: K, sim: number, {x1, y1, x2, y2}: Area): string;
  findStrEx(str: string, color: string, sim: number, ...args: number[] | Area[]): string {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.FindStrEx(x1, y1, x2, y2, str, color, sim);
  }

  findStrExS<T = number, K = string>(str: K, color: K, sim: T, x1: T, y1: T, x2: T, y2: T): string;
  findStrExS<K = string>(str: K, color: K, sim: number, {x1, y1, x2, y2}: Area): string;
  findStrExS(str: string, color: string, sim: number, ...args: number[] | Area[]): string {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.FindStrExS(x1, y1, x2, y2, str, color, sim);
  }

  findStrFast<T = number, K = string>(str: K, color: K, sim: T, x1: T, y1: T, x2: T, y2: T): VariantPointerParams;
  findStrFast<K = string>(str: K, color: K, sim: number, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findStrFast(str: string, color: string, sim: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindStrFast(x1, y1, x2, y2, str, color, sim, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  findStrFastS<T = number, K = string>(str: K, color: K, sim: T, x1: T, y1: T, x2: T, y2: T): VariantPointerParams;
  findStrFastS<K = string>(str: K, color: K, sim: number, {x1, y1, x2, y2}: Area): VariantPointerParams;
  findStrFastS(str: string, color: string, sim: number, ...args: number[] | Area[]): VariantPointerParams {
    let [x1, y1, x2, y2] = [] as number[];
    const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    const ret = this.ts.FindStrFastS(x1, y1, x2, y2, str, color, sim, x, y);
    return {ret, x: Number(x), y: Number(y)};
  }

  findStrFastEx<T = number, K = string>(str: K, color: K, sim: T, x1: T, y1: T, x2: T, y2: T): string;
  findStrFastEx<K = string>(str: K, color: K, sim: number, {x1, y1, x2, y2}: Area): string;
  findStrFastEx(str: string, color: string, sim: number, ...args: number[] | Area[]): string {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.FindStrFastEx(x1, y1, x2, y2, str, color, sim);
  }

  findStrFastExS<T = number, K = string>(str: K, color: K, sim: T, x1: T, y1: T, x2: T, y2: T): string;
  findStrFastExS<K = string>(str: K, color: K, sim: number, {x1, y1, x2, y2}: Area): string;
  findStrFastExS(str: string, color: string, sim: number, ...args: number[] | Area[]): string {
    let [x1, y1, x2, y2] = [] as number[];
    if (args.length > 1) {
      [x1, y1, x2, y2] = args as number[];
    } else {
      ({x1, y1, x2, y2} = args[0] as Area);
    }
    return this.ts.FindStrFastExS(x1, y1, x2, y2, str, color, sim);
  }

  useDict(index: number): TsRet {
    return this.ts.UseDict(index);
  }

  setDict(index: number, file: string): TsRet {
    return this.ts.SetDict(index, file);
  }

  setDictPwd(password: string): TsRet {
    return this.ts.SetDictPwd(password);
  }

  clearDict(index: number): TsRet {
    return this.ts.ClearDict(index);
  }

  getNowDict(): number {
    return this.ts.GetNowDict();
  }

  // 系统
  disableFontSmooth(): TsRet {
    return this.ts.DisableFontSmooth();
  }

  checkFontSmooth(): TsRet {
    return this.ts.CheckFontSmooth();
  }

  checkUAC(): TsRet {
    return this.ts.CheckUAC();
  }
  setUAC(enable: TsSwitch): TsRet {
    return this.ts.SetUAC(enable);
  }

  // 汇编
  asmCode(baseAddress: number): string {
    return this.ts.AsmCode(baseAddress);
  }

  assemble(code: string, baseAddress: number, isUpper: TsSwitch): string {
    return this.ts.Assemble(code, baseAddress, isUpper);
  }

  asmClear(): TsRet {
    return this.ts.AsmClear();
  }

  asmAdd(instruction: string): TsRet {
    return this.ts.AsmAdd(instruction);
  }

  asmCall(hWnd: number, mode: TsMode): number {
    return this.ts.AsmCall(hWnd, mode);
  }
  // 保护
  tsGuardProtect(enable: TsSwitch, type: string): TsRet {
    return this.ts.TSGuardProtect(enable, type);
  }

  tsGuardProtectToHide(enable: TsSwitch): TsRet {
    return this.ts.TSGuardProtectToHide(enable);
  }

  tsGuardProtectToHide2(enable: TsSwitch): TsRet {
    return this.ts.TSGuardProtectToHide2(enable);
  }

  tsGuardProtectToNp(enable: TsSwitch): TsRet {
    return this.ts.TSGuardProtectToNP(enable);
  }

  tsDXKmProtect(enable: TsSwitch, type: string): TsRet {
    return this.ts.TSDXKmProtect(enable, type);
  }

  tsDXGraphicProtect(enable: TsSwitch): TsRet {
    return this.ts.TSDXGraphicProtect(enable);
  }

  // 内存
  findInt(hWnd: number, addressRange: string, min: number, max: number, type: MemoryBitNum): string {
    return this.ts.FindInt(hWnd, addressRange, min, max, type);
  }

  findString(hWnd: number, addressRange: string, value: string, type: MemoryCharType): string {
    return this.ts.FindString(hWnd, addressRange, value, type);
  }

  findData(hWnd: number, addressRange: string, data: string): string {
    return this.ts.FindData(hWnd, addressRange, data);
  }

  findFloat(hWnd: number, addressRange: string, min: number, max: number): string {
    return this.ts.FindFloat(hWnd, addressRange, min, max);
  }

  findDouble(hWnd: number, addressRange: number, min: number, max: number): string {
    return this.ts.FindDouble(hWnd, addressRange, min, max);
  }

  findIntEx(hWnd: number, addressRange: number, min: number, max: number, type: MemoryBitNum, step: number, multi: TsSwitch, fast: TsSwitch): string {
    return this.ts.FindIntEx(hWnd, addressRange, min, max, type, step, multi, fast);
  }

  findStringEx(hWnd: number, addressRange: number, value: string, type: MemoryBitNum, step: number, multi: TsSwitch, fast: TsSwitch): string {
    return this.ts.FindStringEx(hWnd, addressRange, value, type, step, multi, fast);
  }

  findDataEx(hWnd: number, addressRange: number, data: string, step: number, multi: TsSwitch, fast: TsSwitch): string {
    return this.ts.FindDataEx(hWnd, addressRange, data, step, multi, fast);
  }

  findFloatEx(hWnd: number, addressRange: number, min: number, max: number, type: MemoryBitNum, step: number, multi: TsSwitch, fast: TsSwitch): string {
    return this.ts.FindFloatEx(hWnd, addressRange, min, max, type, step, multi, fast);
  }

  findDoubleEx(hWnd: number, addressRange: number, min: number, max: number, type: MemoryBitNum, step: number, multi: TsSwitch, fast: TsSwitch): string {
    return this.ts.FindDoubleEx(hWnd, addressRange, min, max, type, step, multi, fast);
  }

  writeInt(hWnd: number, address: string, type: MemoryBitNum, value: number): TsRet {
    return this.ts.WriteInt(hWnd, address, type, value);
  }

  writeString(hWnd: number, address: string, type: MemoryBitNum, value: string): TsRet {
    return this.ts.WriteString(hWnd, address, type, value);
  }

  writeData(hWnd: number, address: string, data: string): TsRet {
    return this.ts.WriteData(hWnd, address, data);
  }

  writeFloat(hWnd: number, address: string, type: MemoryBitNum, value: number): TsRet {
    return this.ts.WriteFloat(hWnd, address, type, value);
  }

  writeDouble(hWnd: number, address: string, type: MemoryBitNum, value: number): TsRet {
    return this.ts.WriteDouble(hWnd, address, type, value);
  }

  readInt(hWnd: number, Address: string, type: MemoryBitNum): number {
    return this.ts.ReadInt(hWnd, Address, type);
  }

  readString(hWnd: number, address: string, type: MemoryBitNum, length: number): string {
    return this.ts.ReadString(hWnd, address, type, length);
  }

  readFloat(hWnd: number, address: string): number {
    return this.ts.ReadFloat(hWnd, address);
  }

  readData(hWnd: number, address: string, length: number): string {
    return this.ts.ReadData(hWnd, address, length);
  }

  readDouble(hWnd: number, address: string): number {
    return this.ts.ReadDouble(hWnd, address);
  }

  stringToData(value: string, type: MemoryCharType): string {
    return this.ts.StringToData(value, type);
  }
  intToData(value: number, type: MemoryIntByte): string {
    return this.ts.IntToData(value, type);
  }

  floatToData(value: number): string {
    return this.ts.FloatToData(value);
  }
  doubleToData(value: number): string {
    return this.doubleToData(value);
  }

  virtualAllocEx(hWnd: number, address: string, size: number, type: MemoryState): number {
    return this.ts.VirtualAllocEx(hWnd, address, size, type);
  }

  virtualFreeEx(hWnd: number, address: string): TsRet {
    return this.ts.VirtualFreeEx(hWnd, address);
  }

  terminateProcess(pid: number): TsRet {
    return this.ts.TerminateProcess(pid);
  }

  getCommandLine(hWnd: number): string {
    return this.ts.GetCommandLine(hWnd);
  }

  getModuleBaseAddr(hWnd: number, module: string): number {
    return this.ts.GetModuleBaseAddr(hWnd, module);
  }

  freeProcessMemory(hWnd: number): TsRet {
    return this.ts.FreeProcessMemory(hWnd);
  }

}
