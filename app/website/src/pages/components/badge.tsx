import React from 'react';
import { Space, Badge } from '@ubt/udesign-ui';
import { SettingFilled } from '@ubt/udesign-icons';
import { Avatar } from '@ubt/udesign-ui-alpha';
import { Demo } from '../../demo';

export default function BadgePage() {
  return (
    <>
      <Demo.Page title='Badge 徽标' description='图标右上角的圆形徽标数字。'>
        <Demo.Block title='何时使用' description='一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。' />
        <Demo.Block title='基础用法' description='简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。'>
          <Space>
            <Badge content='5'>
              <Avatar shape='square' />
            </Badge>
            <Badge content={0} showZero>
              <Avatar shape='square' />
            </Badge>
            <Badge content={<SettingFilled />}>
              <Avatar shape='square' />
            </Badge>
            <Badge dot>
              <Avatar shape='square' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='独立使用' description='不包裹任何元素即是独立使用，可自定义样式展现。'>
          <Space>
            <Badge content='43' />
            <Badge content={<SettingFilled />} />
            <Badge content='120' style={{ background: '#7BDC7B' }} />
          </Space>
        </Demo.Block>
        <Demo.Block title='封顶数字' description='超过 overflowCount 的会显示为 {overflowCount}+，默认的 overflowCount 为 99'>
          <Space>
            <Badge content='99'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='20' overflowCount='10'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='200' overflowCount='99'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='2000' overflowCount='999'>
              <Avatar shape='square' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='极简显示' description='只有小红点提示，没有具体数值。'>
          <Space align='center'>
            <Badge dot>
              <SettingFilled className='text-4xl' />
            </Badge>
            <Badge dot>
              <a href='#'>Link Something</a>
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='设置徽标样式' description='通过 style 可以自定义徽标的样式。'>
          <Space>
            <Badge content='5' style={{ background: '#7284fb' }}>
              <Avatar shape='square' />
            </Badge>
            <Badge content='5' style={{ background: '#7BDC7B' }}>
              <Avatar shape='square' />
            </Badge>
            <Badge content='5' style={{ background: 'gray' }}>
              <Avatar shape='square' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='尺寸' description='通过 size 属性指定尺寸，可选 middle, small'>
          <Space>
            <Badge content='5' size='middle'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='5' size='small'>
              <Avatar shape='square' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='title' description='通过 title 属性指定鼠标hover时的提示文案'>
          <Badge content='5' title='我是title'>
            <Avatar shape='square' />
          </Badge>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
