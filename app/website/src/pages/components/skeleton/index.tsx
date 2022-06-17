import React, { useState } from 'react';
import { Button, Space, Divider, Skeleton, Radio } from '@ubt/udesign-ui';
import { Demo } from '../../../demo';
import styles from './index.module.scss';

const prefixCls = 'skeleton';
export default function SkeletonPage() {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.skeleton}>
      <Demo.Page title='Skeleton 骨架屏' description='在需要等待加载内容的位置提供一个占位图形组合。'>
        <Demo.Block title='基本'>
          <Skeleton size='small' />
        </Demo.Block>
        <Demo.Block title='动画效果' description='显示动画效果。'>
          <Skeleton active />
        </Demo.Block>
        <Demo.Block title='更复杂的组合'>
          <Skeleton active avatar paragraph={{ width: ['60%', '100%', '100%', '80%'], rows: 4 }} />
        </Demo.Block>
        <Demo.Block title='包含子组件' description='加载占位图包含子组件。'>
          <Skeleton active={active} loading={loading}>
            <h4>This is the title</h4>
            <p>Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
          </Skeleton>
          <Button onClick={() => setLoading(!loading)}>loading:{String(loading)}</Button>
          <Button onClick={() => setActive(!active)}>active:{String(active)}</Button>
        </Demo.Block>
        <Demo.Block title='全部骨架元素' description='骨架头像、按钮、标题、段落和图像。'>
          <Space direction='vertical'>
            <Space>
              <Skeleton.Avatar />
              <Skeleton.Avatar shape={'square'} />
            </Space>
            <Space>
              <Skeleton.Button />
              <Skeleton.Button shape={'square'} />
              <Skeleton.Button shape={'circle'} />
            </Space>

            <Skeleton.Image />
            <Skeleton.Title />
            <Skeleton.Paragraph rows={1} />
            <Skeleton.Paragraph rows={2} width={['100%', 60]} />
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义组合' description='图片与段落垂直组合'>
          <Space direction='vertical'>
            <Skeleton.Image width='280px' height='178px' />
            <div className={`${prefixCls}-padding`}>
              <Space direction='vertical'>
                <Skeleton.Paragraph rows={3} width={[120, 240, 240]} size='small' />
              </Space>
            </div>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义组合' description='图片与段落水平组合'>
          <div className={`${prefixCls}-full`}>
            <Skeleton.Image width='152px' height='152px' />
            <div className={`${prefixCls}-grow`}>
              <Skeleton.Paragraph rows={3} width={[220, '100%', '100%']} size='small' />
            </div>
          </div>
        </Demo.Block>

        <Demo.Block title='自定义组合' description='垂直,水平组合'>
          <Space direction='vertical'>
            <div className={`${prefixCls}-full`}>
              <Skeleton.Avatar />
              <div className={`${prefixCls}-grow`}>
                <Skeleton.Paragraph rows={2} width={[120, 180]} size='small' />
              </div>
            </div>

            <Space direction='vertical'>
              <Skeleton.Paragraph rows={3} width={[120, 244, 244]} size='small' />
            </Space>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义组合' description='列表'>
          <div>
            <Space direction='vertical'>
              <div className={`${prefixCls}-list-title`}>
                <Skeleton.Paragraph width={100} rows={1} />
                <Skeleton.Title size={'small'} />
              </div>
              <Divider />
              {[1, 1, 1].map((item: number) => (
                <>
                  <Skeleton.Paragraph rows={3} width={[120, '100%', '100%']} size='small' />
                  <Divider />
                </>
              ))}
            </Space>
          </div>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}
