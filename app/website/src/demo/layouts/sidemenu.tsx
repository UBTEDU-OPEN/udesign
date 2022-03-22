import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, MenuProps } from '@ubt/udesign-ui-alpha';

export type SideMenuProps = {
  menus: Array<{ name: string; text: string; disabled?: boolean }>;
  base?: string;
} & MenuProps;

export const SideMenu = ({ menus, base = 'components', onChange, ...restProps }: SideMenuProps) => {
  const router = useRouter();
  const firstActiveKey = router.asPath.split('/').pop() || router.asPath.split('/').slice(-2, -1)[0];
  const [activeKey, setActiveKey] = useState(firstActiveKey);

  function handleChange(name: string) {
    router.push(`/${base}/${name.toLowerCase()}`);
    setActiveKey(name);
    onChange?.(name);
  }

  return (
    <>
      <Menu onChange={handleChange} activeKey={activeKey} {...restProps}>
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
