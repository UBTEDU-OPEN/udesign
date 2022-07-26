import React from 'react';
import { useRouter } from 'next/router';
import { Menu } from '@ubt/udesign-ui';
import { NativeProps } from '@ubt/udesign-utils';

export type SideMenuItemProps = {
  name: string;
  text: string;
  disabled?: boolean;
};

export type SideMenuProps = {
  menus: SideMenuItemProps[];
  base?: string;
} & NativeProps;

export const SideMenu = ({ menus, base = 'components', ...restProps }: SideMenuProps) => {
  const router = useRouter();
  const defaultActiveKey = router.asPath.split('/').pop() || router.asPath.split('/').slice(-2, -1)[0];

  function handleChange(name: string) {
    router.push(`/${base}/${name.toLowerCase()}`);
  }

  return (
    <>
      <Menu onChange={handleChange} defaultActiveKey={defaultActiveKey} {...restProps}>
        {menus.map((menu) => (
          <Menu.Item key={menu.name} name={menu.name} disabled={menu.disabled}>
            {menu.disabled ? <div title='规划中'>{menu.text}</div> : menu.text}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default SideMenu;
