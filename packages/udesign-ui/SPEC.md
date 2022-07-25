# uDesign 组件开发规范

## 必须使用 Typescript

Typescript 能够提供很好的代码检查功能，配合 vscode 在开发阶段就能第一时间洞悉语法错误。

## 优先使用 Function component

只在特殊情况下使用 class component

## 尽量不使用 React.FC，原因如下：

- https://github.com/facebook/create-react-app/pull/8177
- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/

## 尽量不使用 prop-types

虽然 prop-types 和 typescript 不是完全的对等，但是完全没有必要在 typescript 项目中使用 prop-types

## 尽量不使用 defaultProps

- https://github.com/facebook/react/pull/16210
- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/

## 尽量不使用 enum

```ts
// bad
enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

// good
type ButtonType = 'primary' | 'secondary';

// Extensible:
type ExtendedButtonType = ButtonType | 'tertiary';
```

## 必须使用 CSS 变量

css 变量提供了更加动态化的样式调整能力，也让组件的样式调整变得更加简洁优雅。

```scss
// button.scss
.ud-button {color: #7284FB} ×
.ud-button {color: var(--ud-color-primary)} ×
.ud-button {color: $button-color-primary} √
```

```scss
// variables.scss
$button-color-primary: var(--ud-button-color-primary, var(--ud-color-primary)); // 默认态按钮主要色
```

1. 必须使用 variable.scss，因为我们的脚本依赖它来更新文档页面。
2. 开发 uDesign 组件时，需要考虑组件样式的扩展性，禁止写死属性。

## 组件拆分

必须对组件进行拆分，以增加代码的可阅读性和可维护性。

```tsx
const renderPrepend = () => {...}
const renderPrefix = () => {...}
const renderInput = () => {...}
const renderClearBtn = () => {...}
const renderCount = () => {...}
const renderPasswordBtn = () => {...}
const renderSuffix = () => {...}
const renderAppend = () => {...}
...
```

可参考 [Input 组件](\src\components\input\input.tsx)

## 通用 Props

统一使用 `NativeProps` 来支持 `style`, `className` 和 `children。`

```ts
export type ButtonProps = {
  // Button 的 props...
} & NativeProps;
```

## Props 命名

统一使用 name 来作为组件的唯一标志符。

```ts
export type ItemProps = {
  name: string; // 唯一标志符
  // ...
} & NativeProps;
```

## 风格检查

项目已经配置了 `lint` 脚本，一般而言，你不需要关注这个。

## 参考

https://onesignal.com/blog/effective-typescript-for-react-applications/
