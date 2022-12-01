import React, { ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { RadioFilled, RadioOutlined } from '@ubt/udesign-icons';
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
  icon?: ReactNode; // 自定义图标。
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 变化时回调函数。
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-radio`;

export const Radio = ({ defaultChecked = false, disabled, icon, className, style, children, value, onChange, ...restProps }: RadioProps) => {
  const [checked, setChecked] = usePropsValue({
    value: restProps.checked,
    defaultValue: defaultChecked,
  });
  const context = useContext(RadioContext);
  const isDisabled = disabled || context.disabled;
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

  const renderIcon = () => {
    const cls = classNames(
      `${prefixCls}-icon`,
      {
        [`${prefixCls}-icon-checked`]: checked,
      },
      `${prefixCls}-icon-disabled`,
    );
    return <span className={cls}>{icon || (!checked ? <RadioOutlined /> : <RadioFilled />)}</span>;
  };

  const renderLabel = () => {
    const cls = classNames(`${prefixCls}-text`);
    return children ? <span className={cls}>{children}</span> : null;
  };

  const cls = classNames(prefixCls, { [`${prefixCls}-disabled`]: isDisabled }, className);

  return (
    <>
      <label className={cls} style={style}>
        <input name={context.name} type='radio' className={`${prefixCls}-hidden`} checked={checked} value={value} disabled={disabled} onClick={handleClick} onChange={onChange} />
        {renderIcon()}
        {renderLabel()}
      </label>
    </>
  );
};

Radio.displayName = 'Radio';
