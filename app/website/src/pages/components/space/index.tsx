import React from 'react';
import styles from './index.module.scss';
import { Demo } from 'demo';
import { CloseIcon } from '@ubt/udesign-ui-alpha';
import { Space, Button, Typography, Divider } from '@ubt/udesign-ui';
export default function SpacePage() {
  return (
    <div className={styles['space']}>
      <Demo.Page title='Space 间距' description='设置组件之间的间距。'>
        <Demo.Block className='space-bg' title='基本用法' description='相邻组件水平间距。'>
          <Space>
            <Button type='text'>Text</Button>
            <Button type='primary'>Primary </Button>
            <Button icon={<CloseIcon />}>Clike me</Button>
            <Button>Primary</Button>
          </Space>
        </Demo.Block>
        <Demo.Block className='space-bg' title='垂直间距' description='相邻组件垂直间距。'>
          <Space direction='vertical' size='small'>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Space>
        </Demo.Block>
        <Demo.Block
          className='space-size-btn space-bg'
          title='间距大小'
          description={
            <>
              间距预设大、中、小三种大小。
              <br /> 通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。
            </>
          }
        >
          <Space size='small'>
            <Button type='primary'>Primary</Button>
            <Button>Primary</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
          </Space>
          <Space size='middle'>
            <Button type='primary'>Primary</Button>
            <Button>Primary</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
          </Space>
          <Space size='large'>
            <Button type='primary'>Primary</Button>
            <Button>Primary</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
          </Space>
        </Demo.Block>
        <Demo.Block className='space-page-algin space-bg' title='对齐' description='设置对齐模式。'>
          <div>
            <Space align='center' size='small'>
              center
              <Button size='small' shape='default' type='primary'>
                Primary
              </Button>
              <span className='mock-block'>Block</span>
            </Space>
          </div>
          <div>
            <Space align='start' size='small'>
              start
              <Button size='small' shape='default' type='primary'>
                Primary
              </Button>
              <span className='mock-block'>Block</span>
            </Space>
          </div>
          <div>
            <Space align='end' size='small'>
              end
              <Button size='small' shape='default' type='primary'>
                Primary
              </Button>
              <span className='mock-block'>Block</span>
            </Space>
          </div>
          <div>
            <Space align='baseline' size='small'>
              baseline
              <Button size='small' shape='default' type='primary'>
                Primary
              </Button>
              <span className='mock-block'>Block</span>
            </Space>
          </div>
        </Demo.Block>
        <Demo.Block className='space-bg' title='自定义尺寸' description='自定义间距大小。' todo='依赖Slider组件'>
          <Space size={50}>
            <Button type='primary'>Primary</Button>
            <Button>Primary</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
          </Space>
        </Demo.Block>
        <Demo.Block className='space-bg' title='自动换行' description='当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。'>
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
          </Space>
        </Demo.Block>
        <Demo.Block className='space-bg' title='分隔符' description='相邻组件分隔符。'>
          <Space align='center'>
            <Typography.Text link='#'>Link</Typography.Text>
            <Divider type='vertical' />
            <Typography.Text link='#'>Link</Typography.Text>
            <Divider type='vertical' />
            <Typography.Text link='#'>Link</Typography.Text>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}
