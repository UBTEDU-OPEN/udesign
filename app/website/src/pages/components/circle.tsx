import React from 'react';
import { Demo } from 'demo';
import { Circle } from '@ubt/udesign-ui-alpha';

export default function CirclePage() {
  return (
    <>
      <Demo.Page title='Circle 环形进度条' description='圆环形的进度条组件，支持进度渐变动画。'>
        <Demo.Block title='基础用法' description='通过 percent 属性来控制进度，text 属性来控制文案。'>
          <Circle percent='60' text='60%' />
        </Demo.Block>
        <Demo.Block title='宽度定制' description='通过 strokeWidth 属性来控制进度条宽度。'>
          <Circle percent='60' text='宽度定制' strokeWidth={100} />
        </Demo.Block>
        <Demo.Block title='颜色定制' description='通过 color 属性来控制进度条颜色，layer 属性来控制轨道颜色。'>
          <Circle percent='60' text='颜色定制' color='#EF4444' layer='#F3F4F6' />
        </Demo.Block>
        <Demo.Block title='渐变色' description='color 属性支持传入对象格式来定义渐变色。'>
          <Circle
            percent='60'
            text='渐变色'
            color={{
              '0%': '#3fecff',
              '100%': '#6149f6',
            }}
          />
        </Demo.Block>
        <Demo.Block title='逆时针方向' description='将 clockwise 设置为 false，进度会从逆时针方向开始。'>
          <Circle percent='60' text='逆时针' clockwise={false} />
        </Demo.Block>
        <Demo.Block title='大小定制' description='通过 size 属性设置圆环直径。'>
          <Circle percent='60' text='大小定制' size='120' />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
