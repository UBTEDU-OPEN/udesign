import { HomeFilled, UnorderedListOutlined } from '@ant-design/icons';
import React from 'react';
import { Badge, Tabs, UserIcon } from '@ubt/udesign-ui-alpha';
import { Demo } from '../../demo';

export default function TabsPage() {
  return (
    <>
      <Demo.Page title='Tabs 标签页' description='对内容进行分组切换'>
        <Demo.Block title='基础用法' description='通过 defaultActiveKey 指定当前激活标签对应的 name，默认情况下激活第一个'>
          <Tabs defaultActiveKey={'2'} onChange={console.log}>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='卡片风格' description='默认为 line 样式，可以通过 type 属性切换样式风格。'>
          <Tabs type='card'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='按钮风格' description='默认为 line 样式，可以通过 type 属性切换样式风格。'>
          <Tabs type='button'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='开关风格' description='通过将 type 属性设置为 switch 切换到开关风格。'>
          <Tabs type='switch'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='水平滚动' description=''>
          <Tabs defaultActiveKey={'2'} onChange={console.log}>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
            <Tabs.Item label='Tab 4' name='4'>
              Content of Tab Item 4
            </Tabs.Item>
            <Tabs.Item label='Tab 5' name='5'>
              Content of Tab Item 5
            </Tabs.Item>
            <Tabs.Item label='Tab 6' name='6'>
              Content of Tab Item 6
            </Tabs.Item>
            <Tabs.Item label='Tab 7' name='7'>
              Content of Tab Item 7
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='禁用标签' description='设置 disabled 属性即可禁用标签'>
          <Tabs>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2' disabled>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='居中对齐' description='设置 centered 属性即可居中对齐'>
          <Tabs centered>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='自动平铺' description='设置 around 属性即可自动平铺'>
          <Tabs around>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='位置' description='设置 position 属性即可调整位置'>
          <Tabs position='left' type='line'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='自定义' description='设置 label 属性即可自定义标签'>
          <Tabs position='bottom' around>
            <Tabs.Item
              label={
                <div className='flex flex-col items-center justify-center'>
                  <HomeFilled className='text-3xl' />
                  <div>Home</div>
                </div>
              }
              name='1'
            >
              Content of Tab Item 1
            </Tabs.Item>
            <Tabs.Item
              label={
                <div className='flex flex-col items-center justify-center'>
                  <UnorderedListOutlined className='text-3xl' />
                  <div>Explore</div>
                </div>
              }
              name='2'
            >
              Content of Tab Item 2
            </Tabs.Item>
            <Tabs.Item
              label={
                <Badge content='5'>
                  <div className='flex flex-col items-center justify-center'>
                    <UserIcon className='text-3xl' />
                    <div>Account</div>
                  </div>
                </Badge>
              }
              name='3'
            >
              Content of Tab Item 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
