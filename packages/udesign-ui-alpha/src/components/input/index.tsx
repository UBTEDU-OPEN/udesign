import React, { ReactNode, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { CommonSize } from '../../constants';
import { CloseCircleFilled } from '@ant-design/icons';
import { getDisabledCls, NativeProps } from '../../utils';

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

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'prefix' | 'style'>, NativeProps {
  disabled?: boolean; // 是否禁用状态，默认为 false
  rounded?: boolean;
  bordered?: boolean;
  maxCount?: number; // 设置字数限制并显示字数统计
  size?: InputSize; // 设置大小
  clearable?: boolean; // 带移除图标
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const InternalInput: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type = 'text', defaultValue, size = 'middle', disabled, clearable, rounded, bordered = true, maxCount, maxLength, prefix, suffix, onChange, className, style, ...restProps },
  ref,
) => {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [currentCount, setCurrentCount] = useState(String(defaultValue)?.length || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInnerValue(value);
    setCurrentCount(value.length);
    onChange?.(e);
  };

  const handleClear = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setInnerValue('');
    setCurrentCount(0);
  };

  useEffect(() => {
    if ('value' in restProps) {
      setInnerValue(restProps.value);
    }
  }, [restProps.value]);

  const cls = classNames(
    'relative w-full inline-flex flex-initial items-center border border-gray-300 text-gray-800 rounded focus:outline-none',
    getDisabledCls(disabled),
    getInputSizeClass(size),
  );
  const inputCls = classNames(
    'w-full px-2 border-none bg-transparent outline-none focus:outline-none focus:ring-0',
    size === 'large' ? 'text-xl' : size === 'small' ? 'text-xs' : '',
    prefix ? 'pl-0' : '',
    suffix ? 'pr-0' : '',
    getDisabledCls(disabled),
  );

  const Box = ({ className, children }: NativeProps) => <div className={classNames('flex items-center justify-center whitespace-nowrap mx-2 text-gray-400', className)}>{children}</div>;

  return (
    <>
      <div className={cls} ref={ref}>
        {prefix ? <Box>{prefix}</Box> : null}
        <input className={inputCls} type={type} value={innerValue} disabled={disabled} onChange={handleChange} {...restProps} />
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
