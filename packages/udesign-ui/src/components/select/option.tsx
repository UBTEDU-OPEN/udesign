import React, { useState, useContext, useEffect, ReactNode } from 'react';
import classNames from 'classnames';
import { CheckOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { SelectContext, types } from './context';

export type OptionProps = {
  value?: string | number; // 默认根据此属性值进行筛选
  label?: ReactNode | string; // 显示内容
  disabled?: boolean; // 是否禁用
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-select-item`;

export const Option = ({ label, disabled = false, className, children, style, value }: OptionProps) => {
  const context = useContext(SelectContext);
  const [innerChecked, setInnerChecked] = useState<boolean>(context.active?.includes(value || '') || false);

  let cls = classNames(prefixCls, className, {
    [`${prefixCls}-active`]: innerChecked,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-single`]: context.mode !== 'multiple',
    [`${prefixCls}-multi`]: context.mode === 'multiple',
  });

  const handleClick = () => {
    if (!disabled) {
      const options = { value, label, disabled };
      context.onSelect && context.onSelect(options);
      // 选中时更新value值
      context.click?.(value);

      if (!innerChecked && context.mode !== 'multiple' && context.setVisible) {
        context.setVisible(false);
      }
    }
  };

  useEffect(() => {
    cls = classNames(className, {
      [`${prefixCls}-active`]: innerChecked,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-single`]: context.mode !== 'multiple',
      [`${prefixCls}-multi`]: context.mode === 'multiple',
    });
  }, [innerChecked]);

  useEffect(() => {
    if (context.active && value) {
      setInnerChecked(context.active.includes(value));
    }
  }, [context.active]);

  return (
    <>
      {context.mode === 'multiple' ? (
        <div className={cls} style={style} onClick={handleClick}>
          <div
            className={classNames({
              [`${prefixCls}-multi-text`]: true,
            })}
          >
            {label || children}
          </div>

          {innerChecked ? <CheckOutlined /> : null}
        </div>
      ) : (
        <div className={cls} style={style} onClick={handleClick}>
          {label || children}
        </div>
      )}
    </>
  );
};

Option.displayName = 'Select.Option';
