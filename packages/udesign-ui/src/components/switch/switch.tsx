import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { Size, BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-switch`;

export type SwitchProps = {
  checked?: boolean; // 当前是否选中。默认值：false
  defaultChecked?: boolean; // 默认是否选中。默认值：false
  disabled?: boolean; // 是否禁用。默认值：false
  loading?: boolean; // 是否加载中。默认值：false
  size?: Size; // 大小。默认值：middle
  checkedText?: ReactNode; // 选中时的内容。默认值：-
  uncheckedText?: ReactNode; // 非选中时的内容。默认值：-
  onChange?: (checked: boolean) => void; // 变化时回调函数。默认值：-
  onClick?: (checked: boolean) => void; // 点击时回调函数。默认值：-
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
