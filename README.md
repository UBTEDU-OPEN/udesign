# README

## 目录结构

使用 monorepo

```
├── app
│   └── @ubt/udesign-website    (nextjs, tailwindcss, typescript)
└── packages
    ├── @ubt/udesign-ui         (webpack, gulp, scss, typescript)
    ├── @ubt/udesign-utils
    └── @ubt/udesign-ui-alpha
```

### app

@ubt/udesign-website: udesign 网站源码，SSG，包含组件文档和使用案例。

### packages

@ubt/udesign-ui： React 组件库源码，建设中，会有更多组件加入。
@ubt/udesign-utils: 工具库，udesign 内部使用。
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

[website](app/website/readme.md)

[udesign-ui](packages/udesign-ui/readme.md)

## TODO

- tsconfig 公共部分抽离
