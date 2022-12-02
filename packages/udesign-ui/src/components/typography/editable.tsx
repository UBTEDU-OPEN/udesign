import React, { ReactNode, useState, useRef, KeyboardEvent, CSSProperties } from 'react';
import { EditFilled } from '@ubt/udesign-icons';
import classNames from 'classnames';
import { debounce } from 'lodash';
import Input from '../input';
import TextArea from '../input/textarea';
import { NativeProps } from '../../utils';
import Tooltip from '../tooltip';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-typography-editable`;

export type EditableProps = {
  icon?: ReactNode; // 自定义编辑图标。默认值：null
  tooltip?: boolean | ReactNode; // 自定义提示文案。
  maxLength?: number; // 编辑中文本域最大长度 undefined
  autoSize?: { minRows?: number; maxRows?: number }; // 自动 resize 文本域。默认值：undefined
  editStyle?: CSSProperties; // 编辑框样式。默认值：undefined
  onStart?: () => void; // 进入编辑中状态时触发。
  onEnd?: () => void; // 按 ENTER 结束编辑状态时触发。
  onCancel?: () => void; // 按 ESC 退出编辑状态时触发。
  onBlur?: (value: string) => void; // 失去焦点时触发。
  onChange?: (value: string) => void; // 文本域编辑时触发。
} & NativeProps;

export const Editable = ({ icon = <EditFilled />, tooltip = '编辑', maxLength, onCancel, onStart, onEnd, onChange, onBlur, autoSize, children, className, editStyle }: EditableProps) => {
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

  const showHandle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShow(!isShow);
    onStart?.();

    setTimeout(() => {
      !autoSize ? editText.current!.focus() : textArea.current!.focus();
    }, 0);

    //  光标移至最后
    !autoSize ? (editText.current!.selectionStart = editText.current!.value.length) : (textArea.current!.selectionStart = textArea.current!.value.length);
  };

  const inputBlur = (e: React.FocusEvent) => {
    setIsShow(!isShow);
    setPropChildren(editText.current!.value);
    onBlur?.((e.target as HTMLInputElement).value);
  };
  const textareaBlur = (e: React.FocusEvent) => {
    setIsShow(!isShow);
    setPropChildren(textArea.current!.value);
    onBlur?.((e.target as HTMLInputElement).value);
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
          {tooltip ? <Tooltip content={tooltip}>{iconProps}</Tooltip> : iconProps}
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
            onChange={debounce((val) => {
              onChange?.(val);
            }, 1000)}
            onKeyDown={onKeyHandler}
            defaultValue={propChildren}
            textAreaStyle={editStyle}
          />
        </span>
      ) : (
        <span hidden={isShow}>
          <Input
            hidden={isShow}
            onKeyDown={onKeyHandler}
            className={cls}
            onBlur={inputBlur}
            onChange={debounce((val) => {
              onChange?.(val);
            }, 1000)}
            ref={editText}
            type='text'
            defaultValue={propChildren}
            maxLength={maxLength}
            inputStyle={editStyle}
          />
        </span>
      )}
    </>
  );
};
Editable.displayName = 'Editable';
