import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CommonSize } from '../../constants/size';

// No `stretch` since many components do not support that.
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export type SpaceJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type SpaceDirection = 'vertical' | 'horizontal';
export type SpaceSize = CommonSize;

const prefixCls = 'ud-space';
export type SpaceProps = {
  align?: SpaceAlign; // 对齐方式
  justify?: SpaceJustify; // 对齐方式
  direction?: SpaceDirection; // 是否为垂直间距
  size?: CommonSize | number ; // 间距大小
  wrap?: boolean; // 是否自动换行，仅在 horizontal 时有效
} & NativeProps;

export const Space = ({ align = 'start', justify = 'start', direction = 'horizontal', size ='small', wrap = false, className, children }: SpaceProps) => {
 
  const cls = classNames(
    prefixCls,
    {
        [`${prefixCls}-align-${align}`]: align,
        [`${prefixCls}-justify-${justify}`]: justify,
        [`${prefixCls}-direction-${direction}`]: direction,
        [`${prefixCls}-size-${size}`]: size,
        [`${prefixCls}-wrap`]: wrap && direction,
    },
    className
  );

  return <div className={cls} style={ typeof(size) === 'number' ?  {gap:`${ size }px`} : {}}>{ children}</div>;
};

Space.displayName = 'Space';
