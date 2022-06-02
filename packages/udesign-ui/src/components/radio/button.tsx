import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { RadioContext, types } from './context';

export type RadioChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type RadioChangeEventHandler = (checked: boolean, event: RadioChangeEventType) => void;
export type RadioClickEventHandler = RadioChangeEventHandler;

export type RadioProps = {
  checked?: boolean; // 指定当前是否选中
  defaultChecked?: boolean; // 初始是否选中
  disabled?: boolean; // 禁用 Radio
  value?: any; // 根据 value 进行比较，判断是否选中
} & NativeProps;

export const Button = ({ defaultChecked = false, disabled, className, children, value, ...restProps }: RadioProps) => {
  const prefixCls = 'ud-radio-button';

  const checked = 'checked' in restProps ? restProps.checked : defaultChecked;
  const [innerChecked, setInnerChecked] = useState<boolean>(checked!);
  const context = useContext(RadioContext);
  const [cusInput, setCusInput] = useState(
    classNames(`${prefixCls}-cus-input`, {
      [`${prefixCls}-normal`]: !disabled && !innerChecked,
      [`${prefixCls}-light`]: !disabled && innerChecked,
      [`${prefixCls}-normal-disabled`]: disabled && !innerChecked,
      [`${prefixCls}-light-disabled`]: disabled && innerChecked,
    }),
  );

  function handleClick() {
    if (!disabled) {
      setInnerChecked(true);
      // 没有onchange 时更新value值
      if (context.dispatch) {
        context.dispatch({
          type: types.UPDATE_VALUE,
          payload: {
            value,
          },
        });
      }
    }
  }
  useEffect(() => {
    if (context.value && value) {
      setInnerChecked(context.value === value);
    }
  }, [context.value]);

  useEffect(() => {
    if ('checked' in restProps) {
      setInnerChecked(restProps.checked!);
    }
  }, [restProps.checked]);

  useEffect(() => {
    setCusInput(
      classNames(`${prefixCls}-cus-input`, {
        [`${prefixCls}-normal`]: !disabled && !innerChecked,
        [`${prefixCls}-light`]: !disabled && innerChecked,
        [`${prefixCls}-normal-disabled`]: disabled && !innerChecked,
        [`${prefixCls}-light-disabled`]: disabled && innerChecked,
      }),
    );
  }, [innerChecked]);

  const cls = classNames(className, prefixCls);

  return (
    <>
      <label className={cls}>
        <input
          name={context.name}
          type='radio'
          className={`${prefixCls}-hidden`}
          checked={innerChecked}
          value={value}
          disabled={disabled}
          onClick={handleClick}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (context.onChange) {
              context.onChange(event);
            }
          }}
        />
        <div className={cusInput}>{children}</div>
      </label>
    </>
  );
};

Button.displayName = 'Radio.Button';
