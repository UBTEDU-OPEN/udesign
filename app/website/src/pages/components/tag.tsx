import React from 'react';
import { Space, Tag } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function TagPage() {
  return (
    <>
      <Demo.Page title='Tag 标签'>
        <Demo.Block title='基础用法' description='默认标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose 事件。'>
          <Space>
            <Tag>Tag1</Tag>
            <Tag closeable>Tag2</Tag>
            <Tag closeable onClose={(v, e) => e.preventDefault()}>
              Prevent Default
            </Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='标签大小' description='通过 size 属性调整标签大小。'>
          <Space>
            <Tag size='small'>标签</Tag>
            <Tag>标签</Tag>
            <Tag size='large'>标签</Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='可关闭标签' description='添加 closeable 属性表示标签是可关闭的，关闭标签时会触发 close 事件，在 close 事件中可以执行隐藏标签的逻辑。'>
          <Tag closeable onClose={(value) => console.log('onClose', value)}>
            标签
          </Tag>
        </Demo.Block>
        <Demo.Block title='多彩标签' description='多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。'>
          <Space wrap>
            <Tag color='purple'>Purple/紫色</Tag>
            <Tag color='red'>Red/红色</Tag>
            <Tag color='orange'>Orange/橘色</Tag>
            <Tag color='yellow'>Yellow/黄色</Tag>
            <Tag color='green'>Green/绿色</Tag>
            <Tag color='cyan'>Cyan/青色</Tag>
            <Tag color='blue'>Blue/蓝色</Tag>
            <Tag color='#f50' textColor='#fff'>
              #f50
            </Tag>
            <Tag color='#eee' textColor='#999'>
              #eee
            </Tag>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
