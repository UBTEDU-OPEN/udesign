import React, { useContext, useEffect, useState, ReactNode } from 'react';
import classNames from 'classnames';
import { RadioFilled, RadioOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { RadioContext, types } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type RadioChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type RadioChangeEventHandler = (checked: boolean, event: RadioChangeEventType) => void;
export type RadioClickEventHandler = RadioChangeEventHandler;

export type RadioProps = {
  checked?: boolean; // 指定当前是否选中。默认值：false
  defaultChecked?: boolean; // 初始是否选中。默认值：false
  disabled?: boolean; // 禁用 Radio。默认值：false
  value?: string; // 根据 value 进行比较，判断是否选中。默认值：-
  label?: string; // 单选框显示文字。默认值：-
  checkedIcon?: ReactNode; // 选中状态下的图标。默认值：<RadioLight />
  uncheckedIcon?: ReactNode; // 未选中状态下的图标。默认值：<RadioNormal />
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-radio`;

export const Radio = ({ defaultChecked = false, disabled, checkedIcon = <RadioFilled />, uncheckedIcon = <RadioOutlined />, className, style, children, value, label, ...restProps }: RadioProps) => {
  const checked = 'checked' in restProps ? restProps.checked : defaultChecked;
  const [innerChecked, setInnerChecked] = useState<boolean>(checked!);
  const context = useContext(RadioContext);

  function handleClick() {
    if (!disabled) {
      setInnerChecked(true);
      // 更新value值
      if (context.dispatch) {
        context.dispatch({
          type: types.UPDATE_VALUE,
          payload: {
            value,
          },
        });
      }
    }
  }
  useEffect(() => {
    if (context.value && value) {
      setInnerChecked(context.value === value);
    }
  }, [context.value]);

  useEffect(() => {
    if ('checked' in restProps) {
      setInnerChecked(restProps.checked!);
    }
  }, [restProps.checked]);

  const renderCheckedIcon = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-unchecked`]: true });
    return !disabled && !innerChecked && <span className={cls}>{uncheckedIcon}</span>;
  };
  const renderUncheckedIcon = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-checked`]: true });
    return !disabled && innerChecked && <span className={cls}>{checkedIcon}</span>;
  };
  const renderCheckedIconDisabled = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-unchecked-disabled`]: true });
    return disabled && !innerChecked && <span className={cls}>{uncheckedIcon}</span>;
  };
  const renderUncheckedIconDisabled = () => {
    const cls = classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-checked-disabled`]: true });
    return disabled && innerChecked && <span className={cls}>{checkedIcon}</span>;
  };

  const cls = classNames(prefixCls, className);

  return (
    <>
      <label className={cls} style={style}>
        <input
          name={context.name}
          type='radio'
          className={`${prefixCls}-hidden`}
          checked={innerChecked}
          value={value}
          disabled={disabled}
          onClick={handleClick}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (context.onChange) {
              context.onChange(event);
            }
          }}
        />
        {renderCheckedIcon()}
        {renderUncheckedIcon()}
        {/* {disabled && !innerChecked && <RadioNormalDisabled />} */}
        {renderCheckedIconDisabled()}
        {/* {disabled && innerChecked && <RadioLightDisabled />} */}
        {renderUncheckedIconDisabled()}
        {children || label ? (
          <span className={classNames(`${prefixCls}-text`, disabled ? `${prefixCls}-text-disabled` : '')} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
            {children || label}
          </span>
        ) : null}
      </label>
    </>
  );
};

Radio.displayName = 'Radio';
