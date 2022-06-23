import React from 'react';
import Link from 'next/link';
import { Space, Button } from '@ubt/udesign-ui';
import { SITE_NAME } from '../constants/site';

const Index = () => (
  <div className='h-screen flex justify-center items-center'>
    <div className='text-center p-10'>
      <div className='text-4xl mb-5'>{SITE_NAME}</div>
      <div className='text-gray-500 mb-5'>一个意在统一所有教育产品设计风格的项目，包含设计规范、开发规范和开箱即用的 React 组件库</div>
      <Space justify='center'>
        <Link href='/components/button'>
          <Button type='primary'>组件文档</Button>
        </Link>
        <a target='_blank' href='http://npm.edu.ubtrobot.com/-/web/detail/@ubt/udesign-ui' rel='noreferrer'>
          <Button>开始使用</Button>
        </a>
        {/* <a target='_blank' href='https://doc.weixin.qq.com/sheet/e3_m_HlVAJqbDPJaR?scode=AHEAnwfZAAozPmC1ZHABwAsganACM&tab=3wvv42&checkAndAutoJump=1' rel="noreferrer">
            <Button>最新进度</Button>
          </a> */}
      </Space>
    </div>
  </div>
);

export default Index;
