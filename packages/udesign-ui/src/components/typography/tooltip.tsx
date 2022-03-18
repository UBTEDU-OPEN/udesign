import React, { ReactNode } from "react";
import classNames from "classnames";
import { NativeProps } from "../../utils";

const prefixCls = `ud-typography`;

export type TooltipProps = {
  tooltip?: ReactNode;
} & NativeProps;

export const Tooltip = ({ tooltip, className, children }: TooltipProps) => {
  const cls = classNames(
    {
      [`${prefixCls}-Tooltip`]: tooltip,
    },
    className
  );

  return (
    <span style={{ marginTop: "0" }} className={cls}>
      <span>{tooltip}</span>
      <i></i>
    </span>
  );
};

Tooltip.displayName = "Tooltip";
