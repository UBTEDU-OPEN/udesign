# uDesign Icons

该项目是 uDesign 的图标库。

[uDesign](http://npm.edu.ubtrobot.com/-/web/detail/@ubt/udesign-ui)

## 如何使用

```bash
$ yarn add @ubt/udesign-icons@latest
```

## 如何贡献

### 拉取代码仓库

http://gerrit.edu.ubtrobot.com/admin/repos/edu-libraries/udesign

### 导入 svg

将 svg 图标文件放到 `packages\udesign-icons\src\svgs`

注意文件命名规范，脚本将根据文件名生产 React 组件。

例如：`caret_down_outlined.svg` 将被转化为 `<CaretDownOutlined />`

### 编译转化

在 `packages\udesign-icons` 目录执行下面的命令，脚本会自动将 svg 文件转化为 React 组件。

```bash
yarn build
```

### 使用检查

启动 udesign 本地服务，检查图标是否能够正常使用。

```
cd app\website
yarn dev
```

在 `app\website\src\pages\components\icon.tsx` 里，引用你的图标，访问 `http://localhost:3000/components/icon/` 查看你的图标是否运行正常。

### 提交代码

提交代码到 gerrit，记得 add reviewer（向明）

### 发版

代码没问题，你可以自行发版到 NPM。

记得更改 `package.json` 里面的版本号。

例如 1.0.0-1 更改为 1.0.0-2

```bash
yarn deploy
```
