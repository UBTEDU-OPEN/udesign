import React, { ReactNode, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icon, RadioFilled, RadioOutlined } from '@ubt/udesign-icons';
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
  icon?: ReactNode; // 自定义图标。默认值：-
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 变化时回调函数。默认值：-
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-radio`;

export const Radio = ({ defaultChecked = false, disabled, icon, className, style, children, value, onChange, ...restProps }: RadioProps) => {
  const checked = 'checked' in restProps ? restProps.checked : defaultChecked;
  const [innerChecked, setInnerChecked] = useState<boolean>(checked!);
  const context = useContext(RadioContext);
  const isDisabled = disabled || context.disabled;
  function handleClick() {
    if (isDisabled) return;
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
  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    context.onChange?.(event);
  };
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

  const renderIcon = () => {
    const cls = classNames(
      `${prefixCls}-icon`,
      {
        [`${prefixCls}-icon-checked`]: innerChecked,
        [`${prefixCls}-icon-unchecked`]: !innerChecked,
      },
      `${prefixCls}-icon-disabled`,
    );
    return <span className={cls}>{icon || (!innerChecked ? <RadioOutlined /> : <RadioFilled />)}</span>;
  };

  const renderLabel = () => {
    const cls = classNames(`${prefixCls}-text`);
    return children ? <span className={cls}>{children}</span> : null;
  };

  const cls = classNames(prefixCls, { [`${prefixCls}-disabled`]: isDisabled }, className);

  return (
    <>
      <label className={cls} style={style}>
        <input name={context.name} type='radio' className={`${prefixCls}-hidden`} checked={innerChecked} value={value} disabled={disabled} onClick={handleClick} onChange={onChangeHandle} />
        {renderIcon()}
        {renderLabel()}
      </label>
    </>
  );
};

Radio.displayName = 'Radio';
