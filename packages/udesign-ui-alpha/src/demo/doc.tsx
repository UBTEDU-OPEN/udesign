import React, { useState } from 'react';
import classNames from 'classnames';
import { Layout, SideMenu, SideMenuProps } from './layouts';
import { NativeProps } from '../utils';
// import { useRouter } from 'next/router';

type DocProps = {} & SideMenuProps & NativeProps;

export const Doc = ({ menus, children, className }: DocProps) => {
  // const router = useRouter();
  // function handleChange(name: string) {
  //   router.push(`/docs/guide/${name.toLowerCase()}`);
  // }

  const cls = classNames('p-20 mx-auto', className);
  return (
    <Layout sidebar={<SideMenu base='docs/guide' menus={menus} />}>
      <div className={cls}>{children}</div>
    </Layout>
  );
};

Doc.displayName = 'Demo.Doc';
