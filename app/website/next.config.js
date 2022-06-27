const withImages = require('next-images');

const withTM = require('next-transpile-modules')(['@ubt/udesign-ui', '@ubt/udesign-icons', '@ubt/udesign-ui-alpha']);

module.exports = withTM(
  withImages({
    // 你项目中其他的 Next.js 配置
    reactStrictMode: true,
    trailingSlash: true,
  }),
);
