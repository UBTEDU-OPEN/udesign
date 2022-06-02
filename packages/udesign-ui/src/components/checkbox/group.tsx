import React, { useEffect, useReducer } from 'react';
import classNames from 'classnames';
import { Checkbox } from './checkbox';
import { CheckboxContext, reducer, types } from './context';

export type CheckboxOptionType = {
  label: string; // 对外显示
  value: string; // 真实值
  disabled?: boolean;
};

export interface GroupProps {
  defaultValue?: string[]; // 默认选中的值
  value?: string[]; // 用于设置当前选中的值
  disabled?: boolean; // 禁选所有子单选器
  children?: React.ReactElement; // 子组件
  options?: Array<CheckboxOptionType | string>; // 以配置形式设置子元素
  name: string; // CheckboxGroup 下所有 input[type="radio"] 的 name 属性
  onChange?: (checkedValue: string[]) => void; // 选项变化时的回调函数  function(checkedValue)
}

const prefixCls = 'ud-checkbox';

export const Group = ({ defaultValue = [], disabled, options, children, name, onChange, ...restProps }: GroupProps) => {
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

  const wrapperClass = classNames(`${prefixCls}-wrapper`);
  const initialState = { value: restProps.value || [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: types.UPDATE_VALUE,
      payload: {
        value: restProps.value || [],
      },
    });
  }, [restProps.value]);

  return (
    <CheckboxContext.Provider value={{ value: state.value, name, onChange, dispatch }}>
      <div className={wrapperClass}>
        {children ||
          getOptions()?.map((option: CheckboxOptionType) => {
            const radioProps =
              'value' in restProps
                ? {
                    checked: state.value.includes(option.value),
                  }
                : {};
            return (
              <Checkbox value={option.value} key={option.value.toString()} defaultChecked={defaultValue.includes(option.value)} disabled={'disabled' in option ? option.disabled : disabled} {...radioProps}>
                {option.label}
              </Checkbox>
            );
          })}
      </div>
    </CheckboxContext.Provider>
  );
};

Group.displayName = 'Checkbox.Group';
