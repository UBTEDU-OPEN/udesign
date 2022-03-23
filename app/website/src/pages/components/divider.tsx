import React from 'react';
import { Demo } from 'demo';
import { Divider } from '@ubt/udesign-ui-alpha';

export default function DividerPage() {
  return (
    <>
      <Demo.Page title='Divider 步骤条' description='引导用户按照流程完成任务的导航条。'>
        <Demo.Block title='基本用法'>
          <Divider />
        </Demo.Block>
        <Demo.Block title='虚线'>
          <Divider dashed />
        </Demo.Block>
        <Demo.Block title='竖直方向'>
          Text
          <Divider mode='vertical' />
          <a href='#'>Link</a>
        </Demo.Block>
        <Demo.Block title='带文字' description='直接使用 children'>
          <Divider>Text</Divider>
          <Divider orientation='left'>Text</Divider>
          <Divider orientation='right'>Text</Divider>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
