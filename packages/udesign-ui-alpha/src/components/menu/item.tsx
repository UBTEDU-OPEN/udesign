import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { getDisabledCls, NativeProps } from '../../utils';
import { MenuContext } from './context';

export type ItemProps = {
  name?: string; // 唯一标志符
  icon?: ReactNode; // 图标
  disabled?: boolean; // 是否禁用
  // danger?: boolean; //	展示错误状态样式
} & NativeProps;

export const Item = ({ name = '', icon, disabled, children, className, ...restProps }: ItemProps) => {
  const menuCtx = useContext(MenuContext);
  const active = menuCtx?.activeKey === name;

  const activeCls = classNames('cursor-pointer', active ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-indigo-100 hover:text-indigo-600');
  const cls = classNames('truncate p-4', getDisabledCls(disabled, activeCls), className);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    menuCtx?.onClick?.(name);
  };

  return (
    <li className={cls} onClick={handleClick} {...restProps}>
      {children}
    </li>
  );
};

Item.displayName = 'Menu.Item';
