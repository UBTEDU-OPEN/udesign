import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CommonSize } from '../../constants';

const prefixCls = `ud-switch`;

export type SwitchSize = CommonSize;
export type SwitchChangeEventHandler = (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export type SwitchProps = {
  checked?: boolean; // 当前是否选中
  defaultChecked?: boolean; // 默认是否选中
  disabled?: boolean; // 是否禁用
  loading?: boolean; // 是否加载中
  size?: SwitchSize; // TODO: 没有UI，暂不实现
  checkedText?: ReactNode; // 选中时的内容
  uncheckedText?: ReactNode; // 非选中时的内容
  onChange?: SwitchChangeEventHandler; // 变化时回调函数
  onClick?: SwitchClickEventHandler; // 点击时回调函数
} & NativeProps;

export const Switch = ({ defaultChecked = false, disabled, loading, size = 'middle', checkedText, uncheckedText, onChange, onClick, className, ...restProps }: SwitchProps) => {
  const [innerChecked, setInnerChecked] = useState(defaultChecked);

  function triggerChange(newChecked: boolean, event: React.MouseEvent<HTMLButtonElement>) {
    let mergedChecked = innerChecked;
    if (!disabled && !loading) {
      mergedChecked = newChecked;
      setInnerChecked(newChecked);
      onChange?.(mergedChecked, event);
    }

    return mergedChecked;
  }

  function onInternalClick(event: React.MouseEvent<HTMLButtonElement>) {
    const status = triggerChange(!innerChecked, event);
    onClick?.(status, event);
  }

  useEffect(() => {
    if ('checked' in restProps) {
      setInnerChecked(Boolean(restProps.checked));
    }
  }, [restProps.checked]);

  const widthClass = (innerChecked && !checkedText) || (!innerChecked && !uncheckedText) ? `${prefixCls}-notext` : '';
  const checkedClass = innerChecked ? `${prefixCls}-checked` : `${prefixCls}-unchecked`;
  const disabledClass = disabled || loading ? `${prefixCls}-disabled` : '';
  const cls = classNames(prefixCls, widthClass, checkedClass, disabledClass);

  return (
    <>
      <button className={cls} onClick={onInternalClick} type='button'>
        <div className={classNames(`${prefixCls}-inner`, `${prefixCls}-inner-${innerChecked ? 'checked' : 'unchecked'}`)}></div>
        <span className={`${prefixCls}-text`}>{innerChecked ? checkedText : uncheckedText}</span>
      </button>
    </>
  );
};

Switch.displayName = 'Switch';
