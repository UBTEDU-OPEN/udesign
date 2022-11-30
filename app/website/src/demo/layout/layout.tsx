import React from 'react';
import { Layout, Scrollbar } from '@ubt/udesign-ui';
import { NativeProps } from '@ubt/udesign-utils';
import Meta from './meta';
import Navigation from './navigation';

const { Header, Content, Sider, Footer } = Layout;

type BaseLayoutProps = { sidebar?: React.ReactNode } & NativeProps;

const BaseLayout = ({ sidebar, children }: BaseLayoutProps) => {
  const hasSider = Boolean(sidebar);

  return (
    <>
      <Meta />
      <Navigation />
      <div className='max-w-screen-2xl mx-auto'>
        <Layout hasSider={hasSider}>
          {hasSider ? (
            <Sider className='fixed z-1 w-72 h-full pb-12 border-r bg-white'>
              <Scrollbar hover className='p-4'>
                {sidebar}
              </Scrollbar>
            </Sider>
          ) : null}
          <Layout className={hasSider ? 'pl-72' : ''}>
            <Content>{children}</Content>
            <Footer className='p-16 border-t text-center'>Made with ❤ by uCode Team</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default BaseLayout;
