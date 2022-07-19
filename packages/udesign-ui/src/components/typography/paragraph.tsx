import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { EllipsisConfig, EditableConfig } from './base';
import { Text, TextProps } from './text';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-typography`;

export type ParagraphProps = {
  ellipsis?: EllipsisConfig | boolean; // 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等
  editable?: EditableConfig | boolean; // 是否可编辑，为对象时可对编辑进行控制
} & NativeProps &
  TextProps;

export const Paragraph = ({ ellipsis, editable, className, children, ...retProps }: ParagraphProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-paragraph-editable`]: editable,
    },
    className,
  );
  return (
    <div className={cls}>
      <Text ellipsis={ellipsis} editable={editable} {...retProps}>
        {children}
      </Text>
    </div>
  );
};
Paragraph.displayName = 'Paragraph';
