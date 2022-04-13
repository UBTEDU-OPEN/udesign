import React from 'react';
import { Demo } from 'demo';
import { Button, Dropdown } from '@ubt/udesign-ui';
import { Menu, Input, Space, Divider } from '@ubt/udesign-ui-alpha';

export default function DropdownPage() {
  const menu = (
    <Menu>
      <Menu.Item name='1'>1st menu item</Menu.Item>
      <Menu.Item name='2' disabled>
        2st menu item(disabled)
      </Menu.Item>
      <Divider />
      <Menu.Item name='3'>3st menu item</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Demo.Page title='Dropdown 下拉菜单' description='向下弹出的菜单列表。'>
        <Demo.Block title='基础用法' description='通过 content 来指定菜单内容，一般使用 Menu 组件。'>
          <Dropdown content={menu}>
            <Button>Hover me</Button>
          </Dropdown>
        </Demo.Block>
        <Demo.Block title='弹出位置' description='通过 content 来指定菜单内容，一般使用 Menu 组件。'>
          <Space vertical>
            <Space>
              <Dropdown content={menu} placement='topLeft'>
                <Button>topLeft</Button>
              </Dropdown>
              <Dropdown content={menu} placement='top'>
                <Button>top</Button>
              </Dropdown>
              <Dropdown content={menu} placement='topRight'>
                <Button>topRight</Button>
              </Dropdown>
            </Space>
            <Space>
              <Dropdown content={menu} placement='bottomLeft'>
                <Button>bottomLeft</Button>
              </Dropdown>
              <Dropdown content={menu} placement='bottom'>
                <Button>bottom</Button>
              </Dropdown>
              <Dropdown content={menu} placement='bottomRight'>
                <Button>bottomRight</Button>
              </Dropdown>
            </Space>
          </Space>
        </Demo.Block>
        {/* <Demo.Block title='带箭头展示' description='弹出菜单可以展示一个箭头。'>
          <Space vertical>
            <Space>
              <Dropdown content={menu} placement='topLeft' showArrow>
                <Button>topLeft</Button>
              </Dropdown>
              <Dropdown content={menu} placement='top' showArrow>
                <Button>top</Button>
              </Dropdown>
              <Dropdown content={menu} placement='topRight' showArrow>
                <Button>topRight</Button>
              </Dropdown>
            </Space>
            <Space>
              <Dropdown content={menu} placement='bottomLeft' showArrow>
                <Button>bottomLeft</Button>
              </Dropdown>
              <Dropdown content={menu} placement='bottom' showArrow>
                <Button>bottom</Button>
              </Dropdown>
              <Dropdown content={menu} placement='bottomRight' showArrow>
                <Button>bottomRight</Button>
              </Dropdown>
            </Space>
          </Space>
        </Demo.Block> */}
        <Demo.Block title='触发方式' description='默认是移入触发菜单，可以通过 trigger 更改触发方式。'>
          <Dropdown content={menu} trigger='hover'>
            <Button>Hover me</Button>
          </Dropdown>
          <br />
          <br />
          <Dropdown content={menu} trigger='focus'>
            <Input placeholder='Focus me' />
          </Dropdown>
          <br />
          <br />
          <Dropdown content={menu} trigger='click'>
            <Button>Click me</Button>
          </Dropdown>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
