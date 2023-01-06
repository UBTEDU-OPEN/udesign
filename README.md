# README

## 本地开发

```bash
# 安装依赖
yarn

# 运行演示网站
cd .\app\website
yarn dev
```

## 目录结构

使用 monorepo 管理。

```
├── app
│   └── @ubt/udesign-website    (next.js, tailwindcss, react, typescript)
└── packages
    ├── @ubt/udesign-ui         (react, typescript, scss)
    └── @ubt/udesign-icons
```

### app

- @ubt/udesign-website: udesign 文档网站源码，使用 next.js + tailwindcss 构建。

### packages

- @ubt/udesign-ui： React 组件库源码，是 uDesign 的核心内容。
- @ubt/udesign-icons： uDesign 图标库源码，是 uDesign 的核心内容。

## TODO

- [ ] tsconfig 公共部分抽离
- [ ] 单元测试
- [ ] 图片压缩
- [ ] RTL 支持
- [ ] utils 抽到 udesign-utils
