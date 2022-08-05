import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { EditableConfig, EllipsisConfig } from './base';
import { Text, TextProps } from './text';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-typography-title`;

export type TitleProps = {
  level?: number; // 设置标题大小。默认值：1
  editable?: EditableConfig | boolean; // 是否可编辑，为对象时可对编辑进行控制。默认值：false
  ellipsis?: EllipsisConfig | boolean; // 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等。默认值：false
  onClick?: React.MouseEventHandler<HTMLSpanElement>; // 标题点击事件。
} & NativeProps &
  TextProps;

export const Title = ({ level = 1, ellipsis, editable, onClick, className, children, style, ...restProps }: TitleProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-h${level}`]: children,
    },
    className,
  );

  return (
    <>
      <Text className={cls} {...restProps} ellipsis={ellipsis} editable={editable} style={style}>
        {children}
      </Text>
    </>
  );
};
Title.displayName = 'Title';
