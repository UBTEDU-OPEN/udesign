import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-toast`;

export type ToastProps = {
  delay?: number; // 延时出现时间，单位ms。默认值：1000ms
  content: React.ReactNode; // 显示内容 React.ReactNode。默认值：-
  duration?: number; // 提示持续时间。默认值：2000
  position?: 'top' | 'bottom' | 'center' | 'left' | 'right'; // 提示框出现的位置。默认值：top
  zIndex?: number; // z-index 值。默认值：1010
  afterClose?: () => void; // 关闭后的回调。默认值：-
} & NativeProps;

export const Toast = ({ content, position = 'center', zIndex = 1010, className, style }: ToastProps) => {
  const cls = classNames(
    `${prefixCls}`,
    {
      [`${prefixCls}-${position}`]: position,
    },
    className,
  );

  const mergedStyle: React.CSSProperties = {
    ...style,
  };
  if (zIndex) {
    mergedStyle.zIndex = zIndex;
  }

  return (
    <span className={cls} style={mergedStyle}>
      <span className={`${prefixCls}-content`}>{content}</span>
    </span>
  );
};

Toast.displayName = 'Toast';
