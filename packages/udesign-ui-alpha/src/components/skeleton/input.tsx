import classNames from 'classnames';
import React from 'react';
import { InputSize, getInputSizeClass } from '../input';

export interface InputProps {
  size?: InputSize;
}

export const Input = ({ size = 'middle' }: InputProps) => {
  const cls = classNames('bg-gray-200 w-full', getInputSizeClass(size));

  return (
    <>
      <div className={cls}></div>
    </>
  );
};

Input.displayName = 'Skeleton.Input';