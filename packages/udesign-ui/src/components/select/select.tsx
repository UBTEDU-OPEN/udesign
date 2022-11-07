import React, { useReducer, useEffect, useState, useRef, ReactNode } from 'react';
import classNames from 'classnames';
import { DownOutlined, SearchOutlined } from '@ubt/udesign-icons';
import { isArray } from 'lodash';
import { NativeProps, usePropsValue } from '../../utils';
import Tooltip from '../tooltip';
import { Option } from './option';
import { BASE_CLASS_PREFIX, Size, Trigger } from '../../constants';
import { SelectContext, reducer, types } from './context';
import { OptionItem } from './types';
import { MultiBar } from './multi-bar';
import { SingleBar } from './single-bar';
import Close from '../close';

export type CustomTagProps = {
  label?: React.ReactNode | string; // tag 显示内容。默认值：-
  value?: string | number; // tag value。默认值：-
  disabled?: boolean; // 是否禁用。默认值：false
  onClose?: (data: { value: string; label: ReactNode | string }, event: React.MouseEvent<HTMLElement, MouseEvent>) => void; // 关闭时回调。默认值：-
  closeable?: boolean; // 是否显示关闭按钮。默认值：false
};

export type SelectProps = {
  options?: OptionItem[]; // 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能。默认值：-
  size?: Size; // 选择框大小。默认值：middle
  arrowIcon?: ReactNode; // 自定义右侧下拉箭头Icon，当showClear开关打开且当前有选中值时，hover会优先显示clear icon
  onChange?: (value: string | number | any[] | undefined) => void; // 选中 option，调用此函数。默认值：-
  value?: string | number | any[] | undefined; // 指定当前选中的条目，多选时为一个数组。默认值：-
  defaultValue?: string | number | any[] | undefined; // 指定默认选中的条目。默认值：-
  disabled?: boolean; // 是否禁用。默认值：false
  mode?: 'multiple'; // 设置 Select 的模式为多选。默认值：-
  children?: any;
  allowClear?: boolean; // 支持清除。默认值：false
  status?: 'error' | 'warning'; // 设置校验状态。默认值：-
  tagRender?: (CustomTagProps: CustomTagProps) => ReactNode; // 自定义 tag 内容 render，仅在 mode 为 multiple时生效。默认值：-
  maxTagCount?: number; // 最多显示多少个 tag，。默认值：-
  showSearch?: boolean; // 使单选模式可搜索。默认值：false
  filterOption?: (searchValue: string, option: OptionItem) => boolean; // 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。默认值：-
  placeholder?: string; // 选择框默认文本。默认值：-
  clearIcon?: ReactNode; // 清除的图标(hover时显示)。默认值：<Close />
  autoFocus?: boolean; // 初始渲染时是否自动 focus。默认值：false
  placement?: 'top' | 'bottom'; // 改变下拉菜单出现的位置。默认值：'bottom'
  onClear?: () => void; // 清除内容时回调
  onSelect?: (value: string | number | OptionItem) => void; // 被选中时调用，参数为选中项的 value (或 key) 值
  // onDropdownVisibleChange?: () => void; // todo
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-select`;

export const Select = ({
  children,
  className,
  style,
  size = 'middle',
  disabled,
  mode,
  allowClear,
  status,
  tagRender,
  maxTagCount,
  showSearch = false,
  filterOption,
  onSelect,
  onClear,
  autoFocus,
  clearIcon = <Close size='small' />,
  placeholder,
  placement = 'bottom',
  ...restProps
}: SelectProps) => {
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

  const formatValue = (value?: string | number | any[]) => {
    let result: any[] = [];
    if (Array.isArray(value)) {
      result = value;
    }
    if (typeof value === 'string') {
      result = [value];
    }
    if (typeof value === 'number') {
      result = [value];
    }
    return result;
  };
  const onChange = (e: string | number | any[]) => {
    if (mode) {
      restProps.onChange?.(e);
    } else {
      isArray(e) && restProps.onChange?.(e[0]);
    }
  };
  const [active, setActive] = usePropsValue({
    value: restProps.value ? formatValue(restProps.value) : undefined,
    defaultValue: formatValue(restProps.defaultValue),
    onChange,
  });

  const getOptions = () => {
    let result: OptionItem[] = [];
    if ('options' in restProps) {
      result = restProps.options || [];
    } else if (children) {
      if (Array.isArray(children)) {
        result = children.map((item: any) => ({ value: item.props.value, label: item.props.children || item.props.label, disabled: item.props.disabled }));
      } else {
        result = [{ value: children.props.value, label: children.props.children || children.props.label, disabled: children.props.disabled }];
      }
    }
    return result;
  };

  const triggerRef = useRef<HTMLDivElement>(null);
  const [showClear, setShowClear] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
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

  useEffect(() => {
    if (autoFocus) setVisible(!visible);
  }, []);

  const handleClose = (data: { value: string | number; label: ReactNode | string }, event: React.MouseEvent<HTMLElement>) => {
    setActive(active.filter((item: string) => item !== data.value));
  };

  const handleEnter = () => {
    if (!disabled && allowClear && active.length > 0) {
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
    const defaultFilterOption = (searchValue: string | number, OptionItem: OptionItem) => {
      let result: boolean;

      if (searchValue && typeof searchValue === 'string') {
        result = typeof OptionItem?.value === 'string' && OptionItem?.value?.includes(searchValue);
      } else if (searchValue && typeof searchValue === 'number') {
        result = typeof OptionItem?.value === 'number' && OptionItem?.value === searchValue;
      } else return true;
      return result;
    };
    const fn = filterOption || defaultFilterOption;
    return (
      <div
        className={listWrapper}
        style={getWidthStyle()}
        onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
          event.preventDefault();
        }}
      >
        {getOptions()
          ?.filter((item: OptionItem) => fn(searchValue, item))
          .map((item: OptionItem) => (
            <Option key={item.value} value={item.value} {...item}>
              {item.label}
            </Option>
          ))}
      </div>
    );
  };

  //  右侧图标
  const renderIcon = () => {
    const iconCls = classNames(`${prefixCls}-arrow`, {
      [`${prefixCls}-icon-${size}`]: size,
    });

    let icon: ReactNode = <DownOutlined />;

    if (mode !== 'multiple' && showSearch && visible) {
      icon = <SearchOutlined />;
    }

    const clearClick = () => {
      if (disabled) return;
      setActive(mode ? formatValue([]) : formatValue(''));
      onClear?.();
    };

    if (showClear) {
      return (
        <div className={iconCls} onClick={clearClick}>
          {clearIcon}
        </div>
      );
    }

    if (disabled) {
      icon = <DownOutlined style={{ color: '#D4D4DA' }} />;
    }

    return <div className={iconCls}>{icon}</div>;
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

  const renderSelect = () => (
    <div className={cls} onClick={handleClick} style={updateStyle()} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {renderIcon()}
      {mode !== 'multiple' ? (
        <SingleBar searchValue={searchValue} visible={visible} setSearchValue={setSearchValue} showSearch={showSearch} options={getOptions()} active={active} placeholder={placeholder} />
      ) : (
        <MultiBar
          searchValue={searchValue}
          visible={visible}
          setSearchValue={setSearchValue}
          maxTagCount={maxTagCount}
          selectedList={getOptions().filter((item: OptionItem) => active.includes(item.value))}
          tagRender={tagRender}
          handleClose={handleClose}
          placeholder={placeholder}
        />
      )}
    </div>
  );

  //  选中值
  const click = (val: any) => {
    let newSet = new Set<any[]>(active);
    if (mode === 'multiple') {
      if (newSet.has(val)) {
        newSet.delete(val);
      } else newSet.add(val);
      setActive([...newSet]);
    } else setActive([val]);
  };
  return (
    <>
      <SelectContext.Provider value={{ active, mode, setVisible, disabled, onSelect, autoFocus, click }}>
        <div className={`${prefixCls}-wrapper`} style={getWidthStyle()} ref={triggerRef}>
          {disabled ? (
            renderSelect()
          ) : (
            <Tooltip
              prefixCls={`${prefixCls}-tooltip`}
              content={renderOptions()}
              placement={placement}
              showArrow={false}
              className={`${prefixCls}-inner`}
              trigger={`${showSearch ? 'focus' : 'click'}` as Trigger}
              clickToHide
              onVisibleChange={(e) => {
                setVisible(e);
              }}
            >
              {renderSelect()}
            </Tooltip>
          )}
        </div>
      </SelectContext.Provider>
    </>
  );
};

Select.displayName = 'Select';
