import React from 'react';
import classNames from 'classnames';
import { CommonSize, CommonShape } from '../../constants';
import { prefixCls } from './constants';

export type widthUnit = number | string;

export interface ParagraphProps {
  active?: boolean; // 是否展示动画效果
  size?: CommonSize; // type size small | middle | large  默认middle
  width?: widthUnit | Array<widthUnit>; // 对应行数的宽度 type width number | string | Array<number | string>
  rows?: number; // 行数 type rows number
}

export const Paragraph = ({ width = ['100%', '100%', '60%'], rows = 3, size = 'middle', active = false }: ParagraphProps) => {
  const getWidth = (index: number) => {
    if (Array.isArray(width)) {
      return width[index];
    }
    if (rows === index + 1) {
      return width;
    }
    return undefined;
  };

  const cls = classNames([`${prefixCls}-bg`], [`${prefixCls}`], [`${prefixCls}-paragraph`], {
    [`${prefixCls}-paragraph-${size}`]: size,
    [`${prefixCls}-active`]: active,
  });

  return (
    <>
      {[...Array(rows)].map((_, index) => (
        <div key={index} className={cls} style={{ width: getWidth(index) }}></div>
      ))}
    </>
  );
};

Paragraph.displayName = 'Skeleton.Paragraph';
