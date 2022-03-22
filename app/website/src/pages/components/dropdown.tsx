import React, { useState } from 'react';
import { Demo } from 'demo';
import { Dropdown, Button, Menu } from '@ubt/udesign-ui-alpha';

export default function ModalPage() {
  const menu = (
    <Menu>
      <Menu.Item key='1'>Profile</Menu.Item>
      <Menu.Item key='2' disabled>
        My Account
      </Menu.Item>
      <Menu.Item key='3'>Logoooooooooooooooooooooooooooooooooooooout</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Demo.Page title='Dropdown 下拉菜单' description='向下弹出的菜单列表。' todo='根据 placement 进行 absolute 定位；支持箭头；'>
        <Demo.Block title='基础用法' description='通过 overlay 来指定菜单内容，一般使用 Menu 组件。'>
          <Dropdown content={menu}>
            <Button type='link'>Hover me</Button>
          </Dropdown>
        </Demo.Block>
        {/* <Demo.Block title='交互' description='菜单在临时的表面上显示选择列表。 当用户和一个按钮、或者其他控制元件交互的时候，菜单会出现。'>
          <div className='relative inline-block'>
            <Button type='primary' onClick={() => setVisible(!visible)}>
              Dashboard
            </Button>
            {visible ? (
              <Dropdown border placement='topRight'>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item disabled>My Account</Dropdown.Item>
                <Dropdown.Item>Logoooooooooooooooooooooooooooooooooooooout</Dropdown.Item>
              </Dropdown>
            ) : null}
          </div>
        </Demo.Block> */}
      </Demo.Page>
    </>
  );
}
