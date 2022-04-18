import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { LoadingIcon } from '../icon';
import { getDisabledCls, NativeProps, usePropsValue } from '../../utils';
import { CommonSize } from '../../constants';

export type SwitchSize = CommonSize;

const getSizeClass = (size: SwitchSize) => {
  let cls;
  switch (size) {
    case 'large':
      cls = 'w-20 h-10';
      break;

    case 'middle':
      cls = 'w-16 h-8';
      break;

    case 'small':
      cls = 'w-12 h-6';
      break;
  }
  return cls;
};

export type SwitchProps = {
  checked?: boolean; // 当前是否选中
  defaultChecked?: boolean; // 默认是否选中
  disabled?: boolean; // 是否禁用
  loading?: boolean; // 是否加载中
  size?: SwitchSize; // TODO: 暂未实现
  checkedText?: ReactNode; // 选中时的内容
  uncheckedText?: ReactNode; // 非选中时的内容
  onChange?: (checked: boolean) => void;  // 变化时回调函数
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

  const widthClass = (innerChecked && !checkedText) || (!innerChecked && !uncheckedText) ? 'w-16' : '';
  const checkedClass = innerChecked ? 'bg-indigo-600 pr-8 pl-2' : 'bg-gray-200 pl-8 pr-2';
  const disabledClass = getDisabledCls(disabled || loading);
  const cls = classNames('relative h-8 rounded-full ourline-none', widthClass, checkedClass, disabledClass);

  return (
    <>
      <button onClick={onInternalClick} type='button' className={cls}>
        <div className={classNames('absolute top-1 bg-white w-6 h-6 rounded-full transition', loading ? 'animate-spin' : '', innerChecked ? 'right-1' : 'left-1')}>
          {loading ? <LoadingIcon className={classNames('text-2xl', innerChecked ? 'text-indigo-600' : 'text-gray-200')} /> : null}
        </div>
        <span className='text-white'>{innerChecked ? checkedText : uncheckedText}</span>
      </button>
    </>
  );
};

Switch.displayName = 'Switch';
