import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, MenuProps } from '@ubt/udesign-ui-alpha';

export type SideMenuItemProps = {
  name: string;
  text: string;
  disabled?: boolean;
};

export type SideMenuProps = {
  menus: SideMenuItemProps[];
  base?: string;
} & MenuProps;

export const SideMenu = ({ menus, base = 'components', onChange, ...restProps }: SideMenuProps) => {
  const router = useRouter();
  const defaultActiveKey = router.asPath.split('/').pop() || router.asPath.split('/').slice(-2, -1)[0];

  function handleChange(name: string) {
    router.push(`/${base}/${name.toLowerCase()}`);
    onChange?.(name);
  }

  return (
    <>
      <Menu onChange={handleChange} defaultActiveKey={defaultActiveKey} {...restProps}>
        {menus.map((menu) => (
          <Menu.Item key={menu.name} name={menu.name} disabled={menu.disabled}>
            {menu.text}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default SideMenu;
