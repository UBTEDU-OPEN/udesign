import classNames from 'classnames';
import React, { CSSProperties, useMemo } from 'react';
import { isObject, NativeProps } from '../../utils';

let uuid = 0;

function getPath(clockwise: boolean | undefined, viewBoxSize: number) {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${viewBoxSize / 2} m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}

export type CircleStartPosition = 'top' | 'right' | 'bottom' | 'left';
export type colorType = string | { [key: string]: string };

export type CircleProps = {
  percent: number | string; // 进度条百分比
  size?: number | string; // 圆环直径，默认单位为 px
  color?: colorType; // 进度条颜色，支持渐变色
  strokeWidth?: number | string; // 进度条宽度
  layer?: string; // 轨道颜色，默认 white
  fill?: string; // 填充颜色，默认 none
  text?: string; // 文字
  clockwise?: boolean; // 是否顺时针增加
} & NativeProps;

export const Circle = ({ percent, size = 100, color = '#4F46E5', layer = 'white', fill = 'none', text, strokeWidth = 40, clockwise = true, className, ...restProps }: CircleProps) => {
  const id = `circle-${uuid++}`;

  const viewBoxSize = useMemo(() => +strokeWidth + 1000, [strokeWidth]);

  const path = useMemo(() => getPath(clockwise, viewBoxSize), [clockwise, viewBoxSize]);

  const renderGradient = () => {
    if (!isObject(color)) {
      return null;
    }

    const Stops = Object.keys(color)
      .sort((a, b) => parseFloat(a) - parseFloat(b))
      .map((key, index) => <stop key={index} offset={key} stopColor={color[key]} />);

    return (
      <defs>
        <linearGradient id={id} x1='100%' y1='0%' x2='0%' y2='0%'>
          {Stops}
        </linearGradient>
      </defs>
    );
  };

  const renderLayer = () => {
    const style = {
      fill,
      stroke: layer,
      strokeWidth: `${strokeWidth}px`,
    };

    return <path style={style} d={path} />;
  };

  const renderHover = () => {
    const PERIMETER = 3140;
    const offset = (PERIMETER * Number(percent)) / 100;
    const stroke = isObject(color) ? `url(#${id})` : color;

    const style: CSSProperties = {
      fill: 'none',
      stroke,
      strokeWidth: `${+strokeWidth + 1}px`,
      // strokeLinecap,
      strokeDasharray: `${offset}px ${PERIMETER}px`,
    };

    return <path d={path} style={style} className='transition-all duration-300' stroke={stroke} />;
  };

  const cls = classNames('relative text-center', className);

  return (
    <>
      <div
        className={cls}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        {...restProps}
      >
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          style={{
            transform: `rotate(0deg)`,
          }}
        >
          {renderGradient()}
          {renderLayer()}
          {renderHover()}
        </svg>
        <div className='absolute top-1/2 w-full transform -translate-y-1/2'>{text}</div>
      </div>
    </>
  );
};

Circle.displayName = 'Circle';
