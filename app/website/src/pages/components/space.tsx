import React, { useState } from 'react';
import { Demo } from 'demo';
import { Button, Space, SpaceAlign, SpaceJustify, SpaceSize } from '@ubt/udesign-ui-alpha';

export default function SpacePage() {
  const [align, setAlign] = useState<SpaceAlign>('start');
  const [justify, setJustify] = useState<SpaceJustify>('start');
  const [size, setSize] = useState<SpaceSize>('middle');
  return (
    <>
      <Demo.Page title='Space 间距' description='设置组件之间的间距。'>
        <Demo.Block title='基本用法'>
          <Space>
            <Button type='primary'>按钮</Button>
            <Button type='primary'>按钮</Button>
            <Button type='primary'>按钮</Button>
            <Button type='primary'>按钮</Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='对齐方式' description='可使用 align 设置 align-items 对齐方式，可选值：start、center（默认）、end、baseline。'>
          <Space align={align}>
            <Button type={align === 'start' ? 'primary' : 'default'} onClick={() => setAlign('start')}>
              start
            </Button>
            <Button type={align === 'end' ? 'primary' : 'default'} onClick={() => setAlign('end')} size='large'>
              end
            </Button>
            <Button type={align === 'center' ? 'primary' : 'default'} onClick={() => setAlign('center')}>
              center
            </Button>
            <Button type={align === 'baseline' ? 'primary' : 'default'} onClick={() => setAlign('baseline')} size='small'>
              baseline
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='对齐方式' description='可使用 justfy 设置 justify-content 对齐方式，可选值：start, center（默认）, end, between, around, evenly'>
          <Space justify={justify}>
            <Button type='primary' onClick={() => setJustify('start')}>
              start
            </Button>
            <Button type='primary' onClick={() => setJustify('center')}>
              center
            </Button>
            <Button type='primary' onClick={() => setJustify('end')}>
              end
            </Button>
            <Button type='primary' onClick={() => setJustify('between')}>
              between
            </Button>
            <Button type='primary' onClick={() => setJustify('around')}>
              around
            </Button>
            <Button type='primary' onClick={() => setJustify('evenly')}>
              evenly
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='间距尺寸' description='可使用 size 设置间距大小，内置可选值：small、middle、large' todo='支持传入 number 来自定义间距大小，也支持传入 array 来同时设置水平和垂直方向的间距。'>
          <Space size={size}>
            <Button size='small' type={size === 'small' ? 'primary' : 'default'} onClick={() => setSize('small')}>
              small
            </Button>
            <Button size='middle' type={size === 'middle' ? 'primary' : 'default'} onClick={() => setSize('middle')}>
              middle
            </Button>
            <Button size='large' type={size === 'large' ? 'primary' : 'default'} onClick={() => setSize('large')}>
              large
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='间距方向' description='可使用 vertical 设置间距是否为垂直方向，默认情况下为 false。'>
          <Space vertical>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='设置换行' description='当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。'>
          <Space wrap>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
            <Button type='primary'>button</Button>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
