import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-scrollbar`;
export type ScrollbarProps = {
  direction?: 'horizontal' | 'vertical' | 'normal';
  hover?: boolean;
} & NativeProps;
export const Scrollbar = ({ direction = 'normal', hover, children, style, className }: ScrollbarProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-thumb-show`]: !hover,
      [`${prefixCls}-thumb-hidden`]: hover,
      [`${prefixCls}-thumb-hover`]: hover,
    },
    className,
  );
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};
Scrollbar.displayName = 'Scrollbar';
