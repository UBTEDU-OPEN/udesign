import React from 'react';
import { Button, Space, Toast } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function ToastPage() {
  return (
    <>
      <Demo.Page title='Toast 轻提示' description='非模态弹出提示。'>
        <Demo.Block
          title='何时使用'
          description='需要提醒用户，但不会打断用户操作。会自动消失，是一种不打断用户操作的轻量级提示方式。
可提供反馈信息，一般情况文案字数较少。'
        ></Demo.Block>
        <Demo.Block>
          <Space wrap>
            <Button onClick={() => Toast('默认')}>默认</Button>
            <Button onClick={() => Toast({ content: '自定义延时', delay: 0 })}>自定义延时</Button>
            <Button onClick={() => Toast({ content: '自定义显示时间', duration: 1000 })}>自定义显示时间</Button>
            <Button onClick={() => Toast({ content: '自定义位置', position: 'center' })}>自定义位置</Button>
            <Button onClick={() => Toast('文案很长很长很长很长很长很长很长很长很长很长很长很长很长很长文案很长很长很长很长很长很长很长很长很长很长很长很长很长很长')}>文案很长</Button>
            <Button
              onClick={() =>
                Toast({
                  content: '将在500ms后关闭',
                  duration: 500,
                  afterClose: () => alert('closed'),
                })
              }
            >
              结束时回调
            </Button>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
