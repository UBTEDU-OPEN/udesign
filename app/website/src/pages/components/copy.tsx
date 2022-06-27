import React from 'react';
import { Button, Toast } from '@ubt/udesign-ui';
import { Copy } from '@ubt/udesign-ui-alpha';
import { Demo } from '../../demo';

export default function CopyPage() {
  return (
    <>
      <Demo.Page title='Copy 复制' description='复制一段文本'>
        <Demo.Block title='基础用法' description='通过 text 属性来指定要复制文本，onSuccess 和 onError 作为回调。'>
          <Copy text='我是一段文本' onSuccess={() => Toast('复制成功')} onError={() => Toast('复制错误')}>
            点击复制
          </Copy>
        </Demo.Block>
        <Demo.Block title='搭配组件' description='通过 children 来搭配任意组件使用。'>
          <Copy text='我是一段文本' onSuccess={() => Toast('复制成功')} onError={() => Toast('复制错误')}>
            <Button type='primary'>点击复制</Button>
          </Copy>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
