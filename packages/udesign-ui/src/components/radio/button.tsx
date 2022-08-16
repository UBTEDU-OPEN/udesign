import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { RadioContext, types } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type RadioChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type RadioChangeEventHandler = (checked: boolean, event: RadioChangeEventType) => void;
export type RadioClickEventHandler = RadioChangeEventHandler;

export type RadioProps = {
  checked?: boolean; // 指定当前是否选中。默认值：false
  defaultChecked?: boolean; // 初始是否选中。默认值：false
  disabled?: boolean; // 禁用 Radio。默认值：false
  value?: string; // 根据 value 进行比较，判断是否选中。默认值：-
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-radio-button`;

export const Button = ({ defaultChecked = false, disabled, className, children, value, ...restProps }: RadioProps) => {
  const checked = 'checked' in restProps ? restProps.checked : defaultChecked;
  const [innerChecked, setInnerChecked] = useState<boolean>(checked!);
  const context = useContext(RadioContext);
  // const [cusInput, setCusInput] = useState(
  //   classNames(`${prefixCls}-cus-input`, {
  //     [`${prefixCls}-unchecked`]: !disabled && !innerChecked,
  //     [`${prefixCls}-checked`]: !disabled && innerChecked,
  //     [`${prefixCls}-unchecked-disabled`]: disabled && !innerChecked,
  //     [`${prefixCls}-checked-disabled`]: disabled && innerChecked,
  //   }),
  // );
  const [cusInput, setCusInput] = useState(
    classNames(`${prefixCls}-cus-input`, {
      [`${prefixCls}-unchecked`]: !innerChecked,
      [`${prefixCls}-checked`]: innerChecked,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-cus-input-common`]: true,
    }),
  );

  function handleClick() {
    if (!disabled) {
      setInnerChecked(true);
      // 更新value值
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
      // classNames(`${prefixCls}-cus-input`, {
      //   [`${prefixCls}-unchecked`]: !disabled && !innerChecked,
      //   [`${prefixCls}-checked`]: !disabled && innerChecked,
      //   [`${prefixCls}-unchecked-disabled`]: disabled && !innerChecked,
      //   [`${prefixCls}-checked-disabled`]: disabled && innerChecked,
      // }),
      classNames(`${prefixCls}-cus-input`, {
        [`${prefixCls}-unchecked`]: !innerChecked,
        [`${prefixCls}-checked`]: innerChecked,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-cus-input-common`]: true,
      }),
    );
  }, [innerChecked, disabled]);

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
