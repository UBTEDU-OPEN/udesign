import React from 'react';
import Link from 'next/link';
import { Space, Button } from '@ubt/udesign-ui';
import { SITE_NAME } from '../constants/site';

const Index = () => (
  <div className='h-screen flex justify-center items-center'>
    <div className='text-center p-10'>
      <div className='text-4xl'>{SITE_NAME}</div>
      <div className='text-gray-500 mt-5'>一个意在统一所有教育产品设计风格的项目，包含设计规范、开发规范和开箱即用的 React 组件库</div>
      <Space className='mt-5' justify='center'>
        <Link href='/components/button'>
          <Button type='primary'>组件文档</Button>
        </Link>
        <Link href='/docs/guide/changelog'>
          <Button type='primary' warning>
            更新日志
          </Button>
        </Link>
        <a target='_blank' href='http://npm.edu.ubtrobot.com/-/web/detail/@ubt/udesign-ui' rel='noreferrer noopener'>
          <Button>开始使用</Button>
        </a>
      </Space>
      {process.env.UDESIGN_VERSION ? <div className='mt-5 text-gray-500'>当前版本：v{process.env.UDESIGN_VERSION}</div> : null}
    </div>
  </div>
);

export default Index;
