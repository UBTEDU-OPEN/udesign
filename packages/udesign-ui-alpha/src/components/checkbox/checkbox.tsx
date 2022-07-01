import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { getDisabledCls, NativeProps } from '../../utils';
import { Shape } from '../../constants';

// export type CheckboxShape = Shape;

export type CheckboxChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type CheckboxProps = {
  checked?: boolean; // 当前是否选中
  defaultChecked?: boolean; // 初始是否选中
  // shape?: CheckboxShape;
  // round?: boolean; // 是否圆形
  disabled?: boolean; // 是否禁用
  extra?: ReactNode; // 副文本
  // indeterminate?: boolean; // 设置 indeterminate 状态，只负责样式控制
  onChange?: (checked: boolean, event: CheckboxChangeEventType) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
} & NativeProps;

export const Checkbox = ({
  // checked,
  defaultChecked = false,
  // shape = 'round',
  // round,
  disabled,
  extra,
  // indeterminate,
  onChange,
  onClick,
  className,
  children,
  ...restProps
}: CheckboxProps) => {
  const [innerChecked, setInnerChecked] = useState<boolean>(defaultChecked);

  function triggerChange(event: CheckboxChangeEventType) {
    let mergedChecked = innerChecked;

    if (!disabled) {
      mergedChecked = event.target.checked;
      setInnerChecked(mergedChecked);
      onChange?.(mergedChecked, event);
    }

    return mergedChecked;
  }

  useEffect(() => {
    if ('checked' in restProps) {
      setInnerChecked(!!restProps.checked);
    }
  }, [restProps.checked]);

  const cls = classNames('inline-flex items-center flex-wrap select-none1', getDisabledCls(disabled), className);

  const inputClass = classNames('w-4 h-4 text-indigo-600');

  return (
    <>
      <label className={cls}>
        <input type='checkbox' className={inputClass} checked={innerChecked} onClick={onClick} onChange={triggerChange} disabled={disabled} />
        <span className='px-2 text-gray-700'>{children}</span>
        <div className='pl-6 text-gray-400 w-full'>{extra}</div>
      </label>
    </>
  );
};

Checkbox.displayName = 'Checkbox';
