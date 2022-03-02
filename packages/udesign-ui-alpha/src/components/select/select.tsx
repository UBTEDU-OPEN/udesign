import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Item, ItemProps } from './item';

export type SelectProps = {
  data?: ItemProps[];
} & NativeProps;

export const Select = ({ data, children, className, style }: SelectProps) => {
  const cls = classNames('flex justify-around border-b', className);
  return (
    <>
      <div className={cls} style={style}>
        {children}
      </div>
      <div className='shadow-lg rounded bg-white'></div>
    </>
  );
};

Select.displayName = 'Select';
