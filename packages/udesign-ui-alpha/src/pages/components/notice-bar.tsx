import React from 'react';
import { Demo } from 'demo';
import { NoticeBar, Toast } from '@ubt/udesign-ui-alpha';

export default function NoticeBarPage() {
  return (
    <>
      <Demo.Page title='NoticeBar 通知栏' description='用于循环播放展示一组消息通知。'>
        <Demo.Block title='基础用法' description='通过 children 设置通知栏的内容，通过 icon 属性设置通知栏左侧的图标。'>
          <NoticeBar icon>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</NoticeBar>
        </Demo.Block>
        <Demo.Block title='样式' description='通过 type 指定主题样式'>
          <NoticeBar type='default'>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</NoticeBar>
          <br />
          <NoticeBar type='primary'>为了确保您的资金安全，请设置支付密码</NoticeBar>
          <br />
          <NoticeBar type='success'>通知内容</NoticeBar>
          <br />
          <NoticeBar type='danger'>该银行3:00-12:00系统维护，请更换其他银行卡</NoticeBar>
          <br />
          <NoticeBar type='warning'>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</NoticeBar>
        </Demo.Block>
        <Demo.Block title='滚动播放' description='通过 scrollable 属性控制。'>
          <NoticeBar scrollable>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</NoticeBar>
        </Demo.Block>
        <Demo.Block title='多行展示' description='文字较长时，可以通过设置 wrap 属性来开启多行展示。'>
          <NoticeBar wrap>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</NoticeBar>
        </Demo.Block>
        <Demo.Block title='通知栏模式' description='通知栏支持 closeable 和 link 两种模式。'>
          <NoticeBar mode='closeable'>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</NoticeBar>
          <br />
          <NoticeBar mode='link'>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</NoticeBar>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
