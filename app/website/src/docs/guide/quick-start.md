---
title: '快速开始'
description: ''
---

# 快速开始

`uDesign` 是一个意在统一所有教育产品设计风格的项目，包含设计规范、开发规范和开箱即用的 React UI 组件库。

## 特性

- 提炼自 uCode 产品的交互语言和视觉风格。
- 开箱即用的高质量 React 组件。
- 使用 TypeScript 开发，提供完整的类型定义文件。
- 深入每个细节的主题定制能力。

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install --save @ubt/udesign-ui@latest
```

```bash
$ yarn add @ubt/udesign-ui@latest
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

<!-- ### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `udesign`。

我们在 npm 发布包内的 `udesign/dist` 目录下提供了 `udesign.js` `udesign.css` 以及 `udesign.min.js` `udesign.min.css`。你也可以通过 [![CDNJS](https://img.shields.io/cdnjs/v/udesign.svg?style=flat-square)](https://cdnjs.com/libraries/udesign)，[![](https://data.jsdelivr.com/v1/package/npm/udesign/badge)](https://www.jsdelivr.com/package/npm/udesign) 或 [UNPKG](https://unpkg.com/udesign/dist/) 进行下载。

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。 -->

## 按需加载

`udesign` 的 JS 代码默认支持基于 ES modules 的 tree shaking。

## TypeScript

`udesign` 使用 TypeScript 进行书写并提供了完整的定义文件。（不要引用 `@types/udesign`）。

## 兼容性

现代浏览器（深色模式/样式文件依赖于 CSS variable，最低版本要求为 edge，ie11 及以下均不支持）