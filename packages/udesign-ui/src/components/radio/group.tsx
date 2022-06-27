import React, { useEffect, useReducer } from 'react';
import classNames from 'classnames';
import { Radio } from './radio';
import { RadioContext, reducer, types } from './context';

export type RadioOptionType = {
  label: string; // 对外显示
  value: string; // 真实值
  disabled?: boolean;
};

export interface GroupProps {
  defaultValue?: string; // 默认选中的值
  value?: string; // 用于设置当前选中的值
  disabled?: boolean; // 禁选所有子单选器
  children?: React.ReactElement; // 子组件
  options?: Array<RadioOptionType | string>; // 以配置形式设置子元素
  name: string; // RadioGroup 下所有 input[type="radio"] 的 name 属性
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 选项变化时的回调函数  function(e:Event)
}

const prefixCls = 'ud-radio';

export const Group = ({ defaultValue = '', disabled, options, children, name, onChange, ...restProps }: GroupProps) => {
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

  const wrapperClass = classNames(`${prefixCls}-wrapper`);
  const initialState = { value: restProps.value };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: types.UPDATE_VALUE,
      payload: {
        value: restProps.value || defaultValue,
      },
    });
  }, [restProps.value, defaultValue]);

  return (
    <RadioContext.Provider value={{ value: state.value, name, onChange, dispatch }}>
      <div className={wrapperClass}>
        {children ||
          getOptions()?.map((option: RadioOptionType) => {
            const radioProps =
              'value' in restProps
                ? {
                    checked: restProps.value === option.value,
                  }
                : {};
            return (
              <Radio value={option.value} key={option.value.toString()} defaultChecked={defaultValue === option.value} disabled={'disabled' in option ? option.disabled : disabled} {...radioProps}>
                {option.label}
              </Radio>
            );
          })}
      </div>
    </RadioContext.Provider>
  );
};

Group.displayName = 'Radio.Group';
