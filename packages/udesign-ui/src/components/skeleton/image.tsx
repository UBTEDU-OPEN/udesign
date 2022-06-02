import classNames from 'classnames';
import React from 'react';
import { prefixCls } from './constants';

export interface ImageProps {
  width?: string; // width
  height?: string; // height
}

export const Image = ({ width = '220px', height = '190px' }: ImageProps) => {
  const cls = classNames([`${prefixCls}-bg`], [`${prefixCls}-image`]);

  return (
    <>
      <div className={cls} style={{ width, height }}></div>
    </>
  );
};

Image.displayName = 'Skeleton.Image';
