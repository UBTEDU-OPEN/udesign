import React, { useState } from 'react';
import classNames from 'classnames';
import { CloseCircleFilled } from '@ubt/udesign-icons';
import { NativeProps, usePropsValue } from '../../utils';
import './textarea.scss';
import { BASE_CLASS_PREFIX, Status } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-textarea`;

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'prefix' | 'style' | 'onChange'>, NativeProps {
  value?: string; // 输入框内容。默认值：-
  defaultValue?: string; // 输入框内容默认值。默认值：''
  disabled?: boolean; // 是否禁用。默认值：false
  showClear?: boolean; // 可以点击清除图标删除内容。默认值：false
  showCount?: boolean; // 是否展示字数。默认值：false
  status?: Status; // 校验状态，仅影响展示样式。默认值：normal
  maxLength?: number; // 内容最大长度。默认值：-
  textAreaStyle?: React.CSSProperties; // 输入框的样式。默认值：-
  onChange?: (value: string) => void; // 输入框内容变化时的回调。默认值：-
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void; // 点击清除按钮时的回调。默认值：-
  onEnterPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void; // 按回车时回调（keypress）。默认值：-
  forwardRef?: ((instance: any) => void) | React.MutableRefObject<any> | null;
}

const TextArea = (props: TextAreaProps) => {
  const { defaultValue = '', onChange, onClear, onEnterPress, onKeyDown, className, disabled, status, style, showClear, showCount, textAreaStyle, forwardRef, ...restProps } = props;

  const [innerValue, setInnerValue] = usePropsValue<string>({
    value: props.value,
    defaultValue,
    onChange,
  });

  const [currentCount, setCurrentCount] = useState(String(innerValue)?.length || 0);
  const [focused, setFocused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInnerValue(value);
    showCount && setCurrentCount(value.length);
  };

  const handleClear = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setInnerValue('');
    showCount && setCurrentCount(0);
    onClear?.(e);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 || e.code === 'Enter') {
      onEnterPress?.(e);
    }
    onKeyDown?.(e);
  };

  const handleFocus: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
    const { onFocus } = props;
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
    const { onBlur } = props;
    setFocused(false);
    onBlur?.(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setHovering(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setHovering(false);
  };

  const renderClearBtn = () => {
    const cls = classNames({
      [`${prefixCls}-suffix`]: true,
      [`${prefixCls}-clear-icon`]: true,
    });
    return Boolean(innerValue) && showClear && !disabled && (focused || hovering) ? (
      <div className={cls} onMouseDown={handleClear}>
        <CloseCircleFilled />
      </div>
    ) : null;
  };

  const renderCount = () => {
    const { maxLength = 200, showCount } = props;
    const cls = classNames({
      [`${prefixCls}-suffix`]: true,
      [`${prefixCls}-count`]: true,
    });
    return showCount ? <div className={cls}>{`${currentCount}/${maxLength}`}</div> : null;
  };

  const renderTextArea = () => {
    const { rows = 4, cols = 20 } = props;
    const cls = classNames({
      [`${prefixCls}`]: true,
    });
    return <textarea rows={rows} cols={cols} className={cls} style={textAreaStyle} value={innerValue} disabled={disabled} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeydown} {...restProps} ref={forwardRef} />;
  };

  const cls = classNames(className, {
    [`${prefixCls}-wrapper`]: true,
    [`${prefixCls}-wrapper-disabled`]: disabled,
    [`${prefixCls}-wrapper-focused`]: focused,
    [`${prefixCls}-wrapper-${status}`]: status,
  });

  return (
    <div className={cls} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
      {renderTextArea()}
      {renderClearBtn()}
      {renderCount()}
    </div>
  );
};

export const ForwardTextArea = React.forwardRef<HTMLTextAreaElement, Omit<TextAreaProps, 'forwardRef'>>((props, ref) => <TextArea {...props} forwardRef={ref} />);

ForwardTextArea.displayName = 'TextArea';

export default ForwardTextArea;
