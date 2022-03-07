import React, { useEffect, useState, ReactNode } from 'react';
import classNames from 'classnames';
import { LoadingIcon } from '@ubt/udesign-ui-alpha';
import { NativeProps } from '../../utils';
import { CommonType, CommonSize, CommonShape } from '../../constants';

const prefixCls = `ud-button`;

export type ButtonType = 'primary' | 'default' | 'text' | 'link';
export type ButtonSize = CommonSize;
export type ButtonShape = CommonShape;

export type ButtonProps = {
  type?: ButtonType; // 设置类型
  size?: ButtonSize; // 设置大小
  shape?: ButtonShape; // 设置形状
  loading?: boolean; // 设置载入状态
  block?: boolean; // 将宽度设置为其父宽度
  danger?: boolean; // 设置2级警示
  warning?: boolean; // 设置1级警示
  disabled?: boolean; // 不可用状态
  glass?: boolean; // 半透明状态
  // href?: string; // 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
  icon?: ReactNode; // 设置图标组件
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // 点击时的回调
} & NativeProps;

export const Button = ({ type = 'default', size = 'middle', shape = 'round', loading, block, danger, warning, disabled, glass, icon, onClick, className, children, ...restProps }: ButtonProps) => {
  const iconElement = icon && !loading ? icon : <LoadingIcon />;

  const hasIcon = loading || Boolean(icon);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-shape-${shape}`]: shape,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-danger`]: danger,
      [`${prefixCls}-warning`]: warning,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-glass`]: glass,
      [`${prefixCls}-icon-only`]: !children && hasIcon,
    },
    className,
  );

  return (
    <button className={cls} disabled={disabled} onClick={onClick} {...restProps}>
      {icon || loading ? (
        <span className={`${prefixCls}-icon-wrapper`}>
          {iconElement}
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

Button.displayName = 'Button';
