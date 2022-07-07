import React from 'react';
import { Menu } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function MenuPage() {
  const Submenu = (
    <Menu defaultActiveKey='1'>
      <Menu.Item name='1'>Option 1</Menu.Item>
      <Menu.Item name='2' disabled>
        Option 2(disabled)
      </Menu.Item>
      <Menu.Item name='3'>Option 3</Menu.Item>
      <Menu.Item name='4'>Option 4</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Demo.Page title='Menu 导航菜单' description='为页面和功能提供导航的菜单列表。'>
        <Demo.Block title='何时使用' description='用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。' />
        <Demo.Block
          title='*开发者注意事项'
          description={
            <>
              Menu 元素为 ul，因而仅支持 li 以及 script-supporting 子元素。因而你的子节点元素应该都在 Menu.Item 内使用。
              <br />
              Menu 需要计算节点结构，因而其子元素仅支持 Menu。以及对此进行封装的 HOC 组件。
            </>
          }
        />
        <Demo.Block title='顶部下拉抽屉式导航' description='水平的顶部单行tab一级导航菜单，下拉展示抽屉二级菜单。'>
          <Menu defaultActiveKey='1' mode='horizontal'>
            <Menu.Item name='1'>Navigation One</Menu.Item>
            <Menu.Item name='2' disabled>
              Navigation Two
            </Menu.Item>
            <Menu.Submenu title='Navigation Three - Submenu'>{Submenu}</Menu.Submenu>
            <Menu.Item name='4'>
              <a href='#'>Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        </Demo.Block>
        {/* <Demo.Block title='侧边栏内嵌菜单' description='垂直菜单，二级菜单内嵌在一级菜单区域。' todo='依赖Collapse折叠组件' /> */}
        {/* <Demo.Block title='只展开当前一级别菜单' description='点击一个菜单，收起其他已展开的菜单，保持只显示一个菜单，聚焦简洁。' todo='依赖Collapse折叠组件' /> */}
        {/* <Demo.Block
          title='可收起的内嵌菜单'
          description={
            <>
              内嵌菜单可以被缩起/展开。
              <br />
              你可以在 Layout 里查看侧边布局结合的完整示例。
            </>
          }
          todo='依赖Collapse折叠组件'
        /> */}
        <Demo.Block title='垂直菜单' description='二级菜单是弹出形式，仅支持至二级菜单。'>
          <Menu className='w-60 border-r' defaultActiveKey='1'>
            <Menu.Item name='1'>Navigation One</Menu.Item>
            <Menu.Item name='2' disabled>
              Navigation Two
            </Menu.Item>
            <Menu.Submenu title='Navigation Three - Submenu'>{Submenu}</Menu.Submenu>
          </Menu>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
