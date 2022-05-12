import React from 'react';
import Link from 'next/link';
import { Space, Button } from '@ubt/udesign-ui';
import { Toast } from '@ubt/udesign-ui-alpha';

const Index = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='text-center p-10'>
        <div className='text-4xl mb-5'>uDesign</div>
        <div className='text-gray-500 mb-5'>一个意在统一所有教育产品设计风格的项目，包含设计规范、开发规范和开箱即用的 React 组件库</div>
        <Space justify='center'>
          <Link href='/components/button'>
            <Button type='primary'>预览</Button>
          </Link>
          <Button onClick={() => Toast('接入文档即将上线，敬请期待！')}>开始使用</Button>
        </Space>
      </div>
    </div>
  );
};

export default Index;
