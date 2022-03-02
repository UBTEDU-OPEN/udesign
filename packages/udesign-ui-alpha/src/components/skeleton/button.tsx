import classNames from 'classnames';
import React from 'react';
import { ButtonShape, ButtonSize, getButtonShapeClass, getButtonSizeClass } from '../button';

export interface ButtonProps {
  block?: boolean;
  shape?: ButtonShape;
  size?: ButtonSize;
}

export const Button = ({ block = false, shape = 'default', size = 'middle' }: ButtonProps) => {
  const cls = classNames('bg-gray-200', block ? 'block w-full' : 'inline-block w-20', getButtonShapeClass(shape), getButtonSizeClass(size));

  return (
    <>
      <div className={cls}></div>
    </>
  );
};

Button.displayName = 'Skeleton.Button';