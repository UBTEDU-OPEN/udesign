import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-divider`;

export type DividerProps = {
  dashed?: boolean; // 是否为虚线（仅vertical=false有效）。默认值：false
  orientation?: 'left' | 'right' | 'center'; // 文字的位置（仅vertical=false有效）。默认值：center
  orientationMargin?: string | number; // 文字与边缘的距离，必须搭配 orientation 使用（仅vertical=false有效）。
  vertical?: boolean; // 是否为垂直类型。默认值：false
} & NativeProps;

export const Divider = ({ dashed, orientation = 'center', orientationMargin, vertical, children, className, style }: DividerProps) => {
  const cls = vertical
    ? `${prefixCls}-vertical`
    : classNames(
        prefixCls,
        {
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
