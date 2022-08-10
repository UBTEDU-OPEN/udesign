import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-scrollbar`;

export type ScrollbarProps = {
  direction?: 'horizontal' | 'vertical' | 'auto'; // 显示哪个方向的滚动条，默认值：auto
  hover?: boolean; // 悬浮状态下才显示滚动条，默认值：false
} & NativeProps;

export const Scrollbar = ({ direction = 'auto', hover = false, children, style, className }: ScrollbarProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-hover`]: hover,
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
