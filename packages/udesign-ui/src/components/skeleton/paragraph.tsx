import React from 'react';
import classNames from 'classnames';
import { Size } from '../../constants';
import { prefixCls } from './constants';
import { NativeProps } from '../../utils';

export type widthUnit = number | string;

export type ParagraphProps = {
  active?: boolean; // 是否展示动画效果
  size?: Size; // type size small | middle | large  默认middle
  width?: widthUnit | Array<widthUnit>; // 对应行数的宽度 type width number | string | Array<number | string>
  rows?: number; // 行数 type rows number
} & NativeProps;

export const Paragraph = ({ width = ['100%', '100%', '60%'], rows = 3, size = 'middle', active = false, className, style }: ParagraphProps) => {
  const getWidth = (index: number) => {
    if (Array.isArray(width)) {
      return width[index];
    }
    if (rows === index + 1) {
      return width;
    }
    return undefined;
  };

  const cls = classNames(
    [`${prefixCls}-bg`],
    [`${prefixCls}-paragraph`],
    {
      [`${prefixCls}-paragraph-${size}`]: size,
      [`${prefixCls}-active`]: active,
    },
    className,
  );

  return (
    <>
      {[...Array(rows)].map((_, index) => (
        <div key={index} className={cls} style={{ ...style, width: getWidth(index) }}></div>
      ))}
    </>
  );
};

Paragraph.displayName = 'Skeleton.Paragraph';
