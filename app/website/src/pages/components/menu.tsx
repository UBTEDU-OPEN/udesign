import React from 'react';
import { Demo } from 'demo';
import { Menu } from '@ubt/udesign-ui-alpha';

export default function ModalPage() {
  return (
    <>
      <Demo.Page title='Menu 导航菜单' description='为页面和功能提供导航的菜单列表。' todo='支持子菜单'>
        <Demo.Block title='水平菜单' description='水平的顶部导航菜单。' transform>
          <Menu>
            <Menu.Item name='1'>Navigation One</Menu.Item>
            <Menu.Item name='2' disabled>
              Navigation Two
            </Menu.Item>
            <Menu.Item name='3'>Navigation Three - Submenu</Menu.Item>
            <Menu.Item name='4'>Navigation Four - Link</Menu.Item>
          </Menu>
        </Demo.Block>
        <Demo.Block title='垂直菜单' description='通过 vertical 设置菜单为垂直模式' transform>
          <Menu vertical>
            <Menu.Item name='1'>Navigation One</Menu.Item>
            <Menu.Item name='2' disabled>
              Navigation Two
            </Menu.Item>
            <Menu.Item name='3'>Navigation Three - Submenu</Menu.Item>
            <Menu.Item name='4'>Navigation Four - Link</Menu.Item>
          </Menu>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
