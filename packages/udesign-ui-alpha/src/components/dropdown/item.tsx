import React from 'react';
import classNames from 'classnames';
import { getDisabledCls, NativeProps } from '../../utils';

export type ItemProps = {
  disabled?: boolean;
  onClick?: () => void;
} & NativeProps;

export const Item = ({ disabled, children, className, ...restProps }: ItemProps) => {
  const cls = classNames('truncate py-2 px-3 bg-white hover:bg-gray-100', getDisabledCls(disabled, 'cursor-pointer'), className);
  return (
    <li className={cls} {...restProps}>
      {children}
    </li>
  );
};

Item.displayName = 'Dropdown.Item';
