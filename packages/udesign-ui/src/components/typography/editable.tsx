import React, { ReactNode, useState, useRef, ChangeEvent, KeyboardEvent, CSSProperties } from 'react';
import { EditFilled } from '@ubt/udesign-icons';
import classNames from 'classnames';
import Input from '../input';
import TextArea from '../input/textarea';
import { NativeProps } from '../../utils';
import Tooltip from '../tooltip';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-typography-editable`;

export type EditableProps = {
  icon?: ReactNode; // 自定义编辑图标。默认值：null
  tooltip?: boolean | ReactNode; // 自定义提示文案。默认值：false
  maxLength?: number; // 编辑中文本域最大长度 undefined
  autoSize?: { minRows?: number; maxRows?: number }; // 自动 resize 文本域。默认值：undefined
  editStyle?: CSSProperties; // 编辑框样式。默认值：undefined
  onStart?: () => void; // 进入编辑中状态时触发。默认值：-
  onEnd?: () => void; // 按 ENTER 结束编辑状态时触发。默认值：-
  onCancel?: () => void; // 按 ESC 退出编辑状态时触发。默认值：-
  onChange?: () => void; // 文本域编辑时触发。默认值：-
} & NativeProps;

export const Editable = ({ icon = <EditFilled />, tooltip = '编辑', maxLength, onCancel, onStart, onEnd, onChange, autoSize, children, className, editStyle }: EditableProps) => {
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

  const onKeyHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setIsShow(!isShow);
      if (e.keyCode === 13) onEnd?.();
      else onCancel?.();
      editText.current ? setPropChildren(editText.current!.value) : setPropChildren(textArea.current!.value);
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
        <span hidden={isShow}>
          <TextArea
            hidden={isShow}
            rows={autoSize.minRows}
            maxLength={maxLength}
            className={!isShow ? cls : ''}
            onBlur={textareaBlur}
            ref={textArea}
            onChange={() => {
              onChange?.();
            }}
            onKeyDown={onKeyHandler}
            defaultValue={propChildren}
            textAreaStyle={editStyle}
          />
        </span>
      ) : (
        <span hidden={isShow}>
          <Input hidden={isShow} onKeyDown={onKeyHandler} className={cls} onBlur={onBlur} ref={editText} type='text' defaultValue={propChildren} maxLength={maxLength} inputStyle={editStyle} />
        </span>
      )}
    </>
  );
};
Editable.displayName = 'Editable';
