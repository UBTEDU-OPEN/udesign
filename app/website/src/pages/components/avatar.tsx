import React from 'react';
import { SettingFilled, UserOutlined } from '@ubt/udesign-icons';
import { Avatar, Badge } from '@ubt/udesign-ui-alpha';
import { Space } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function AvatarPage() {
  return (
    <>
      <Demo.Page title='Avatar 头像' description='用来代表用户或事物，支持图片、图标或字符展示。'>
        <Demo.Block title='尺寸' description='可以通过 size 属性设置图标大小'>
          <Space align='center'>
            <Avatar size='large'>l</Avatar>
            <Avatar size='middle'>M</Avatar>
            <Avatar size='small'>s</Avatar>
            <Avatar size='mini'>i</Avatar>
          </Space>
        </Demo.Block>
        <Demo.Block title='形状' description='Avatar 支持 round、default, square 三种形状，默认为 round。'>
          <Space>
            <Avatar shape='square' />
            <Avatar shape='default' />
            <Avatar shape='round' />
          </Space>
        </Demo.Block>
        <Demo.Block title='图片' description='可以通过 src 设置图片格式的头像。'>
          <Space>
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            <Avatar icon={<SettingFilled />} />
            <Avatar>
              <SettingFilled />
            </Avatar>
            <Avatar>A</Avatar>
          </Space>
        </Demo.Block>
        <Demo.Block title='和badge组合使用' description='通常用于消息提示，在线状态'>
          <Space>
            <Badge content={1}>
              <Avatar icon={<UserOutlined />} />
            </Badge>
            <Badge content={Badge.Dot}>
              <Avatar icon={<UserOutlined />} size='small' />
            </Badge>
            <Badge className='bg-green-400 top-auto bottom-0'>
              <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义样式' description='通过 className 自定义样式'>
          <Space>
            <Avatar className='bg-green-400'>A</Avatar>
            <Avatar className='bg-gray-600'>
              <SettingFilled />
            </Avatar>
          </Space>
        </Demo.Block>
        <Demo.Block title='头像组' description='可以通过 AvatarGroup 将 avatar 显示为组。'>
          <Avatar.Group>
            <Avatar shape='round' className='border-2 border-white' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            <Avatar shape='round' className='border-2 border-white' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            <Avatar shape='round' className='border-2 border-white bg-indigo-600'>
              A
            </Avatar>
            <Avatar shape='round' className='border-2 border-white'>
              <div className='text-base'>+10</div>
            </Avatar>
          </Avatar.Group>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
