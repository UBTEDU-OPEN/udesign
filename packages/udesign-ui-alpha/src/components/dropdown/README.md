# Dropdown

## 如何解决样式覆盖问题？

Dropdown 组件是 Tooltip 组件的二次封装，我们需要覆盖 Tooltip 自带样式。（比如黑色背景）

一个一个样式覆盖一个是低效，二个是很难维护。

### 解决方案

从上层传入 prefixCls 来改变下层组件（Tooltip）的 className。

例如，我们为 Tooltip 设置一个默认的 `prefixCls = 'ud-tooltip'`，当上层传入了 `prefixCls` 时，下层就不输出自带的样式。

```jsx
const { prefixCls = 'ud-tooltip' } = props;
const cls = className({ [`${prefixCls}-wrapper`]: true });
```
