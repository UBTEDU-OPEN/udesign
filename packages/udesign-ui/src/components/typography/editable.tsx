import React, { ReactNode, useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { EditOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import Tooltip from '../tooltip';

const prefixCls = `ud-typography-editable`;
export type EditableProps = {
  icon?: ReactNode; //自定义编辑图标
  tooltip?: boolean | ReactNode;
  maxLength?: number; //编辑中文本域最大长度
  autoSize?: { minRows?: number; maxRows?: number }; //自动 resize 文本域
  onStart?: ()=> void; //进入编辑中状态时触发
  onEnd?: ()=> void; //按 ENTER 结束编辑状态时触发
  onCancel?: ()=> void; //按 ESC 退出编辑状态时触发
  onChange?: ()=> void; //文本域编辑时触发
} & NativeProps;

export const Editable = ({ icon = <EditOutlined />, tooltip = '编辑', maxLength, onCancel, onStart, onEnd, onChange, autoSize, children, className }: EditableProps) => {
  const [isShow, setIsShow] = useState(true);
  const [propChildren, setPropChildren] = useState(
    String(children)
      .trim()
      .replace(/^(\s|,)+|(\s|,)+$/g, ''),
  );
  const [iconProps, setIconProps] = useState(icon);
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-focus`]: true,
      [`${prefixCls}-isShow`]: !isShow,
    },
    className,
  );

  const isShowCls = classNames(
    {
      [`${prefixCls}-isShow-icon`]: true,
    },
    className,
  );

  const editText = useRef<HTMLInputElement>(null);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const inpText = useRef<HTMLDivElement>(null);

  const showHandle = () => {
    setIsShow(!isShow);
    onStart?.();

    setTimeout(() => {
      !autoSize ? editText.current!.focus() : textArea.current!.focus();
    }, 0);

    //  光标移至最后
    !autoSize ? (editText.current!.selectionStart = editText.current!.value.length) : (textArea.current!.selectionStart = textArea.current!.value.length);
  };

  const onBlur = () => {
    setIsShow(!isShow);
    setPropChildren(editText.current!.value);
  };
  const textareaBlur = () => {
    setIsShow(!isShow);
    setPropChildren(textArea.current!.value);
  };

  const editChange = (event: ChangeEvent) => {
    textArea.current!.style.height = (autoSize?.minRows ? autoSize.minRows : 1) * 34 + 'px';
    textArea.current!.style.height = event.target.scrollHeight + 'px';
  };

  const onKeyHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setIsShow(!isShow);
      if (e.keyCode === 13) onEnd?.();
      else onCancel?.();
      setPropChildren(editText.current!.value);
    }
  };

  return (
    <>
      <div hidden={!isShow} className={cls} ref={inpText}>
        {propChildren}
        <span className={isShowCls} onClick={showHandle}>
          <Tooltip content={tooltip}>{iconProps}</Tooltip>
        </span>
      </div>
      {autoSize ? (
        <textarea
          rows={autoSize.minRows}
          maxLength={maxLength}
          hidden={isShow}
          className={!isShow ? cls : ''}
          onBlur={textareaBlur}
          ref={textArea}
          onChange={(Event) => {
            editChange(Event);
            onChange?.();
          }}
          onKeyDown={onKeyHandler}
          defaultValue={propChildren}
        ></textarea>
      ) : (
        <input onKeyDown={onKeyHandler} className={cls} hidden={isShow} onBlur={onBlur} ref={editText} type='text' defaultValue={propChildren} maxLength={maxLength}></input>
      )}
    </>
  );
};
Editable.displayName = 'Editable';
