import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, CommonSize } from '../../constants';
import { DividerProps } from '../divider';

const prefixCls = `${BASE_CLASS_PREFIX}-progress`;
export type ProgressSize = CommonSize;
export type ProgressType = 'line' | 'circle';

export type ProgressProps = {
  type?: ProgressType; //	进度条类型，默认line，可选 circle
  percent?: number; // 进度百分比
  width?: number; // 环形进度条宽度
  showInfo?: boolean; // 环形进度条是否显示中间文本，条状进度条后右侧是否显示文本，默认true
  size?: ProgressSize; // 进度条尺寸，默认middle，可选 large, small
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
  const { percent = 0, showInfo = true, size = 'middle', type = 'line', stroke = 'var(--ud-color-primary)', strokeLinecap = 'round', orbitStroke = 'var(--ud-color-fill-0)', format = (text: number): string => `${text}%`, className, style } = props;

  if (Number.isNaN(percent)) {
    throw new Error('[uDesign Progress]:percent can not be NaN');
  }

  const renderLineProgress = () => {
    const progressWrapperCls = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${size}`]: true,
    });

    const innerStyle: Record<string, any> = {
      backgroundColor: stroke,
      width: `${percent}%`,
    };
    // innerStyle.width = `${percent}%`;
    if (strokeLinecap === 'square') {
      innerStyle.borderRadius = '0';
    }

    const text = format(calcPercent(percent));

    return (
      <div className={progressWrapperCls} style={style}>
        <div className={`${prefixCls}-track`} style={orbitStroke ? { backgroundColor: orbitStroke } : {}}>
          <div className={`${prefixCls}-track-inner`} style={innerStyle} />
        </div>
        {showInfo ? <div className={`${prefixCls}-line-text`}>{text}</div> : null}
      </div>
    );
  };

  const renderCircleProgress = () => {
    const { strokeWidth = 12 } = props;

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

    return (
      <div className={classNames(`${prefixCls}-circle`, className)} style={style}>
        <svg key={size} className={`${prefixCls}-circle-ring`} height={width} width={width}>
          <circle strokeDashoffset={0} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeLinecap={strokeLinecap} fill='transparent' stroke={orbitStroke} r={radius} cx={cx} cy={cy} />
          <circle className={`${prefixCls}-circle-ring-inner`} strokeDashoffset={strokeDashoffset} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeLinecap={strokeLinecap} fill='transparent' stroke={stroke} r={radius} cx={cx} cy={cy} />
        </svg>
        {showInfo ? <span className={`${prefixCls}-circle-text`}>{text}</span> : null}
      </div>
    );
  };

  return <>{type === 'line' ? renderLineProgress() : renderCircleProgress()}</>;
};

Progress.displayName = 'Progress';
