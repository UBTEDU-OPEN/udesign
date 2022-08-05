import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-scrollbar`;

export type ScrollbarProps = {
  direction?: 'horizontal' | 'vertical' | 'normal'; // 滚动条出现的方向。默认值：normal
  hover?: boolean; // 是否悬浮显示。默认值：false
} & NativeProps;

export const Scrollbar = ({ direction = 'normal', hover = false, children, style, className }: ScrollbarProps) => {
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
