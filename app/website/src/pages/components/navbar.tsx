import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Demo } from 'demo';
import { Navbar, Toast } from '@ubt/udesign-ui-alpha';

export default function NavbarPage() {
  return (
    <>
      <Demo.Page title='Navbar 导航栏' description='将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。'>
        <Demo.Block background title='基础用法' description='leftArrow 显示左侧箭头， children 作为标题'>
          <Navbar>标题</Navbar>
        </Demo.Block>
        <Demo.Block background title='固定在顶部' description='通过 fixed 固定在顶部， 默认生成一个等高的占位元素' transform>
          <Navbar fixed>标题</Navbar>
          如果没有 placeholder，我会被挡住
        </Demo.Block>
        <Demo.Block background title='自定义' description='通过 left 自定义左侧内容， right 自定义右侧内容'>
          <Navbar left='返回' right={<SearchOutlined />}>
            标题
          </Navbar>
        </Demo.Block>
        <Demo.Block background title='事件' description='通过 onLeftClick 自定义左侧内容， onRightClick 自定义右侧内容'>
          <Navbar onLeftClick={() => Toast('onLeftClick')} right={<SearchOutlined />} onRightClick={() => Toast('onRightClick')}>
            标题
          </Navbar>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
