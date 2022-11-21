import React from 'react';
import { useRouter } from 'next/router';
import { Menu } from '@ubt/udesign-ui';
import { NativeProps } from '@ubt/udesign-utils';

export type SideMenuItemProps = {
  name: string;
  text: string;
  title?: number;
  disabled?: boolean;
};

export type SideMenuProps = {
  menus: SideMenuItemProps[]; // 页面左侧菜单
  base: string; // 页面路径
} & NativeProps;

export const SideMenu = ({ menus, base, ...restProps }: SideMenuProps) => {
  const router = useRouter();
  const defaultActiveKey = router.asPath.split('/').pop() || router.asPath.split('/').slice(-2, -1)[0];

  function handleChange(name: string) {
    router.push(`/${base}/${name.toLowerCase()}`);
  }

  return (
    <>
      <Menu onChange={handleChange} defaultActiveKey={defaultActiveKey} {...restProps}>
        {menus.map((menu) =>
          menu.title ? (
            <div key={menu.name} className='my-2 p-3 border-b font-bold'>
              {menu.name}
            </div>
          ) : (
            <Menu.Item key={menu.name} name={menu.name} disabled={menu.disabled}>
              {menu.disabled ? <div title='规划中'>{menu.text}</div> : menu.text}
            </Menu.Item>
          ),
        )}
      </Menu>
    </>
  );
};

export default SideMenu;