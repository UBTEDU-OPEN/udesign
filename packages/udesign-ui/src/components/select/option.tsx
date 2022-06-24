import React, { useState, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { SelectContext, types } from './context';
import { IconApplyTick } from './icon-apply-tick';

export type OptionProps = {
  value?: string; // 默认根据此属性值进行筛选
  label?: string; // 显示内容
  disabled?: boolean; // 是否禁用
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-select-item`;

export const Option = ({ label, disabled, className, children, style, value }: OptionProps) => {
  const context = useContext(SelectContext);
  const [innerChecked, setInnerChecked] = useState<boolean>(context.defaultValue?.includes(value || '') || false);
  const getResult = () => {
    let result: string[] = context.value || [];
    if (context.mode === 'multiple') {
      if (innerChecked) {
        result = (context.value || []).filter((item: any) => item !== value);
      } else {
        result = value ? [...(context.value || []), value] : context.value || [];
      }
    } else if (!innerChecked) {
      result = value ? [value] : [];
    }
    return result;
  };

  let cls = classNames(prefixCls, className, {
    [`${prefixCls}-active`]: innerChecked,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-single`]: context.mode !== 'multiple',
    [`${prefixCls}-multi`]: context.mode === 'multiple',
  });

  const handleClick = () => {
    if (!disabled) {
      context.onChange && context.onChange(getResult() || '');
      // 选中时更新value值
      if (context.dispatch) {
        context.dispatch({
          type: types.UPDATE_VALUE,
          payload: {
            value: getResult(),
          },
        });
      }
      if (!innerChecked && context.mode !== 'multiple') {
        if (context.setVisible) {
          context.setVisible(false);
        }
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
    if (context.value && value) {
      setInnerChecked(context.value.includes(value));
    }
  }, [context.value]);

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

          {innerChecked ? <IconApplyTick /> : null}
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