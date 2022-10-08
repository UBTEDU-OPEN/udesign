import React, { useEffect, useReducer, useState, isValidElement, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Checkbox } from './checkbox';
import { CheckboxContext, reducer, types } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type CheckboxOptionType = {
  label: string; // 对外显示。默认值：-
  value: string; // 真实值。默认值：-
  disabled?: boolean; // 是否禁用。默认值：false
  icon?: ReactNode; // 自定义图标。默认值：-
};

export type GroupProps = {
  defaultValue?: string[]; // 默认选中的值。默认值：[]
  value?: string[]; // 用于设置当前选中的值。默认值：-
  disabled?: boolean; // 禁选所有子多选器。默认值：false
  options?: Array<CheckboxOptionType | string>; // 以配置形式设置子元素。默认值：-
  name: string; // CheckboxGroup 下所有 input[type="radio"] 的 name 属性。默认值：-

  onChange?: (checkedValue: string[]) => void; // 选项变化时的回调函数  function(checkedValue)。默认值：-
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-checkbox`;

export const Group = ({ defaultValue = [], disabled, options, children, name, style, className, onChange, ...restProps }: GroupProps) => {
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
  const initialState = { value: restProps.value || [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [innerDefaultValue, setInnerDefaultValue] = useState<string[]>(defaultValue!);
  useEffect(() => {
    dispatch({
      type: types.UPDATE_VALUE,
      payload: {
        value: restProps.value && Array.isArray(restProps.value) && restProps.value.length > 0 ? restProps.value : [],
      },
    });
  }, [restProps.value]);
  useEffect(() => {
    dispatch({
      type: types.UPDATE_VALUE,
      payload: {
        value: innerDefaultValue && Array.isArray(innerDefaultValue) && innerDefaultValue.length > 0 ? innerDefaultValue : [],
      },
    });
  }, [innerDefaultValue]);

  const renderChildren = () =>
    (isValidElement(children) ? children : <>{children}</>) ||
    getOptions()?.map((option: CheckboxOptionType) => {
      const radioProps =
        'value' in restProps
          ? {
              checked: state.value.includes(option.value),
            }
          : {};
      return (
        <Checkbox value={option.value} icon={option.icon} key={option.value.toString()} defaultChecked={defaultValue.includes(option.value)} disabled={'disabled' in option ? option.disabled : disabled} {...radioProps}>
          {option.label}
        </Checkbox>
      );
    });

  return (
    <CheckboxContext.Provider value={{ value: state.value, name, onChange, dispatch, disabled }}>
      <div className={wrapperClass} style={style}>
        {renderChildren()}
      </div>
    </CheckboxContext.Provider>
  );
};

Group.displayName = 'Checkbox.Group';
