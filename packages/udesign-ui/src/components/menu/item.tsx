import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import MenuContext from './context';
import SubMenuContext from './SubMenuContext';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-menu-item`;

export type MenuItemProps = {
  name?: string; // 唯一标志符
  icon?: ReactNode; // 图标
  disabled?: boolean; // 是否禁用
  danger?: boolean; //	展示错误状态样式
  link?: boolean;
} & NativeProps;

export const MenuItem = ({ name = '', icon, disabled, link = false, children, className, style, ...restProps }: MenuItemProps) => {
  const context = useContext(MenuContext);
  const subContext = useContext(SubMenuContext);
  const active = context?.activeKey === name;
  const mode = context?.mode;
  const hasLine = context?.hasLine;
  const radius = context?.radius;
  const isCollapsed = context?.isCollapsed;
  const subName = subContext?.name;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    context?.onClick?.(name);
    context?.subClick?.(name, subName === undefined ? '' : subName);
    // subContext.onClick?.(subName);
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-border-${mode}`]: mode,
      [`${prefixCls}-${mode}`]: mode,
      [`${prefixCls}-link`]: link,
      [`${prefixCls}-border-hasLine-${mode}`]: hasLine,
      [`${prefixCls}-hasLine-active`]: hasLine,
      [`${prefixCls}-radius`]: radius,
      [`ud-menu-submenu-is-collapsed`]: isCollapsed,
    },
    className,
  );

  return (
    <>
      <li className={cls} onClick={handleClick} style={style} {...restProps}>
        {icon || null}
        {!isCollapsed || mode === 'inline' ? children : null}
      </li>
    </>
  );
};

MenuItem.displayName = 'Menu.Item';
