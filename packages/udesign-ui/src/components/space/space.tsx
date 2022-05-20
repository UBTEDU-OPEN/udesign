import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CommonSize, Direction } from '../../constants';

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export type SpaceJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type SpaceDirection = Direction;
export type SpaceSize = CommonSize | number;

const prefixCls = 'ud-space';
export type SpaceProps = {
  align?: SpaceAlign; // 对齐方式（align-items）
  justify?: SpaceJustify; // 对齐方式（justify-content）
  direction?: SpaceDirection; // 间距方向
  size?: SpaceSize; // 间距大小
  wrap?: boolean; // 是否自动换行，仅在 horizontal 时有效
} & NativeProps;

export const Space = ({ align = 'start', justify = 'start', direction = 'horizontal', size = 'small', wrap, className, children, ...restProps }: SpaceProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: typeof size === 'string',
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-wrap`]: wrap,
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-justify-${justify}`]: justify,
    },
    className,
  );

  const style: React.CSSProperties = { ...restProps.style };
  if (typeof size === 'number') {
    style.gap = `${size}px`;
  }

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

Space.displayName = 'Space';
