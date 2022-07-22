import React, { useMemo } from 'react';
import classNames from 'classnames';
import { LoadingIcon } from '../icon';
import { getDisabledCls, NativeProps } from '../../utils';
import { Shape, Size, Type } from '../../constants';

export type ButtonShape = Shape;
export type ButtonSize = Size | 'mini';

export type ButtonType = Type | 'dark' | 'ghost' | 'dashed' | 'link' | 'text';

export const getButtonTypeClass = (type: ButtonType) => {
  let cls;
  switch (type) {
    case 'primary':
      cls = 'border border-indigo-600 bg-indigo-600 text-white hover:border-indigo-500 hover:bg-indigo-500';
      break;

    case 'default':
      cls = 'border border-gray-300 text-gray-800 hover:text-indigo-600 hover:border-indigo-600';
      break;

    case 'success':
      cls = 'border border-green-500 bg-green-500 text-white hover:border-green-400 hover:bg-green-400';
      break;

    case 'danger':
      cls = 'border border-red-500 bg-red-500 text-white hover:border-red-400 hover:bg-red-400';
      break;

    case 'warning':
      cls = 'border border-yellow-500 bg-yellow-500 text-white hover:border-yellow-400 hover:bg-yellow-400';
      break;

    case 'dark':
      cls = 'border border-gray-900 bg-gray-900 text-white hover:bg-gray-700';
      break;

    case 'ghost':
      cls = 'border border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white';
      break;

    case 'dashed':
      cls = 'border border-dashed border-indigo-600 bg-white text-indigo-600 hover:bg-gray-100';
      break;

    case 'text':
      cls = 'text-gray-800 hover:bg-gray-100';
      break;

    case 'link':
      cls = 'text-indigo-600 hover:text-indigo-800';
      break;
  }
  return cls;
};

export const getButtonShapeClass = (shape: ButtonShape) => {
  let cls;
  switch (shape) {
    case 'circle':
      cls = 'rounded-full';
      break;

    case 'round':
      cls = 'rounded';
      break;

    case 'square':
      cls = '';
      break;
  }
  return cls;
};

export const getButtonSizeClass = (size: ButtonSize, iconOnly?: boolean) => {
  let cls;
  switch (size) {
    case 'large':
      cls = classNames('h-16 min-w-max text-lg', iconOnly ? 'w-16' : 'px-6 w-60');
      break;

    case 'middle':
      cls = classNames('h-12 min-w-max text-base', iconOnly ? 'w-12' : 'px-5 w-40');
      break;

    case 'small':
      cls = classNames('h-9 min-w-max text-sm', iconOnly ? 'w-9' : 'px-4 w-20');
      break;

    case 'mini':
      cls = classNames('h-6 min-w-max text-xs', iconOnly ? 'w-6' : 'px-3 w-10');
      break;
  }
  return cls;
};

export type ButtonProps = {
  icon?: React.ReactNode; // 设置按钮的图标组件
  block?: boolean; // 将按钮宽度调整为其父宽度的选项
  danger?: boolean; // 设置危险按钮
  disabled?: boolean; // 按钮失效状态
  loading?: boolean; // 设置按钮载入状态
  shape?: ButtonShape; // 设置按钮形状
  size?: ButtonSize; // 设置按钮大小
  type?: ButtonType; // 设置按钮类型
  onClick?: () => void; // 点击按钮时的回调
} & NativeProps;

export const Button = ({ icon, block = false, disabled = false, loading = false, shape = 'round', size = 'middle', type = 'default', onClick, children, ...restProps }: ButtonProps) => {
  const hasIcon = loading || Boolean(icon);
  const iconOnly = !children && hasIcon;

  const iconElement = useMemo(() => {
    if (loading) {
      return <LoadingIcon className='text-2xl' />;
    } else {
      return icon;
    }
  }, [loading, icon]);

  const cls = classNames(
    getButtonSizeClass(size, iconOnly),
    getButtonShapeClass(shape),
    getButtonTypeClass(type),
    getDisabledCls(disabled),
    block ? 'flex w-full' : 'inline-flex',
    'items-center justify-center leading-none transition duration-150 ease-in-out',
  );

  return (
    <button className={cls} disabled={disabled} onClick={onClick} {...restProps}>
      {icon || loading ? <span className='mr-1 inline-block'>{iconElement}</span> : null}
      <span>{children}</span>
    </button>
  );
};

Button.displayName = 'Button';
