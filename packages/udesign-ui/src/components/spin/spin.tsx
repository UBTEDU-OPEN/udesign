import React, { useEffect, ReactNode, useState, useRef } from 'react';
import classNames from 'classnames';
import { LoadingOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-spin`;
export const destroyFns: any[] = [];

export type SpinProps = {
  spinning?: boolean; // 是否处于加载中的状态。默认值：true
  timeOut?: number; // 加载持续时间。默认值：60s
  size?: Size; // 组件大小，可选 small, middle, large。默认值：middle
  tip?: ReactNode; // 当 spin 作为包裹元素时，可以自定义描述文字。默认值：-
  delay?: number; // 延迟显示加载效果的时间。默认值：-
  indicator?: ReactNode; // 加载指示符。默认值：-
  childStyle?: React.CSSProperties; // 包裹子元素的样式。默认值：-
  _global?: boolean; // 内部变量
} & NativeProps;

let timer: NodeJS.Timeout;
export const Spin = (props: SpinProps) => {
  const { spinning = true, size = 'middle', timeOut, delay, childStyle, className, children, style, _global = false } = props;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const timerRef = useRef(0);
  useEffect(() => {
    if (delay) {
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setLoading(spinning);
      }, delay);
    } else {
      setLoading(spinning);
    }
    return () => clearTimeout(timerRef.current);
  }, [spinning]);

  useEffect(() => {
    if (timeOut) {
      timer = setTimeout(() => {
        console.log(timeOut);
        setVisible(false);
      }, timeOut * 1000);
    }

    return () => clearTimeout(timer);
  }, []);

  const renderSpin = () => {
    const { indicator, tip } = props;

    const cls = classNames({
      [`${prefixCls}-animate`]: loading,
    });

    return loading ? (
      <div className={`${prefixCls}-wrapper`}>
        {indicator ? <div className={cls}>{indicator}</div> : <LoadingOutlined spin />}
        {tip ? <div className={`${prefixCls}-tip`}>{tip}</div> : null}
      </div>
    ) : null;
  };

  const spinCls = classNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-block`]: children,
    [`${prefixCls}-hidden`]: !loading,
    [`${prefixCls}-global`]: _global,
  });

  return visible ? (
    <>
      <div className={spinCls} style={style}>
        {renderSpin()}
        {children ? (
          <div className={`${prefixCls}-children`} style={childStyle}>
            {children}
          </div>
        ) : null}
      </div>
    </>
  ) : null;
};

Spin.displayName = 'Spin';
