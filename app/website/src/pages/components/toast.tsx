import React from 'react';
import { Button, Space, Toast } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function ToastPage() {
  return (
    <>
      <Demo.Page title='Toast 轻提示' description='非模态弹出提示。'>
        <Demo.Block title='何时使用' description='需要提醒用户，但不会打断用户操作。会自动消失，是一种不打断用户操作的轻量级提示方式。可提供反馈信息，一般情况文案字数较少。' />
        <Demo.Block title='基础用法' description='默认的提示'>
          <Space wrap>
            <Button onClick={() => Toast('请先勾选同意隐私协议、服务条款')} type='primary'>
              normal toast
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='其他类型提示' description='通过 style 属性传入自定义样式'>
          <Space wrap>
            <Button onClick={() => Toast({ content: '验证码已发送', style: { background: 'rgba(114,132,251,0.9)' } })} type='primary'>
              成功
            </Button>
            <Button onClick={() => Toast({ content: '手机号已被注册', style: { background: 'rgba(255,73,64,0.9)' } })} type='primary'>
              失败
            </Button>
            <Button onClick={() => Toast({ content: '出错', style: { background: 'rgba(255,73,64,0.9)' } })} type='primary' danger={true}>
              出错
            </Button>
            <Button onClick={() => Toast({ content: '警告', style: { background: 'rgba(255,171,16,0.9)' } })} type='primary' warning={true}>
              警告
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='延时提示'>
          <Button onClick={() => Toast({ content: '请先勾选同意隐私协议、服务条款', delay: 1000 })} type='primary'>
            延时提示
          </Button>
        </Demo.Block>
        <Demo.Block title='自定义提示显示时长'>
          <Button onClick={() => Toast({ content: '请先勾选同意隐私协议、服务条款', duration: 1000 })} type='primary'>
            自定义提示显示时间
          </Button>
        </Demo.Block>
        <Demo.Block title='显示位置' description='可以配置提示从上方、居中、下方、左侧、右侧弹出。'>
          <Space wrap>
            <Button onClick={() => Toast({ content: '请先勾选同意隐私协议、服务条款', position: 'center' })} type='primary'>
              居中显示
            </Button>
            <Button onClick={() => Toast({ content: '请先勾选同意隐私协议、服务条款', position: 'top' })} type='primary'>
              顶部显示
            </Button>
            <Button onClick={() => Toast({ content: '请先勾选同意隐私协议、服务条款', position: 'bottom' })} type='primary'>
              底部显示
            </Button>
            <Button onClick={() => Toast({ content: '请先勾选同意隐私协议、服务条款', position: 'left' })} type='primary'>
              左侧显示
            </Button>
            <Button onClick={() => Toast({ content: '请先勾选同意隐私协议、服务条款', position: 'right' })} type='primary'>
              右侧显示
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='结束回调'>
          <Button
            onClick={() =>
              Toast({
                content: '将在500ms后关闭',
                duration: 500,
                afterClose: () => alert('closed'),
              })
            }
            type='primary'
          >
            结束时回调
          </Button>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

ToastPage.getLayout = getLayout;
