# uDesign 组件开发规范

## 必须使用 Typescript

Typescript 能够提供很好的代码检查功能，配合 vscode 在开发阶段就能第一时间洞悉语法错误。

## 优先使用 Function component

只在少数特殊情况下使用 class component

## 不使用 React.FC

```tsx
// bad
export const Button: React.FC<ButtonProps> = (props) => {
  ...
}

// good
export const Button = (props: ButtonProps) => {
  ...
}

// good
export const Button = ({type, size, ...restProps}: ButtonProps) => {
  ...
}
```

原因参考：

- https://github.com/facebook/create-react-app/pull/8177
- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/

## 不使用 prop-types

虽然 `prop-types` 和 `typescript` 不是完全的对等，但是完全没有必要在 `typescript` 项目中使用 `prop-types`。

## 不使用 defaultProps

```tsx
// bad
Button.defaultProps = {
  type: 'default',
  size: 'middle',
};

// good
export const Button = ({type = 'default', size = 'middle', ...restProps}: ButtonProps) => {
  ...
}
```

原因参考：

- https://github.com/facebook/react/pull/16210
- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/

## 不使用 enum

`type` 更方便进行扩展，书写时也能方便进行提示。

```ts
// bad
enum ButtonSize {
  LARGE = 'large',
  MIDDLE = 'middle',
  SMALL = 'small',
}

// good
type ButtonSize = 'large' | 'middle' | 'small';

// Extensible:
type ExtendedButtonSize = ButtonSize | 'mini';
```

## 必须使用 CSS 变量

`css` 变量提供了更加动态化的样式调整能力，也让组件的样式调整变得更加简洁优雅。

```scss
// bad
.ud-button {
  color: #7284fb;
}
// bad
.ud-button {
  color: var(--ud-color-primary);
}

// good
.ud-button {
  color: $button-color-primary;
}
// variables.scss
$button-color-primary: var(--ud-button-color-primary, var(--ud-color-primary)); // 默认态按钮主要色
```

## 必须使用 CSS 变量接口

开发 `uDesign` 组件时，需要考虑组件样式的扩展性，使用 `var` 对外暴露 `CSS` 变量接口，禁止写死属性。

```scss
// bad
$button-color-primary: #7284fb; // 默认态按钮主要色

// good
$button-color-primary: var(--ud-button-color-primary, var(--ud-color-primary)); // 默认态按钮主要色
```

## 必须使用 variables.scss

必须将所有 `SCSS` 变量提取到 `variable.scss` 文件中，因为我们的脚本依赖它来更新文档页面的 `CSS API` 章节。

## 拆分组件

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

## 使用 NativeProps

所有组件统一使用 `NativeProps` 来支持 `style`, `className` 和 `children` 属性。

```ts
import { NativeProps } from '../../utils';

export type ButtonProps = {
  ...
} & NativeProps;
```

## 使用 name

统一使用 `name` 来作为组件的唯一标志符，不使用 `activeKey` 的原因是方便书写。

```ts
export type ItemProps = {
  name: string; // 唯一标志符
  // ...
} & NativeProps;
```

## 使用代码校验

项目已经配置了 `lint` 脚本，提交代码时会自动检查。一般来说，你不需要关注这个。

## 参考

https://onesignal.com/blog/effective-typescript-for-react-applications/
