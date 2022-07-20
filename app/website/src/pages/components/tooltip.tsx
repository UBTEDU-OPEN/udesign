import React, { ReactNode, useState } from 'react';
import { Button, Space, Tooltip, Input } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function TooltipPage() {
  const [visible, setVisible] = useState<boolean>(false);

  const content = <>Hi Tooltip</>;

  const HorizontalBox = ({ children }: { children: ReactNode }) => <div className='w-36 h-12 flex justify-center items-center bg-indigo-50 rounded'>{children}</div>;
  const VerticalBox = ({ children }: { children: ReactNode }) => <div className='w-24 h-36 flex justify-center items-center bg-indigo-50 rounded'>{children}</div>;

  return (
    <>
      <Demo.Page title='Tooltip 文字提示' description='简单的文字提示气泡框。'>
        <Demo.Block title='基础用法' description='通过 content 来指定内容。'>
          <Tooltip content={content}>
            <HorizontalBox>Hover me</HorizontalBox>
          </Tooltip>
        </Demo.Block>
        <Demo.Block title='不显示箭头' description='通过 showArrow 来显示箭头，默认 true。'>
          <Tooltip content={content} showArrow={false}>
            <HorizontalBox>Hover me</HorizontalBox>
          </Tooltip>
        </Demo.Block>
        <Demo.Block title='触发方式' description='配置触发展示的时机，默认为 hover，可选 hover/focus/click/custom。设为 custom 时，需要配合 visible 属性使用，此时显示与否完全受控'>
          <Tooltip content={content} trigger='hover'>
            <HorizontalBox>Hover me</HorizontalBox>
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
            <Space>
              <Button onClick={() => setVisible(true)}>Controlled show</Button>
              <Button onClick={() => setVisible(false)}>Controlled hide</Button>
            </Space>
          </Tooltip>
        </Demo.Block>
        <Demo.Block title='弹出位置' description='支持弹出层在不同方向展示，共有 12 个方向'>
          <Space direction='vertical' align='start'>
            <Space>
              <Tooltip content={content} placement='topLeft'>
                <HorizontalBox>topLeft</HorizontalBox>
              </Tooltip>
              <Tooltip content={content} placement='top'>
                <HorizontalBox>top</HorizontalBox>
              </Tooltip>
              <Tooltip content={content} placement='topRight'>
                <HorizontalBox>topRight</HorizontalBox>
              </Tooltip>
            </Space>
            <Space justify='between'>
              <Space direction='vertical'>
                <Tooltip content={content} placement='leftTop'>
                  <VerticalBox>leftTop</VerticalBox>
                </Tooltip>
                <Tooltip content={content} placement='left'>
                  <VerticalBox>left</VerticalBox>
                </Tooltip>
                <Tooltip content={content} placement='leftBottom'>
                  <VerticalBox>leftBottom</VerticalBox>
                </Tooltip>
              </Space>
              <Space direction='vertical'>
                <Tooltip content={content} placement='rightTop'>
                  <VerticalBox>rightTop</VerticalBox>
                </Tooltip>
                <Tooltip content={content} placement='right'>
                  <VerticalBox>right</VerticalBox>
                </Tooltip>
                <Tooltip content={content} placement='rightBottom'>
                  <VerticalBox>rightBottom</VerticalBox>
                </Tooltip>
              </Space>
            </Space>
            <Space>
              <Tooltip content={content} placement='bottomLeft'>
                <HorizontalBox>bottomLeft</HorizontalBox>
              </Tooltip>
              <Tooltip content={content} placement='bottom'>
                <HorizontalBox>bottom</HorizontalBox>
              </Tooltip>
              <Tooltip content={content} placement='bottomRight'>
                <HorizontalBox>bottomRight</HorizontalBox>
              </Tooltip>
            </Space>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
