import React, { useState } from 'react';
import { Button, Dropdown, Divider, Space, Input, Toast } from '@ubt/udesign-ui';
import { DownOutlined, ExclamationCircleFilled } from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

const menu = (
  <Dropdown.Menu onClick={(name) => Toast(name)}>
    <Dropdown.Item name='1'>1 st menu item</Dropdown.Item>
    <Dropdown.Item name='2'>2 st menu item</Dropdown.Item>
    <Dropdown.Item name='3' disabled>
      3 st menu item(disabled)
    </Dropdown.Item>
    <Divider />
    <Dropdown.Item name='4' danger icon={<ExclamationCircleFilled />}>
      a danger item
    </Dropdown.Item>
  </Dropdown.Menu>
);

export default function DropdownPage() {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      <Demo.Page title='Dropdown 下拉菜单' description='向下弹出的菜单列表。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              <b>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</b>
              <br />
              <br />
              * 用于收罗一组命令操作。 <br />
              * Select 用于选择，而 Dropdown 是命令集合。
              <br />
            </>
          }
        />
        <Demo.Block title='基础用法' description='最简单的下拉菜单。通过设置 disabled 可以禁用某个选项。通过在 Dropdown.Item 上设置 icon 可以快速配置图标。'>
          <Dropdown content={menu}>
            <Button type='text'>
              <div className='flex items-center'>
                Hover me <DownOutlined className='ml-5' />
              </div>
            </Button>
          </Dropdown>
        </Demo.Block>
        <Demo.Block title='点击不关闭' description='通过 clickToHide 控制在弹出层内点击时是否自动关闭弹出层。'>
          <Dropdown content={menu} clickToHide={false}>
            <Button type='text'>
              <div className='flex items-center'>
                Hover me <DownOutlined className='ml-5' />
              </div>
            </Button>
          </Dropdown>
        </Demo.Block>
        <Demo.Block title='弹出位置' description='支持 6 个弹出位置。'>
          <Space vertical align='start'>
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
        <Demo.Block title='带箭头展示' description='通过 showArrow 可以展示一个箭头。'>
          <Space vertical align='start'>
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
        </Demo.Block>
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
          <br />
          <br />
          <Dropdown content={menu} trigger='custom' visible={visible}>
            <Space>
              <Button onClick={() => setVisible(true)}>Controlled show</Button>
              <Button onClick={() => setVisible(false)}>Controlled hide</Button>
            </Space>
          </Dropdown>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

DropdownPage.getLayout = getLayout;
