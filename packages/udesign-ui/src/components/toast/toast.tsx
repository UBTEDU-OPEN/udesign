import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

export type ToastProps = {
  delay?: number; // 延时出现时间，单位ms, 默认延时1000ms
  content: React.ReactNode; // 显示内容 React.ReactNode
  duration?: number; // 提示持续时间，若为 0 则是默认的2000ms
  position?: 'top' | 'bottom' | 'center' | 'left' | 'right'; // type positon 'top' | 'bottom' | 'center' | 'left' | 'right'
  afterClose?: () => void; // 关闭后的回调
} & NativeProps;

export const Toast = ({ content, position = 'top', className, style }: ToastProps) => {
  const prefixCls = 'ud-toast';
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
