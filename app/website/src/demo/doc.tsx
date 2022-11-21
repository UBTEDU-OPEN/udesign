import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '@ubt/udesign-utils';
import { DesignAPI } from './design-api';
import { DesignToken } from './design-token';
import { Layout } from './layout';
import { SideMenu, SideMenuProps } from './side-menu';

type DocProps = SideMenuProps & NativeProps;

export const Doc = ({ base, menus, children, className }: DocProps) => {
  const cls = classNames('p-20 max-w-none mx-auto prose prose-slate', className);

  return (
    <Layout sidebar={<SideMenu base={base} menus={menus} />}>
      <div className={cls}>
        {children}
        <DesignAPI />
        {/* <DesignToken /> */}
      </div>
    </Layout>
  );
};

Doc.displayName = 'Demo.Doc';
