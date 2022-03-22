import React from 'react';
import { Demo } from 'demo';
import { Toast, Button, HeartFilledIcon, Space } from '@ubt/udesign-ui-alpha';

export default function ToastPage() {
  return (
    <>
      <Demo.Page title='Toast 轻提示'>
        <Demo.Block>
          <Space wrap>
            <Button onClick={() => Toast('默认')}>默认</Button>
            <Button onClick={() => Toast({ content: '默认', mask: true })}>有遮罩</Button>
            <Button onClick={() => Toast('文案很长很长很长很长很长很长很长很长很长很长很长很长很长很长')}>文案很长</Button>
            <Button
              onClick={() =>
                Toast({
                  content: '将在500ms后关闭',
                  duration: 500,
                  afterClose: () => alert('closed'),
                })
              }
            >
              duration:500
            </Button>
            <Button onClick={() => Toast({ content: '保存成功', icon: 'success' })}>success</Button>
            <Button onClick={() => Toast({ content: '保存失败', icon: 'fail' })}>fail</Button>
            <Button onClick={() => Toast({ content: '加载中...', icon: 'loading' })}>loading</Button>
            <Button onClick={() => Toast({ content: '自定义', icon: <HeartFilledIcon /> })}>自定义</Button>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
