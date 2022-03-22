import React, { useState } from 'react';
import { Demo } from 'demo';
import { Tooltip, Button, Input, Space } from '@ubt/udesign-ui-alpha';

export default function DropdownPage() {
  const [visible, setVisible] = useState<boolean>(false);

  const content = <>Hi Tooltip</>;

  return (
    <>
      <Demo.Page title='Tooltip 文字提示' description='简单的文字提示气泡框。'>
        <Demo.Block title='基础用法' description='通过 content 来指定内容。'>
          <Tooltip content={content}>
            <Button>Hover me</Button>
          </Tooltip>
        </Demo.Block>
        <Demo.Block title='触发方式' description='配置触发展示的时机，默认为 hover，可选 hover/focus/click/custom。设为 custom 时，需要配合 visible 属性使用，此时显示与否完全受控'>
          <Tooltip content={content} trigger='hover'>
            <Button>Hover me</Button>
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
          <Space vertical>
            <Space>
              <Tooltip content={content} placement='topLeft'>
                <Button>topLeft</Button>
              </Tooltip>
              <Tooltip content={content} placement='top'>
                <Button>top</Button>
              </Tooltip>
              <Tooltip content={content} placement='topRight'>
                <Button>topRight</Button>
              </Tooltip>
            </Space>
            <Space>
              <Tooltip content={content} placement='bottomLeft'>
                <Button>bottomLeft</Button>
              </Tooltip>
              <Tooltip content={content} placement='bottom'>
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip content={content} placement='bottomRight'>
                <Button>bottomRight</Button>
              </Tooltip>
            </Space>
            <Space justify='between'>
              <Space vertical>
                <Tooltip content={content} placement='leftTop'>
                  <Button size='large'>leftTop</Button>
                </Tooltip>
                <Tooltip content={content} placement='left'>
                  <Button size='large'>left</Button>
                </Tooltip>
                <Tooltip content={content} placement='leftBottom'>
                  <Button size='large'>leftBottom</Button>
                </Tooltip>
              </Space>
              <Space vertical>
                <Tooltip content={content} placement='rightTop'>
                  <Button size='large'>rightTop</Button>
                </Tooltip>
                <Tooltip content={content} placement='right'>
                  <Button size='large'>right</Button>
                </Tooltip>
                <Tooltip content={content} placement='rightBottom'>
                  <Button size='large'>rightBottom</Button>
                </Tooltip>
              </Space>
            </Space>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
