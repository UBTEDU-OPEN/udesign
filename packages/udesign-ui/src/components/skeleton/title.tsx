import classNames from 'classnames';
import React from 'react';
import { widthUnit } from './paragraph';
import { CommonSize } from '../../constants';
import { prefixCls } from './constants';
import { NativeProps } from '../../utils';

export type TitleProps = {
  active?: boolean; // 是否展示动画效果
  width?: widthUnit; // type width number | string
  size?: CommonSize; // type size small | middle | large  默认middle
} & NativeProps;

export const Title = ({ width = '38%', size = 'middle', active = false, className, style }: TitleProps) => {
  const cls = classNames(
    [`${prefixCls}-bg`],
    [`${prefixCls}-title`],
    {
      [`${prefixCls}-title-${size}`]: size,
      [`${prefixCls}-active`]: active,
    },
    className,
  );

  return (
    <>
      <div className={cls} style={{ ...style, width }}></div>
    </>
  );
};

Title.displayName = 'Skeleton.Title';
