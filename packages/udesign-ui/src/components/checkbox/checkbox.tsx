import React, { ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { CheckCircleFilled, CheckCircleOutlined, RadioOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { CheckboxContext, types } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type CheckboxProps = {
  checked?: boolean; // 指定当前是否选中。默认值：false
  defaultChecked?: boolean; // 初始是否选中。默认值：false
  disabled?: boolean; // 禁用 Checkbox。默认值：false
  value?: string; // 根据 value 进行比较，判断是否选中。默认值：-
  icon?: ReactNode; // 自定义图标。默认值：-
  indeterminate?: boolean; // 设置 indeterminate 状态，只负责样式控制。默认值：-
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 变化时回调函数。默认值：-
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-checkbox`;

export const Checkbox = ({ defaultChecked = false, disabled, icon, className, style, children, value, onChange, indeterminate, ...restProps }: CheckboxProps) => {
  const checked = 'checked' in restProps ? restProps.checked : defaultChecked;
  const [innerChecked, setInnerChecked] = useState<boolean>(checked!);
  const context = useContext(CheckboxContext);
  const isDisabled = disabled || context.disabled;

  const getResult = () => {
    let result = context.value;
    if (innerChecked) {
      result = context.value?.filter((item: string) => item !== value);
    } else {
      result = [...(context.value || []), value || ''];
    }
    return result || [];
  };

  function handleClick() {
    if (isDisabled) return;
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

  const renderIcon = () => {
    const cls = classNames(`${prefixCls}-icon`, {
      [`${prefixCls}-icon-unchecked`]: !innerChecked,
      [`${prefixCls}-icon-disabled`]: true,
      [`${prefixCls}-icon-checked`]: innerChecked,
      [`${prefixCls}-icon-disabled-checked`]: true,
      [`${prefixCls}-icon-indeterminate`]: indeterminate,
      [`${prefixCls}-icon-indeterminate-disabled`]: true,
    });

    if (!isDisabled) {
      if (!indeterminate) return <span className={cls}>{icon || (innerChecked ? <CheckCircleFilled /> : <RadioOutlined />)}</span>;
      return <span className={cls}>{icon}</span>;
    }
    return <span className={cls}>{icon || (!indeterminate && innerChecked ? <CheckCircleOutlined /> : <RadioOutlined />)}</span>;
  };

  const cls = classNames(prefixCls, { [`${prefixCls}-disabled`]: isDisabled }, className);

  return (
    <>
      <label className={cls} style={style}>
        <input
          name={context.name}
          type='checkbox'
          className={`${prefixCls}-hidden`}
          checked={innerChecked}
          value={value}
          disabled={disabled}
          onClick={handleClick}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
              onChange(event);
            }
            if (context.onChange) {
              context.onChange(getResult());
            }
          }}
        />
        {renderIcon()}
        {children ? <span className={`${prefixCls}-text`}>{children}</span> : null}
      </label>
    </>
  );
};

Checkbox.displayName = 'Checkbox';
