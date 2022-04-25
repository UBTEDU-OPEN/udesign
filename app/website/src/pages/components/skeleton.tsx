import React, { useState } from 'react';
import { Demo } from 'demo';
import { Skeleton } from '@ubt/udesign-ui-alpha';
import { Button, Space } from '@ubt/udesign-ui';

export default function SkeletonPage() {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Demo.Page title='Skeleton 骨架屏' description='在需要等待加载内容的位置提供一个占位图形组合。'>
        <Demo.Block title='基本'>
          <Skeleton />
        </Demo.Block>
        <Demo.Block title='动画效果' description='显示动画效果。'>
          <Skeleton active />
        </Demo.Block>
        <Demo.Block title='更复杂的组合'>
          <Skeleton active avatar paragraph={{ width: ['60%', '100%', '100%', '80%'], rows: 4 }} />
        </Demo.Block>
        <Demo.Block title='包含子组件' description='加载占位图包含子组件。'>
          <Skeleton active={active} loading={loading}>
            <h4 className='mb-3 text-xl font-semibold tracking-tight text-gray-800'>This is the title</h4>
            <p className='leading-normal text-gray-700'>Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
          </Skeleton>
          <Button onClick={() => setLoading(!loading)}>loading:{String(loading)}</Button>
          <Button onClick={() => setActive(!active)}>active:{String(active)}</Button>
        </Demo.Block>
        <Demo.Block title='全部骨架元素' description='骨架头像、按钮、输入框、标题、段落和图像。'>
          <Space direction='vertical'>
            <Skeleton.Avatar />
            <Skeleton.Button />
            <Skeleton.Input />
            <Skeleton.Title />
            <Skeleton.Paragraph rows={1} />
            <Skeleton.Paragraph rows={2} width={['100%', 60]} />
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
