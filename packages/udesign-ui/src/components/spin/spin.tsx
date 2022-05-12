import React, { useEffect, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CommonSize } from '../../constants';
import { LoadingOutlined } from '@ant-design/icons';

const prefixCls = 'ud-spin';

export type SpinSize = CommonSize;

export type SpinProps = {
  spinning?: boolean; // 是否处于加载中的状态
  size?: SpinSize; // 组件大小，默认middle，可选 small, large
  tip?: ReactNode; // 当 spin 作为包裹元素时，可以自定义描述文字
  delay?: number; // 延迟显示加载效果的时间
  indicator?: ReactNode; // 加载指示符
  childStyle?: React.CSSProperties; // 包裹子元素的样式
} & NativeProps;

export const Spin = (props: SpinProps) => {
  const { spinning = true, size = 'middle', delay, childStyle, className, children, style } = props;

  const [loading, setLoading] = useState(true);

  let timer: NodeJS.Timeout;
  useEffect(() => {
    if (delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setLoading(spinning);
      }, delay);
    } else {
      setLoading(spinning);
    }
    return () => clearTimeout(timer);
  }, [spinning]);

  const renderSpin = () => {
    const { indicator, tip } = props;

    const spinIconCls = classNames({
      [`${prefixCls}-animate`]: loading,
    });

    return loading ? (
      <div className={`${prefixCls}-wrapper`}>
        {indicator ? <div className={spinIconCls}>{indicator}</div> : <LoadingOutlined />}
        {tip ? <div className={`${prefixCls}-tip`}>{tip}</div> : null}
      </div>
    ) : null;
  };

  const spinCls = classNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-block`]: children,
    [`${prefixCls}-hidden`]: !loading,
  });

  return (
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
  );
};

Spin.displayName = 'Spin';
