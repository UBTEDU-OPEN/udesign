import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from '@ubt/udesign-ui';
import { SITE_NAME } from '../../constants/site';
import { Img } from '../../components';

const Navigation = () => {
  const router = useRouter();
  const defaultActiveKey = router.asPath.split('/').shift() || router.asPath.split('/').slice(1, 2)[0] || 'spec';

  function handleChange(name: string) {
    if (name === 'spec') return;

    let path = '';
    switch (name) {
      case 'docs':
        path = '/docs/changelog';
        break;
      case 'components':
        path = '/components/button';
        break;
      default:
        path = name;
        break;
    }
    router.push(path);
  }

  return (
    <>
      <header className='fixed z-50 bg-white w-full border-b'>
        <div className='max-w-screen-2xl mx-auto px-5 flex justify-between items-center'>
          <Link href='/'>
            <a className='no-underline flex items-center'>
              <Img src='/logo.svg' width='154' height='56' alt={SITE_NAME} />
              {process.env.UDESIGN_VERSION ? <span className='ml-3'>v{process.env.UDESIGN_VERSION}</span> : null}
            </a>
          </Link>
          <Menu hasLine onChange={handleChange} defaultActiveKey={defaultActiveKey} mode='horizontal'>
            <Link href='/'>
              <a className='text-inherit no-underline'>
                <Menu.Item name='spec'>设计</Menu.Item>
              </a>
            </Link>
            <Menu.Item name='docs'>文档</Menu.Item>
            <Menu.Item name='components'>组件</Menu.Item>
            <Menu.Item name='theme' disabled>
              主题
            </Menu.Item>
            <Menu.Item name='community' disabled>
              社区
            </Menu.Item>
          </Menu>
        </div>
      </header>
      <div className='h-14'></div>
    </>
  );
};

export default Navigation;
