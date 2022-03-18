import React, { ReactNode, useState, useRef, useEffect } from "react";
import { SettingIcon } from "@ubt/udesign-ui-alpha";
import classNames from "classnames";
import { NativeProps } from "../../utils";
import { Tooltip } from "./tooltip";

const prefixCls = `ud-typography-editable`;
export type EditableProps = {
  icon?: ReactNode;
  tooltip?: boolean | ReactNode;
  maxLength?: number;
  minLength?: number;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  onStart?: Function;
  onEnd?: Function;
  onCancel?: Function;
} & NativeProps;

export const Editable = ({
  icon = <SettingIcon />,
  tooltip,
  minLength,
  maxLength,
  onCancel,
  onStart,
  onEnd,
  autoSize = false,
  children,
  className,
}: EditableProps) => {
  const [isShow, setIsShow] = useState(true);
  const [propChildren, setPropChildren] = useState(
    String(children)
      .trim()
      .replace(/^(\s|,)+|(\s|,)+$/g, "")
  );
  const [iconProps, setIconProps] = useState(icon);
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-focus`]: true,
      [`${prefixCls}-isShow`]: isShow,
    },
    className
  );

  const isShowCls = classNames(
    {
      [`${prefixCls}-isShow-icon`]: true,
    },
    className
  );

  const iconCss = `${prefixCls}-icon`;

  const editText: any = useRef();
  const inpText: any = useRef();

  const showHandle = () => {
    setIsShow(!isShow);

    onStart ? onStart() : onStart;
    setTimeout(() => {
      editText.current.focus();
    }, 0);

    //  光标移至最后
    editText.current.selectionStart = editText.current.value.length;
  };

  const onBlur = () => {
    setIsShow(!isShow);
    setPropChildren(editText.current.value);
  };
  let height: number;
  useEffect(() => {
    height = inpText.current.style.offsetHeight;
  });
  const onChange = (e: any) => {
    editText.current.style.height =
      (autoSize.minRows ? autoSize.minRows : 1) * 34 + "px";
    editText.current.style.height = e.target.scrollHeight + "px";
  };

  const onKeyHandler = (e: any) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setIsShow(!isShow);
      if (e.keyCode === 13) onEnd ? onEnd() : onEnd;
      else onCancel ? onCancel() : onCancel;
      setPropChildren(editText.current.value);
    }
  };

  // 多行文本
  return (
    <>
      <div
        hidden={!isShow}
        style={{ background: "#fff" }}
        className={cls}
        ref={inpText}
      >
        {propChildren}
        <span className={isShowCls} onClick={showHandle}>
          {tooltip ? <Tooltip tooltip={tooltip} /> : null}
          <span className={iconCss}>{iconProps}</span>
        </span>
      </div>
      {autoSize ? (
        <textarea
          style={{ overflowY: "hidden" }}
          rows={autoSize.minRows}
          minLength={minLength}
          maxLength={maxLength}
          hidden={isShow}
          className={!isShow ? cls : ""}
          onBlur={onBlur}
          ref={editText}
          onChange={onChange}
          onKeyDown={onKeyHandler}
          defaultValue={propChildren}
        ></textarea>
      ) : (
        <input
          onKeyDown={onKeyHandler}
          className={cls}
          hidden={isShow}
          onBlur={onBlur}
          ref={editText}
          type="text"
          defaultValue={propChildren}
          maxLength={maxLength}
        ></input>
      )}
    </>
  );
};
Editable.displayName = "Editable";
