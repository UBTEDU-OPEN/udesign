const fs = require('fs');
const path = require('path');
const lodash = require('lodash');

// 过滤无效行
const isUseless = (codeLine) => lodash.startsWith(codeLine, '//') || lodash.startsWith(codeLine, '/*') || !lodash.includes(codeLine, '//');

// 行内数据拆分（key: value; // comment）
const codeLineSplit = (codeLine) => {
  const [key, ...rest] = codeLine.split(':').map((code) => code.trim());
  const [value, comment] = rest.join(':').split('//').map((code) => code.trim());
  // const [key, value, comment] = codeLine
  //   .split(/:|\/\/|\/\*/)
  //   .map((code) => code.trim())
  //   .filter((code) => code);
  return { key: lodash.trimEnd(key, '?'), required: !lodash.endsWith(key, '?'), value: lodash.trimEnd(value, ';'), comment, raw: codeLine };
};

// 主程序：抽离所有的变量
async function main() {
  const componentVariablesMap = {};
  const udesignDir = path.join(__dirname, '../../../packages/udesign-ui/src/components');
  fs.readdirSync(udesignDir).map((dirname) => {
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
