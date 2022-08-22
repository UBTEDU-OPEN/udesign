import React from 'react';
import classNames from 'classnames';
import { Icon } from '@ubt/udesign-icons';
import { BackIcon } from './back-icon';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-back`;

export type BackProps = {
  size?: Size | 'inherit'; // 图标尺寸。默认值：'inherit'
} & NativeProps;

export const Back = (props: BackProps) => {
  const { className, ...restProps } = props;
  const cls = classNames(prefixCls, className);
  return <Icon className={cls} svg={<BackIcon />} {...restProps} />;
};
