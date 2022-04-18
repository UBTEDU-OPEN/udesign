import React, { useContext } from 'react';
import { MenuItem, MenuItemProps } from './item';
import Tooltip from '../tooltip';
import MenuContext from './context';

export type SubmenuProps = MenuItemProps & {
  title: string; // 子菜单显示文案
};

export const Submenu = ({ title, children, ...restProps }: SubmenuProps) => {
  const context = useContext(MenuContext);
  const { mode, prefixCls } = context;

  return (
    <>
      <Tooltip prefixCls={`${prefixCls}-submenu`} showArrow={false} content={children} placement={mode === 'horizontal' ? 'bottomLeft' : 'rightTop'} {...restProps}>
        <MenuItem>{title}</MenuItem>
      </Tooltip>
    </>
  );
};

Submenu.displayName = 'Menu.Submenu';
