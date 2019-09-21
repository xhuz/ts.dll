import * as winax from 'winax';
import {execSync} from 'child_process';
import {resolve} from 'path';
import {TSInstance} from './modules/plugin';
import {TsRet} from './modules/interface';

export default class TSPlug {
  ts: TSInstance;
  constructor() {
    this.ts = TSPlug.init('ts.tssoft');
  }

  static getInstance(): TSInstance {
    return this.init('ts.tssoft');
  }

  findWindow(className: string, title: string) {
    return this.ts.FindWindow(className, title);
  }

  getWindowRect(hWnd: number, x1: number, y1: number, x2: number, y2: number): TsRet {
    return this.ts.GetWindowRect(hWnd, x1, y1, x2, y2);
  }

  private static init(COM: string): TSInstance {
    try {
      return new winax.Object(COM);
    } catch {
      execSync(`regsvr32 ${resolve(__dirname, 'lib/TSPlug.dll')}`);
      return new winax.Object(COM);
    }
  }
}
