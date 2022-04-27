import React, { ReactNode } from "react";
import { NativeProps, toArray } from "../../utils";

import { Item } from "./item";

const prefixCls = `ud-breadcrumb`;

export type BreadcrumbProps = {
  separator?: ReactNode; // 设置分隔符
} & NativeProps;

export const Breadcrumb = ({
  separator = "\\",
  className,
  children,
  style,
  ...restProps
}: BreadcrumbProps) => {
  const newChildren = toArray(children);
  const arrkey: string[] = [];

  return (
    <div className={prefixCls} {...restProps} style={style}>
      {newChildren.map((child, index) => {
        if (child.props.children !== undefined) {
          // 拼接地址
          if (typeof child.props.children !== "string") {
            if (child.props.children.length > 0) {
              arrkey.push(child.props.children[1]);
            } else if (child.props.children.props !== undefined) {
              arrkey.push(child.props.children.props.children);
            }
          } else {
            arrkey.push(child.props.children);
          }

          if (!arrkey[0]) arrkey.shift();
          const strKey: string = arrkey.join("/");
          return (
            <Item
              key={strKey}
              {...child.props}
              separator={
                child.props.separator ? child.props.separator : separator
              }
            >
              {child.props.children}
            </Item>
          );
        }
      })}
    </div>
  );
};
Breadcrumb.displayName = "Breadcrumb";
