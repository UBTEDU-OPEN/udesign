import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { CommonSize, BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-switch`;
export type SwitchSize = CommonSize;

export type SwitchProps = {
  checked?: boolean; // 当前是否选中
  defaultChecked?: boolean; // 默认是否选中
  disabled?: boolean; // 是否禁用
  loading?: boolean; // 是否加载中
  size?: SwitchSize; // 大小
  checkedText?: ReactNode; // 选中时的内容
  uncheckedText?: ReactNode; // 非选中时的内容
  onChange?: (checked: boolean) => void; // 变化时回调函数
  onClick?: (checked: boolean) => void; // 点击时回调函数
} & NativeProps;

export const Switch = ({ defaultChecked = false, disabled, loading, size = 'middle', checkedText, uncheckedText, className, ...props }: SwitchProps) => {
  const [innerChecked, setInnerChecked] = usePropsValue({
    value: props.checked,
    defaultValue: defaultChecked,
    onChange: props.onChange,
  });

  function onInternalClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (!disabled && !loading) {
      setInnerChecked(!innerChecked);
    }
    props.onClick?.(innerChecked);
  }
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-checked`]: innerChecked,
      [`${prefixCls}-unchecked`]: !innerChecked,
    },
    className,
  );
  return (
    <>
      <button onClick={onInternalClick} type='button' className={cls}>
        <div className={`${prefixCls}-handle`}></div>
        <span className={`${prefixCls}-text`}>{innerChecked ? checkedText : uncheckedText}</span>
      </button>
    </>
  );
};

Switch.displayName = 'Switch';
