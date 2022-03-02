const withTM = require('next-transpile-modules')(['@ubt/udesign-ui']);

module.exports = withTM({
  // 你项目中其他的 Next.js 配置
  reactStrictMode: true,
  trailingSlash: true,
});
