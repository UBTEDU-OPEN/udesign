import React from 'react';
import { Demo } from 'demo';
import { Menu } from '@ubt/udesign-ui';

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
        <Demo.Block title='顶部导航' description='通过 mode 设置菜单模式'>
          <Menu defaultActiveKey='1' mode='horizontal'>
            <Menu.Item name='1'>Navigation One</Menu.Item>
            <Menu.Item name='2' disabled>
              Navigation Two
            </Menu.Item>
            <Menu.Submenu title='Navigation Three - Submenu'>{Submenu}</Menu.Submenu>
            <Menu.Item name='4'>Navigation Four - Link</Menu.Item>
          </Menu>
        </Demo.Block>
        <Demo.Block title='侧边栏导航' description='默认垂直的导航菜单。'>
          <Menu className='w-60 border-r' defaultActiveKey='1'>
            <Menu.Item name='1'>Navigation One</Menu.Item>
            <Menu.Item name='2' disabled>
              Navigation Two
            </Menu.Item>
            <Menu.Submenu title='Navigation Three - Submenu'>{Submenu}</Menu.Submenu>
            <Menu.Item name='4'>Navigation Four - Link</Menu.Item>
          </Menu>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
