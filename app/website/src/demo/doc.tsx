import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '@ubt/udesign-utils';
import { Layout, SideMenu, SideMenuProps } from './layouts';

type DocProps = SideMenuProps & NativeProps;

export const Doc = ({ menus, children, className }: DocProps) => {
  const cls = classNames('p-20 max-w-none mx-auto prose prose-slate', className);

  return (
    <Layout sidebar={<SideMenu base='docs/guide' menus={menus} />}>
      <div className={cls}>{children}</div>
    </Layout>
  );
};

Doc.displayName = 'Demo.Doc';
