import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CopyableConfig, EditableConfig, EllipsisConfig } from './base';
import { Text, TextProps } from './text';

const prefixCls = `ud-typography-title`;

export type TitleProps = {
  level?: ReactNode; // 设置标题大小
  copyable?: CopyableConfig | boolean; // 是否可拷贝，为对象时可进行各种自定义
  editable?: EditableConfig | boolean; // 是否可编辑，为对象时可对编辑进行控制
  ellipsis?: EllipsisConfig | boolean; // 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
} & NativeProps &
  TextProps;

export const Title = ({ level, copyable, ellipsis, editable, onClick, className, children, ...restProps }: TitleProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-h${level}`]: children,
    },
    className,
  );

  return (
    <>
      <Text className={cls} {...restProps} copyable={copyable} ellipsis={ellipsis} editable={editable}>
        {children}
      </Text>
    </>
  );
};
Title.displayName = 'Title';
