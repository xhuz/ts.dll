"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: huz
 * @Date: 2019-09-21 18:19:09
 * @LastEditTime: 2019-09-23 00:30:11
 */
const winax = require("winax");
const child_process_1 = require("child_process");
const path_1 = require("path");
class TSPlug {
    constructor() {
        this.ts = TSPlug.init('ts.tssoft');
    }
    static init(COM) {
        try {
            return new winax.Object(COM);
        }
        catch (_a) {
            child_process_1.execSync(`regsvr32 ${path_1.resolve(__dirname, '../lib/TSPlug.dll')}`);
            return new winax.Object(COM);
        }
    }
    // 窗口
    findWindow(className, title) {
        return this.ts.FindWindow(className, title);
    }
    findWindowEx(parent, className, title) {
        return this.ts.FindWindowEx(parent, className, title);
    }
    sendString(hWnd, str) {
        return this.ts.SendString(hWnd, str);
    }
    sendString2(hWnd, str) {
        return this.ts.SendString2(hWnd, str);
    }
    sendStringIme(str) {
        return this.ts.SendStringIme(str);
    }
    getWindow(hWnd, flag) {
        return this.ts.GetWindow(hWnd, flag);
    }
    getWindowTitle(hWnd) {
        return this.ts.GetWindowTitle(hWnd);
    }
    getWindowClass(hWnd) {
        return this.ts.GetWindowClass(hWnd);
    }
    getWindowRect(hWnd, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.GetWindowRect(hWnd, x1, y1, x2, y2);
    }
    getWindowProcessPath(hWnd) {
        return this.ts.GetWindowProcessPath(hWnd);
    }
    getWindowState(hWnd, flag) {
        return this.ts.GetWindowState(hWnd, flag);
    }
    getClientRect(hWnd, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.getClientRect(hWnd, x1, y2, x2, y2);
    }
    getForegroundWindow() {
        return this.ts.GetForegroundWindow();
    }
    getForegroundFocus() {
        return this.ts.GetForegroundFocus();
    }
    getWindowProcessId(hWnd) {
        return this.ts.GetWindowProcessId(hWnd);
    }
    getProcessInfo(pid) {
        return this.ts.GetProcessInfo(pid);
    }
    getClientSize(hWnd) {
        const width = new winax.Variant(-1, 'byref');
        const height = new winax.Variant(-1, 'byref');
        const ret = this.ts.GetClientSize(hWnd, width, height);
        return { width: Number(width), height: Number(height), ret };
    }
    getMousePointWindow() {
        return this.ts.GetMousePointWindow();
    }
    getSpecialWindow(flag) {
        return this.ts.GetSpecialWindow(flag);
    }
    getPointWindow(x, y) {
        return this.ts.GetPointWindow(x, y);
    }
    enumWindow(parent, title, className, filter) {
        return this.ts.EnumWindow(parent, title, className, filter);
    }
    enumProcess(processName) {
        return this.ts.EnumProcess(processName);
    }
    enumWindowByProcess(processName, title, className, filter) {
        return this.ts.EnumWindowByProcess(processName, title, className, filter);
    }
    screenToClient(hWnd, ...args) {
        let [x, y] = [];
        if (args.length > 1) {
            [x, y] = args;
        }
        else {
            ({ x, y } = args[0]);
        }
        return this.ts.ScreenToClient(hWnd, x, y);
    }
    setWindowText(hWnd, title) {
        return this.ts.SetWindowText(hWnd, title);
    }
    setWindowSize(hWnd, width, height) {
        return this.ts.SetWindowSize(hWnd, width, height);
    }
    setWindowState(hWnd, flag) {
        return this.ts.SetWindowState(hWnd, flag);
    }
    getClipboard() {
        return this.ts.GetClipboard();
    }
    sendPaste(hWnd) {
        return this.ts.SendPaste(hWnd);
    }
    setClipboard(value) {
        return this.ts.SetClipboard(value);
    }
    setClientSize(hWnd, width, height) {
        return this.ts.SetClientSize(hWnd, width, height);
    }
    setWindowTransparent(hWnd, trans) {
        return this.ts.SetWindowTransparent(hWnd, trans);
    }
    moveWindow(hWnd, x, y) {
        return this.ts.MoveWindow(hWnd, x, y);
    }
    // 后台
    bindWindow(hWnd, display, mouse, keypad, mode) {
        return this.ts.BindWindow(hWnd, display, mouse, keypad, mode);
    }
    unBindWindow() {
        return this.ts.UnBindWindow();
    }
    downCpu(rate) {
        return this.downCpu(rate);
    }
    lockInput(lock) {
        return this.ts.LockInput(lock);
    }
    isBind(hWnd) {
        return this.isBind(hWnd);
    }
    enableRealKeypad(enable) {
        return this.ts.EnableRealKeypad(enable);
    }
    enableRealMouse(enable, delay, step) {
        return this.ts.EnableRealMouse(enable, delay, step);
    }
    // 键盘和鼠标
    keyPress(keyCode) {
        return this.ts.KeyPress(keyCode);
    }
    waitKey(keyCode, timeOut) {
        return this.ts.WaitKey(keyCode, timeOut);
    }
    keyPressChar(keyName) {
        return this.ts.KeyPressChar(keyName);
    }
    keyPressStr(keyName, delay) {
        return this.ts.KeyPressStr(keyName, delay);
    }
    getCursorShape() {
        return this.ts.GetCursorShape();
    }
    moveToEx(...args) {
        let [x, y, w, h] = [];
        if (args.length > 1) {
            [x, y, w, h] = args;
        }
        else {
            ({ x, y, w, h } = args[0]);
        }
        return this.ts.MoveToEx(x, y, w, h);
    }
    getCursorPos() {
        const x = new winax.Variant(-1, 'byref');
        const y = new winax.Variant(-1, 'byref');
        const ret = this.ts.GetCursorPos(x, y);
        return { x: Number(x), y: Number(y), ret };
    }
    keyDown(keyCode) {
        return this.ts.KeyDown(keyCode);
    }
    keyDownChar(keyName) {
        return this.keyDownChar(keyName);
    }
    keyUp(keyCode) {
        return this.ts.KeyUp(keyCode);
    }
    keyUpChar(keyName) {
        return this.keyUpChar(keyName);
    }
    moveR(...args) {
        let [rx, ry] = [];
        if (args.length > 1) {
            [rx, ry] = args;
        }
        else {
            ({ x: rx, y: ry } = args[0]);
        }
        return this.ts.MoveR(rx, ry);
    }
    moveTo(...args) {
        let [x, y] = [];
        if (args.length > 1) {
            [x, y] = args;
        }
        else {
            ({ x, y } = args[0]);
        }
        return this.ts.MoveTo(x, y);
    }
    rightDown() {
        return this.ts.RightDown();
    }
    rightUp() {
        return this.ts.RightUp();
    }
    rightClick() {
        return this.ts.RightClick();
    }
    middleClick() {
        return this.ts.MiddleClick();
    }
    wheelUp() {
        return this.ts.WheelUp();
    }
    wheelDown() {
        return this.ts.WheelDown();
    }
    leftDown() {
        return this.ts.LeftDown();
    }
    leftUp() {
        return this.ts.LeftUp();
    }
    leftClick() {
        return this.ts.LeftClick();
    }
    leftDoubleClick() {
        return this.ts.LeftDoubleClick();
    }
    setSimMode(mode) {
        return this.ts.SetSimMode(mode);
    }
    setKeypadDelay(type, delay) {
        return this.ts.SetKeypadDelay(type, delay);
    }
    setMouseDelay(type, delay) {
        return this.ts.SetMouseDelay(type, delay);
    }
    // 设置
    ver() {
        return this.ts.Ver();
    }
    delay(ms) {
        return this.ts.Delay(ms);
    }
    reg(regCode, type) {
        return this.ts.Reg(regCode, type);
    }
    getPath() {
        return this.ts.GetPath();
    }
    setPath(path) {
        return this.ts.SetPath(path);
    }
    getBasePath() {
        return this.ts.GetBasePath();
    }
    setShowErrorMsg(show) {
        return this.ts.SetShowErrorMsg(show);
    }
    getMachineCode() {
        return this.ts.GetMachineCode();
    }
    capture(filename, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.Capture(x1, y1, x2, y2, filename);
    }
    captureGif(filename, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.CaptureGif(x1, y1, x2, y2, filename);
    }
    captureJpg(filename, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.CaptureJpg(x1, y1, x2, y2, filename);
    }
    capturePng(filename, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.CapturePng(x1, y1, x2, y2, filename);
    }
    getColor(...args) {
        let [x, y] = [];
        if (args.length > 1) {
            [x, y] = args;
        }
        else {
            ({ x, y } = args[0]);
        }
        return this.ts.GetColor(x, y);
    }
    findColor(color, sim, direction, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindColor(x1, y1, x2, y2, color, sim, direction, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    findColorEx(color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.FindColorEx(x1, y1, x2, y2, color, sim);
    }
    findPic(picName, deltaColor, sim, direction, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindPic(x1, y1, x2, y2, picName, deltaColor, sim, direction, x, y);
        return { x: Number(x), y: Number(y), ret };
    }
    findPicS(picName, deltaColor, sim, direction, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindPicS(x1, y1, x2, y2, picName, deltaColor, sim, direction, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    findPicEx(picName, deltaColor, sim, direction, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindPicEx(x1, y1, x2, y2, picName, deltaColor, sim, direction, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    findPicExS(picName, deltaColor, sim, direction, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindPicExS(x1, y1, x2, y2, picName, deltaColor, sim, direction, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    isDisplayDead(...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.IsDisplayDead(x1, y1, x2, y2);
    }
    getScreenData(...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.GetScreenData(x1, x2, y1, x2);
    }
    cmpColor(color, sim, ...args) {
        let [x, y] = [];
        if (args.length > 1) {
            [x, y] = args;
        }
        else {
            ({ x, y } = args[0]);
        }
        return this.ts.CmpColor(x, y, color, sim);
    }
    setPicPwd(password) {
        return this.ts.SetPicPwd(password);
    }
    matchPicName(picName) {
        return this.ts.MatchPicName(picName);
    }
    findMultiColor(firstColor, offsetColor, sim, direction, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindMultiColor(x1, y1, x2, y2, firstColor, offsetColor, sim, direction, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    findMultiColorEx(firstColor, offsetColor, sim, direction, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.FindMultiColorEx(x1, y1, x2, y2, firstColor, offsetColor, sim, direction);
    }
    ocr(color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.Ocr(x1, y1, x2, y2, color, sim);
    }
    ocrEx(color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.OcrEx(x1, y1, x2, y2, color, sim);
    }
    findStr(str, color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindStr(x1, y1, x2, y2, str, color, sim, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    findStrS(str, color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindStrS(x1, y1, x2, y2, str, color, sim, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    findStrEx(str, color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.FindStrEx(x1, y1, x2, y2, str, color, sim);
    }
    findStrExS(str, color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.FindStrExS(x1, y1, x2, y2, str, color, sim);
    }
    findStrFast(str, color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindStrFast(x1, y1, x2, y2, str, color, sim, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    findStrFastS(str, color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        const [x, y] = [new winax.Variant(-1, 'byref'), new winax.Variant(-1, 'byref')];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        const ret = this.ts.FindStrFastS(x1, y1, x2, y2, str, color, sim, x, y);
        return { ret, x: Number(x), y: Number(y) };
    }
    findStrFastEx(str, color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.FindStrFastEx(x1, y1, x2, y2, str, color, sim);
    }
    findStrFastExS(str, color, sim, ...args) {
        let [x1, y1, x2, y2] = [];
        if (args.length > 1) {
            [x1, y1, x2, y2] = args;
        }
        else {
            ({ x1, y1, x2, y2 } = args[0]);
        }
        return this.ts.FindStrFastExS(x1, y1, x2, y2, str, color, sim);
    }
    useDict(index) {
        return this.ts.UseDict(index);
    }
    setDict(index, file) {
        return this.ts.SetDict(index, file);
    }
    setDictPwd(password) {
        return this.ts.SetDictPwd(password);
    }
    clearDict(index) {
        return this.ts.ClearDict(index);
    }
    getNowDict() {
        return this.ts.GetNowDict();
    }
    // 系统
    disableFontSmooth() {
        return this.ts.DisableFontSmooth();
    }
    checkFontSmooth() {
        return this.ts.CheckFontSmooth();
    }
    checkUAC() {
        return this.ts.CheckUAC();
    }
    setUAC(enable) {
        return this.ts.SetUAC(enable);
    }
    // 汇编
    asmCode(baseAddress) {
        return this.ts.AsmCode(baseAddress);
    }
    assemble(code, baseAddress, isUpper) {
        return this.ts.Assemble(code, baseAddress, isUpper);
    }
    asmClear() {
        return this.ts.AsmClear();
    }
    asmAdd(instruction) {
        return this.ts.AsmAdd(instruction);
    }
    asmCall(hWnd, mode) {
        return this.ts.AsmCall(hWnd, mode);
    }
    // 保护
    tsGuardProtect(enable, type) {
        return this.ts.TSGuardProtect(enable, type);
    }
    tsGuardProtectToHide(enable) {
        return this.ts.TSGuardProtectToHide(enable);
    }
    tsGuardProtectToHide2(enable) {
        return this.ts.TSGuardProtectToHide2(enable);
    }
    tsGuardProtectToNp(enable) {
        return this.ts.TSGuardProtectToNP(enable);
    }
    tsDXKmProtect(enable, type) {
        return this.ts.TSDXKmProtect(enable, type);
    }
    tsDXGraphicProtect(enable) {
        return this.ts.TSDXGraphicProtect(enable);
    }
    // 内存
    findInt(hWnd, addressRange, min, max, type) {
        return this.ts.FindInt(hWnd, addressRange, min, max, type);
    }
    findString(hWnd, addressRange, value, type) {
        return this.ts.FindString(hWnd, addressRange, value, type);
    }
    findData(hWnd, addressRange, data) {
        return this.ts.FindData(hWnd, addressRange, data);
    }
    findFloat(hWnd, addressRange, min, max) {
        return this.ts.FindFloat(hWnd, addressRange, min, max);
    }
    findDouble(hWnd, addressRange, min, max) {
        return this.ts.FindDouble(hWnd, addressRange, min, max);
    }
    findIntEx(hWnd, addressRange, min, max, type, step, multi, fast) {
        return this.ts.FindIntEx(hWnd, addressRange, min, max, type, step, multi, fast);
    }
    findStringEx(hWnd, addressRange, value, type, step, multi, fast) {
        return this.ts.FindStringEx(hWnd, addressRange, value, type, step, multi, fast);
    }
    findDataEx(hWnd, addressRange, data, step, multi, fast) {
        return this.ts.FindDataEx(hWnd, addressRange, data, step, multi, fast);
    }
    findFloatEx(hWnd, addressRange, min, max, type, step, multi, fast) {
        return this.ts.FindFloatEx(hWnd, addressRange, min, max, type, step, multi, fast);
    }
    findDoubleEx(hWnd, addressRange, min, max, type, step, multi, fast) {
        return this.ts.FindDoubleEx(hWnd, addressRange, min, max, type, step, multi, fast);
    }
    writeInt(hWnd, address, type, value) {
        return this.ts.WriteInt(hWnd, address, type, value);
    }
    writeString(hWnd, address, type, value) {
        return this.ts.WriteString(hWnd, address, type, value);
    }
    writeData(hWnd, address, data) {
        return this.ts.WriteData(hWnd, address, data);
    }
    writeFloat(hWnd, address, type, value) {
        return this.ts.WriteFloat(hWnd, address, type, value);
    }
    writeDouble(hWnd, address, type, value) {
        return this.ts.WriteDouble(hWnd, address, type, value);
    }
    readInt(hWnd, Address, type) {
        return this.ts.ReadInt(hWnd, Address, type);
    }
    readString(hWnd, address, type, length) {
        return this.ts.ReadString(hWnd, address, type, length);
    }
    readFloat(hWnd, address) {
        return this.ts.ReadFloat(hWnd, address);
    }
    readData(hWnd, address, length) {
        return this.ts.ReadData(hWnd, address, length);
    }
    readDouble(hWnd, address) {
        return this.ts.ReadDouble(hWnd, address);
    }
    stringToData(value, type) {
        return this.ts.StringToData(value, type);
    }
    intToData(value, type) {
        return this.ts.IntToData(value, type);
    }
    floatToData(value) {
        return this.ts.FloatToData(value);
    }
    doubleToData(value) {
        return this.doubleToData(value);
    }
    virtualAllocEx(hWnd, address, size, type) {
        return this.ts.VirtualAllocEx(hWnd, address, size, type);
    }
    virtualFreeEx(hWnd, address) {
        return this.ts.VirtualFreeEx(hWnd, address);
    }
    terminateProcess(pid) {
        return this.ts.TerminateProcess(pid);
    }
    getCommandLine(hWnd) {
        return this.ts.GetCommandLine(hWnd);
    }
    getModuleBaseAddr(hWnd, module) {
        return this.ts.GetModuleBaseAddr(hWnd, module);
    }
    freeProcessMemory(hWnd) {
        return this.ts.FreeProcessMemory(hWnd);
    }
}
exports.default = TSPlug;
