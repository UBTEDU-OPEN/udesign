import classNames from 'classnames';
import React from 'react';
import { prefixCls } from './constants';
import { NativeProps } from '../../utils';

export type ImageProps = {
  width?: string; // width
  height?: string; // height
} & NativeProps;

export const Image = ({ width = '220px', height = '190px', className, style }: ImageProps) => {
  const cls = classNames([`${prefixCls}-bg`], [`${prefixCls}-image`], className);

  return (
    <>
      <div className={cls} style={{ ...style, width, height }}></div>
    </>
  );
};

Image.displayName = 'Skeleton.Image';
