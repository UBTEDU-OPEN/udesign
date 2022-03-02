import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CommonSize } from '../../constants';

// No `stretch` since many components do not support that.
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export type SpaceJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type SpaceSize = CommonSize;

const getItemsClass = (align: SpaceAlign) => {
  let cls;
  switch (align) {
    case 'start':
      cls = 'items-start';
      break;

    case 'end':
      cls = 'items-end';
      break;

    case 'center':
      cls = 'items-center';
      break;

    case 'baseline':
      cls = 'items-baseline';
      break;

    default:
      cls = '';
      break;
  }
  return cls;
};

const getJustifyClass = (justify: SpaceJustify) => {
  let cls;
  switch (justify) {
    case 'start':
      cls = 'justify-start';
      break;

    case 'end':
      cls = 'justify-end';
      break;

    case 'center':
      cls = 'justify-center';
      break;

    case 'between':
      cls = 'justify-between';
      break;

    case 'around':
      cls = 'justify-around';
      break;

    case 'evenly':
      cls = 'justify-evenly';
      break;

    default:
      cls = '';
      break;
  }
  return cls;
};

const getSizeClass = (size: SpaceSize) => {
  let cls;
  switch (size) {
    case 'large':
      cls = 'gap-6';
      break;

    case 'middle':
      cls = 'gap-4';
      break;

    case 'small':
      cls = 'gap-2';
      break;

    default:
      cls = '';
      break;
  }
  return cls;
};

export type SpaceProps = {
  align?: SpaceAlign; // 对齐方式
  justify?: SpaceJustify; // 对齐方式
  vertical?: boolean; // 是否为垂直间距
  size?: SpaceSize; // 间距大小
  // split?: ReactNode; // 设置拆分
  wrap?: boolean; // 是否自动换行，仅在 horizontal 时有效
} & NativeProps;

export const Space = ({ align = 'start', justify = 'start', vertical, size = 'middle', wrap = true, className, children }: SpaceProps) => {
  const cls = classNames('flex', getItemsClass(align), getJustifyClass(justify), getSizeClass(size), vertical ? 'flex-col' : 'flex-row', !vertical && wrap ? 'flex-wrap' : 'flex-nowrap', className);
  return <div className={cls}>{children}</div>;
};

Space.displayName = 'Space';
