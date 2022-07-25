# uDesign

一个意在统一所有教育产品设计风格的项目，包含设计规范、开发规范和开箱即用的 React 组件库。

## 如何使用

```bash
$ yarn add @ubt/udesign-ui@latest
# or
$ npm install --save @ubt/udesign-ui@latest
```

## 如何贡献

### 拉取代码仓库

http://gerrit.edu.ubtrobot.com/admin/repos/edu-libraries/udesign

### 启动服务

```
cd app\website
yarn dev
```

在 `packages\udesign-ui` 里写组件的代码，在 `app\website` 里写组件的演示和文档。

访问 `http://localhost:3000/` 查看你的组件演示和文档。

### 遵守开发规范

正式开发组件前，请务必阅读 [uDesign 组件开发规范](\spec.md)

### 提交代码

提交代码到 gerrit，记得 add reviewer（向明）
