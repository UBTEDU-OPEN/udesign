import classNames from 'classnames';
import React from 'react';
import { Size, Shape } from '../../constants';
import { prefixCls } from './constants';
import { NativeProps } from '../../utils';

export type ButtonProps = {
  active?: boolean; // 是否展示动画效果
  shape?: Shape; // type shape round | circle | square  默认round
  size?: Size; // type size small | middle | large  默认middle
} & NativeProps;

export const Button = ({ shape = 'round', size = 'middle', active = false, className, style }: ButtonProps) => {
  const cls = classNames(
    [`${prefixCls}-bg`],
    [`${prefixCls}-button`],
    {
      [`${prefixCls}-button-${size}`]: size,
      [`${prefixCls}-button-${shape}`]: shape,
      [`${prefixCls}-active`]: active,
    },
    className,
  );
  return (
    <>
      <div className={cls} style={style}></div>
    </>
  );
};

Button.displayName = 'Skeleton.Button';
