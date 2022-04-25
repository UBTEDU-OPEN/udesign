import React, { useState } from 'react';
import { Demo } from 'demo';
import { Popup } from '@ubt/udesign-ui-alpha';
import { Space, Button } from '@ubt/udesign-ui';

export default function PopupPage() {
  const [visible, setVisible] = useState(false);
  const [closeable, setCloseable] = useState(false);
  const [round, setRound] = useState(false);
  const [maskCloseable, setMaskCloseable] = useState(false);

  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  return (
    <>
      <Demo.Page title='Popup 弹出层' description='弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。'>
        <Demo.Block title='基础用法'>
          <Space>
            <Button type='primary' onClick={() => setVisible(true)}>
              打开弹出层
            </Button>
            {visible ? (
              <Popup onClose={() => setVisible(false)} style={{ padding: '30px' }}>
                contents
              </Popup>
            ) : null}
          </Space>
        </Demo.Block>
        <Demo.Block title='关闭图标' description='设置 closeable 属性后，会在弹出层的右上角显示关闭图标'>
          <Space>
            <Button type='primary' onClick={() => setCloseable(true)}>
              关闭图标
            </Button>
            {closeable ? (
              <Popup closeable onClose={() => setCloseable(false)} style={{ padding: '30px' }}>
                contents
              </Popup>
            ) : null}
          </Space>
        </Demo.Block>
        <Demo.Block title='圆角弹窗' description='设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式。'>
          <Space>
            <Button type='primary' onClick={() => setRound(true)}>
              圆角弹窗
            </Button>
            {round ? (
              <Popup round onClose={() => setRound(false)} style={{ padding: '30px' }}>
                contents
              </Popup>
            ) : null}
          </Space>
        </Demo.Block>
        <Demo.Block title='点击遮罩不关闭' description='通过 maskCloseable 来设置点击遮罩层是否关闭 Popup，默认为关闭，设置为 false 后不关闭。'>
          <Space>
            <Button type='primary' onClick={() => setMaskCloseable(true)}>
              点击遮罩不关闭
            </Button>
            {maskCloseable ? (
              <Popup closeable maskCloseable={false} onClose={() => setMaskCloseable(false)} style={{ padding: '30px' }}>
                contents
              </Popup>
            ) : null}
          </Space>
        </Demo.Block>
        <Demo.Block title='弹出位置' description='通过 position 属性设置弹出位置，默认居中弹出，可以设置为 top、bottom、left、right。'>
          <Space>
            <Button type='primary' onClick={() => setTop(true)}>
              top
            </Button>
            {top ? (
              <Popup position='top' onClose={() => setTop(false)} style={{ height: '30%' }}>
                contents
              </Popup>
            ) : null}
            <Button type='primary' onClick={() => setBottom(true)}>
              bottom
            </Button>
            {bottom ? (
              <Popup position='bottom' onClose={() => setBottom(false)} style={{ height: '30%' }}>
                contents
              </Popup>
            ) : null}
            <Button type='primary' onClick={() => setLeft(true)}>
              left
            </Button>
            {left ? (
              <Popup position='left' onClose={() => setLeft(false)} style={{ width: '30%' }}>
                contents
              </Popup>
            ) : null}
            <Button type='primary' onClick={() => setRight(true)}>
              right
            </Button>
            {right ? (
              <Popup position='right' onClose={() => setRight(false)} style={{ width: '30%' }}>
                contents
              </Popup>
            ) : null}
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
