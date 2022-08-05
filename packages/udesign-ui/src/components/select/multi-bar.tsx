import React, { useContext, ReactNode, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { SelectContext } from './context';
import { OptionItem } from './types';
import Tag from '../tag';

export type MultiBarProps = {
  searchValue: string; // 搜索框输入的值。默认值：''
  setSearchValue: (value: string) => void; // 设置searchValue 方法。默认值：-
  maxTagCount?: number; // 最大展示的tag数。默认值：-
  selectedList: OptionItem[]; // 选中列表。默认值：-
  tagRender?: (CustomTagProps: CustomTagProps) => ReactNode; // 自定义tag 方法。默认值：-
  handleClose?: (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement>) => void; // tag 关闭的回调函数。默认值：-
  placeholder?: string; // 选择框默认文本。默认值：-
  visible?: boolean; // 是否展开列表。默认值：false
} & NativeProps;

export type CustomTagProps = {
  label?: React.ReactNode; // tag 显示内容。默认值：
  value?: string; // tag 对应value。默认值：
  disabled?: boolean; // 是否禁用。默认值：
  onClose?: (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement, MouseEvent>) => void; // 关闭回调。默认值：
  closeable?: boolean; // 是否显示关闭按钮。默认值：
};

const prefixCls = `${BASE_CLASS_PREFIX}-select`;

export const MultiBar = ({ searchValue = '', setSearchValue, maxTagCount, selectedList, tagRender, handleClose, placeholder, visible }: MultiBarProps) => {
  const context = useContext(SelectContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const defautTagRender = (CustomTagProps: CustomTagProps) => (
    <Tag
      closeable={!context.disabled}
      onClose={handleClose}
      value={CustomTagProps.value}
      color={context.disabled ? '#F5F5F5' : '#EEF0FC'}
      textColor={context.disabled ? '#D4D4DA' : '#000'}
      style={{ border: context.disabled ? '1px solid #DDE8F5' : 'none' }}
    >
      {CustomTagProps.label}
    </Tag>
  );

  const renderBar = () => {
    if (selectedList.length === 0 && !visible) return <div className={`${prefixCls}-multi-placeholder`}>{placeholder}</div>;
    if (maxTagCount) {
      return (
        <React.Fragment>
          {selectedList.slice(0, maxTagCount).map((item: OptionItem) => (
            <React.Fragment key={item.value}>{tagRender ? tagRender({ onClose: handleClose, ...item }) : defautTagRender({ onClose: handleClose, ...item })}</React.Fragment>
          ))}
          {selectedList.length > maxTagCount ? <Tag>+ {selectedList.length - maxTagCount}</Tag> : null}
        </React.Fragment>
      );
    }
    return selectedList.map((item: OptionItem) => <React.Fragment key={item.value}>{tagRender ? tagRender({ onClose: handleClose, ...item }) : defautTagRender({ onClose: handleClose, ...item })}</React.Fragment>);
  };

  useEffect(() => {
    visible && inputRef.current?.focus();
  }, [visible]);

  return (
    <>
      <div className={`${prefixCls}-multi-box`}>
        <div
          className={classNames({
            [`${prefixCls}-multi-selected`]: true,
            [`${prefixCls}-multi-selected-disabled`]: context.disabled,
          })}
        >
          {renderBar()}
        </div>

        {!context.disabled ? (
          <input
            className={classNames({
              [`${prefixCls}-search`]: true,
              [`${prefixCls}-search-disabled`]: context.disabled,
            })}
            value={searchValue}
            type='text'
            ref={inputRef}
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
