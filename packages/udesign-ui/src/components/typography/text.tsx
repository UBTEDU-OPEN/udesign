import React from "react";
import classNames from "classnames";
import { NativeProps } from "../../utils";
import { Copyable } from "./copyable";
import { EllipsisConfig, EditableConfig, CopyableConfig } from "./base";
import { Editable } from "./editable";
import { Ellipsis } from "./ellipsis";

const prefixCls = `ud-typography`;

export type TextProps = {
  type?: string;
  mark?: Boolean;
  disabled?: Boolean;
  code?: Boolean;
  underline?: Boolean;
  del?: Boolean;
  italic?: Boolean;
  link?: Boolean;
  strong?: Boolean;
  ellipsis?: EllipsisConfig | boolean;
  copyable?: CopyableConfig | boolean;
  editable?: EditableConfig | boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
} & NativeProps;

export const Text = ({
  type = "default",
  mark = false,
  disabled = false,
  code = false,
  underline = false,
  del = false,
  italic = false,
  link = false,
  strong = false,
  className,
  ellipsis,
  copyable,
  editable,
  onClick,
  children,
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
    },
    className
  );
  const copyCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-copy-wrapper`]: copyable,
    },
    className
  );

  if (ellipsis || copyable || editable) {
    return (
      <>
        {ellipsis ? (
          <div onClick={onClick} style={{ position: "relative" }}>
            <Ellipsis {...ellipsis} children={children} />
            <span style={{ lineClamp: "2" }} className={cls}></span>
          </div>
        ) : (
          ""
        )}
        {copyable ? (
          <div onClick={onClick} className={copyCls}>
            <Copyable {...copyable}> {children}</Copyable>
          </div>
        ) : (
          ""
        )}
        {editable ? (
          <div onClick={onClick}>
            <Editable {...editable} children={children} />
          </div>
        ) : (
          ""
        )}
      </>
    );
  } else {
    return (
      <span style={{ display: "block" }}>
        {link ? (
          <a className={cls} href="">
            {children}
          </a>
        ) : (
          <span className={cls}>{children}</span>
        )}
      </span>
    );
  }
};
Text.displayName = "Text";
