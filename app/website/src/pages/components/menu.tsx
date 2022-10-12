import React, { useState } from 'react';
import { Menu, Button, Space } from '@ubt/udesign-ui';
import { FolderOutlined, PictureFilled, VoiceFilled, DataFilled, MenuOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function MenuPage() {
  const Submenu = (
    <>
      <Menu.Item name='5-1'>Option 1</Menu.Item>
      <Menu.Item name='5-2'>Option 2</Menu.Item>
      <Menu.Item name='5-3'>Option 3</Menu.Item>
      <Menu.Item name='5-4'>Option 4</Menu.Item>
    </>
  );
  const inlineSubmenu = (
    <>
      <Menu.Item name='6-1'>Option 1</Menu.Item>
      <Menu.Item name='6-2'>Option 2</Menu.Item>
      <Menu.Item name='6-3'>Option 3</Menu.Item>
    </>
  );
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

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
          <Menu hasLine defaultActiveKey='1' mode='horizontal'>
            <Menu.Item name='1' icon={<FolderOutlined />}>
              Navigation One
            </Menu.Item>
            <Menu.Item name='2' disabled icon={<FolderOutlined />}>
              Navigation Two
            </Menu.Item>
            <Menu.Submenu name='3' title='Navigation Three - Submenu' icon={<FolderOutlined />}>
              <Menu.Item name='1-1' disabled>
                item 1
              </Menu.Item>
              <Menu.Item name='1-2'>Option 1</Menu.Item>
              <Menu.Item name='1-3'>Option 2</Menu.Item>
              <Menu.Item name='1-4' disabled>
                item 2
              </Menu.Item>
              <Menu.Item name='1-5'>Option 3</Menu.Item>
              <Menu.Item name='1-6'>Option 4</Menu.Item>
            </Menu.Submenu>
            <Menu.Item link name='4'>
              <a href='#'>Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        </Demo.Block>
        <Demo.Block className='flex justify-between' title='侧边栏内嵌菜单' description='垂直菜单，二级菜单内嵌在一级菜单区域。'>
          <Menu radius defaultActiveKey='1' className='w-60 border-r inline-block'>
            <Menu.Item name='1' icon={<PictureFilled className='mr-2 text-xl' />}>
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item name='2' icon={<VoiceFilled className='mr-2 text-xl' />}>
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item name='3' icon={<DataFilled className='mr-2 text-xl' />}>
              <>Option 3</>
            </Menu.Item>
          </Menu>

          <Menu radius mode='inline' hasLine defaultActiveKey='1' className='w-60 border-r inline-block'>
            <Menu.Submenu name='1-1' icon={<PictureFilled className='text-xl mr-2' />} title='标题一'>
              {inlineSubmenu}
            </Menu.Submenu>
            <Menu.Submenu name='1-2' icon={<VoiceFilled className='text-xl mr-2' />} title='标题二'>
              <Menu.Item name='1'>Option 1</Menu.Item>
              <Menu.Item name='2'>Option 2</Menu.Item>
              <Menu.Item name='3'>Option 3</Menu.Item>
            </Menu.Submenu>
            <Menu.Submenu name='1-3' icon={<DataFilled className='text-xl mr-2' />} title='标题三'>
              <Menu.Item name='4'>Option 1</Menu.Item>
              <Menu.Item name='5'>Option 2</Menu.Item>
              <Menu.Item name='6'>Option 3</Menu.Item>
            </Menu.Submenu>
          </Menu>

          <Menu radius mode='inline' hasLine defaultActiveKey='1' className='w-60 border-r inline-block'>
            <Menu.Submenu subMode='inline' icon={<PictureFilled className='text-xl mr-2' />} title='导航一' name='1'>
              <Menu.Item name='1-1' disabled>
                item 1
              </Menu.Item>
              <Menu.Item name='1-2'>Option 1</Menu.Item>
              <Menu.Item name='1-3'>Option 2</Menu.Item>
              <Menu.Item name='1-4' disabled>
                item 2
              </Menu.Item>
              <Menu.Item name='1-5'>Option 3</Menu.Item>
              <Menu.Item name='1-6'>Option 4</Menu.Item>
            </Menu.Submenu>
            <Menu.Submenu subMode='inline' icon={<VoiceFilled className='text-xl mr-2' />} title='导航二' name='2'>
              <Menu.Item name='2-1'>Option 5</Menu.Item>
              <Menu.Item name='2-2'>Option 6</Menu.Item>
              <Menu.Item name='2-3-2'>Option 7</Menu.Item>
            </Menu.Submenu>
            <Menu.Submenu subMode='inline' icon={<DataFilled className='text-xl mr-2' />} title='导航三' name='3'>
              <Menu.Item name='3-1'>Option 1</Menu.Item>
              <Menu.Item name='3-2'>Option 1</Menu.Item>
              <Menu.Item name='3-3'>Option 1</Menu.Item>
            </Menu.Submenu>
          </Menu>
        </Demo.Block>
        <Demo.Block title='只展开当前一级别菜单' description='点击一个菜单，收起其他已展开的菜单，保持只显示一个菜单，聚焦简洁。'>
          <Menu onlyOne radius mode='inline' defaultSubActiveKey='一' defaultActiveKey='1' className='w-60 border-r inline-block'>
            <Menu.Submenu name='一' icon={<PictureFilled className='text-xl mr-2' />} title='标题一'>
              {inlineSubmenu}
            </Menu.Submenu>
            <Menu.Submenu name='二' icon={<VoiceFilled className='text-xl mr-2' />} title='标题二'>
              <Menu.Item name='9'>Option 1</Menu.Item>
              <Menu.Item name='8'>Option 2</Menu.Item>
              <Menu.Item name='2-1'>Option 1</Menu.Item>
              <Menu.Item name='2-2'>Option 2</Menu.Item>
            </Menu.Submenu>
            <Menu.Submenu name='三' icon={<DataFilled className='text-xl mr-2' />} title='标题三'>
              <Menu.Item name='4'>Option 1</Menu.Item>
              <Menu.Item name='5'>Option 2</Menu.Item>
              <Menu.Item name='6'>Option 3</Menu.Item>
            </Menu.Submenu>
          </Menu>
        </Demo.Block>
        <Demo.Block
          title='可收起的内嵌菜单'
          description={
            <>
              内嵌菜单可以被缩起/展开。
              <br />
              你可以在 Layout 里查看侧边布局结合的完整示例。
            </>
          }
        >
          <Button onClick={toggleCollapsed} type='primary' shape='round' icon={<MenuOutlined />} />
          <Space className='w-60'>
            <Menu radius mode='inline' hasLine defaultActiveKey='2' className='border-r' isCollapsed={isCollapsed}>
              <Menu.Submenu name='一' icon={<PictureFilled className='text-xl mr-2' />} title='标题一'>
                {inlineSubmenu}
              </Menu.Submenu>
              <Menu.Submenu name='二' icon={<VoiceFilled className='text-xl mr-2' />} title='标题二'>
                <Menu.Item name='9'>Option 1</Menu.Item>
                <Menu.Item name='8'>Option 2</Menu.Item>
                <Menu.Item name='7'>Option 3</Menu.Item>
              </Menu.Submenu>
              <Menu.Submenu name='三' icon={<DataFilled className='text-xl mr-2' />} title='标题三'>
                <Menu.Item name='4'>Option 1</Menu.Item>
                <Menu.Item name='5'>Option 2(disabled)</Menu.Item>
                <Menu.Item name='6'>Option 3</Menu.Item>
              </Menu.Submenu>
            </Menu>
          </Space>
        </Demo.Block>
        <Demo.Block title='垂直菜单' description='二级菜单是弹出形式，仅支持至二级菜单。'>
          <Menu hasLine radius className='w-60 border-r' defaultActiveKey='1' mode='vertical'>
            <Menu.Item name='1' icon={<PictureFilled className='mr-2 text-xl' />}>
              导航一
            </Menu.Item>
            <Menu.Item name='2' icon={<VoiceFilled className='mr-2 text-xl' />}>
              导航二
            </Menu.Item>
            <Menu.Submenu title='导航三' icon={<DataFilled className='mr-2 text-xl' />}>
              {Submenu}
            </Menu.Submenu>
          </Menu>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

MenuPage.getLayout = getLayout;
