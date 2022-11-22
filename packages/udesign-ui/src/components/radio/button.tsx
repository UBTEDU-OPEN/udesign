import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { RadioContext } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type RadioChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type RadioChangeEventHandler = (checked: boolean, event: RadioChangeEventType) => void;
export type RadioClickEventHandler = RadioChangeEventHandler;

export type RadioProps = {
  checked?: boolean; // 指定当前是否选中。默认值：false
  defaultChecked?: boolean; // 初始是否选中。默认值：false
  disabled?: boolean; // 禁用 Radio。默认值：false
  value?: string; // 根据 value 进行比较，判断是否选中。
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 变化时回调函数。
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-radio-button`;

export const Button = ({ defaultChecked = false, disabled, className, children, value, style, ...restProps }: RadioProps) => {
  const [checked, setChecked] = usePropsValue({
    value: restProps.checked,
    defaultValue: defaultChecked,
  });
  const context = useContext(RadioContext);
  const isDisabled = disabled || context.disabled;
  const [cusInput, setCusInput] = useState(
    classNames(`${prefixCls}-cus-input`, {
      [`${prefixCls}-unchecked`]: !checked,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: isDisabled,
      [`${prefixCls}-cus-input-common`]: true,
    }),
  );

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    if (isDisabled) return;
    // 更新value值
    if (context.value && value !== undefined) {
      context.onChange?.(value, e);
      return;
    }
    setChecked(true);
  }
  useEffect(() => {
    if (context.value && value) {
      setChecked(context.value === value);
    }
  }, [context.value]);

  useEffect(() => {
    setCusInput(
      classNames(`${prefixCls}-cus-input`, {
        [`${prefixCls}-unchecked`]: !checked,
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: isDisabled,
        [`${prefixCls}-cus-input-common`]: true,
      }),
    );
  }, [checked, disabled, context.disabled]);

  const cls = classNames(className, prefixCls);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    restProps.onChange?.(event);
    // context.onChange?.(event);
  };

  return (
    <>
      <label className={cls} style={style}>
        <input
          name={context.name}
          type='radio'
          className={`${prefixCls}-hidden`}
          checked={checked}
          value={value}
          disabled={isDisabled}
          onClick={handleClick}
          onChange={(e) => {
            restProps.onChange?.(e);
          }}
        />
        <div className={cusInput}>{children}</div>
      </label>
    </>
  );
};

Button.displayName = 'Radio.Button';
