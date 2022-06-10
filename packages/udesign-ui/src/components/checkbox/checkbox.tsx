import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CheckboxContext, types } from './context';
import { CheckboxCenter } from './checkbox-center';
import { CheckboxNormal } from './checkbox-normal';
import { CheckboxLight } from './checkbox-light';
import { CheckboxNormalDisabled } from './checkbox-normal-disabled';
import { CheckboxLightDisabled } from './checkbox-light-disabled';

export type CheckboxChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type CheckboxChangeEventHandler = (event: CheckboxChangeEventType) => void;
export type CheckboxClickEventHandler = CheckboxChangeEventHandler;

export type CheckboxProps = {
  label?: React.ReactNode; // 多选框显示的内容
  onChange?: CheckboxChangeEventHandler; // function (event: React.ChangeEvent<HTMLInputElement>)=> void
  checked?: boolean; // 指定当前是否选中
  defaultChecked?: boolean; // 初始是否选中
  disabled?: boolean; // 禁用 Checkbox
  value?: string; // 根据 value 进行比较，判断是否选中
  indeterminate?: boolean; // 设置 indeterminate 状态，只负责样式控制
} & NativeProps;

const prefixCls = 'ud-checkbox';

export const Checkbox = ({ defaultChecked = false, disabled, className, children, value, onChange, label, indeterminate, ...restProps }: CheckboxProps) => {
  const checked = 'checked' in restProps ? restProps.checked : defaultChecked;
  const [innerChecked, setInnerChecked] = useState<boolean>(checked!);
  const context = useContext(CheckboxContext);

  const getResult = () => {
    let result = context.value;
    if (innerChecked) {
      result = context.value.filter((item: any) => item !== value);
    } else {
      result = [...context.value, value];
    }
    return result;
  };

  function handleClick() {
    if (!disabled) {
      setInnerChecked(!innerChecked);
      // 选中时更新value值
      if (context.dispatch) {
        context.dispatch({
          type: types.UPDATE_VALUE,
          payload: {
            value: getResult(),
          },
        });
      }
    }
  }
  useEffect(() => {
    if (context.value && Array.isArray(context.value) && value) {
      setInnerChecked(context.value.includes(value));
    }
  }, [context.value]);

  useEffect(() => {
    if ('checked' in restProps) {
      setInnerChecked(restProps.checked!);
    }
  }, [restProps.checked]);

  const cls = classNames(className, prefixCls);

  return (
    <>
      <label className={cls}>
        <input
          name={context.name}
          type='checkbox'
          className={`${prefixCls}-hidden`}
          checked={innerChecked}
          value={value}
          disabled={disabled}
          onClick={handleClick}
          onChange={(event: CheckboxChangeEventType) => {
            if (onChange) {
              onChange(event);
            }
            if (context.onChange) {
              context.onChange(getResult());
            }
          }}
        />
        {!disabled && indeterminate && <CheckboxCenter />}

        {disabled && indeterminate && <CheckboxCenter stroke='#e9e9ec' />}

        {!disabled && !innerChecked && !indeterminate && <CheckboxNormal />}

        {!disabled && innerChecked && !indeterminate && <CheckboxLight />}

        {disabled && !innerChecked && !indeterminate && <CheckboxNormalDisabled />}

        {disabled && innerChecked && !indeterminate && <CheckboxLightDisabled />}

        <span className={`${prefixCls}-text`} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
          {children || label}
        </span>
      </label>
    </>
  );
};

Checkbox.displayName = 'Checkbox';
