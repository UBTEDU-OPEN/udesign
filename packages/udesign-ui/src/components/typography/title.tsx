import React, { ReactNode } from "react";
import classNames from "classnames";
import { NativeProps, toArray } from "../../utils";
import { CopyableConfig, EditableConfig, EllipsisConfig } from "./base";
import { Copyable } from "./copyable";
import { Editable } from "./editable";
import { Ellipsis } from "./ellipsis";
import { Text, TextProps } from "./text";

const prefixCls = `ud-typography`;

export type TitleProps = {
  level?: ReactNode; // 设置标题大小
  copyable?: CopyableConfig | Boolean;
  editable?: EditableConfig | Boolean;
  ellipsis?: EllipsisConfig | Boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
} & NativeProps &
  TextProps;

export const Title = ({
  level,
  copyable,
  ellipsis,
  editable,
  onClick,
  className,
  children,
  ...restProps
}: TitleProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-h${level}`]: children,
    },
    className
  );
  if (copyable || editable || ellipsis) {
    return (
      <div onClick={onClick}>
        {copyable ? (
          <p className={cls}>
            {" "}
            <Copyable {...copyable}> {children}</Copyable>
          </p>
        ) : (
          ""
        )}
        {editable ? (
          <p className={cls}>
            {" "}
            <Editable {...editable}> {children}</Editable>
          </p>
        ) : (
          ""
        )}
        {ellipsis ? (
          <p className={cls}>
            {" "}
            <Ellipsis {...ellipsis}> {children}</Ellipsis>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  } else
    return (
      <div onClick={onClick}>
        {
          <div className={cls}>
            <Text {...restProps}> {children} </Text>{" "}
          </div>
        }
      </div>
    );
};
Title.displayName = "Title";
