import React, { ReactNode, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { CommonSize } from '../../constants';
import { CloseCircleFilled } from '@ant-design/icons';
import { getDisabledCls, NativeProps, usePropsValue } from '../../utils';

export type InputSize = CommonSize;

export const getInputSizeClass = (size: InputSize) => {
  let cls;
  switch (size) {
    case 'large':
      cls = 'h-12';
      break;

    case 'middle':
      cls = 'h-10';
      break;

    case 'small':
      cls = 'h-7';
      break;
  }
  return cls;
};

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'prefix' | 'style' | 'onChange'>, NativeProps {
  disabled?: boolean; // 是否禁用状态，默认为 false
  rounded?: boolean;
  bordered?: boolean;
  maxCount?: number; // 设置字数限制并显示字数统计
  size?: InputSize; // 设置大小
  clearable?: boolean; // 带移除图标
  prefix?: ReactNode;
  suffix?: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void; // 点击清除按钮时的回调
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // 按回车时回调（keypress）
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void; //	keyup回调
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; //	keydown回调
}

const InternalInput: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = 'text', size = 'middle', defaultValue = '', disabled, clearable, rounded, bordered = true, maxCount, maxLength, prefix, suffix, onChange, onClear, onEnterPress, onKeyDown, className, style, ...restProps },
  ref,
) => {
  const [innerValue, setInnerValue] = usePropsValue<string>({
    value: restProps.value,
    defaultValue,
    onChange,
  });
  const [currentCount, setCurrentCount] = useState(String(innerValue)?.length || 0);

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

  const cls = classNames('relative w-full inline-flex flex-initial items-center border border-gray-300 text-gray-800 rounded focus:outline-none', getDisabledCls(disabled), getInputSizeClass(size));
  const inputCls = classNames(
    'w-full px-2 border-none bg-transparent outline-none focus:outline-none focus:ring-0',
    size === 'large' ? 'text-xl' : size === 'small' ? 'text-xs' : '',
    prefix ? 'pl-0' : '',
    suffix ? 'pr-0' : '',
    getDisabledCls(disabled),
    className,
  );

  const Box = ({ className, children }: NativeProps) => <div className={classNames('flex items-center justify-center whitespace-nowrap mx-2 text-gray-400', className)}>{children}</div>;

  return (
    <>
      <div className={cls} ref={ref}>
        {prefix ? <Box>{prefix}</Box> : null}
        <input className={inputCls} type={type} value={innerValue} disabled={disabled} onChange={handleChange} onKeyDown={handleKeydown} {...restProps} />
        {clearable && innerValue ? (
          <Box>
            <CloseCircleFilled onClick={handleClear} />
          </Box>
        ) : null}
        {suffix || maxCount ? <Box>{maxCount ? <div className=''>{`${currentCount}/${maxCount}`}</div> : suffix}</Box> : null}
      </div>
    </>
  );
};

export const Input = React.forwardRef(InternalInput);

Input.displayName = 'Input';
