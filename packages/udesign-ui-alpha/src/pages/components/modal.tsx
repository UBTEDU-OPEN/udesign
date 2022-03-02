import React, { useState } from 'react';
import { Demo } from 'demo';
import { Modal, Button, Space } from '@ubt/udesign-ui-alpha';

export default function ModalPage() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  return (
    <>
      <Demo.Page title='Modal 对话框' description='用于消息提示、消息确认，或在当前页面内完成特定的交互操作。' todo='函数式调用；尺寸大小；'>
        <Demo.Block title='基础用法'>
          <Space>
            <Button type='primary' onClick={() => setVisible(true)}>
              打开对话框
            </Button>
            <Modal visible={visible} title='Basic Modal' onCancel={() => setVisible(false)} afterClose={() => setVisible(false)}>
              <p className='py-4 text-base font-medium text-gray-800'>Some contents...</p>
              <p className='text-sm font-medium text-gray-600'>Some contents...</p>
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='点击遮罩层不可关闭' description='修改 maskClosable 为 false 则不可通过点击遮罩层来关闭对话框。'>
          <Space>
            <Button type='primary' onClick={() => setVisible2(true)}>
              点击遮罩层不可关闭
            </Button>
            <Modal visible={visible2} title='Basic Modal' maskCloseable={false} onCancel={() => setVisible2(false)} afterClose={() => setVisible2(false)}>
              <p className='py-4 text-base font-medium text-gray-800'>Some contents...</p>
              <p className='text-sm font-medium text-gray-600'>Some contents...</p>
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义按钮文字'>
          <Space>
            <Button type='primary' onClick={() => setVisible3(true)}>
              自定义按钮文字
            </Button>
            <Modal visible={visible3} title='Basic Modal' onCancel={() => setVisible3(false)} cancelText='不保存' okText='保存' afterClose={() => setVisible3(false)}>
              <p className='py-4 text-base font-medium text-gray-800'>Some contents...</p>
              <p className='text-sm font-medium text-gray-600'>Some contents...</p>
            </Modal>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义对话框'>
          <Space>
            <Button type='primary' onClick={() => setVisible4(true)}>
              自定义对话框
            </Button>
            <Modal visible={visible4} title='Basic Modal' onCancel={() => setVisible4(false)} cancelText='不保存' okText='保存' afterClose={() => setVisible4(false)}>
              <p className='py-4 text-base font-medium text-gray-800'>Some contents...</p>
              <p className='text-sm font-medium text-gray-600'>Some contents...</p>
            </Modal>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
