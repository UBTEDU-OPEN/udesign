import React, { useReducer, useEffect, useState, useRef, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Option } from './option';
import { BASE_CLASS_PREFIX, CommonSize } from '../../constants';
import { IconArrowDown } from './icon-arrow-down';
import { IconArrowUp } from './icon-arrow-up';
import { IconDelete } from './icon-delete';
import { IconSearch } from './icon-search';
import { SelectContext, reducer, types } from './context';
import { OptionItem } from './types';
import { MultiBar } from './multi-bar';
import { SingleBar } from './single-bar';

export type CustomTagProps = {
  label?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  onClose?: (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  closable?: boolean;
};

export type SelectProps = {
  options?: OptionItem[];
  size?: CommonSize;
  onChange?: (value: string | string[]) => void;
  value?: string | string[];
  defaultValue?: string | string[];
  disabled?: boolean;
  mode?: 'multiple';
  children?: any;
  allowClear?: boolean;
  status?: 'error' | 'warning';
  tagRender?: (CustomTagProps: CustomTagProps) => ReactNode;
  maxTagCount?: number;
  showSearch?: boolean;
  filterOption?: (searchValue: string, option: OptionItem) => void;
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-select`;

export const Select = ({ children, className, style, size, value, onChange, disabled, defaultValue, mode, allowClear, status, tagRender, maxTagCount, showSearch = false, filterOption, ...restProps }: SelectProps) => {
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-disabled`]: disabled,
  });
  const listWrapper = classNames(`${prefixCls}-list-wrapper`, {
    [`${prefixCls}-list-wrapper-${size}`]: size,
  });
  const formatValue = (value?: string | string[]) => {
    let result: string[] = [];
    if (Array.isArray(value)) {
      result = value;
    }
    if (typeof value === 'string') {
      result = [value];
    }
    return result;
  };

  const getOptions = () => {
    let result: OptionItem[] = [];
    if ('options' in restProps) {
      result = restProps.options || [];
    } else if (children) {
      if (Array.isArray(children)) {
        result = children.map((item: any) => ({ value: item.props.value, label: item.props.children || item.props.label }));
      } else {
        result = [{ value: children.props.value, label: children.props.children || children.props.label }];
      }
    }
    return result;
  };
  const triggerRef = useRef<HTMLElement>(null);
  const [showClear, setShowClear] = useState<boolean>(false);
  const [innerDefaultValue, setInnerDefaultValue] = useState<string[]>(formatValue(defaultValue));
  const initialState = { value: formatValue(value) };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [visible, setVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedList, setSelectedList] = useState<OptionItem[]>([]);
  const updateStyle = () => {
    let statusStyle = style;
    switch (status) {
      case 'error':
        statusStyle = { ...style, border: '1px solid #FF4940' };
        break;
      case 'warning':
        statusStyle = { ...style, border: '1px solid #FFAB10' };
        break;
      default:
        statusStyle = visible ? { ...style, border: '1px solid #7284FB' } : style;
        break;
    }
    return statusStyle;
  };

  const handleClick = () => {
    if (!disabled) {
      if (!(mode !== 'multiple' && showSearch && visible)) {
        setVisible(!visible);
      }
    }
  };
  const handleClose = (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement>) => {
    dispatch({
      type: types.UPDATE_VALUE,
      payload: {
        value: state.value.filter((item: string) => item !== data.value),
      },
    });
  };

  const handleEnter = () => {
    if (!disabled && allowClear && selectedList.length > 0) {
      setShowClear(true);
    }
  };

  const handleLeave = () => {
    if (allowClear) {
      setShowClear(false);
    }
  };

  const renderOptions = () => {
    const defaultFilterOption = (searchValue: string, OptionItem: OptionItem) => (searchValue ? OptionItem?.value?.includes(searchValue) : true);
    const fn = filterOption || defaultFilterOption;
    return (
      <div className={listWrapper} style={style}>
        {getOptions()
          ?.filter((item: OptionItem) => fn(searchValue, item))
          .map((item: OptionItem) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
      </div>
    );
  };

  const renderIcon = () => {
    if (mode !== 'multiple' && showSearch && visible) {
      return <IconSearch />;
    }

    if (showClear) {
      return (
        <IconDelete
          onClick={() => {
            dispatch({
              type: types.UPDATE_VALUE,
              payload: {
                value: [],
              },
            });
          }}
        />
      );
    }
    if (visible) {
      return <IconArrowUp />;
    }

    return <IconArrowDown />;
  };
  useEffect(() => {
    const clickOutsideHandler = (e: Event) => {
      if (!triggerRef.current?.contains(e.target as HTMLElement)) {
        setVisible(false);
      }
    };
    document.addEventListener('click', clickOutsideHandler, false);

    return () => {
      document.removeEventListener('click', clickOutsideHandler, false);
    };
  }, []);
  useEffect(() => {
    dispatch({
      type: types.UPDATE_VALUE,
      payload: {
        value: formatValue(value),
      },
    });
  }, [value]);
  useEffect(() => {
    dispatch({
      type: types.UPDATE_VALUE,
      payload: {
        value: formatValue(innerDefaultValue),
      },
    });
  }, [innerDefaultValue]);

  useEffect(() => {
    setSelectedList(getOptions().filter((item: OptionItem) => state.value.includes(item.value)));
  }, [state.value]);
  return (
    <>
      <SelectContext.Provider value={{ value: state.value, onChange, dispatch, defaultValue: innerDefaultValue, mode, setVisible, disabled }}>
        <div className={`${prefixCls}-wrapper`} style={style} ref={triggerRef}>
          <div className={cls} onClick={handleClick} style={updateStyle()} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className={`${prefixCls}-arrow`}>{renderIcon()}</div>
            {mode !== 'multiple' ? (
              <SingleBar searchValue={searchValue} setSearchValue={setSearchValue} visible={visible} showSearch={showSearch} options={getOptions()} innerDefaultValue={innerDefaultValue} />
            ) : (
              <MultiBar searchValue={searchValue} setSearchValue={setSearchValue} maxTagCount={maxTagCount} selectedList={selectedList} tagRender={tagRender} handleClose={handleClose} />
            )}
          </div>
          {visible ? renderOptions() : null}
        </div>
      </SelectContext.Provider>
    </>
  );
};

Select.displayName = 'Select';
