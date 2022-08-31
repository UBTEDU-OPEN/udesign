import React, { useContext, ReactNode, useRef, useEffect } from 'react';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { SelectContext } from './context';
import { OptionItem } from './types';
import Input from '../input';

export type SingleBarProps = {
  searchValue: string; // 搜索框输入的值
  setSearchValue: (value: string) => void; // 设置searchValue 方法
  visible?: boolean; // 是否展开列表
  showSearch?: boolean; // 是否显示搜索框
  options?: OptionItem[]; // 下拉列表options
  innerDefaultValue?: string[] | number[]; // 默认选中的value
  placeholder?: string; // 选择框默认文本
  onClick?: (e: MouseEvent) => void;
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-select`;

export const SingleBar = ({ searchValue = '', setSearchValue, visible, showSearch, options = [], innerDefaultValue = [], placeholder, onClick }: SingleBarProps) => {
  const context = useContext(SelectContext);
  const searchRef = useRef<HTMLInputElement>(null);
  const getSingleLabel = (value: string | number, options: OptionItem[] = []) => {
    let label: ReactNode = '';
    options?.forEach((item: OptionItem) => {
      if (item.value === value) {
        label = item.label || '';
      }
    });
    return label;
  };

  useEffect(() => {
    if (visible && showSearch) {
      searchRef.current?.focus();
    }
  }, [visible]);

  useEffect(() => {
    if (context?.autoFocus) {
      searchRef.current?.focus();
    }
  }, []);
  return (
    <React.Fragment>
      {visible && showSearch ? (
        <Input
          ref={searchRef}
          className={`${prefixCls}-search`}
          value={searchValue}
          type='text'
          onChange={(val: string) => {
            context.onChange && context?.onChange(val);
            setSearchValue(val);
          }}
        />
      ) : (
        <div className={`${prefixCls}-single-text`}>
          <div className={`${prefixCls}-single-text-content`}>{getSingleLabel((context.value || [])[0], options) || getSingleLabel(innerDefaultValue[0], options) || <div className={`${prefixCls}-single-placeholder`}>{placeholder}</div>}</div>
        </div>
      )}
    </React.Fragment>
  );
};
