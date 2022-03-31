import React, { ReactNode, useRef } from "react";
import classNames from "classnames";
import { NativeProps } from "../../utils";

const prefixCls = `ud-breadcrumb`;

export type ItemProps = {
  separator?: ReactNode; // 设置分隔符
  href?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>; // 点击时的回调
  indexArr?: any;
  indexLast?: any;
} & NativeProps;

export const Item = ({
  separator,
  onClick,
  className,
  children,
  style,
  indexArr,
  indexLast,
  ...restProps
}: ItemProps) => {
  const strRef = useRef<HTMLSpanElement>(null);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-item`]: children,
      [`${prefixCls}-last`]: indexArr[0] === indexLast,
    },
    className
  );

  const conCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-wrapper`]: children,
    },
    className
  );

  const iconCls = `${prefixCls}-separator`;

  let link;
  if ("href" in restProps) {
    link = (
      <span ref={strRef} className={cls} style={style}>
        <a {...restProps}> {children}</a>
      </span>
    );
  } else {
    link = (
      <span ref={strRef} className={cls} style={style} {...restProps}>
        {children}
      </span>
    );
  }

  return (
    <>
      <span className={conCls} onClick={onClick}>
        {indexArr[0] !== 0 ? (
          <span className={iconCls}>{separator} </span>
        ) : null}
        {link}
      </span>
    </>
  );
};
Item.displayName = "Item";
