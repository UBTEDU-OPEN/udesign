import React, { useReducer, useEffect, useState, useRef, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Option } from './option';
import { BASE_CLASS_PREFIX, Size } from '../../constants';
import { IconArrowDown } from './icon-arrow-down';
import { IconArrowUp } from './icon-arrow-up';
import { IconDelete } from './icon-delete';
import { IconSearch } from './icon-search';
import { SelectContext, reducer, types } from './context';
import { OptionItem } from './types';
import { MultiBar } from './multi-bar';
import { SingleBar } from './single-bar';

export type CustomTagProps = {
  label?: React.ReactNode; // tag 显示内容
  value?: string; // tag value
  disabled?: boolean; // 是否禁用
  onClose?: (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement, MouseEvent>) => void; // 关闭回调
  closeable?: boolean; // 是否显示关闭按钮
};

export type SelectProps = {
  options?: OptionItem[]; // 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能
  size?: Size; // 选择框大小
  onChange?: (value: string | string[]) => void; // 选中 option，调用此函数
  value?: string | string[]; // 指定当前选中的条目，多选时为一个数组。
  defaultValue?: string | string[]; // 指定默认选中的条目
  disabled?: boolean; // 是否禁用
  mode?: 'multiple'; // 设置 Select 的模式为多选
  children?: any;
  allowClear?: boolean; // 支持清除
  status?: 'error' | 'warning'; // 设置校验状态
  tagRender?: (CustomTagProps: CustomTagProps) => ReactNode; // 自定义 tag 内容 render，仅在 mode 为 multiple时生效
  maxTagCount?: number; // 最多显示多少个 tag，
  showSearch?: boolean; // 使单选模式可搜索
  filterOption?: (searchValue: string, option: OptionItem) => boolean; // 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false
  placeholder?: string; // 选择框默认文本
  autoFocus?: boolean; // todo
  clearIcon?: ReactNode; // todo
  listHeight?: number; // todo
  loading?: boolean; // todo
  maxTagPlaceholder?: string; // todo
  maxTagTextLength?: number; // todo
  notFoundContent?: ReactNode; // todo
  open?: boolean; // todo
  placement?: string; // todo
  onClear?: () => void; // todo
  onSelect?: () => void; // todo
  onDropdownVisibleChange?: () => void; // todo
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-select`;

export const Select = ({ children, className, style, size, value, onChange, disabled, defaultValue, mode, allowClear, status, tagRender, maxTagCount, showSearch = false, filterOption, placeholder, ...restProps }: SelectProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );
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
  const triggerRef = useRef<HTMLDivElement>(null);
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

  const getWidthStyle = () => {
    if (style?.width) {
      return { width: style.width };
    }
    return {};
  };

  const renderOptions = () => {
    const defaultFilterOption = (searchValue: string, OptionItem: OptionItem) => (searchValue ? OptionItem?.value?.includes(searchValue) : true);
    const fn = filterOption || defaultFilterOption;
    return (
      <div className={listWrapper} style={getWidthStyle()}>
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
    document.addEventListener('click', clickOutsideHandler, true);

    return () => {
      document.removeEventListener('click', clickOutsideHandler, true);
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
        <div className={`${prefixCls}-wrapper`} style={getWidthStyle()} ref={triggerRef}>
          <div className={cls} onClick={handleClick} style={updateStyle()} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className={`${prefixCls}-arrow`}>{renderIcon()}</div>
            {mode !== 'multiple' ? (
              <SingleBar searchValue={searchValue} setSearchValue={setSearchValue} visible={visible} showSearch={showSearch} options={getOptions()} innerDefaultValue={innerDefaultValue} placeholder={placeholder} />
            ) : (
              <MultiBar searchValue={searchValue} setSearchValue={setSearchValue} visible={visible} maxTagCount={maxTagCount} selectedList={selectedList} tagRender={tagRender} handleClose={handleClose} placeholder={placeholder} />
            )}
          </div>
          {visible ? renderOptions() : null}
        </div>
      </SelectContext.Provider>
    </>
  );
};

Select.displayName = 'Select';
