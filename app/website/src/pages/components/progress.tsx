import React, { useState } from 'react';
import { Progress, Button, Space } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function ProgressPage() {
  const [percent, setPercent] = useState(50);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <Demo.Page title='Progress 进度条' description='展示当前操作的进度。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态: <br />
              <br />
              1.当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
              <br />
              <br />
              2.当需要显示一个操作完成的百分比时。
            </>
          }
        />
        <Demo.Block title='基本用法' description='常规进度条用法。'>
          <Space className='max-w-3xl' vertical>
            <Progress percent={50} />
            <Progress percent={50} status='warning' />
            <Progress percent={100} status='success' />
            <Progress percent={40} status='error' />
          </Space>
        </Demo.Block>
        <Demo.Block title='不同尺寸的进度条' description='通过 size 来设置进度条尺寸，或者传入style'>
          <Space>
            small
            <Space className='max-w-xs w-full' vertical>
              <Progress size='small' percent={50} />
              <Progress size='small' percent={50} status='warning' />
              <Progress size='small' percent={100} status='success' />
              <Progress size='small' percent={40} status='error' />
            </Space>
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space>
            middle
            <Space className='max-w-lg w-full' vertical>
              <Progress percent={50} />
              <Progress percent={50} status='warning' />
              <Progress percent={100} status='success' />
              <Progress percent={40} status='error' />
            </Space>
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space>
            large
            <Space className='max-w-3xl w-full' vertical>
              <Progress size='large' percent={50} />
              <Progress size='large' percent={50} status='warning' />
              <Progress size='large' percent={100} status='success' />
              <Progress size='large' percent={40} status='error' />
            </Space>
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space>
            自定义
            <Space className='max-w-3xl w-full' vertical>
              <Progress style={{ height: '4px' }} percent={50} />
              <Progress style={{ height: '4px' }} percent={50} status='warning' />
              <Progress style={{ height: '4px' }} percent={100} status='success' />
              <Progress style={{ height: '4px' }} percent={40} status='error' />
            </Space>
          </Space>
        </Demo.Block>
        <Demo.Block title='基础进度圈' description='默认圈形的进度显示。'>
          <Space className='max-w-3xl'>
            <Progress type='circle' percent={75} showInfo={false} />
            <Progress type='circle' percent={75} />
            <Progress type='circle' percent={100} status='success' />
            <Progress type='circle' percent={40} status='error' />
          </Space>
        </Demo.Block>
        <Demo.Block title='不同尺寸的进度圈' description='通过 size 或者 width 来设置进度圈的尺寸'>
          <Space className='max-w-3xl'>
            small
            <Progress size='small' type='circle' percent={75} showInfo={false} />
            <Progress size='small' type='circle' percent={75} />
            <Progress size='small' type='circle' percent={100} status='success' />
            <Progress size='small' type='circle' percent={40} status='error' />
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space className='max-w-3xl'>
            middle
            <Progress type='circle' percent={75} showInfo={false} />
            <Progress type='circle' percent={75} />
            <Progress type='circle' percent={100} status='success' />
            <Progress type='circle' percent={40} status='error' />
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space className='max-w-3xl'>
            large
            <Progress size='large' type='circle' percent={75} showInfo={false} />
            <Progress size='large' type='circle' percent={75} />
            <Progress size='large' type='circle' percent={100} status='success' />
            <Progress size='large' type='circle' percent={40} status='error' />
          </Space>
        </Demo.Block>
        <Demo.Block title='圆角/方角边缘' description='通过设定 strokeLinecap="square|round" 可以调整进度条边缘的形状。'>
          <Space className='max-w-3xl'>
            <Progress size='large' percent={50} strokeLinecap='square' />
            <Progress type='circle' percent={50} size='large' strokeLinecap='square' />
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义颜色' description='通过 stroke 传入颜色'>
          <Space className='max-w-3xl'>
            <Progress percent={50} stroke='orange' />
            <Progress type='circle' percent={50} stroke='orange' />
          </Space>
        </Demo.Block>
        <Demo.Block title='动态展示' description='会动的进度条才是好进度条。'>
          <Space className='max-w-3xl mb-10'>
            <Button type='primary' size='small' onClick={decline}>
              减少
            </Button>
            <Button type='primary' size='small' onClick={increase}>
              增加
            </Button>
          </Space>
          <Space className='max-w-3xl'>
            <Progress percent={percent} />
            <Progress type='circle' percent={percent} />
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

ProgressPage.getLayout = getLayout;
