const webpack = require('webpack');
const pkg = require('./package.json');

const { withContentlayer } = require('next-contentlayer');
const withTM = require('next-transpile-modules')(['@ubt/udesign-ui', '@ubt/udesign-icons']);

const basePath = process.env.UDESIGN_BASE_PATH || '';

module.exports = withTM(
  withContentlayer({
    // 你项目中其他的 Next.js 配置
    reactStrictMode: true,
    trailingSlash: true,
    basePath,
    inlineImageLimit: false,
    webpack: (config, options) => {
      // Perform customizations to config
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.UDESIGN_VERSION': JSON.stringify(pkg.version),
        }),
      );
      // Important: return the modified config
      return config;
    },
  }),
);
