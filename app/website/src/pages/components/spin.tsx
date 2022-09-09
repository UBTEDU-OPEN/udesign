import React, { useState } from 'react';
import { Divider, Space, Spin, Switch, Button } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function SpinPage() {
  const { showLoading, hideLoading } = Spin;

  const [loading, setLoading] = useState(false);
  const [spin, setSpin] = useState(false);

  const delayToggle = () => {
    setLoading(!loading);
  };
  const toggle = () => {
    setSpin(!spin);
  };

  const Card = () => (
    <div className='p-5 rounded-lg bg-white'>
      <p className='text-indigo-500 font-bold'>Alert message title</p>
      <Divider className='my-5' />
      <p>Further details about the context of this alert.</p>
    </div>
  );

  return (
    <div>
      <Demo.Page title='Spin 加载中' description='用于页面和区块的加载中状态。'>
        <Demo.Block title='何时使用' description='页面局部处于等待加载数据中或渲染过程中，加载动效能有效缓解用户的等待焦虑。'></Demo.Block>
        <Demo.Block title='基本用法' description='一个简单的 loading 状态。'>
          <Spin />
        </Demo.Block>
        <Demo.Block title='其他尺寸' description='小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。'>
          <Space align='center'>
            <Spin size='small' />
            <Spin size='middle' />
            <Spin size='large' />
          </Space>
        </Demo.Block>
        <Demo.Block background title='容器' description='放入一个容器中。'>
          <div style={{ margin: '20px 0', padding: '30px 50px', textAlign: 'center', borderRadius: '4px', background: '#fff' }}>
            <Spin />
          </div>
        </Demo.Block>
        <Demo.Block title='带描述文案' description='通过 tip 属性可设置当 Spin 用作包裹元素时的文字。'>
          <Spin tip='加载中'>
            <Card />
          </Spin>
        </Demo.Block>
        <Demo.Block title='卡片加载中' description='可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。'>
          <Spin spinning={spin}>
            <Card />
          </Spin>
          <div className='mt-5'>
            Loading state：
            <Switch onClick={toggle} checked={spin} />
          </div>
        </Demo.Block>
        <Demo.Block title='卡片加载延迟' description='延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。' transform>
          <Spin spinning={loading} delay={500}>
            <Card />
          </Spin>
          <div className='mt-5'>
            Loading state：
            <Switch onClick={delayToggle} checked={loading} />
          </div>
        </Demo.Block>
        <Demo.Block title='全局加载' description='加载位置全局剧中，默认时长1s，超时关闭'>
          <Space>
            <Button onClick={() => showLoading({})} type='primary'>
              show Spin
            </Button>
            <Button onClick={() => hideLoading()} type='primary'>
              hide Spin
            </Button>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}

SpinPage.getLayout = getLayout;
