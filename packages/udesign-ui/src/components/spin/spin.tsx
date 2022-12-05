import React, { useEffect, ReactNode, useState, useRef, CSSProperties } from 'react';
import classNames from 'classnames';
import { LoadingOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';
import Mask from '../mask';

const prefixCls = `${BASE_CLASS_PREFIX}-spin`;
export const destroyFns: any[] = [];

export type SpinProps = {
  spinning?: boolean; // 是否处于加载中的状态。默认值：true
  mask?: boolean; // 是否展示遮罩。默认值：true
  maskStyle?: CSSProperties; //	遮罩的样式。
  timeout?: number; // 加载持续时间。
  size?: Size; // 组件大小，可选 small, middle, large。默认值：middle
  tip?: ReactNode; // 当 spin 作为包裹元素时，可以自定义描述文字。
  delay?: number; // 延迟显示加载效果的时间。
  indicator?: ReactNode; // 加载指示符。
  childStyle?: React.CSSProperties; // 包裹子元素的样式。
  fullscreen?: boolean; // 仅全局加载有效
} & NativeProps;

let timer: NodeJS.Timeout;
export const Spin = (props: SpinProps) => {
  const { spinning = true, size = 'middle', timeout, delay, className, children, style, fullscreen } = props;
  const [visible, setVisible] = useState(spinning);

  const timerRef = useRef(0);
  useEffect(() => {
    if (delay) {
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setVisible(spinning);
      }, delay);
    } else {
      setVisible(spinning);
    }
    return () => clearTimeout(timerRef.current);
  }, [spinning]);

  useEffect(() => {
    if (timeout) {
      timer = setTimeout(() => {
        setVisible(false);
      }, timeout);
    }

    return () => clearTimeout(timer);
  }, []);

  const renderIndicator = () => {
    const { indicator, tip } = props;

    const cls = classNames({
      [`${prefixCls}-animate`]: spinning,
    });

    return visible ? (
      <div className={`${prefixCls}-wrapper`}>
        {indicator ? <div className={cls}>{indicator}</div> : <LoadingOutlined spin />}
        {tip ? <div className={`${prefixCls}-tip`}>{tip}</div> : null}
      </div>
    ) : null;
  };

  const renderChildren = () => {
    const { children, childStyle } = props;
    return children ? (
      <div className={`${prefixCls}-children`} style={childStyle}>
        {children}
      </div>
    ) : null;
  };

  const renderMask = () => {
    const { mask, maskStyle } = props;

    return mask ? <Mask style={maskStyle} /> : null;
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-hasChild`]: children,
      [`${prefixCls}-spinning`]: visible,
      [`${prefixCls}-fullscreen`]: fullscreen,
    },
    className,
  );

  return (
    <>
      {renderMask()}
      <div className={cls} style={style}>
        {renderIndicator()}
        {renderChildren()}
      </div>
    </>
  );
};

Spin.displayName = 'Spin';
