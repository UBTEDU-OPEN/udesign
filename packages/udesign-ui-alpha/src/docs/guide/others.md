# 其他说明

## Next.js

在 Next.js 中使用 udesign 需要做一些额外的配置。

首先，需要安装 `next-transpile-modules` 和 `next-images` 依赖：

```bash
$ npm install --save-dev next-transpile-modules next-images
# or
$ yarn add -D next-transpile-modules next-images
```

然后在 `next.config.js` 中进行配置：

```js
const withImages = require('next-images');

const withTM = require('next-transpile-modules')(['@ubt/udesign-ui']);

module.exports = withTM(
  withImages({
    // 你项目中其他的 Next.js 配置
    reactStrictMode: true,
  }),
);
```
