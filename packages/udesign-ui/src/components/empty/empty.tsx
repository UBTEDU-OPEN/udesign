import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { EmptyNormal } from './icon/empty';

const prefixCls = `${BASE_CLASS_PREFIX}-empty`;

export type EmptyProps = {
  image?: ReactNode; // 自定义图片
  description?: ReactNode; // 自定义描述
} & NativeProps;

export const Empty = ({ image, description = '暂无数据', className, ...props }: EmptyProps) => {
  let icon = image || <EmptyNormal />;
  const cls = classNames(prefixCls, className);
  return (
    <div className={cls}>
      <div className={`${prefixCls}-image`}>{icon}</div>
      <div className={`${prefixCls}-text`}>{description || ''}</div>
    </div>
  );
};

Empty.displayName = 'Empty';
