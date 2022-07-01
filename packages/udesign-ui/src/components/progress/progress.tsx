import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { CheckCircleFilled, CheckOutlined, CloseCircleFilled, CloseOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size, Status } from '../../constants';
import { DividerProps } from '../divider';

const prefixCls = `${BASE_CLASS_PREFIX}-progress`;

export type ProgressProps = {
  type?: 'line' | 'circle'; //	进度条类型，默认line，可选 circle
  percent?: number; // 进度百分比
  width?: number; // 环形进度条宽度
  showInfo?: boolean; // 环形进度条是否显示中间文本，条状进度条后右侧是否显示文本，默认true
  size?: Size; // 进度条尺寸，默认middle，可选 large, small
  status?: Status; // 进度条状态
  strokeLinecap?: 'round' | 'square'; // 圆角round/方角square(仅在 type='circle'模式下生效)
  strokeWidth?: number; // 进度条宽度(仅在 type='circle'模式下生效)
  stroke?: string; // 进度条填充色
  orbitStroke?: string; // 进度条轨道填充色
  format?: (percent: number) => ReactNode; // 格式化函数，入参为当前百分比，return 的结果将会直接渲染在圆形进度条中心
} & NativeProps &
  Pick<DividerProps, 'dashed'>;

function calcPercent(percent: number): number {
  let perc;
  if (percent > 100) {
    perc = 100;
  } else if (percent < 0) {
    perc = 0;
  } else {
    perc = percent;
  }
  return perc;
}

export const Progress = (props: ProgressProps) => {
  const { percent = 0, showInfo = true, size = 'middle', status = 'normal', type = 'line', strokeLinecap = 'round', orbitStroke = 'var(--ud-color-fill-0)', format = (text: number): string => `${text}%` } = props;

  if (Number.isNaN(percent)) {
    throw new Error('[uDesign Progress]:percent can not be NaN');
  }

  const renderLineProgress = () => {
    const { stroke, className, style } = props;

    const cls = classNames(
      prefixCls,
      {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-${status}`]: status,
      },
      className,
    );

    const innerStyle: Record<string, any> = {
      backgroundColor: stroke,
      width: `${percent}%`,
    };
    // innerStyle.width = `${percent}%`;
    if (strokeLinecap === 'square') {
      innerStyle.borderRadius = '0';
    }

    const text = format(calcPercent(percent));

    const getText = () => {
      if (status === 'success') {
        return <CheckCircleFilled />;
      }
      if (status === 'error') {
        return <CloseCircleFilled />;
      }
      return text;
    };

    return (
      <div className={cls} style={style}>
        <div className={`${prefixCls}-track`} style={orbitStroke ? { backgroundColor: orbitStroke } : {}}>
          <div className={`${prefixCls}-track-inner`} style={innerStyle} />
        </div>
        {showInfo ? <div className={`${prefixCls}-text`}>{getText()}</div> : null}
      </div>
    );
  };

  const renderCircleProgress = () => {
    const { stroke = 'var(--ud-color-primary)', strokeWidth = 12, className, style } = props;

    const cls = classNames(
      `${prefixCls}`,
      {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-${status}`]: status,
      },
      className,
    );

    let width;
    if (props.width) {
      width = props.width;
    } else if (size === 'large') {
      width = 160;
    } else if (size === 'small') {
      width = 80;
    } else {
      width = 120;
    }

    // cx, cy is circle center
    const cy = width / 2;
    const cx = width / 2;
    const radius = (width - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = (1 - percent / 100) * circumference;
    const strokeDasharray = `${circumference} ${circumference}`;

    const text = format(calcPercent(percent));

    const getText = () => {
      if (status === 'success') {
        return <CheckOutlined />;
      }
      if (status === 'error') {
        return <CloseOutlined />;
      }
      return text;
    };

    return (
      <div className={cls} style={style}>
        <svg key={size} className={`${prefixCls}-track`} height={width} width={width}>
          <circle strokeDashoffset={0} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeLinecap={strokeLinecap} fill='transparent' stroke={orbitStroke} r={radius} cx={cx} cy={cy} />
          <circle className={`${prefixCls}-track-inner`} strokeDashoffset={strokeDashoffset} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeLinecap={strokeLinecap} fill='transparent' stroke={stroke} r={radius} cx={cx} cy={cy} />
        </svg>
        {showInfo ? <span className={`${prefixCls}-text`}>{getText()}</span> : null}
      </div>
    );
  };

  return <>{type === 'line' ? renderLineProgress() : renderCircleProgress()}</>;
};

Progress.displayName = 'Progress';
