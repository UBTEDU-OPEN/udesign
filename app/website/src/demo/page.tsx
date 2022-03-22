import React from 'react';
import classNames from 'classnames';
import { Layout, SideMenu } from './layouts';
import { NativeProps } from '@ubt/udesign-utils';

// 通用
const basicMenus = [
  {
    name: 'button',
    text: 'Button 按钮',
  },
  {
    name: 'icon',
    text: 'Icon 图标',
    disabled: true,
  },
  {
    name: 'typography',
    text: 'Typography 排版',
  },
];

// 布局
const layoutMenus = [
  {
    name: 'divider',
    text: 'Divider 分割线',
  },
  {
    name: 'grid',
    text: 'Grid 栅格',
    disabled: true,
  },
  {
    name: 'layout',
    text: 'Layout 布局',
  },
  {
    name: 'space',
    text: 'Space 间距',
  },
];

// 导航
const navMenus = [
  {
    name: 'affix',
    text: 'Affix 固钉',
    disabled: true,
  },
  {
    name: 'breadcrumb',
    text: 'Breadcrumb 面包屑',
  },
  {
    name: 'dropdown',
    text: 'Dropdown 下拉菜单',
  },
  {
    name: 'menu',
    text: 'Menu 导航菜单',
  },
  {
    name: 'pageHeader',
    text: 'PageHeader 页头',
    disabled: true,
  },
  {
    name: 'pagination',
    text: 'Pagination 分页',
    disabled: true,
  },
  {
    name: 'steps',
    text: 'Steps 步骤',
    disabled: true,
  },
];

// 数据录入
const inputMenus = [
  {
    name: 'autoComplete',
    text: 'AutoComplete 自动完成 ',
    disabled: true,
  },
  {
    name: 'cascader',
    text: 'Cascader 级联选择',
    disabled: true,
  },
  {
    name: 'checkbox',
    text: 'Checkbox 多选框',
  },
  {
    name: 'datepicker',
    text: 'DatePicker 日期选择框',
    disabled: true,
  },
  {
    name: 'form',
    text: 'Form 表单',
    disabled: true,
  },
  {
    name: 'input',
    text: 'Input 输入框',
  },
  {
    name: 'InputNumber',
    text: 'InputNumber 数字输入框',
    disabled: true,
  },
  {
    name: 'mentions',
    text: 'Mentions 提及',
    disabled: true,
  },
  {
    name: 'radio',
    text: 'Radio 单选框',
  },
  {
    name: 'rate',
    text: 'Rate 评分',
    disabled: true,
  },
  {
    name: 'select',
    text: 'Select 选择器',
    disabled: true,
  },
  {
    name: 'slider',
    text: 'Slider 滑动选择器',
    disabled: true,
  },
  {
    name: 'switch',
    text: 'Switch 开关',
  },
  {
    name: 'timePicker',
    text: 'TimePicker 时间选择框',
    disabled: true,
  },
  {
    name: 'transfer',
    text: 'Transfer 穿梭框',
    disabled: true,
  },
  {
    name: 'treeSelect',
    text: 'TreeSelect 树选择',
    disabled: true,
  },
  {
    name: 'upload',
    text: 'Upload 上传',
    disabled: true,
  },
];

