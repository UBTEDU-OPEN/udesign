import React, { useContext, ReactNode, useRef, useEffect } from 'react';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { SelectContext } from './context';
import { OptionItem } from './types';

export type SingleBarProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  visible?: boolean;
  showSearch?: boolean;
  options?: OptionItem[];
  innerDefaultValue?: string[];
} & NativeProps;

export type CustomTagProps = {
  label?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  onClose?: (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  closable?: boolean;
};

const prefixCls = `${BASE_CLASS_PREFIX}-select`;

export const SingleBar = ({ searchValue = '', setSearchValue, visible, showSearch, options = [], innerDefaultValue = [] }: SingleBarProps) => {
  const context = useContext(SelectContext);
  const searchRef = useRef<HTMLElement>(null);
  const getSingleLabel = (value: string, options: OptionItem[] = []) => {
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
  return (
    <React.Fragment>
      {visible && showSearch ? (
        <div className={`${prefixCls}-single-text`}>
          <input
            ref={searchRef}
            className={`${prefixCls}-search`}
            value={searchValue}
            type='text'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setSearchValue(value);
            }}
          />
        </div>
      ) : (
        <div className={`${prefixCls}-single-text`}>{getSingleLabel(context.value[0], options) || getSingleLabel(innerDefaultValue[0], options)}</div>
      )}
    </React.Fragment>
  );
};
