import React, { useState } from 'react';
import { Progress, Button, Space } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function ProgressPage() {
  const [percent, setPercent] = useState(0);

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
          <Space direction='vertical'>
            <Progress percent={28} stroke='var(--ud-color-warning)' />
            <Progress percent={50} />
            <Progress percent={100} stroke='var(--ud-color-success)' />
            <Progress percent={40} stroke='var(--ud-color-danger)' />
            <Progress percent={50} showInfo={false} />
          </Space>
        </Demo.Block>
        <Demo.Block title='不同尺寸的进度条' description='通过 size 来设置进度条尺寸，或者传入style'>
          <Space direction='vertical'>
            <Progress percent={50} format={() => '自定义'} style={{ height: '4px' }} />
            <Progress percent={50} format={() => 'small'} size='small' />
            <Progress percent={50} format={() => 'middle'} />
            <Progress percent={50} format={() => 'large'} size='large' />
          </Space>
        </Demo.Block>
        <Demo.Block title='动态展示' description='会动的进度条才是好进度条。'>
          <Space align='center'>
            <Progress percent={percent} />
            <Progress type='circle' percent={percent} />
            <Button size='small' onClick={decline}>
              减少
            </Button>
            <Button size='small' onClick={increase}>
              增加
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='进度圈' description='圈形的进度。'>
          <Space>
            <Progress type='circle' percent={50} showInfo={false} />
            <Progress type='circle' percent={50} />
            <Progress type='circle' percent={100} stroke='var(--ud-color-success)' />
            <Progress type='circle' percent={40} stroke='var(--ud-color-danger)' />
          </Space>
        </Demo.Block>
        <Demo.Block title='不同尺寸的进度圈' description='通过 size 或者 width 来设置进度圈的尺寸'>
          <Space>
            <Progress type='circle' percent={50} format={() => 'small'} size='small' />
            <Progress type='circle' percent={50} format={() => 'middle'} />
            <Progress type='circle' percent={50} format={() => 'large'} size='large' />
            <Progress type='circle' percent={50} format={() => '自定义宽度'} width={200} />
          </Space>
        </Demo.Block>
        <Demo.Block title='圆角/方角边缘' description='通过设定 strokeLinecap="square|round" 可以调整进度条边缘的形状。'>
          <Space align='center'>
            <Progress size='large' percent={50} strokeLinecap='square' />
            <Progress type='circle' percent={50} size='large' strokeLinecap='square' />
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
