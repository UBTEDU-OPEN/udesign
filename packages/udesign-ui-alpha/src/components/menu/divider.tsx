import classNames from 'classnames';
import React from 'react';

export type DividerProps = {
  dashed?: boolean; //	是否虚线
};

export const Divider = ({ dashed }: DividerProps) => {
  const cls = classNames('border-t', dashed ? 'border-dashed' : 'border-solid');
  return <div className={cls}></div>;
};

Divider.displayName = 'Menu.Divider';
