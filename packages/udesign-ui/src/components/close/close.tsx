import React from 'react';
import classNames from 'classnames';
import { Icon } from '@ubt/udesign-icons';
import { CloseIcon } from './close-icon';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-close`;

export type CloseProps = {
  size?: Size | 'inherit'; // 图标尺寸。默认值：'inherit'
} & NativeProps;

export const Close = (props: CloseProps) => {
  const { className, ...restProps } = props;
  const cls = classNames(prefixCls, className);
  return <Icon className={cls} svg={<CloseIcon />} {...restProps} />;
};
