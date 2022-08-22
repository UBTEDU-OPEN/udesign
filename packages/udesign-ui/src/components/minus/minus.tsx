import React from 'react';
import classNames from 'classnames';
import { Icon } from '@ubt/udesign-icons';
import { MinusIcon } from './minus-icon';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-minus`;

export type MinusProps = {
  size?: Size | 'inherit'; // 图标尺寸。默认值：'inherit'
} & NativeProps;

export const Minus = (props: MinusProps) => {
  const { className, ...restProps } = props;
  const cls = classNames(prefixCls, className);
  return <Icon className={cls} svg={<MinusIcon />} {...restProps} />;
};
