import React, { useState } from 'react';
import { Demo } from 'demo';
import { Button, HeartFilledIcon, HeartSvg, Space } from '@ubt/udesign-ui-alpha';

export default function ButtonPage() {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <Demo.Page title='Button 按钮' description='按钮用于开始一个即时操作。'>
        <Demo.Block title='按钮类型' description='按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。'>
          <Space>
            <Button type='default'>default</Button>
            <Button type='primary'>primary</Button>
            <Button type='success'>success</Button>
            <Button type='danger'>danger</Button>
            <Button type='warning'>warning</Button>
            {/* <Button type='dark'>dark</Button>
            <Button type='ghost'>ghost</Button>
            <Button type="dashed">dashed</Button> */}
            <Button type='text'>text</Button>
            <Button type='link'>link</Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='按钮形状' description='shape 支持 round, default, square 三种，默认为 default。'>
          <Space>
            <Button type='primary' shape='round'>
              圆形按钮
            </Button>
            <Button type='primary'>默认按钮</Button>
            <Button type='primary' shape='square'>
              方形按钮
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='图标按钮' description='通过 icon 属性设置按钮图标，当没有 children 时，触发 iconOnly（width 和 height 相同）。'>
          <Space>
            <Button type='primary' icon={<HeartFilledIcon />} />
            <Button type='primary' icon={<HeartFilledIcon />}>
              图标按钮
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='按钮尺寸' description='支持 large, middle, small, mini 四种尺寸，默认为 middle。'>
          <Space>
            <Button type='primary' size='large'>
              large
            </Button>
            <Button type='primary'>middle</Button>
            <Button type='primary' size='small'>
              small
            </Button>
            <Button type='primary' size='mini'>
              mini
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='块级元素' description='按钮在默认情况下为行内块级元素，通过 block 属性可以将按钮的元素类型设置为块级元素。'>
          <Button type='primary' block>
            块级元素
          </Button>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。'>
          <Space>
            <Button disabled>禁用状态</Button>
            <Button type='primary' disabled>
              禁用状态
            </Button>
            <Button type='danger' disabled>
              禁用状态
            </Button>
            <Button type='dark' disabled>
              禁用状态
            </Button>
            <Button type='ghost' disabled>
              禁用状态
            </Button>
            <Button type='text' disabled>
              禁用状态
            </Button>
            <Button type='link' disabled>
              禁用状态
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='加载状态' description='通过 loading 属性设置按钮为加载状态；如果按钮有图标，加载状态下默认会暂时隐藏原有图标。'>
          <Space>
            <Button type='primary' icon={<HeartSvg />} loading={loading} onClick={() => setLoading(!loading)}>
              点赞
            </Button>
            <Button type='primary' loading={loading} onClick={() => setLoading(!loading)}>
              {loading ? '加载中...' : '切换状态'}
            </Button>
            <Button loading={loading} onClick={() => setLoading(!loading)}>
              {loading ? '加载中...' : '切换状态'}
            </Button>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
