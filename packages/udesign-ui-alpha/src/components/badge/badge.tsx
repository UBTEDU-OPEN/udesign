import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

export const Dot = Symbol();

export type BadgeSize = 'default' | 'small';

const getSizeClass = (size: BadgeSize) => {
  let cls;
  switch (size) {
    case 'default':
      cls = 'min-w-5 w-5 h-5 w-max';
      break;

    case 'small':
      cls = 'min-w-4 w-4 h-4 w-max';
      break;

    default:
      cls = '';
      break;
  }
  return cls;
};

export type BadgeProps = {
  content?: ReactNode | typeof Dot; // 展示的数字，大于 max 时显示为 ${max}+，为 0 时隐藏
  max?: number | string; // 展示封顶的数字值
  size?: BadgeSize;
  title?: string;
  // dot?: boolean; // 不展示数字，只有一个小红点
  showZero?: boolean; // 当数值为 0 时，是否展示 Badge
} & NativeProps;

export const Badge = ({ content, max = 99, size = 'default', title, showZero, className, children, ...restProps }: BadgeProps) => {
  const isDot = content === Dot;

  const badgeClass = classNames(
    'flex items-center justify-center p-1 text-xs bg-red-500 text-white rounded-full',
    children ? 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2' : '',
    isDot || !content ? '' : getSizeClass(size),
    children ? '' : 'px-2',
    showZero || isDot || Number(content) !== 0 ? '' : 'hidden',
    className,
  );

  const getTitle = () => {
    let title;
    if (React.isValidElement(content)) {
      title = undefined;
    } else if (typeof content === 'number') {
      title = String(content);
    } else if (typeof content === 'string') {
      title = content;
    }
    return title;
  };

  const getCount = () => {
    return Number(content) > Number(max) ? `${max}+` : content;
  };

  const element = (
    <div className={badgeClass} title={title || getTitle()}>
      {!isDot && getCount()}
    </div>
  );

  return children ? (
    <div className='relative inline-block'>
      {children}
      {element}
    </div>
  ) : (
    element
  );
};

Badge.displayName = 'Badge';
