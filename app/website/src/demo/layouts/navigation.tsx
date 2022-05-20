import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GithubOutlined } from '@ant-design/icons';
import { Menu } from '@ubt/udesign-ui';

const Navigation = () => {
  const router = useRouter();
  const defaultActiveKey = router.asPath.split('/').shift() || router.asPath.split('/').slice(1, 2)[0];

  function handleChange(name: string) {
    let path = '';
    switch (name) {
      case 'docs':
        path = '/docs/guide/quick-start';
        break;
      case 'components':
        path = '/components/button';
        break;
      default:
        break;
    }
    router.push(path);
  }

  return (
    <>
      <div className='fixed z-20 bg-white w-full flex justify-between items-center shadow px-4'>
        <Link href='/'>
          <a className='font-bold text-xl'>uDesign</a>
        </Link>
        <Menu className='gap-5' onChange={handleChange} defaultActiveKey={defaultActiveKey} mode='horizontal'>
          <a className='text-inherit' target='_blank' href='http://dev.edu.ubtrobot.com/UI/U-Design/' rel="noreferrer">
            <Menu.Item name='spec'>设计</Menu.Item>
          </a>
          <Menu.Item name='docs'>文档</Menu.Item>
          <Menu.Item name='components'>组件</Menu.Item>
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
