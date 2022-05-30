import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Copyable } from './copyable';
import { EllipsisConfig, EditableConfig, CopyableConfig } from './base';
import { Editable } from './editable';
import { Ellipsis } from './ellipsis';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-typography`;

export type TextProps = {
  type?: string; // 文本类型
  mark?: boolean; // 添加标记样式
  disabled?: boolean; // 禁用文本
  code?: boolean; // 添加代码样式
  underline?: boolean; // 添加下划线样式
  del?: boolean; // 添加删除线样式
  italic?: boolean; // 是否斜体
  link?: string; // 是否是连接,值为链接地址
  strong?: boolean; // 是否加粗
  keyboard?: boolean; // 添加键盘样式
  ellipsis?: EllipsisConfig | boolean; // 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等
  copyable?: CopyableConfig | boolean; // 是否可拷贝，为对象时可进行各种自定义
  editable?: EditableConfig | boolean; // 是否可编辑，为对象时可对编辑进行控制
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
} & NativeProps;

export const Text = ({
  type = 'default',
  mark = false,
  disabled = false,
  code = false,
  underline = false,
  del = false,
  italic = false,
  link,
  strong = false,
  keyboard = false,
  className,
  ellipsis,
  copyable,
  editable,
  onClick,
  children,
  style,
}: TextProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-text-${type}`]: children,
      [`${prefixCls}-text-disabled`]: disabled,
      [`${prefixCls}-text-mark`]: mark,
      [`${prefixCls}-text-code`]: code,
      [`${prefixCls}-text-underline`]: underline,
      [`${prefixCls}-text-del`]: del,
      [`${prefixCls}-text-italic`]: italic,
      [`${prefixCls}-text-link`]: link,
      [`${prefixCls}-text-strong`]: strong,
      [`${prefixCls}-text-keyboard`]: keyboard,
      [`${prefixCls}-copy-wrapper`]: copyable,
    },
    className,
  );

  const wrapperCls = '';

  if (ellipsis || copyable || editable) {
    return (
      <>
        {ellipsis ? (
          <span onClick={onClick} className={cls} style={{ position: 'relative' }}>
            <Ellipsis {...ellipsis}>{children}</Ellipsis>
          </span>
        ) : null}
        {copyable ? (
          <span onClick={onClick} className={cls} style={style}>
            <Copyable {...copyable} className={wrapperCls}>
              {children}
            </Copyable>
          </span>
        ) : null}
        {editable ? (
          <span onClick={onClick} className={cls} style={style}>
            <Editable {...editable}>{children}</Editable>
          </span>
        ) : null}
      </>
    );
  }
  return (
    <>
      {link ? (
        <a className={cls} href={link}>
          {children}
        </a>
      ) : (
        <span className={cls}>{children}</span>
      )}
    </>
  );
};
Text.displayName = 'Text';
