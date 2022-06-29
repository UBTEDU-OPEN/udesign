import classNames from 'classnames';
import React from 'react';
import { CommonSize, CommonShape } from '../../constants';
import { prefixCls } from './constants';
import { NativeProps } from '../../utils';

export type AvatarSize = CommonSize | number;
export type AvatarShape = Extract<CommonShape, 'circle' | 'square'>;
export type AvatarProps = {
  active?: boolean; // 是否展示动画效果
  shape?: AvatarShape; // type shape circle | square  默认circle
  size?: AvatarSize; // type size small | middle | large | number  默认middle
} & NativeProps;

export const Avatar = ({ shape = 'circle', size = 'middle', active = false, className, style }: AvatarProps) => {
  const cls = classNames(
    [`${prefixCls}-bg`],
    [`${prefixCls}-avatar`],
    {
      [`${prefixCls}-avatar-${size}`]: size,
      [`${prefixCls}-avatar-${shape}`]: shape,
      [`${prefixCls}-active`]: active,
    },
    className,
  );

  const innerStyle =
    typeof size === 'number'
      ? {
          width: `${size}px`,
          height: `${size}px`,
        }
      : {};

  return (
    <>
      <div className={cls} style={{ ...style, ...innerStyle }}></div>
    </>
  );
};

Avatar.displayName = 'Skeleton.Avatar';
