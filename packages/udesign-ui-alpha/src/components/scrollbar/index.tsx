import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import styles from './style.module.scss';

export type ScrollbarProps = NativeProps;

export const Scrollbar = ({ className, children }: ScrollbarProps) => {
  const cls = classNames('h-full overflow-y-auto', styles.scrollbar, className);

  return (
    <>
      <div className={cls}>{children}</div>
    </>
  );
};

Scrollbar.displayName = 'Scrollbar';
