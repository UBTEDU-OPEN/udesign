import React, { useState } from 'react';
import classNames from 'classnames';
import { Checkbox } from './checkbox';
import { Space } from '../space';
import { getDisabledCls, NativeProps, toArray } from '../../utils';

export type CheckboxValueType = string | number | boolean;

export type CheckboxOptionType = {
  label: string; // 对外显示
  value: CheckboxValueType; // 真实值
  disabled?: boolean;
};

export type CheckboxGroupProps = {
  defaultValue?: Array<CheckboxValueType>; // 组内默认选中的选项，会与Checkbox的value值做匹配
  value?: Array<CheckboxValueType>; // 当前选中的值，支持多个
  vertical?: boolean; // 组内 checkbox 布局
  disabled?: boolean; // 整组失效
  options?: Array<CheckboxOptionType | string>; // 指定可选项
  onChange?: (optionValue: Array<CheckboxValueType>) => void; // 变化时回调函数
} & NativeProps;

export const Group = ({ defaultValue, vertical = false, disabled = false, options = [], onChange, children, ...restProps }: CheckboxGroupProps) => {
  const [value, setValue] = React.useState<CheckboxValueType[]>(restProps.value || defaultValue || []);

  React.useEffect(() => {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);

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

  const handleChange = (optionValue: CheckboxValueType) => {
    const index = value.indexOf(optionValue);
    const newValue = [...value];
    if (index === -1) {
      newValue.push(optionValue);
    } else {
      newValue.splice(index, 1);
    }
    setValue(newValue);
    const opts = getOptions();
    onChange?.(
      newValue.sort((a, b) => {
        const indexA = opts.findIndex((opt) => opt.value === a);
        const indexB = opts.findIndex((opt) => opt.value === b);
        return indexA - indexB;
      }),
    );
  };

  const getItems = () => {
    return toArray(children).map((child: React.ReactElement, index: number) => {
      const key = child.props.value || String(index);
      const checked = value.includes(key);

      const childProps = {
        key,
        checked,
        onChange: () => handleChange(key),
      };
      return React.cloneElement(child, childProps);
    });
  };

  const wrapperClass = classNames('', getDisabledCls(disabled));

  return (
    <>
      <Space className={wrapperClass} vertical={vertical}>
        {options.length
          ? getOptions().map((option) => {
              return (
                <Checkbox key={option.value.toString()} checked={value.indexOf(option.value) !== -1} disabled={'disabled' in option ? option.disabled : disabled} onChange={() => handleChange(option.value)}>
                  {option.label}
                </Checkbox>
              );
            })
          : getItems()}
      </Space>
    </>
  );
};

Group.displayName = 'Checkbox.Group';
