import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-space`;

export type SpaceProps = {
  align?: 'start' | 'end' | 'center' | 'baseline'; // 对齐方式（align-items）。默认值：center
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'; // 对齐方式（justify-content）。默认值：start
  vertical?: boolean; // 是否为垂直间距。默认值：false
  size?: Size | number; // 间距大小。默认值：small
  wrap?: boolean; // 是否自动换行，仅在 horizontal 时有效。默认值：false
} & NativeProps;

export const Space = ({ align = 'center', justify = 'start', vertical, size = 'small', wrap, className, children, ...restProps }: SpaceProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: typeof size === 'string',
      [`${prefixCls}-vertical`]: vertical,
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
