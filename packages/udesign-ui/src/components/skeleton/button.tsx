import classNames from 'classnames';
import React from 'react';
import { CommonSize, CommonShape } from '../../constants';
import { prefixCls } from './constants';

export type ButtonShape = Extract<CommonShape, 'circle' | 'square' | 'round'>;
export interface ButtonProps {
  active?: boolean; // 是否展示动画效果
  shape?: ButtonShape; // type shape round | circle | square  默认round
  size?: CommonSize; // type size small | middle | large  默认middle
}

export const Button = ({ shape = 'round', size = 'middle', active = false }: ButtonProps) => {
  const cls = classNames([`${prefixCls}-bg`], [`${prefixCls}`], [`${prefixCls}-button`], {
    [`${prefixCls}-button-${size}`]: size,
    [`${prefixCls}-button-${shape}`]: shape,
    [`${prefixCls}-active`]: active,
  });
  return (
    <>
      <div className={cls}></div>
    </>
  );
};

Button.displayName = 'Skeleton.Button';
