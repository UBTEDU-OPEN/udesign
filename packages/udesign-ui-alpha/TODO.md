# TODO List

## 部署

- 使用文档
-

## 组件

- Dropdown 下拉菜单（参考 didi 和 antd-mobile）依赖 Popup
- Tabbar 底部导航组件
- Swipe 滑动轮播组件
- Space 应用到其他组件
- ImageReader 图片选择器
- ImageViewer 图片查看器
- Demobox 增加滚动条 scrollbar（确保网页不出现滚动条）
- Scrollbar 组件改成 mixin

## Transition 动画

动画使用 [react-spring](https://github.com/pmndrs/react-spring) 和官方组件 [React Transition Group](https://reactcommunity.org/react-transition-group/with-react-router)，可以进行二次封装为单独的组件，以减少范式代码。

待添加动画的组件列表：

- Collapse
- Tabs
- Popup
- Modal

## Icon 图标

常用 icon 是必需内置（self support 原则）的，否则使用的时候就需要安装第三方库。

icon 达到一定数量的话，最好拆分为单独库来管理。

## 多语言

需要评估组件自带的文案