import classNames from 'classnames';
import React from 'react';
import { NativeProps } from '../../utils';
import { Mode, Orientation } from '../../constants';

const getOrientationCls = (orientation: Orientation) => {
  let cls = '';
  switch (orientation) {
    case 'center':
      cls = 'before:flex-1 before:mr-5 after:flex-1 after:ml-5';
      break;
    case 'left':
      cls = 'after:flex-1 after:ml-5';
      break;
    case 'right':
      cls = 'before:flex-1 before:mr-5';
      break;
    default:
      break;
  }
  return cls;
};

export type DividerProps = {
  mode?: Mode;
  dashed?: boolean; //	是否虚线
  orientation?: Orientation; // 位置
  // orientationMargin?: number; // 位置偏移量
} & NativeProps;

export const Divider = ({ mode = 'horizontal', dashed, orientation = 'center', children, className }: DividerProps) => {
  const cls = classNames(children ? classNames('flex before:border-t before:translate-y-1/2 after:border-t after:translate-y-1/2', getOrientationCls(orientation)) : 'w-full border-t', dashed ? 'border-dashed' : 'border-solid', className);

  if (mode === 'vertical') {
    return <div className='border-l inline-block mx-2 align-middle' style={{ position: 'relative', top: '-0.06em', height: '0.9em' }}></div>;
  }

  return <div className={cls}>{children ? <span>{children}</span> : null}</div>;
};

Divider.displayName = 'Divider';
