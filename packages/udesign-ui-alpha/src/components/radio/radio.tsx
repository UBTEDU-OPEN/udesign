import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { getDisabledCls, NativeProps } from '../../utils';
import { CommonShape } from '../../constants';

// export type RadioShape = CommonShape;

export type RadioChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type RadioChangeEventHandler = (checked: boolean, event: RadioChangeEventType) => void;
export type RadioClickEventHandler = RadioChangeEventHandler;

export type RadioProps = {
  checked?: boolean; // 当前是否选中
  defaultChecked?: boolean; // 初始是否选中
  // shape?: RadioShape;
  round?: boolean; // 是否圆形
  disabled?: boolean; // 是否禁用
  extra?: ReactNode; // 副文本
  // indeterminate?: boolean; // 设置 indeterminate 状态，只负责样式控制
  onChange?: RadioChangeEventHandler;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
} & NativeProps;

export const Radio = ({
  // checked,
  defaultChecked = false,
  // shape = 'round',
  round,
  disabled,
  extra,
  // indeterminate,
  onChange,
  onClick,
  className,
  children,
  ...restProps
}: RadioProps) => {
  const [innerChecked, setInnerChecked] = useState<boolean>(defaultChecked);

  function triggerChange(event: RadioChangeEventType) {
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

  const cls = classNames('inline-flex items-center flex-wrap select-none', getDisabledCls(disabled, 'cursor-pointer'), className);

  const inputClass = classNames('w-4 h-4 text-indigo-600', round ? 'rounded-full' : '', getDisabledCls(disabled, 'cursor-pointer'));

  return (
    <>
      <label className={cls}>
        <input type='radio' className={inputClass} checked={innerChecked} onClick={onClick} onChange={triggerChange} />
        <span className='px-2 text-gray-700'>{children}</span>
        <div className='pl-6 text-gray-400 w-full'>{extra}</div>
      </label>
    </>
  );
};

Radio.displayName = 'Radio';
