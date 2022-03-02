import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { getDisabledCls, NativeProps } from '../../utils';

export type ItemProps = {
  name?: string; // 唯一标志符
  icon?: ReactNode; // 图标
  disabled?: boolean; // 是否禁用
  active?: boolean; // 是否选中，由上层传入
  // link?: string; // href连接，传入时导航项整体会包裹一个 a 标签
  onInnerClick?: (name: string, e: React.MouseEvent<HTMLElement>) => void; // 由上层传入
} & NativeProps;

export const Item = ({ name = '', icon, disabled, active, onInnerClick, children, className, ...restProps }: ItemProps) => {
  const cls = classNames('my-2 p-3 rounded', getDisabledCls(disabled, active ? 'bg-indigo-50 text-indigo-600 cursor-pointer' : 'hover:text-indigo-600 cursor-pointer'), className);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onInnerClick?.(name, e);
  };

  return (
    <li className={cls} onClick={handleClick} {...restProps}>
      {children}
    </li>
  );
};

Item.displayName = 'Menu.Item';
