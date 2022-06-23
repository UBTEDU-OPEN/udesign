# README

## 开发

```
yarn
cd .\app\website
yarn dev
```

## 目录结构

使用 lerna 进行 monorepo 的管理。

```
├── app
│   └── @ubt/udesign-website    (next.js, tailwindcss, react, typescript)
└── packages
    ├── @ubt/udesign-ui         (react, typescript, scss)
    ├── @ubt/udesign-utils
    └── @ubt/udesign-ui-alpha
```

### app

@ubt/udesign-website: udesign 网站源码，使用 next.js + tailwindcss 构建，包含组件文档和使用案例。

### packages

@ubt/udesign-ui： React 组件库源码，是 uDesign 的核心内容。
@ubt/udesign-utils: 工具库，目前 udesign 内部使用，后面可能会单独发包。
@ubt/udesign-ui-alpha： 预研版本，使用 tailwind 构建，仅用于临时网站演示，后面会废弃。不要使用！！！

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

构建完成后，将生成的 `out` 目录上传到临时 FTP 服务器。

Host: 10.10.18.65
username: ucode
password: ucode
port: 22

## 使用说明

请移步具体目录的说明：

[CSS 变量规范](app\website\src\docs\guide\css-variables.md)

[接入说明](app\website\src\docs\guide\quick-start.md)

[website](app/website/readme.md)

[udesign-ui](packages/udesign-ui/readme.md)

## TODO

- tsconfig 公共部分抽离
- 编写脚本将组件API输出为页面（思路：fs 正则（:和//）处理 scss 文件输出 json 文件，页面请求 json 文件作为数据源。）
- 多语言（ConfigContext 方案）
