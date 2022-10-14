import React from 'react';
import Head from 'next/head';
import { Layout, Scrollbar } from '@ubt/udesign-ui';
import { NativeProps } from '@ubt/udesign-utils';
import Navigation from './navigation';
import { SITE_NAME } from '../../constants/site';

const { Header, Content, Sider, Footer } = Layout;

type BaseLayoutProps = { sidebar?: React.ReactNode } & NativeProps;

const BaseLayout = ({ sidebar, children }: BaseLayoutProps) => {
  const appTitle = `${SITE_NAME}`;
  const hasSider = Boolean(sidebar);

  return (
    <Layout>
      <Head>
        <title>{appTitle}</title>
        <meta name='viewport' content='width=1024, initial-scale=1' />
        <meta charSet='utf-8' />
      </Head>
      <Navigation />
      <Layout hasSider={hasSider}>
        {hasSider ? (
          <Sider className='fixed z-1 w-72 h-full pb-12 border-r bg-white'>
            <Scrollbar hover className='p-4'>
              {sidebar}
            </Scrollbar>
          </Sider>
        ) : null}
        <Layout>
          <Content className={hasSider ? 'pl-72' : ''}>{children}</Content>
          <Footer className='h-16 border-t'>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
