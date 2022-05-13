import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Space, Button, Typography, Divider } from '@ubt/udesign-ui';
import { Demo } from 'demo';

export default function SpacePage() {
  return (
    <Demo.Page title='Space 间距' description='设置组件之间的间距。'>
      <Demo.Block
        title='何时使用'
        description={
          <>
            <p>避免组件紧贴在一起，拉开统一的空间。</p>
            <br />
            *适合行内元素的水平间距。
            <br />
            *可以设置各种水平对齐方式。
          </>
        }
      />
      <Demo.Block title='基本用法' description='相邻组件水平间距。'>
        <Space>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Demo.Block>
      <Demo.Block title='垂直间距' description='相邻组件垂直间距。'>
        <Space direction='vertical'>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Demo.Block>
      <Demo.Block
        title='间距大小'
        description={
          <>
            间距预设大、中、小三种大小。
            <br /> 通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。
          </>
        }
      >
        <Space direction='vertical'>
          <Space size='small' align='center'>
            small
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Space>
          <Space size='middle' align='center'>
            middle
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Space>
          <Space size='large' align='center'>
            large
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Space>
        </Space>
      </Demo.Block>
      <Demo.Block title='对齐' description='设置对齐模式（align-items）。'>
        <Space>
          <Space className='border p-3 rounded' align='center' size='small'>
            center
            <div className='px-5 py-3 bg-indigo-500 text-white rounded'>Primary</div>
            <div className='px-5 py-10 bg-indigo-50 rounded'>Block</div>
          </Space>
          <Space className='border p-3 rounded' align='start' size='small'>
            start
            <div className='px-5 py-3 bg-indigo-500 text-white rounded'>Primary</div>
            <div className='px-5 py-10 bg-indigo-50 rounded'>Block</div>
          </Space>
          <Space className='border p-3 rounded' align='end' size='small'>
            end
            <div className='px-5 py-3 bg-indigo-500 text-white rounded'>Primary</div>
            <div className='px-5 py-10 bg-indigo-50 rounded'>Block</div>
          </Space>
          <Space className='border p-3 rounded' align='baseline' size='small'>
            baseline
            <div className='px-5 py-3 bg-indigo-500 text-white rounded'>Primary</div>
            <div className='px-5 py-10 bg-indigo-50 rounded'>Block</div>
          </Space>
        </Space>
      </Demo.Block>
      <Demo.Block title='自定义尺寸' description='通过向 size 传入 number，来自定义间距大小。'>
        <Space size={100}>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Demo.Block>
      <Demo.Block title='自动换行' description='当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。'>
        <Space wrap>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Space>
      </Demo.Block>
      <Demo.Block title='分隔符' description='相邻组件分隔符。'>
        <Space align='center'>
          <Typography.Text link='#'>Link</Typography.Text>
          <Divider type='vertical' />
          <Typography.Text link='#'>Link</Typography.Text>
          <Divider type='vertical' />
          <Typography.Text link='#'>Link</Typography.Text>
        </Space>
      </Demo.Block>
    </Demo.Page>
  );
}
