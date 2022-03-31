import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

const prefixCls = `ud-divider`;

export type DividerProps = {
  dashed?: Boolean; //是否虚线
  orientation?: 'left' | 'right' | 'center'; //分割线标题的位置
  orientationMargin?: string | number; //标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right
  plain?: Boolean; //文字是否显示为普通正文样式
  type?: 'horizontal' | 'vertical'; //水平还是垂直类型
} & NativeProps;

export const Divider = ({ dashed = false, orientation = 'center', orientationMargin, plain = false, type = 'horizontal', children, className, style }: DividerProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-default`]: !children,
      [`${prefixCls}-dashed`]: dashed && !children,
      [`${prefixCls}-text`]: children && !orientationMargin,
      [`${prefixCls}-text-${orientation}`]: orientation && !orientationMargin,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-dashed-vertical`]: type === 'vertical' && dashed,
      [`${prefixCls}-plain`]: plain,
      [`${prefixCls}-text-dashed`]: dashed && children,
      [`${prefixCls}-orientation-margin-${orientation}`]: orientation && orientationMargin != undefined && (orientationMargin < 0 || orientationMargin != ''),
    },
    className,
  );

  useEffect(() => {
    if (orientationMargin !== undefined && orientation) {
      orientation === 'left' ? (textRef.current!.style.marginLeft = orientationMargin + 'px') : null;
      orientation === 'right' ? (textRef.current!.style.marginRight = orientationMargin + 'px') : null;
    }
  }, []);

  return (
    <div className={cls} style={style}>
      <span></span>
      <span ref={textRef} className='text'>
        {children}
      </span>
      <span></span>
    </div>
  );
};

Divider.displayName = 'Divider';
