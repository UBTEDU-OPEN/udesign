const fs = require('fs');
const path = require('path');
const lodash = require('lodash');

// 过滤注释行
const isComment = (codeLine) => lodash.startsWith(codeLine, '//') || lodash.startsWith(codeLine, '/*') || lodash.startsWith(codeLine, '@import');

// 如果变量太多，可能需要进行分类
const getTokenCategory = (codeLine) => {
  const categorySet = new Set(['color', 'width', 'height', 'spacing', 'radius', 'font', 'motion']);
  const firstWord = lodash.get(codeLine.match(/\$([\w\W]+?)-/), 1, { toLowerCase: () => null }).toLowerCase();
  if (firstWord) {
    return categorySet.has(firstWord) ? firstWord : 'other';
  } else {
    return 'other';
  }
};

// 行内数据拆分
const codeLineSplit = (codeLine) => {
  const [key, value, comment] = codeLine
    .split(/:|\/\/|\/\*/)
    .map((code) => code.trim())
    .filter((code) => code);
  return { key, value: lodash.trimEnd(value, ';'), comment, category: getTokenCategory(codeLine), raw: codeLine };
};

// 主程序：抽离所有的变量
async function main() {
  const componentVariablesMap = {};
  const udesignUIDir = path.join(__dirname, '../../../packages/udesign-ui/src/components');
  fs.readdirSync(udesignUIDir).map((dirname) => {
    const variableSCSSPath = path.join(udesignUIDir, dirname, 'variables.scss');
    if (fs.existsSync(variableSCSSPath)) {
      const raw = fs.readFileSync(variableSCSSPath, { encoding: 'utf-8' });
      const scssCodeLineList = raw.split('\n').filter((codeLine) => codeLine && !isComment(codeLine));
      componentVariablesMap[dirname.toLowerCase()] = scssCodeLineList.map((codeLine) => codeLineSplit(codeLine));
    }
  });
  const [_, __, savePath] = process.argv;
  fs.writeFileSync(savePath || './designToken.json', JSON.stringify(componentVariablesMap));
}

main();
