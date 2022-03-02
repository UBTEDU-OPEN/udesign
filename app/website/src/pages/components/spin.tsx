import React from 'react';
import { Demo } from 'demo';
import { Button, Spin, LoadingIcon } from '@ubt/udesign-ui-alpha';

export default function SpinPage() {
  return (
    <>
      <Demo.Page title='Spin 加载中' description='用于页面和区块的加载中状态。'>
        <Demo.Block title='默认'>
          <Spin />
        </Demo.Block>
        <Demo.Block title='size' description='小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。'>
          <Spin size='small' />
          <Spin />
          <Spin size='large' />
        </Demo.Block>
        <Demo.Block title='容器' description='放入一个容器中。'>
          <div className='flex items-center justify-center w-20 h-20 bg-gray-100'>
            <Spin />
          </div>
        </Demo.Block>
        <Demo.Block title='自定义图标' description='可以自定义加载指示器图标'>
          <Spin indicator={<LoadingIcon className='text-gray-600 text-xl' />} />
        </Demo.Block>
        <Demo.Block title='自定义文案' description='可以自定义描述文案。'>
          <Spin tip='加载中...' />
        </Demo.Block>
        <Demo.Block title='children' description='可以将Spin作为容器使用，Spin将会遮罩内容' transform>
          <Spin tip='加载中...'>
            <div>children支持ReactNode</div>
            <Button type='primary'>Button</Button>
          </Spin>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
