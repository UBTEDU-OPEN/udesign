import React from 'react';
import { Demo } from 'demo';
import { Layout } from '@ubt/udesign-ui-alpha';

const { Header, Footer, Sider, Content } = Layout;

export default function LayoutPage() {
  return (
    <>
      <Demo.Page title='Layout 布局' description='协助进行页面级整体布局。'>
        <Demo.Block title='三行布局'>
          <Layout>
            <Header className='bg-gray-100 h-12'>Header</Header>
            <Content className='bg-gray-200 h-60'>Content</Content>
            <Footer className='bg-gray-100 h-12'>Footer</Footer>
          </Layout>
        </Demo.Block>
        <Demo.Block title='左侧边栏布局'>
          <Layout>
            <Header className='bg-gray-100 h-12'>Header</Header>
            <Layout className='h-60' hasSider>
              <Sider className='bg-gray-300 w-32'>Sider</Sider>
              <Content className='bg-gray-200'>Content</Content>
            </Layout>
            <Footer className='bg-gray-100 h-12'>Footer</Footer>
          </Layout>
        </Demo.Block>
        <Demo.Block title='右侧边栏布局'>
          <Layout>
            <Header className='bg-gray-100 h-12'>Header</Header>
            <Layout className='h-60' hasSider>
              <Content className='bg-gray-200'>Content</Content>
              <Sider className='bg-gray-300 w-32'>Sider</Sider>
            </Layout>
            <Footer className='bg-gray-100 h-12'>Footer</Footer>
          </Layout>
        </Demo.Block>
        <Demo.Block title='侧边栏布局'>
          <Layout hasSider>
            <Sider className='bg-gray-300 w-32'>Sider</Sider>
            <Layout>
              <Header className='bg-gray-100 h-12'>Header</Header>
              <Content className='bg-gray-200 h-60'>Content</Content>
              <Footer className='bg-gray-100 h-12'>Footer</Footer>
            </Layout>
          </Layout>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
