import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { DefaultImage } from './default-image';

const prefixCls = `${BASE_CLASS_PREFIX}-empty`;

export type EmptyProps = {
  image?: ReactNode; // 自定义图片
  description?: ReactNode; // 自定义描述
} & NativeProps;

export const Empty = ({ image = <DefaultImage />, description = '暂无数据', className, ...props }: EmptyProps) => {
  const cls = classNames(prefixCls, className);
  return (
    <div className={cls} {...props}>
      <div className={`${prefixCls}-image`}>{image}</div>
      <div className={`${prefixCls}-description`}>{description}</div>
    </div>
  );
};

Empty.displayName = 'Empty';
