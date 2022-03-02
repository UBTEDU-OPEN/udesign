import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Demo } from 'demo';
import { Button, Input, Space } from '@ubt/udesign-ui-alpha';

export default function InputPage() {
  const [value, setValue] = useState('Hi');
  return (
    <>
      <Demo.Page title='Input 输入框' description='输入框是最基本的接收用户文本输入的组件，其他属性与html input 标签保持一致'>
        <Demo.Block title='基础用法' description='通过 defaultValue 属性设置默认值'>
          <Input defaultValue='Hi' />
        </Demo.Block>
        <Demo.Block title='尺寸' description='通过 size 属性设置尺寸'>
          <Space>
            <Input placeholder='large' size='large' />
            <Input placeholder='middle' />
            <Input placeholder='small' size='small' />
          </Space>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过 disabled 属性设置禁用状态'>
          <Input placeholder='disabled input' disabled />
        </Demo.Block>
        <Demo.Block title='前缀/后缀' description='通过 prefix 属性设置前缀，suffix 属性设置后缀，支持 ReactNode'>
          <Input prefix={<SearchOutlined />} />
          <br />
          <br />
          <Input suffix='发送验证码' />
          <br />
          <br />
          <Input prefix='http://' suffix='.com' />
        </Demo.Block>
        <Demo.Block title='字数提示' description='通过 maxCount 属性设置字数提示'>
          <Input defaultValue='Hi' maxCount={40} clearable />
        </Demo.Block>
        <Demo.Block title='可清空' description='通过 clearable 属性设置移除图标，点击图标删除所有内容'>
          <Input defaultValue='Hi' clearable />
        </Demo.Block>
        <Demo.Block title='受控组件' description='Input 值完全取决于传入的 value 值，配合 onChange 回调函数使用'>
          <Input value={value} />
          <br />
          <br />
          <Button onClick={() => setValue('new value')}>改值</Button>
        </Demo.Block>
        <Demo.Block title='password'>
          <Input type='password' />
        </Demo.Block>
        <Demo.Block title='number'>
          <Input type='number' />
        </Demo.Block>
        <Demo.Block title='file'>
          <Input type='file' />
        </Demo.Block>
        <Demo.Block title='date'>
          <Input type='date' />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
