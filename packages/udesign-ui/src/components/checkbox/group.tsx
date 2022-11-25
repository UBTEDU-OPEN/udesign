import React, { isValidElement, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { Checkbox } from './checkbox';
import { CheckboxContext } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type CheckboxOptionType = {
  label: string; // 对外显示。
  value: string; // 真实值。
  disabled?: boolean; // 是否禁用。默认值：false
  icon?: ReactNode; // 自定义图标。
};

export type GroupProps = {
  defaultValue?: string[]; // 默认选中的值。默认值：[]
  value?: string[]; // 用于设置当前选中的值。
  disabled?: boolean; // 禁选所有子多选器。默认值：false
  options?: Array<CheckboxOptionType | string>; // 以配置形式设置子元素。
  name: string; // CheckboxGroup 下所有 input[type="radio"] 的 name 属性。
  onChange?: (checkedValue: string[]) => void; // 选项变化时的回调函数。
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-checkbox`;

export const Group = (props: GroupProps) => {
  const { defaultValue = [], disabled, options, children, name, style, className } = props;
  // 用于支持简单的数组作为options
  const getOptions = () => {
    if (!options) return [];
    return options?.map((option: CheckboxOptionType | string) => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  };

  const wrapperClass = classNames(`${prefixCls}-wrapper`, className);

  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue,
    onChange: props.onChange,
  });

  const renderChildren = () => {
    if (children) return isValidElement(children) ? children : <>{children}</>;
    return getOptions()?.map((option: CheckboxOptionType) => {
      const radioProps =
        'value' in props
          ? {
              checked: value.includes(option.value),
            }
          : {};
      return (
        <Checkbox value={option.value} icon={option.icon} key={option.value.toString()} defaultChecked={value.includes(option.value)} disabled={'disabled' in option ? option.disabled : disabled} {...radioProps}>
          {option.label}
        </Checkbox>
      );
    });
  };

  const onChange = (e: string[]) => {
    setValue(e);
  };

  return (
    <CheckboxContext.Provider value={{ value, name, onChange, disabled }}>
      <div className={wrapperClass} style={style}>
        {renderChildren()}
      </div>
    </CheckboxContext.Provider>
  );
};

Group.displayName = 'Checkbox.Group';
