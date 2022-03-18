import React, { ReactNode, useRef, useState } from "react";
import classNames from "classnames";
import { NativeProps } from "../../utils";
import { PageIcon, CheckIcon } from "@ubt/udesign-ui-alpha";
import { Tooltip } from "./tooltip";

const prefixCls = `ud-typography`;

export type CopyableProps = {
  tooltip?: ReactNode;
  icon?: ReactNode;
  text?: string;
  onCopy?: Function;
} & NativeProps;

export const Copyable = ({
  tooltip,
  className,
  icon = <PageIcon />,
  text,
  onCopy,
  children,
}: CopyableProps) => {
  let [stateIcon, setStateIcon] = useState(icon);
  let [stateTooltip, setStateTooltip] = useState(tooltip);
  let [isShow, setIsShow] = useState(false);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-copy`]: true,
      [`${prefixCls}-copy-clicked`]: isShow,
    },
    className
  );

  const textRef: any = useRef();

  const onClick = () => {
    const textCopy = textRef.current.innerText;
    const textareaEl = document.createElement("textarea");

    textareaEl.setAttribute("readonly", "readonly");
    text ? (textareaEl.value = text) : (textareaEl.value = textCopy);
    document.body.appendChild(textareaEl);
    textareaEl.select();

    if (document.execCommand("copy")) {
      setStateIcon(<CheckIcon />);
      setStateTooltip("复制成功!");
      setIsShow(true);
      onCopy ? onCopy() : onCopy;
      setTimeout(() => {
        setStateIcon(icon);
        setStateTooltip(tooltip);
        setIsShow(false);
      }, 3000);
    }
    document.body.removeChild(textareaEl);
  };

  return (
    <>
      <span ref={textRef}> {children}</span>
      <span className={cls} onClick={onClick}>
        <Tooltip tooltip={stateTooltip} />
        <span>{stateIcon}</span>
      </span>
    </>
  );
};

Copyable.displayName = "Copyable";
