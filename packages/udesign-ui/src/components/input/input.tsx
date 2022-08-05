import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { CloseCircleFilled, EyeInvisibleOutlined, EyeOutlined } from '@ubt/udesign-icons';
import { NativeProps, usePropsValue } from '../../utils';
import { BASE_CLASS_PREFIX, Shape, Size, Status } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-input`;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'style' | 'onChange'>, NativeProps {
  prepend?: ReactNode; // 前置标签。默认值：-
  append?: ReactNode; // 后置标签。默认值：-
  prefix?: ReactNode; // 前缀标签。默认值：-
  suffix?: ReactNode; // 后缀标签。默认值：-
  value?: string; // 输入框内容。默认值：-
  defaultValue?: string; // 输入框内容默认值。默认值：''
  disabled?: boolean; // 是否禁用，默认为false。默认值：false
  type?: string; // 声明input类型，同原生input标签的type属性。默认值：-
  showClear?: boolean; // 可以点击清除图标删除内容。默认值：false
  showCount?: boolean; // 是否展示字数。默认值：false
  size?: Size; // 输入框大小。默认值：middle
  shape?: Shape; // 输入框形状。默认值：circle
  status?: Status; // 校验状态，可选值default、error、warning。仅影响展示样式。默认值：default
  maxLength?: number; // 内容最大长度。默认值：-
  underlined?: boolean; // 是否横线式的输入框。默认值：-
  inputStyle?: React.CSSProperties; // 输入框的样式。默认值：-
  onChange?: (value: string) => void; // 输入框内容变化时的回调。默认值：-
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void; // 点击清除按钮时的回调。默认值：-
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // 按回车时回调（keypress）。默认值：-
  forwardRef?: ((instance: any) => void) | React.MutableRefObject<any> | null;
}

const Input = (props: InputProps) => {
  const {
    defaultValue = '',
    onChange,
    onClear,
    onEnterPress,
    onFocus,
    onBlur,
    onKeyDown,
    prepend,
    append,
    className,
    disabled,
    prefix,
    status,
    type,
    size = 'middle',
    shape = 'circle',
    suffix,
    style,
    showClear,
    showCount,
    inputStyle,
    forwardRef,
    ...restProps
  } = props;

  const [innerValue, setInnerValue] = usePropsValue<string>({
    value: props.value,
    defaultValue,
    onChange,
  });
  const [currentCount, setCurrentCount] = useState(String(innerValue)?.length || 0);
  const [focused, setFocused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(type !== 'password');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInnerValue(value);
    setCurrentCount(value.length);
    onChange?.(value);
  };

  const handleClear = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setInnerValue('');
    setCurrentCount(0);
    onClear?.(e);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 || e.code === 'Enter') {
      onEnterPress?.(e);
    }
    onKeyDown?.(e);
  };

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const { onFocus } = props;
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
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

  const renderPrefix = () => {
    const { prefix } = props;
    const cls = classNames({
      [`${prefixCls}-prefix`]: true,
    });
    return prefix ? <div className={cls}>{prefix}</div> : null;
  };

  const renderSuffix = () => {
    const { suffix } = props;
    const cls = classNames({
      [`${prefixCls}-suffix`]: true,
    });
    return suffix ? <div className={cls}>{suffix}</div> : null;
  };

  const renderPrepend = () => {
    const { prepend } = props;
    const cls = classNames({
      [`${prefixCls}-prepend`]: true,
    });
    return prepend ? <div className={cls}>{prepend}</div> : null;
  };

  const renderAppend = () => {
    const { append } = props;
    const cls = classNames({
      [`${prefixCls}-append`]: true,
    });
    return append ? <div className={cls}>{append}</div> : null;
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

  const renderPasswordBtn = () => {
    const { type, disabled } = props;
    const onVisibleChange = () => {
      if (disabled) {
        return;
      }

      setVisible(!visible);
    };
    const showPasswordBtn = type === 'password' && innerValue && !disabled && (focused || hovering);
    const cls = classNames({
      [`${prefixCls}-suffix`]: true,
      [`${prefixCls}-password-icon`]: true,
    });
    return showPasswordBtn ? (
      <div className={cls} onClick={onVisibleChange}>
        {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      </div>
    ) : null;
  };

  const renderCount = () => {
    const { maxLength = 40, showCount } = props;
    const cls = classNames({
      [`${prefixCls}-suffix`]: true,
      [`${prefixCls}-count`]: true,
    });
    return showCount ? <div className={cls}>{`${currentCount}/${maxLength}`}</div> : null;
  };

  const renderInput = () => {
    const innerType = visible ? 'text' : 'password';
    const cls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-${size}`]: size,
    });
    return <input {...restProps} className={cls} style={inputStyle} type={innerType} value={innerValue} disabled={disabled} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeydown} ref={forwardRef} />;
  };

  const cls = classNames(className, {
    [`${prefixCls}-wrapper`]: true,
    [`${prefixCls}-wrapper-disabled`]: disabled,
    [`${prefixCls}-wrapper-with-prefix`]: prefix,
    [`${prefixCls}-wrapper-with-suffix`]: suffix,
    [`${prefixCls}-wrapper-with-prepend`]: prepend,
    [`${prefixCls}-wrapper-with-append`]: append,
    [`${prefixCls}-wrapper-with-append-only`]: append && !prepend,
    [`${prefixCls}-wrapper-with-prepend-only`]: !append && prepend,
    [`${prefixCls}-wrapper-focused`]: focused,
    [`${prefixCls}-wrapper-shape-${shape}`]: shape,
    [`${prefixCls}-wrapper-${status}`]: status,
    [`${prefixCls}-wrapper-${size}`]: size,
  });

  return (
    <div className={cls} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
      {renderPrepend()}
      {renderPrefix()}
      {renderInput()}
      {renderClearBtn()}
      {renderCount()}
      {renderPasswordBtn()}
      {renderSuffix()}
      {renderAppend()}
    </div>
  );
};

export const ForwardInput = React.forwardRef<HTMLInputElement, Omit<InputProps, 'forwardRef'>>((props, ref) => <Input {...props} forwardRef={ref} />);

ForwardInput.displayName = 'Input';
