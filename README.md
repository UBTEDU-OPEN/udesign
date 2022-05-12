# README

## 目录结构

使用 monorepo

```
├── app
│   └── @ubt/udesign-website    (nextjs, tailwindcss, react, typescript)
└── packages
    ├── @ubt/udesign-ui         (react, typescript, scss)
    ├── @ubt/udesign-utils
    └── @ubt/udesign-ui-alpha
```

### app

@ubt/udesign-website: udesign 网站源码，SSG，包含组件文档和使用案例。

### packages

@ubt/udesign-ui： React 组件库源码，建设中，会有更多组件加入。
@ubt/udesign-utils: 工具库，目前 udesign 内部使用。
@ubt/udesign-ui-alpha： 预研版本，仅用作演示，后面会废弃。

## Deploy

### 公司私服发 npm 包

```bash
cd packages/udesign-ui
yarn deploy
```

### 网站更新

```bash
cd app/website
yarn export
```

使用 nextjs 构建，将生成的 `out` 目录上传到服务器。（CI 工具待添加）

## 使用说明

请移步具体目录的说明：

[CSS 变量规范](app\website\src\docs\guide\css-variables.md)

[接入说明](app\website\src\docs\guide\quick-start.md)

[website](app/website/readme.md)

[udesign-ui](packages/udesign-ui/readme.md)

## TODO

- tsconfig 公共部分抽离
- 编写脚本将 `theme.scss` 和 `variables.scss` 输出为页面（思路：fs 正则（:和//）处理 scss 文件输出 json 文件，页面请求 json 文件作为数据源。）
