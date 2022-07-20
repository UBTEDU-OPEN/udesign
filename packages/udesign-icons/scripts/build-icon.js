/**
 * 转换svg元素成React组件（上层使用，可根据需要移到上层 package）
 */
const { resolve } = require('path');
const build = require('./build-svg');

// 配置路径
const entryDir = resolve(__dirname, '../src/svgs');
const outDir = resolve(__dirname, '../src/icons');

// TODO: componentName 没有正确输出，一直为 SvgComponent
const customTemplate = ({ template }, opts, { imports, interfaces, componentName, props, jsx, exports }) => {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins });
  return typeScriptTpl.ast`${imports}
import { convertIcon } from '../components/icon/icon';

${interfaces}
function ${componentName}(${props}) {
  return ${jsx};
}

const IconComponent = convertIcon(${componentName});
IconComponent.displayName = 'IconComponent';
export default IconComponent;
`;
};

const svgoPlugins = [
  {
    name: 'convertColors',
    params: { currentColor: /^(?!url|none)./ },
  },
  {
    name: 'cleanupListOfValues',
    active: true,
  },
  {
    name: 'removeStyleElement',
    active: true,
  },
  {
    name: 'removeViewBox',
    active: false,
  },
  {
    name: 'removeDimensions',
    active: true,
  },
];

// 主程序入口
build(entryDir, outDir, '', '', svgoPlugins, { typescript: true, icon: true, template: customTemplate });
