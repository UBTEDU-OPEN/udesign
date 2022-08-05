import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { RadioContext, types } from './context';
import { RadioNormal } from './radio-normal';
import { RadioLight } from './radio-light';
import { RadioNormalDisabled } from './radio-normal-disabled';
import { RadioLightDisabled } from './radio-light-disabled';
import { BASE_CLASS_PREFIX } from '../../constants';

export type RadioChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type RadioChangeEventHandler = (checked: boolean, event: RadioChangeEventType) => void;
export type RadioClickEventHandler = RadioChangeEventHandler;

export type RadioProps = {
  checked?: boolean; // 指定当前是否选中。默认值：false
  defaultChecked?: boolean; // 初始是否选中。默认值：false
  disabled?: boolean; // 禁用 Radio。默认值：false
  value?: string; // 根据 value 进行比较，判断是否选中。默认值：-
  label?: string; // 单选框显示文字。默认值：-
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-radio`;

export const Radio = ({ defaultChecked = false, disabled, className, style, children, value, label, ...restProps }: RadioProps) => {
  const checked = 'checked' in restProps ? restProps.checked : defaultChecked;

  const [innerChecked, setInnerChecked] = useState<boolean>(checked!);
  const context = useContext(RadioContext);

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

  const cls = classNames(prefixCls, className);

  return (
    <>
      <label className={cls} style={style}>
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
        {!disabled && !innerChecked && <RadioNormal />}
        {!disabled && innerChecked && <RadioLight />}
        {disabled && !innerChecked && <RadioNormalDisabled />}
        {disabled && innerChecked && <RadioLightDisabled />}
        {children || label ? (
          <span className={classNames(`${prefixCls}-text`, disabled ? `${prefixCls}-text-disabled` : '')} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
            {children || label}
          </span>
        ) : null}
      </label>
    </>
  );
};

Radio.displayName = 'Radio';
