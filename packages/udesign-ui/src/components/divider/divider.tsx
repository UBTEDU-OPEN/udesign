import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Direction } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-divider`;

export type DividerProps = {
  dashed?: boolean; // 是否为虚线。默认值：false
  orientation?: 'left' | 'right' | 'center'; // 分割线标题的位置。默认值：center
  orientationMargin?: string | number; // 标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right。默认值：-
  plain?: boolean; // 文字是否显示为普通正文样式。默认值：false
  type?: Direction; // 水平还是垂直类型。默认值：horizontal
} & NativeProps;

export const Divider = ({ dashed, orientation = 'center', orientationMargin, plain, type = 'horizontal', children, className, style }: DividerProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-plain`]: plain,
      [`${prefixCls}-dashed`]: dashed,
      [`${prefixCls}-with-text`]: children,
      [`${prefixCls}-with-text-${orientation}`]: orientation,
      [`${prefixCls}-no-default-orientation-margin-${orientation}`]: orientationMargin !== undefined,
    },
    className,
  );

  const getMarginStyle = () => {
    if (orientationMargin === undefined) return {};

    return orientation === 'left' ? { marginLeft: `${orientationMargin}px` } : { marginRight: `${orientationMargin}px` };
  };

  return (
    <div className={cls} style={style}>
      {children ? (
        <span className={`${prefixCls}-inner-text`} style={getMarginStyle()}>
          {children}
        </span>
      ) : null}
    </div>
  );
};

Divider.displayName = 'Divider';
