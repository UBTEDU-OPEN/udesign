# README

## 开发规范

### 必须使用 Typescript

Typescript 能够提供很好的代码检查功能，配合 vscode 在开发阶段就能第一时间洞悉语法错误。

### 优先使用 Function component

只在特殊情况下使用 class component

### 尽量不使用 React.FC，原因如下：

- https://github.com/facebook/create-react-app/pull/8177
- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/

### 尽量不要使用 prop-types

虽然 prop-types 和 typescript 不是完全的对等，但是完全没有必要在 typescript 项目中使用 prop-types

### 尽量不要使用 defaultProps

- https://github.com/facebook/react/pull/16210
- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/

### 使用 CSS 变量

css 变量提供了更加动态化的样式调整能力，也让组件的样式调整变得更加简洁优雅。

```css
.ud-button {color:#7284FB} ×
.ud-button {color:var(--ud-color-primary)} √
```

开发 uDesign 组件时，需要考虑组件样式的扩展性，禁止写死参数。

### 组件功能尽量最小化

参考原子设计规范 Atomic Design

## 约定

### 通用 Props

统一使用 NativeProps 来支持 style, className 和 children。

### Props 命名

统一使用 name 来作为标志符。（TODO: 使用 key 代替）
优先使用 children，来减少 Props 数量。（比如 Menu 的文案可使用 children，不需要增加一个 label 属性）

## 风格

已经在项目根目录配置了 `prettierrc.js`。

## 参考

https://onesignal.com/blog/effective-typescript-for-react-applications/
https://stackoverflow.com/questions/44208081/js-quote-best-practices-es6-react-single-double-backticks
