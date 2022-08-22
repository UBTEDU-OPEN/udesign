import React from 'react';
import classNames from 'classnames';
import { Icon } from '@ubt/udesign-icons';
import { HelpIcon } from './help-icon';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-help`;

export type HelpProps = {
  size?: Size | 'inherit'; // 图标尺寸。默认值：'inherit'
} & NativeProps;

export const Help = (props: HelpProps) => {
  const { className, ...restProps } = props;
  const cls = classNames(prefixCls, className);
  return <Icon className={cls} svg={<HelpIcon />} {...restProps} />;
};
