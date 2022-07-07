import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { RightOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import DropdownContext from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-dropdown-item`;

export type DropdownItemProps = {
  name: string; // 子项唯一标志符
  icon?: ReactNode; // 子项图标
  label?: ReactNode; // 子项标题
  // showArrow?: boolean; // 子项是否显示箭头
  disabled?: boolean; // 子项是否禁用
  danger?: boolean; //	子项是否错误状态
} & NativeProps;

export const Item = (props: DropdownItemProps) => {
  const { name, icon, label, disabled, danger, children, className, style } = props;

  const context = useContext(DropdownContext);
  // const active = context?.activeKey === name;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    context?.onClick?.(name);
  };

  const renderIcon = () => {
    const { icon } = props;
    const cls = classNames(`${prefixCls}-icon`);
    return icon ? <div className={cls}>{icon}</div> : null;
  };

  // const renderArrow = () => {
  //   const { showArrow } = props;
  //   const cls = classNames(`${prefixCls}-arrow`);
  //   return showArrow ? <RightOutlined className={cls} /> : null;
  // };

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
      {label || children}
      {/* {renderArrow()} */}
    </li>
  );
};

Item.displayName = 'Dropdown.Item';
