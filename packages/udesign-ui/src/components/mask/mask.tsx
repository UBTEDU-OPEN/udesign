import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

const prefixCls = `ud-mask`;

export type MaskProps = {
  onClick?: () => void; // 点击蒙层自身触发
} & NativeProps;

export const Mask = ({ onClick, className }: MaskProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick?.();
    }
  };

  const cls = classNames(prefixCls, className);

  return <div className={cls} onClick={handleClick}></div>;
};

Mask.displayName = 'Mask';
