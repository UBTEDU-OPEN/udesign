import React, { useState } from 'react';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';
import { Menu } from '@ubt/udesign-ui-alpha';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  const firstActiveKey = router.asPath.split('/').shift() || router.asPath.split('/').slice(1, 2)[0];
  const [activeKey, setActiveKey] = useState(firstActiveKey);

  function handleChange(name: string) {
    setActiveKey(name);
  }

  return (
    <>
      <div className='fixed z-20 bg-white w-full flex justify-between items-center shadow px-4'>
        <Link href='/'>
          <a className='font-bold text-xl'>uDesign</a>
        </Link>
        <Menu className='gap-5' onChange={handleChange} activeKey={activeKey} mode='horizontal'>
          <Menu.Item name='spec' disabled>
            设计
          </Menu.Item>
          <Menu.Item name='docs'>
            <Link href='/docs/guide/quick-start'>
              <a>文档</a>
            </Link>
          </Menu.Item>
          <Menu.Item name='components'>
            <Link href='/components/button'>
              <a>组件</a>
            </Link>
          </Menu.Item>
          <Menu.Item name='theme' disabled>
            主题
          </Menu.Item>
          <Menu.Item name='community' disabled>
            社区
          </Menu.Item>
          <Menu.Item name='github' disabled>
            <GithubOutlined className='text-xl flex' />
          </Menu.Item>
        </Menu>
      </div>
      <div className='h-14'></div>
    </>
  );
};

export default Navigation;
