import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CopyableConfig, EllipsisConfig, EditableConfig } from './base';
import { Text, TextProps } from './text';

const prefixCls = `ud-typography`;

export type ParagraphProps = {
  copyable?: CopyableConfig | boolean; // 是否可拷贝，为对象时可进行各种自定义
  ellipsis?: EllipsisConfig | boolean; // 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等
  editable?: EditableConfig | boolean; // 是否可编辑，为对象时可对编辑进行控制
} & NativeProps &
  TextProps;

export const Paragraph = ({ ellipsis, copyable, editable, className, children, ...retProps }: ParagraphProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-paragraph-editable`]: editable || copyable,
    },
    className,
  );
  return (
    <div className={cls}>
      <Text ellipsis={ellipsis} editable={editable} copyable={copyable} {...retProps}>
        {children}
      </Text>
    </div>
  );
};
Paragraph.displayName = 'Paragraph';