// 数据展示
const showMenus = [
  {
    name: 'avatar',
    text: 'Avatar 头像',
  },
  {
    name: 'badge',
    text: 'Badge 徽标',
  },
  {
    name: 'calendar',
    text: 'Calendar 日历',
    disabled: true,
  },
  {
    name: 'card',
    text: 'Card 卡片',
  },
  {
    name: 'Carousel',
    text: 'Carousel 走马灯',
    disabled: true,
  },
  {
    name: 'collapse',
    text: 'Collapse 折叠面板',
  },
  {
    name: 'comment',
    text: 'Comment 评论',
    disabled: true,
  },
  {
    name: 'descriptions',
    text: 'Descriptions 描述列表',
    disabled: true,
  },
  {
    name: 'empty',
    text: 'Empty 空状态',
    disabled: true,
  },
  {
    name: 'image',
    text: 'Image 图片',
    disabled: true,
  },
  {
    name: 'list',
    text: 'List 列表',
    disabled: true,
  },
  {
    name: 'Popover',
    text: 'Popover 气泡卡片',
    disabled: true,
  },
  {
    name: 'statistic',
    text: 'Statistic 统计数值',
    disabled: true,
  },
  {
    name: 'table',
    text: 'Table 表格',
    disabled: true,
  },
  {
    name: 'tabs',
    text: 'Tabs 标签页',
  },
  {
    name: 'tag',
    text: 'Tag 标签',
  },
  {
    name: 'timeline',
    text: 'Timeline 时间轴',
    disabled: true,
  },
  {
    name: 'tooltip',
    text: 'Tooltip 文字提示',
    disabled: true,
  },
  {
    name: 'tree',
    text: 'Tree 树形控件',
    disabled: true,
  },
];

// 反馈
const feedbackMenus = [
  {
    name: 'alert',
    text: 'Alert 警告提示',
    disabled: true,
  },
  {
    name: 'Drawer',
    text: 'Drawer 抽屉',
    disabled: true,
  },
  {
    name: 'Message',
    text: 'Message 全局提示',
    disabled: true,
  },
  {
    name: 'Modal',
    text: 'Modal 对话框',
  },
  {
    name: 'Notification',
    text: 'Notification 通知提醒框',
    disabled: true,
  },
  {
    name: 'Popconfirm',
    text: 'Popconfirm 气泡确认框',
    disabled: true,
  },
  {
    name: 'Progress',
    text: 'Progress 进度条',
    disabled: true,
  },
  {
    name: 'Result',
    text: 'Result 结果',
    disabled: true,
  },
  {
    name: 'Skeleton',
    text: 'Skeleton 骨架屏',
  },
  {
    name: 'Spin',
    text: 'Spin 加载中',
  },
  {
    name: 'Toast',
    text: 'Toast 提示',
  },
];

// 其他
const otherMenus = [
  {
    name: 'anchor',
    text: 'Anchor 锚点',
    disabled: true,
  },
  {
    name: 'BackTop',
    text: 'BackTop 回到顶部',
    disabled: true,
  },
  {
    name: 'ConfigProvider',
    text: 'ConfigProvider 全局化配置',
    disabled: true,
  },
];

function Sidebar() {
  return (
    <>
      <div className='my-2 p-3 border-b font-bold'>通用</div>
      <SideMenu menus={basicMenus} />
      <div className='my-2 p-3 border-b font-bold'>布局</div>
      <SideMenu menus={layoutMenus} />
      <div className='my-2 p-3 border-b font-bold'>导航</div>
      <SideMenu menus={navMenus} />
      <div className='my-2 p-3 border-b font-bold'>数据录入</div>
      <SideMenu menus={inputMenus} />
      <div className='my-2 p-3 border-b font-bold'>数据展示</div>
      <SideMenu menus={showMenus} />
      <div className='my-2 p-3 border-b font-bold'>反馈</div>
      <SideMenu menus={feedbackMenus} />
      <div className='my-2 p-3 border-b font-bold'>其他</div>
      <SideMenu menus={otherMenus} />
    </>
  );
}

export type PageProps = {
  title?: string;
  description?: string;
  todo?: string;
} & NativeProps;

export const Page = ({ title, description, todo, children, className }: PageProps) => {
  const cls = classNames('p-20 mx-auto', className);
  return (
    <Layout sidebar={<Sidebar />}>
      <div className={cls}>
        {title ? <div className='text-3xl font-bold'>{title}</div> : null}
        {description ? <div className='text-gray-600 text-xl my-5'>{description}</div> : null}
        {todo ? <div className='text-indigo-600 my-5'>{todo}</div> : null}
        {children}
      </div>
    </Layout>
  );
};

Page.displayName = 'Demo.Page';
