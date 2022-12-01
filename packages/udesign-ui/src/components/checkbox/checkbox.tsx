import React, { ReactNode, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { CheckCircleFilled, CheckCircleOutlined, RadioOutlined } from '@ubt/udesign-icons';
import { NativeProps, usePropsValue } from '../../utils';
import { CheckboxContext } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type CheckboxProps = {
  checked?: boolean; // 指定当前是否选中。默认值：false
  defaultChecked?: boolean; // 初始是否选中。默认值：false
  disabled?: boolean; // 禁用 Checkbox。默认值：false
  value?: string; // 根据 value 进行比较，判断是否选中。
  icon?: ReactNode; // 自定义图标。
  indeterminate?: boolean; // 设置 indeterminate 状态，只负责样式控制。
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 变化时回调函数。
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-checkbox`;

export const Checkbox = (props: CheckboxProps) => {
  const { defaultChecked = false, disabled, icon, className, onChange, style, children, value, indeterminate } = props;
  const [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: defaultChecked,
  });

  const context = useContext(CheckboxContext);
  const isDisabled = disabled || context.disabled;

  const getResult = () => {
    let result = context.value;
    if (checked) {
      result = context.value?.filter((item: string) => item !== value);
    } else {
      result = [...(context.value || []), value || ''];
    }
    return result || [];
  };

  function handleClick() {
    if (isDisabled) return;
    if (context.value) {
      context.onChange?.(getResult());
      return;
    }
    setChecked(!checked);
  }

  useEffect(() => {
    if (context.value && Array.isArray(context.value) && value) {
      setChecked(context.value.includes(value));
    }
  }, [context.value]);

  const renderIcon = () => {
    const cls = classNames(`${prefixCls}-icon`, {
      [`${prefixCls}-icon-unchecked`]: !checked,
      [`${prefixCls}-icon-disabled`]: true,
      [`${prefixCls}-icon-checked`]: checked,
      [`${prefixCls}-icon-indeterminate`]: indeterminate,
    });

    if (!indeterminate) return <span className={cls}>{icon || (checked ? <CheckCircleFilled /> : <RadioOutlined />)}</span>;

    return <span className={cls}>{icon || (!indeterminate && checked ? <CheckCircleOutlined /> : <RadioOutlined />)}</span>;
  };

  const cls = classNames(prefixCls, { [`${prefixCls}-disabled`]: isDisabled }, className);
  return (
    <>
      <label className={cls} style={style}>
        <input
          name={context.name}
          type='checkbox'
          className={`${prefixCls}-hidden`}
          checked={checked}
          value={value}
          disabled={disabled}
          onClick={handleClick}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
              onChange(event);
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
