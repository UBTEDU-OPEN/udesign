import React from 'react';
import { Demo } from 'demo';
import { Tag } from '@ubt/udesign-ui-alpha';
import { Space } from '@ubt/udesign-ui';

export default function TagPage() {
  return (
    <>
      <Demo.Page title='Tag 标签'>
        <Demo.Block title='基础用法' description='通过 type 属性使用内置标签颜色。'>
          <Space>
            <Tag type='default'>标签</Tag>
            <Tag type='primary'>标签</Tag>
            <Tag type='success'>标签</Tag>
            <Tag type='danger'>标签</Tag>
            <Tag type='warning'>标签</Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='标签大小' description='通过 size 属性调整标签大小。'>
          <Space>
            <Tag size='small'>标签</Tag>
            <Tag>标签</Tag>
            <Tag size='large'>标签</Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='空心样式' description='设置 plain 属性设置为空心样式，只对内置配色生效。'>
          <Space>
            <Tag type='default' plain>
              标签
            </Tag>
            <Tag type='primary' plain>
              标签
            </Tag>
            <Tag type='success' plain>
              标签
            </Tag>
            <Tag type='danger' plain>
              标签
            </Tag>
            <Tag type='warning' plain>
              标签
            </Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='圆角样式' description='通过 round 设置为圆角样式。'>
          <Tag round>标签</Tag>
        </Demo.Block>
        <Demo.Block title='标记样式' description='通过 mark 设置为标记样式(半圆角)。'>
          <Tag mark>标签</Tag>
        </Demo.Block>
        <Demo.Block title='可关闭标签' description='添加 closeable 属性表示标签是可关闭的，关闭标签时会触发 close 事件，在 close 事件中可以执行隐藏标签的逻辑。'>
          <Tag closeable onClose={(value) => console.log('onClose', value)}>
            标签
          </Tag>
        </Demo.Block>
        <Demo.Block title='可跳转标签' description='添加 linkable 属性表示标签是可跳转的，点击时会触发 onClick 事件，在 onClick 事件中可以执行跳转的逻辑。'>
          <Tag linkable onClick={(value) => console.log('onClick', value)}>
            标签
          </Tag>
        </Demo.Block>
        {/* <Demo.Block title='自定义颜色' description='通过 color 和 text-color 属性设置标签颜色。'>
          <Space>
            <Tag>标签</Tag>
            <Tag color='#7232dd'>标签</Tag>
            <Tag color='#eee' textColor='#999'>
              标签
            </Tag>
          </Space>
        </Demo.Block> */}
      </Demo.Page>
    </>
  );
}
