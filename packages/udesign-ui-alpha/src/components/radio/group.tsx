import React, { useState } from 'react';
import classNames from 'classnames';
import { Radio } from './radio';
import { Space } from '../space';
import { getDisabledCls } from '../../utils';

export type RadioValueType = string | number | boolean;

export type RadioOptionType = {
  label: string; // 对外显示
  value: RadioValueType; // 真实值
  disabled?: boolean;
};

export interface GroupProps {
  defaultValue?: Array<RadioValueType>; // 默认选中的值，支持多个
  value?: Array<RadioValueType>; // 当前选中的值，支持多个
  vertical?: boolean; // 组内 radio 布局
  disabled?: boolean; // 禁用全部
  options: Array<RadioOptionType | string>;
}

export const Group = ({ defaultValue = [], vertical = false, disabled = false, options, ...restProps }: GroupProps) => {
  const [innerValue, setInnerValue] = useState(defaultValue);

  // 用于支持简单的数组作为options
  const getOptions = () =>
    options.map((option) => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });

  const wrapperClass = classNames('', getDisabledCls(disabled));

  return (
    <>
      <Space className={wrapperClass} vertical={vertical}>
        {getOptions().map((option) => {
          return (
            <Radio key={option.value.toString()} checked={innerValue.indexOf(option.value) !== -1} disabled={'disabled' in option ? option.disabled : disabled}>
              {option.label}
            </Radio>
          );
        })}
      </Space>
    </>
  );
};

Group.displayName = 'Radio.Group';
