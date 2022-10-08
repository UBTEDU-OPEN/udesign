# README

## 开发

```bash
# 安装依赖
yarn

# 运行演示网站
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
    ├── @ubt/udesign-icons
    └── @ubt/udesign-utils
```

### app

@ubt/udesign-website: udesign 网站源码，使用 next.js + tailwindcss 构建，包含组件文档和使用案例。

### packages

@ubt/udesign-ui： React 组件库源码，是 uDesign 的核心内容。
@ubt/udesign-icons： React 图标库源码，是 uDesign 的核心内容。
@ubt/udesign-utils: 工具库，目前 udesign 内部使用，后面可能会单独发包。

## Deploy

### 公司私服发 npm 包

```bash
# 更新 package.json 版本号
lerna version

# 打包并发布
cd packages/udesign-ui
yarn deploy
```

### 网站更新

不再需要手动打包上传，直接在 [Jenkins](http://jenkins.edu.ubtrobot.com/view/uDesign/job/udesign-build/) 里面打包即可。

1. Build with Parameters
2. 测试版
3. 页面构建
4. 开始构建

如果需要将静态文件部署到其他地方，可以运行下面的命令：

```bash
cd app/website
yarn export
```

构建完成后，将生成的 `out` 目录上传即可。

## 使用说明

请移步具体目录的说明：

[CSS 变量规范](app\website\src\docs\guide\css-variables.md)

[接入说明](app\website\src\docs\guide\quick-start.md)

[website](app/website/readme.md)

[udesign-ui](packages/udesign-ui/readme.md)

## TODO

- tsconfig 公共部分抽离
- website 响应式设计（已使用临时方案处理手机视图）
- website 代码高亮和复制等
- 单元测试
- 图片压缩
- RTL 支持
- utils 抽到 udesign-utils
