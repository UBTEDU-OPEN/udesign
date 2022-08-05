import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

export type ToastProps = {
  delay?: number; // 延时出现时间，单位ms。默认值：1000ms
  content: React.ReactNode; // 显示内容 React.ReactNode。默认值：-
  duration?: number; // 提示持续时间，若为 0 则是默认的2000ms。默认值：-
  position?: 'top' | 'bottom' | 'center' | 'left' | 'right'; // 提示框出现的位置。默认值：top
  afterClose?: () => void; // 关闭后的回调。默认值：-
} & NativeProps;

export const Toast = ({ content, position = 'top', className, style }: ToastProps) => {
  const prefixCls = `${BASE_CLASS_PREFIX}-toast`;
  const cls = classNames(
    `${prefixCls}`,
    {
      [`${prefixCls}-${position}`]: position,
    },
    className,
  );
  return (
    <span className={cls} style={style}>
      <span className={`${prefixCls}-content`}>{content}</span>
    </span>
  );
};

Toast.displayName = 'Toast';
