# ts.dll

天使插件的nodejs库（按键精灵）


### 先决条件

仅支持32位版本的nodejs
需要先安装node-gyp和windows-build-tools
```
npm install -g windows-build-tools
npm install -g node-gyp
```

### 安装

```
npm install --save ts.dll
```

### 用法

建议使用ts来开发，以获得更好的代码提示

typescript
```
import TS from 'ts.dll';
const ts = new TS();
```

commonjs
```
const TS = require('ts.dll').default;
const ts = new TS();
```

### 其他

本插件用typescript封装了[TSPlug.dll](https://github.com/gaojunxin/TSPlug)（天使插件）的所有方法
使用[winax](https://github.com/durs/node-activex)库加载标准COM组件


