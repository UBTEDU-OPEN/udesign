# 更新日志

## v1.1.10

### 重要！！！

1. 对外暴露组件 `Props` 类型定义。比如：你现在可以 `import { ButtonProps } from '@ubt/udesign-ui'` ，这在某些情况下会非常好用。
2. 以前 `Tooltip` 组件没有默认的 `z-index` 值，现在被设置为 `1060`。
3. 以前 `empty` 组件默认图片太大了，我们换成了较小的图片。
4. `empty` 组件增加了 `imageStyle` 属性，用于向图片传样式。
5. 以前 `Copy` 组件的 `text` 属性是可选的，现在改为了 `required` 。
6. `Tabs` 组件增加了 `tabBarStyle` 属性，用于向 `tabbar` 传样式。

### 一般

1. 修复 carousel 使用 defaultIndex 时,禁用失效问题
2. 修复 website 切换导航，组件 api 不更新的问题
3. 修复 Breadcrumb 组件 className 冲突，点击时不触发回调函数的问题

## v1.1.9

### 新增

1. 演示网站左侧菜单保持当前位置，点击不再跳到顶部
2. 演示网站首页自动读取 package.json 版本号

### 修复

1. 修复 modal 传 style 样式不生效
2. 修复 carousel 父类元素已经隐藏, 但是 carousel 组件没有隐藏
3. 修复 内网地址变更（edu-web.ubtrobot.com/udesign/）后静态资源路径错误
4. 修复 skeleton 组件 paragraph 单独使用时不显示
5. 修复 radio 和 checkbox 组件 hover 时鼠标样式错误

## v1.1.8

### 更新

1. 内网地址变更：http://10.10.18.65:8083 ==> https://edu-web.ubtrobot.com/udesign/
2. Spin 组件新增 showLoading 和 hideLoading 两个方法，来支持快捷调用全局加载组件

### 修复

1. 修复 Collapse 组件受控失效

## v1.1.7

### 更新

1. Carousel 组件增加多个新的 API，具体请查阅组件文档
2. Select 组件增加 placement 属性，来控制下拉菜单出现的位置

### 修复

1. 修复 Modal 的 className 属性被挂载到多个 div 的问题
2. 修复 Carousel 仅有一张图片时按钮禁用问题
3. 修复父元素滚动的时候, dropdown menu 没有跟着滚动, 导致位置不一致
