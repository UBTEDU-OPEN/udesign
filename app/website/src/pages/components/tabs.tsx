import React from 'react';
import { Tabs } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function TabsPage() {
  return (
    <>
      <Demo.Page title='Tabs 标签页' description='选项卡切换组件。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              <span className='font-bold'>
                提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
                <br />
                Ant Design 依次提供了三级选项卡，分别用于不同的场景。
              </span>
              <br />
              <br />
              *.卡片式的页签，提供可关闭的样式，常用于容器顶部。
              <br />
              *.可用于容器顶部，也可用于容器内部，是最通用的 Tabs。
              <br />
              *.Radio.Button 可作为更次级的页签来使用。
            </>
          }
        />
        <Demo.Block title='基础用法' description='默认的标签页'>
          <Tabs defaultActiveKey={'1'} onChange={console.log} type='card' position='top'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='不可用效果' description='禁用某一项的展示效果。'>
          <Tabs type='card'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2' disabled>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='不同位置显示' description='标签页左侧、居中、右侧显示。'>
          <p className='pb-5'>左侧</p>
          <Tabs type='card'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>

        <Demo.Block>
          <p className='pb-5'>居中</p>
          <Tabs type='card' centered>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='按钮风格' description='默认为 line 样式，可以通过 type 属性切换样式风格。'>
          <Tabs type='button'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='开关风格' description='通过将 type 属性设置为 switch 切换到开关风格。'>
          <Tabs type='switch'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='水平滚动' description=''>
          <Tabs defaultActiveKey={'2'} onChange={console.log} type='card'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
            <Tabs.Item label='Tab 4' name='4'>
              Content of Tab Pane 4
            </Tabs.Item>
            <Tabs.Item label='Tab 5' name='5'>
              Content of Tab Pane 5
            </Tabs.Item>
            <Tabs.Item label='Tab 6' name='6'>
              Content of Tab Pane 6
            </Tabs.Item>
            <Tabs.Item label='Tab 7' name='7'>
              Content of Tab Pane 7
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='自动平铺' description='设置 around 属性即可自动平铺'>
          <Tabs around type='card'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='位置' description='设置 position 属性即可调整位置'>
          <Tabs position='left' type='card'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='多款设计' description='多种款式的标签页。'>
          <Tabs type='card'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block>
          <Tabs>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block title='不同尺寸' description='三种尺寸的标签页。大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。'>
          <p className='pb-5'>小号</p>
          <Tabs type='card' size='small'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block>
          <p className='pb-5'>默认</p>
          <Tabs type='card' size='middle'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        <Demo.Block>
          <p className='pb-5'>大号</p>
          <Tabs type='card' size='large'>
            <Tabs.Item label='Tab 1' name='1'>
              Content of Tab Pane 1
            </Tabs.Item>
            <Tabs.Item label='Tab 2' name='2'>
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item label='Tab 3' name='3'>
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block>
        {/* <Demo.Block title='自定义' description='设置 label 属性即可自定义标签'>
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
              Content of Tab Pane 1
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
              Content of Tab Pane 2
            </Tabs.Item>
            <Tabs.Item
              label={
                <div className='flex flex-col items-center justify-center'>
                  <div>Account</div>
                </div>
              }
              name='3'
            >
              Content of Tab Pane 3
            </Tabs.Item>
          </Tabs>
        </Demo.Block> */}
      </Demo.Page>
    </>
  );
}

TabsPage.getLayout = getLayout;
