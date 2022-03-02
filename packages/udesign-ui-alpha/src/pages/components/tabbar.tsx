import React from 'react';
import { HomeFilled, UnorderedListOutlined } from '@ant-design/icons';
import { Demo } from 'demo';
import { Tabbar, UserIcon } from '@ubt/udesign-ui-alpha';

export default function TabbarPage() {
  return (
    <>
      <Demo.Page title='Tabbar 标签栏' description='用于创建不含内容区域的标签栏'>
        <Demo.Block title='基础用法' transform>
          <Tabbar>
            <Tabbar.Item title='Home' name='home' icon={<HomeFilled className='text-3xl' />} />
            <Tabbar.Item title='Explore' name='explore' icon={<UnorderedListOutlined className='text-3xl' />} />
            <Tabbar.Item title='User' name='user' icon={<UserIcon className='text-3xl' />} badge={5} />
          </Tabbar>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
