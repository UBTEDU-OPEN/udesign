import React, { useContext, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { SelectContext } from './context';
import { OptionItem } from './types';
import Tag from '../tag';

export type MultiBarProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  maxTagCount?: number;
  selectedList: OptionItem[];
  tagRender?: (CustomTagProps: CustomTagProps) => ReactNode;
  handleClose: (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement>) => void;
} & NativeProps;

export type CustomTagProps = {
  label?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  onClose?: (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  closable?: boolean;
};

const prefixCls = `${BASE_CLASS_PREFIX}-select`;

export const MultiBar = ({ searchValue = '', setSearchValue, maxTagCount, selectedList, tagRender, handleClose }: MultiBarProps) => {
  const context = useContext(SelectContext);
  const defautTagRender = (CustomTagProps: CustomTagProps) => (
    <Tag closeable={!context.disabled} onClose={handleClose} value={CustomTagProps.value} color={context.disabled ? '#F5F5F5' : '#EEF0FC'} textColor={context.disabled ? '#D4D4DA' : '#000'}>
      {CustomTagProps.label}
    </Tag>
  );

  return (
    <>
      <div className={`${prefixCls}-multi-box`}>
        <div
          className={classNames({
            [`${prefixCls}-multi-selected`]: true,
            [`${prefixCls}-multi-selected-disabled`]: context.disabled,
          })}
        >
          {maxTagCount && selectedList.slice(0, maxTagCount).map((item: OptionItem) => <React.Fragment key={item.value}>{tagRender ? tagRender({ onClose: handleClose, ...item }) : defautTagRender({ onClose: handleClose, ...item })}</React.Fragment>)}
          {!maxTagCount && selectedList.map((item: OptionItem) => <React.Fragment key={item.value}>{tagRender ? tagRender({ onClose: handleClose, ...item }) : defautTagRender({ onClose: handleClose, ...item })}</React.Fragment>)}
          {maxTagCount && selectedList.length > maxTagCount ? <Tag>+ {selectedList.length - maxTagCount}</Tag> : null}
        </div>

        {!context.disabled ? (
          <input
            className={classNames({
              [`${prefixCls}-search`]: true,
              [`${prefixCls}-search-disabled`]: context.disabled,
            })}
            value={searchValue}
            type='text'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setSearchValue(value);
            }}
          />
        ) : null}
      </div>
    </>
  );
};
