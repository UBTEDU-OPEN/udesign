const fs = require('fs');
const path = require('path');
const lodash = require('lodash');

// 过滤无效行
const isUseless = (codeLine) => lodash.startsWith(codeLine, '//') || lodash.startsWith(codeLine, '/*') || !lodash.includes(codeLine, '//');

// 行内数据拆分（key?: value; // comment。默认值：default）
const codeLineSplit = (codeLine) => {
  const [key, ...keyRest] = codeLine.split(':').map((code) => code.trim());
  const [value, ...valueRest] = keyRest
    .join(':')
    .split('//')
    .map((code) => code.trim());
  const [comment, defaults] = valueRest
    .join('//')
    .split('默认值：')
    .map((code) => code.trim());
  // const [key, value, comment] = codeLine
  //   .split(/:|\/\/|\/\*/)
  //   .map((code) => code.trim())
  //   .filter((code) => code);
  return { key: lodash.trimEnd(key, '?'), required: !lodash.endsWith(key, '?'), value: lodash.trimEnd(value, ';'), comment, default: defaults, raw: codeLine };
};

// 主程序：抽离所有的变量
async function main() {
  const componentVariablesMap = {};
  const udesignDir = path.join(__dirname, '../../../packages/udesign-ui/src/components');
  fs.readdirSync(udesignDir).map((dirname) => {
    // TODO: 部分组件需要特殊处理（例如：Grid 实际上是 col, row 的组合组件）
    const propsPath = path.join(udesignDir, dirname, `${dirname}.tsx`);
    if (fs.existsSync(propsPath)) {
      const raw = fs.readFileSync(propsPath, { encoding: 'utf-8' });
      const propsCodeLineList = raw.split('\n').filter((codeLine) => codeLine && !isUseless(codeLine.trim()));
      componentVariablesMap[dirname.toLowerCase()] = propsCodeLineList.map((codeLine) => codeLineSplit(codeLine.trim()));
    }
  });
  const [_, __, savePath] = process.argv;
  fs.writeFileSync(savePath || './api.json', JSON.stringify(componentVariablesMap));
}

main();
