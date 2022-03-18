import React, { ReactNode, useRef, useState } from "react";
import classNames from "classnames";
import { NativeProps } from "../../utils";
import { CopyableConfig, EllipsisConfig, EditableConfig } from "./base";
import { Ellipsis } from "./ellipsis";
import { Editable } from "./editable";
import { Text, TextProps } from "./text";
import { Copyable } from "./copyable";

const prefixCls = `ud-typography`;

export type ParagraphProps = {
  copyable?: CopyableConfig | Boolean;
  ellipsis?: EllipsisConfig | Boolean;
  editable?: EditableConfig | Boolean;
} & NativeProps &
  TextProps;

export const Paragraph = ({
  ellipsis,
  copyable,
  editable,
  className,
  children,
  ...retProps
}: ParagraphProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-paragraph-editable`]: editable || copyable,
    },
    className
  );
  if (ellipsis || copyable || editable) {
    return (
      <div className={cls}>
        {ellipsis ? <Ellipsis {...ellipsis} children={children} /> : ""}
        {copyable ? <Copyable {...copyable} children={children} /> : ""}
        {editable ? <Editable {...editable} children={children} /> : ""}
      </div>
    );
  } else
    return (
      <div className={prefixCls}>
        <Text className={cls} children={children} {...retProps} />
      </div>
    );
};
Paragraph.displayName = "Paragraph";
