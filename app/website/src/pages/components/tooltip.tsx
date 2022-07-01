import React, { useState } from 'react';
import { Button, Space, Tooltip, Input } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function TooltipPage() {
  const [visible, setVisible] = useState<boolean>(false);

  const content = <>Hi Tooltip</>;

  return (
    <>
      <Demo.Page title='Tooltip 文字提示' description='简单的文字提示气泡框。'>
        <Demo.Block title='基础用法' description='通过 content 来指定内容。'>
          <Tooltip content={content}>
            <div className='px-10 py-3 bg-indigo-50 rounded'>Hover me</div>
          </Tooltip>
        </Demo.Block>
        <Demo.Block title='不显示箭头' description='通过 showArrow 来显示箭头，默认 true。'>
          <Tooltip content={content} showArrow={false}>
            <div className='px-10 py-3 bg-indigo-50 rounded'>Hover me</div>
          </Tooltip>
        </Demo.Block>
        <Demo.Block title='触发方式' description='配置触发展示的时机，默认为 hover，可选 hover/focus/click/custom。设为 custom 时，需要配合 visible 属性使用，此时显示与否完全受控'>
          <Tooltip content={content} trigger='hover'>
            <div className='px-10 py-3 bg-indigo-50 rounded'>Hover me</div>
          </Tooltip>
          <br />
          <br />
          <Tooltip content={content} trigger='focus'>
            <Input placeholder='Focus me' />
          </Tooltip>
          <br />
          <br />
          <Tooltip content={content} trigger='click'>
            <Button>Click me</Button>
          </Tooltip>
          <br />
          <br />
          <Tooltip content={content} trigger='click' visible={visible}>
            <Button onClick={() => setVisible(true)}>Controled show</Button>
            <Button onClick={() => setVisible(false)}>Controled hide</Button>
          </Tooltip>
        </Demo.Block>
        <Demo.Block title='弹出位置' description='支持弹出层在不同方向展示，共有 12 个方向'>
          <Space direction='vertical'>
            <Space>
              <Tooltip content={content} placement='topLeft'>
                <div className='px-10 py-3 bg-indigo-50 rounded'>topLeft</div>
              </Tooltip>
              <Tooltip content={content} placement='top'>
                <div className='px-10 py-3 bg-indigo-50 rounded'>top</div>
              </Tooltip>
              <Tooltip content={content} placement='topRight'>
                <div className='px-10 py-3 bg-indigo-50 rounded'>topRight</div>
              </Tooltip>
            </Space>
            <Space>
              <Tooltip content={content} placement='bottomLeft'>
                <div className='px-10 py-3 bg-indigo-50 rounded'>bottomLeft</div>
              </Tooltip>
              <Tooltip content={content} placement='bottom'>
                <div className='px-10 py-3 bg-indigo-50 rounded'>bottom</div>
              </Tooltip>
              <Tooltip content={content} placement='bottomRight'>
                <div className='px-10 py-3 bg-indigo-50 rounded'>bottomRight</div>
              </Tooltip>
            </Space>
            <Space justify='between'>
              <Space direction='vertical'>
                <Tooltip content={content} placement='leftTop'>
                  <div className='px-5 py-10 bg-indigo-50 rounded'>leftTop</div>
                </Tooltip>
                <Tooltip content={content} placement='left'>
                  <div className='px-5 py-10 bg-indigo-50 rounded'>left</div>
                </Tooltip>
                <Tooltip content={content} placement='leftBottom'>
                  <div className='px-5 py-10 bg-indigo-50 rounded'>leftBottom</div>
                </Tooltip>
              </Space>
              <Space direction='vertical'>
                <Tooltip content={content} placement='rightTop'>
                  <div className='px-5 py-10 bg-indigo-50 rounded'>rightTop</div>
                </Tooltip>
                <Tooltip content={content} placement='right'>
                  <div className='px-5 py-10 bg-indigo-50 rounded'>right</div>
                </Tooltip>
                <Tooltip content={content} placement='rightBottom'>
                  <div className='px-5 py-10 bg-indigo-50 rounded'>rightBottom</div>
                </Tooltip>
              </Space>
            </Space>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
