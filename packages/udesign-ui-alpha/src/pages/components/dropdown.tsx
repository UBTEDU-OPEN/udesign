import React, { useState } from 'react';
import { Demo } from 'demo';
import { Dropdown, Button } from '@ubt/udesign-ui-alpha';

export default function ModalPage() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Demo.Page title='Dropdown 下拉菜单' description='向下弹出的菜单列表。' todo='根据 placement 进行 absolute 定位；支持箭头；'>
        <Demo.Block title='基础用法' description='通过 disabled 来禁用指定项。' transform>
          <Dropdown>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>My Account</Dropdown.Item>
            <Dropdown.Item disabled>Logout</Dropdown.Item>
          </Dropdown>
        </Demo.Block>
        <Demo.Block title='交互' description='菜单在临时的表面上显示选择列表。 当用户和一个按钮、或者其他控制元件交互的时候，菜单会出现。'>
          <div className='relative inline-block'>
            <Button type='primary' onClick={() => setVisible(!visible)}>
              Dashboard
            </Button>
            {visible ? (
              <Dropdown border placement='topRight'>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>My Account</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown>
            ) : null}
          </div>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
