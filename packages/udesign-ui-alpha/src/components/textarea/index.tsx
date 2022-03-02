import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { CloseCircleFilled } from '@ant-design/icons';
import { getDisabledCls, NativeProps } from '../../utils';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'disabled' | 'prefix' | 'onChange'> {
  // value?: string | number | null;
  rows?: number; // 输入框行数
  disabled?: boolean; // 是否禁用
  clearable?: boolean; // 是否可清空
  autosize?: boolean; // 自适应内容高度
  onChange?: (value?: string | number | null) => void;
}

export const Textarea = ({ defaultValue, disabled, clearable, autosize, onChange, ...restProps }: TextareaProps) => {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [focus, setFocus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInnerValue(value);
    onChange?.(value);
  };

  const handleClear = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // setFocus(false);
    setInnerValue('');
  };

  useEffect(() => {
    if ('value' in restProps) {
      setInnerValue(restProps.value);
    }
  }, [restProps.value]);

  const Box = ({ children }: NativeProps) => <div className='whitespace-nowrap mx-2 flex items-center justify-center'>{children}</div>;

  const cls = classNames(
    'w-full inline-flex flex-initial items-center border border-gray-300 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500',
    focus ? 'outline-none ring-1 ring-indigo-500 border-indigo-500' : '',
    getDisabledCls(disabled),
  );
  const textareaCls = classNames('w-full border-none bg-transparent outline-none focus:outline-none focus:ring-0');

  return (
    <>
      <div className={cls}>
        <textarea className={textareaCls} value={innerValue} disabled={disabled} onChange={handleChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...restProps} />
        {clearable && innerValue ? (
          <Box>
            <CloseCircleFilled onClick={handleClear} />
          </Box>
        ) : null}
      </div>
    </>
  );
};

Textarea.displayName = 'Textarea';
