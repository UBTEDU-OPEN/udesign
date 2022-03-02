import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

export type CellGroupProps = {
  title?: string;
  inset?: boolean; // 将单元格转换为圆角卡片风格
} & NativeProps;

export const CellGroup = ({ title, inset, children, className }: CellGroupProps) => {
  const cls = classNames('bg-white', inset ? 'mx-4 rounded-md' : '', className);
  return (
    <>
      <div className='px-4 p-4 pb-1 text-gray-400'>{title}</div>
      <div className={cls}>{children}</div>
    </>
  );
};

CellGroup.displayName = 'Cell.Group';
