import React, { isValidElement, ReactNode, useEffect, useReducer } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Radio } from './radio';
import { RadioContext, reducer, types } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type RadioOptionType = {
  label: string; // 对外显示
  value: string; // 真实值
  disabled?: boolean;
  icon?: ReactNode; // 自定义图标。默认值：-
};

export type GroupProps = {
  defaultValue?: string; // 默认选中的值。默认值：''
  value?: string; // 用于设置当前选中的值。默认值：-
  disabled?: boolean; // 禁选所有子单选器。默认值：false
  options?: Array<RadioOptionType | string>; // 以配置形式设置子元素。默认值：-
  name: string; // RadioGroup 下所有 input[type="radio"] 的 name 属性。默认值：-
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 选项变化时的回调函数  function(e:Event)。默认值：-
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-radio`;

export const Group = ({ defaultValue = '', disabled, options, children, name, onChange, className, style, ...restProps }: GroupProps) => {
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

  const wrapperClass = classNames(`${prefixCls}-wrapper`, className);
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

  const renderChildren = () =>
    (isValidElement(children) ? children : <>{children}</>) ||
    getOptions()?.map((option: RadioOptionType) => {
      const radioProps =
        'value' in restProps
          ? {
              checked: restProps.value === option.value,
            }
          : {};
      return (
        <Radio value={option.value} icon={option.icon} key={option.value.toString()} defaultChecked={defaultValue === option.value} disabled={'disabled' in option ? option.disabled : disabled} {...radioProps}>
          {option.label}
        </Radio>
      );
    });

  return (
    <RadioContext.Provider value={{ value: state.value, name, disabled, onChange, dispatch }}>
      <div className={wrapperClass} style={style}>
        {renderChildren()}
      </div>
    </RadioContext.Provider>
  );
};

Group.displayName = 'Radio.Group';
