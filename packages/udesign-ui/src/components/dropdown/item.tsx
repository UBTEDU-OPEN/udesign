import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import DropdownContext from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-dropdown-item`;

export type ItemProps = {
  disabled?: boolean; // 是否禁用
  danger?: boolean; //	是否错误状态
  name: string; // 唯一标志符
  icon?: ReactNode; // 图标
} & NativeProps;

export const Item = (props: ItemProps) => {
  const { name, disabled, danger, children, className, style } = props;

  const context = useContext(DropdownContext);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    context?.onClick?.(name);
  };

  const renderIcon = () => {
    const { icon } = props;
    const cls = classNames(`${prefixCls}-icon`);
    return icon ? <div className={cls}>{icon}</div> : null;
  };

  const cls = classNames(
    prefixCls,
    {
      // [`${prefixCls}-active`]: active,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-danger`]: danger,
    },
    className,
  );

  return (
    <li className={cls} onClick={handleClick} style={style}>
      {renderIcon()}
      {children}
    </li>
  );
};

Item.displayName = 'Dropdown.Item';
