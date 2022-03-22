# Tooltip

## 如何解决 hover 移出 trigger 时，弹出层消失的问题？

传统方式是将事件挂载到父元素上，但是我们的弹出层是独立的 portal，此法不通。

最终，我们使用定时器去延迟显示弹出层，并且在弹出层也挂载相同的事件。

当 trigger 触发 mouseLeave 时，创建一个定时器来 delayHide

```js
let timer = setTimeout((
  delayHide();
  clearTimer();
) =>, 50);
```

当鼠标 mouseEnter 到弹出层时，覆盖定时器。

```js
clearTimer(); // 将hide定时器清除了
timer = setTimeout((
  delayShow();
  clearTimer();
) =>, 50);
```

理论上，只要鼠标移动的足够快，当鼠标到达弹出层之前，delayHide 没有被触发，那它就会被覆盖。

## 如何判断 placement 在哪一侧？

```tsx
'topLeft'.indexOf('left') => -1
'leftTop'.indexOf('left') => 0
'left'.indexOf('left') => 0
'leftBottom'.indexOf('left') => 0
```

由上面可以看出，由 left 开头的三个位置，返回值都是 0，而 Left 结尾的不是 0

```tsx
function isLeft(placement) {
  return placement.indexOf('left') === 0;
}
```

方法简单又巧妙。
