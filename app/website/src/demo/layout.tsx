import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '@ubt/udesign-utils';
import { Layout, SideMenu } from './layouts';
import { DesignAPI } from './design-api';
import { DesignToken } from './design-token';
import { basicMenus } from './sideMenuRouter';

function Sidebar() {
  return (
    <>
      <SideMenu menus={basicMenus} />
    </>
  );
}

export const PageLayout = ({ children, className }: NativeProps) => {
  const cls = classNames('p-20 mx-auto', className);

  return (
    <Layout sidebar={<Sidebar />}>
      <div className={cls}>
        {children}
        <DesignAPI />
        {/* <DesignToken /> */}
      </div>
    </Layout>
  );
};
