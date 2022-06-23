import React, { useState } from 'react';
import { CloseCircleOutlined, InfoCircleOutlined, SearchOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space, Input, TextArea } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function InputPage() {
  const [value, setValue] = useState('controlled');
  return (
    <>
      <Demo.Page title='Input 输入框' description='通过键盘输入内容。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              *需要用户输入表单域内容时。
              <br /> *提供组合型输入框，带搜索的输入框，还可以进行大小选择。
            </>
          }
        />
        <Demo.Block title='基础用法' description='基础的输入框'>
          <Input placeholder='Basic usage' />
        </Demo.Block>
        <Demo.Block title='尺寸' description='通过 size 属性设置尺寸'>
          <Space direction='vertical'>
            <Input placeholder='large' size='large' />
            <Input placeholder='middle' />
            <Input placeholder='small' size='small' />
          </Space>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过 disabled 属性设置禁用状态'>
          <Input placeholder='disabled input' disabled />
        </Demo.Block>
        <Demo.Block title='前置/后置标签' description='通过 prepend 属性设置前置标签，append 属性设置后置标签，支持 ReactNode' todo='增加和 Select 组件的组合案例'>
          <Input prepend='http://' />
          <br />
          <br />
          <Input append={<SettingOutlined />} />
          <br />
          <br />
          <Input prepend='http://' append='.com' />
        </Demo.Block>
        <Demo.Block title='前缀/后缀' description='通过 prefix 属性设置前缀，suffix 属性设置后缀，支持 ReactNode'>
          <Input prefix={<UserOutlined />} suffix={<InfoCircleOutlined />} />
          <br />
          <br />
          <Input prefix='￥' suffix='RMB' />
          <br />
          <br />
          <Input prefix='￥' suffix='RMB' disabled />
        </Demo.Block>
        <Demo.Block title='搜索输入框' description='带有搜索功能的输入框'>
          <Input placeholder='input search text' suffix={<SearchOutlined />} />
          <br />
          <br />
          <Space>
            <Input placeholder='input search text' />
            <Button type='primary' icon={<SearchOutlined />} />
          </Space>
        </Demo.Block>
        <Demo.Block title='密码框' description='密码输入框，支持加密字符。'>
          <Input type='password' value='Basic usage' />
        </Demo.Block>
        <Demo.Block title='字数提示' description='通过 maxLength 属性限定总输入字数，showCount 来显示可输入字数提示'>
          <Space direction='vertical'>
            <Input placeholder='请输入名称' maxLength={40} showCount />
            <TextArea placeholder='给你的作品写一个操作指南，并告诉大家如何操作' maxLength={200} showCount />
          </Space>
        </Demo.Block>
        <Demo.Block title='带删除图标' description='通过 showClear 属性设置移除图标，点击图标删除所有内容'>
          <Input placeholder='input with clear icon' showClear />
        </Demo.Block>
        <Demo.Block title='自定义状态' description='使用 status 为输入框添加状态，可选 error 或者 warning。'>
          <Space direction='vertical'>
            <Input status='error' placeholder='Error' />
            <Input status='warning' placeholder='Warning' />
            <Input status='error' suffix={<CloseCircleOutlined />} placeholder='Error with suffix' />
            <Input status='warning' suffix={<InfoCircleOutlined />} placeholder='Warning with suffix' />
          </Space>
        </Demo.Block>
        <Demo.Block title='受控组件' description='当传入 value 时，输入框将变成受控组件，必须配合 onChange 回调函数使用。如果不希望使用受控组件，请使用 defaultValue。'>
          <Input
            value={value}
            onChange={(value) => {
              console.log(value);
              setValue(value);
            }}
          />
          <br />
          <br />
          <Button onClick={() => setValue('new value')}>Change Value</Button>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
