import React from 'react';
import classNames from 'classnames';
// import { ArrowComponent, ArrowComponentProps } from './dropdown-arrow';
import { NativeProps } from '../../utils';
import { Placement } from '../../constants';

export const getPlacementCls = (placement: Placement) => {
  let cls;
  switch (placement) {
    case 'topLeft':
      cls = 'top-full left-0 mt-2';
      break;
    case 'topCenter':
      cls = 'top-full mx-auto mt-2';
      break;
    case 'topRight':
      cls = 'top-full right-0 mt-2';
      break;
    case 'bottomLeft':
      cls = 'bottom-full left-0 mb-2';
      break;
    case 'bottomCenter':
      cls = 'bottom-full mx-auto mb-2';
      break;
    case 'bottomRight':
      cls = 'bottom-full right-0 mb-2';
      break;
  }
  return cls;
};

export type DropdownProps = {
  arrow?: boolean;
  border?: boolean;
  placement?: Placement;
} & NativeProps;

export const Dropdown = ({ arrow, border, placement = 'topRight', children, className, ...restProps }: DropdownProps) => {
  const cls = classNames('absolute py-2 shadow-lg rounded-lg inline-block', border ? 'border' : '', getPlacementCls(placement), className);
  return (
    <>
      <ul className={cls} {...restProps}>
        {/* <ArrowComponent visible={arrow} /> */}
        {children}
      </ul>
    </>
  );
};

Dropdown.displayName = 'Dropdown';
