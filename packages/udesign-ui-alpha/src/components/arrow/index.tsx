import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Direction } from '../../constants';

const getDirectionCls = (direction: Direction) => {
  let cls = '';
  switch (direction) {
    case 'up':
      cls = 'rotate-45  origin-bottom-left';
      break;
    case 'down':
      cls = '-rotate-45  origin-top-left';
      break;
    case 'left':
      cls = '-rotate-45  origin-top-right';
      break;
    case 'right':
      cls = 'rotate-45  origin-top-left';
      break;
    default:
      break;
  }
  return cls;
};

export type ArrowProps = {
  direction?: Direction;
} & NativeProps;

export const Arrow = ({ direction = 'down', className, style }: ArrowProps) => {
  const cls = classNames('w-4 overflow-hidden inline-block', className);
  const arrowCls = classNames('w-2 h-2 bg-gray-600 transform ', getDirectionCls(direction));
  return (
    <>
      <div className={cls} style={style}>
        <div className={arrowCls}></div>
      </div>
    </>
  );
};

Arrow.displayName = 'Arrow';
