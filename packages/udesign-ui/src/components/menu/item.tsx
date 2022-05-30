import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import MenuContext from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-menu-item`;

export type MenuItemProps = {
  name?: string; // 唯一标志符
  icon?: ReactNode; // 图标
  disabled?: boolean; // 是否禁用
  danger?: boolean; //	展示错误状态样式
} & NativeProps;

export const MenuItem = ({ name = '', icon, disabled, children, className, ...restProps }: MenuItemProps) => {
  const context = useContext(MenuContext);
  const active = context?.activeKey === name;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    context?.onClick?.(name);
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );

  return (
    <li className={cls} onClick={handleClick} {...restProps}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'Menu.Item';
