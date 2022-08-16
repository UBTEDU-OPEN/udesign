import React, { ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { CheckCircleFilled, CheckCircleOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { CheckboxContext, types } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type CheckboxProps = {
  label?: React.ReactNode; // 多选框显示的内容。默认值：-
  checked?: boolean; // 指定当前是否选中。默认值：false
  defaultChecked?: boolean; // 初始是否选中。默认值：false
  disabled?: boolean; // 禁用 Checkbox。默认值：false
  checkedIcon?: ReactNode; // 选中状态的图标。默认值：<CheckCircleFilled />
  uncheckedIcon?: ReactNode; // 未选中状态的图标。默认值：<CheckCircleOutlined />
  value?: string; // 根据 value 进行比较，判断是否选中。默认值：-
  indeterminate?: boolean; // 设置 indeterminate 状态，只负责样式控制。默认值：-
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 变化时回调函数。默认值：-
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-checkbox`;

export const Checkbox = ({ defaultChecked = false, disabled, className, style, children, value, onChange, label, checkedIcon = <CheckCircleFilled />, uncheckedIcon = <CheckCircleOutlined />, indeterminate, ...restProps }: CheckboxProps) => {
  const checked = 'checked' in restProps ? restProps.checked : defaultChecked;
  const [innerChecked, setInnerChecked] = useState<boolean>(checked!);
  const context = useContext(CheckboxContext);

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

  const renderCheckedIcon = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-checked`]: innerChecked });
    return !disabled && innerChecked && !indeterminate && <span className={cls}>{checkedIcon}</span>;
  };
  const renderUncheckedIcon = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-unchecked`]: !innerChecked });
    return !disabled && !innerChecked && !indeterminate && <span className={cls}></span>;
  };
  const renderUncheckedIconDisabled = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-disabled`]: disabled });
    return disabled && !innerChecked && !indeterminate && <span className={cls}></span>;
  };
  const renderCheckedIconDisabled = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-checked`]: innerChecked, [`${prefixCls}-icon-disabled`]: true });
    return disabled && innerChecked && !indeterminate && <span className={cls}>{uncheckedIcon}</span>;
  };
  const renderIndeterminateCheckedIcon = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-indeterminate`]: indeterminate });
    return !disabled && indeterminate && <span className={cls}></span>;
  };
  const renderIndeterminateCheckedIconDisabled = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-indeterminate`]: indeterminate, [`${prefixCls}-icon-indeterminate-disabled`]: disabled });
    return disabled && indeterminate && <span className={cls}></span>;
  };
  const cls = classNames(prefixCls, { [`${prefixCls}-disabled`]: disabled }, className);

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
        {renderIndeterminateCheckedIcon()}
        {renderIndeterminateCheckedIconDisabled()}
        {renderUncheckedIcon()}
        {renderCheckedIcon()}
        {renderUncheckedIconDisabled()}
        {renderCheckedIconDisabled()}
        {children || label ? (
          <span className={`${prefixCls}-text`} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
            {children || label}
          </span>
        ) : null}
      </label>
    </>
  );
};

Checkbox.displayName = 'Checkbox';
