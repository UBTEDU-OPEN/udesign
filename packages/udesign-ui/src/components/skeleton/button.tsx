import classNames from 'classnames';
import React from 'react';
import { CommonSize, CommonShape } from '../../constants';
import { prefixCls } from './constants';
import { NativeProps } from '../../utils';

export type ButtonShape = Extract<CommonShape, 'circle' | 'square' | 'round'>;
export type ButtonProps = {
  active?: boolean; // 是否展示动画效果
  shape?: ButtonShape; // type shape round | circle | square  默认round
  size?: CommonSize; // type size small | middle | large  默认middle
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
