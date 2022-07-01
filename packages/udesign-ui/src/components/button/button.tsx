import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { LoadingOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { Size, Shape, BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-button`;

export type ButtonType = 'primary' | 'default' | 'text' | 'link';
export type ButtonSize = Size;
export type ButtonShape = Shape;

export type ButtonProps = {
  block?: boolean; // 将宽度设置为其父宽度
  danger?: boolean; // 设置2级警示
  type?: ButtonType; // 设置类型
  size?: ButtonSize; // 设置大小
  shape?: ButtonShape; // 设置形状
  loading?: boolean; // 设置载入状态
  warning?: boolean; // 设置1级警示
  disabled?: boolean; // 不可用状态
  glass?: boolean; // 半透明状态
  // href?: string; // 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
  icon?: ReactNode; // 设置图标组件
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // 点击时的回调
} & NativeProps;

export const Button = ({ type = 'default', size = 'middle', shape = 'round', loading, block, danger, warning, disabled, glass, icon, onClick, className, children, ...restProps }: ButtonProps) => {
  const iconElement = icon && !loading ? icon : <LoadingOutlined spin />;

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
          {children ? <span className={`${prefixCls}-icon-text`}>{children}</span> : null}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

Button.displayName = 'Button';
