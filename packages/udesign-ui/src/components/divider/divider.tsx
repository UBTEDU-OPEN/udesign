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

export const Divider = ({ dashed , orientation = 'center', orientationMargin, plain = false, type = 'horizontal', children, className, style }: DividerProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-dashed`]: dashed,
      [`${prefixCls}-text`]: children ,
      [`${prefixCls}-text-${orientation}`]: orientation,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-plain`]: plain,
      [`${prefixCls}-orientation-margin-${orientation}`]: orientationMargin,
    },
    className,
  );


  return (
    <div className={cls} style={style}>
      <span ref={textRef} className='text' style={orientation==='left' ? {marginLeft: `${orientationMargin}px`} : {marginRight: `${orientationMargin}px`}}>
        {children}
      </span>
    </div>
  );
};

Divider.displayName = 'Divider';
