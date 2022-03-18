import React, { ReactNode, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { NativeProps } from "../../utils";

const prefixCls = `ud-typography`;

export type EllipsisProps = {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: ReactNode;
  onExpand?: Function;
  tooltip?: false | ReactNode;
} & NativeProps;

export const Ellipsis = ({
  rows = 1,
  expandable,
  suffix,
  className,
  tooltip,
  symbol,
  children,
  onExpand,
}: EllipsisProps) => {
  const [isExpand, setIsExpand] = useState(true);
  let lineClamp: any = useRef();
  let [tooltipText, setTooltipText] = useState(tooltip);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-paragraph-ellipsis-rows`]: rows,
    },
    className
  );
  const symbolCss = `${prefixCls}-paragraph-ellipsis-symbol`;
  const tooltipCss = `${prefixCls}-paragraph-ellipsis-tooltip`;
  const suffixCss = `${prefixCls}-paragraph-ellipsis-suffix`;

  const onClick = () => {
    if (!expandable) return;
    setIsExpand(!isExpand);
    return onExpand ? onExpand() : undefined;
  };

  useEffect(() => {
    if (tooltipText === true) {
      setTooltipText(children);
    }
    lineClamp.current
      ? (lineClamp.current.style.webkitLineClamp = rows)
      : undefined;
  });
  return (
    <>
      <span
        style={{ margin: 0 }}
        ref={lineClamp}
        className={isExpand ? cls : ""}
      >
        {children}
      </span>
      {isExpand ? (
        <span className={symbolCss} onClick={onClick}>
          {symbol}
        </span>
      ) : (
        ""
      )}
      {tooltip ? <span className={tooltipCss}>{tooltipText}</span> : ""}
      <span className={suffixCss}>{suffix}</span>
    </>
  );
};
Ellipsis.displayName = "Ellipsis";
