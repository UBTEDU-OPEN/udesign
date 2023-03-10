import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-mask`;

export type MaskProps = {
  onClick?: (e: React.MouseEvent) => void; // 点击蒙层自身触发
} & NativeProps;

export const Mask = ({ onClick, className, style }: MaskProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick?.(e);
    }
  };

  const cls = classNames(prefixCls, className);

  return <div className={cls} onClick={handleClick} style={style}></div>;
};

Mask.displayName = 'Mask';
