import React, { isValidElement, ReactNode, useEffect, useReducer } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { Radio } from './radio';
import { RadioContext } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type RadioOptionType = {
  label: string; // 对外显示
  value: string; // 真实值
  disabled?: boolean;
  icon?: ReactNode; // 自定义图标。
};

export type GroupProps = {
  defaultValue?: string; // 默认选中的值。默认值：''
  value?: string; // 用于设置当前选中的值。
  disabled?: boolean; // 禁选所有子单选器。默认值：false
  options?: Array<RadioOptionType | string>; // 以配置形式设置子元素。
  name: string; // RadioGroup 下所有 input[type="radio"] 的 name 属性。
  onChange?: (event: React.MouseEvent<HTMLInputElement>) => void; // 选项变化时的回调函数。
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-radio`;

export const Group = ({ defaultValue = '', disabled, options, children, name, className, style, ...restProps }: GroupProps) => {
  // 用于支持简单的数组作为options
  const getOptions = () => {
    if (!options) return [];
    return options?.map((option: RadioOptionType | string) => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  };

  const [value, setValue] = usePropsValue({
    value: restProps.value,
    defaultValue,
  });

  const wrapperClass = classNames(`${prefixCls}-wrapper`, className);

  const renderChildren = () => {
    if (children) return isValidElement(children) ? children : <>{children}</>;
    return getOptions()?.map((option: RadioOptionType) => {
      const radioProps =
        'value' in restProps
          ? {
              checked: value === option.value,
            }
          : {};
      return (
        <Radio value={option.value} icon={option.icon} key={option.value.toString()} defaultChecked={defaultValue === option.value} disabled={'disabled' in option ? option.disabled : disabled} checked={value === option.value}>
          {option.label}
        </Radio>
      );
    });
  };

  const onChange = (val: string, e: React.MouseEvent<HTMLInputElement>) => {
    setValue(val);
    restProps.onChange?.(e);
  };

  return (
    <RadioContext.Provider value={{ name, disabled, value, onChange }}>
      <div className={wrapperClass} style={style}>
        {renderChildren()}
      </div>
    </RadioContext.Provider>
  );
};

Group.displayName = 'Radio.Group';
