import React, { useEffect, useState, useRef, useImperativeHandle, CSSProperties } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { CloseCircleFilled, DateOutline } from '@ubt/udesign-icons';
import Input from '../../input';
import PickerPanel, { PickerPanelBaseProps } from '../panels/picker-panel';
import Dropdown from '../../dropdown';
import PanelContext from './panel-context';
import { DateFormat, Placement, TimeFormat } from '../../../constants';
import { addMonth, addYear } from '../../../utils/moment';

export type RangePickerBaseProps = PickerPanelBaseProps & {
  picker?: 'date'; // 设置选择器类型。默认值：date
  format?: string; // 展示的日期格式，配置参考 dayjs。默认值：YYYY-MM-DD
  placement?: Placement; // 弹出层的位置。默认值：top
  onChange?: (dateString: [string, string]) => void; // 日期发生变化的回调。默认值：-
  defaultValue?: [string, string]; // 输入框默认值。默认值：-
  placeHolder?: [string, string]; // 输入框提示文字。默认值：-
  panelStyle?: CSSProperties; // 日期面板内联样式。默认值：-
  panelClassName?: string; // 日期面板样式类名。默认值：-
  showTime?: boolean; // 是否显示时间。默认值：-
  showNow?: boolean; // 当设定了 showTime 的时候，面板是否显示“此刻”按钮。默认值：-
  disabled?: boolean; // 是否禁用。默认值：-
  readonly?: boolean; // 是否只读。默认值：-
};

export type InputType = 'start' | 'end';

const RangePicker = React.forwardRef((props: RangePickerBaseProps, ref) => {
  let { format, defaultValue, onChange, placeHolder, placement = 'top', style, className, panelClassName, panelStyle, disabled, readonly, ...resetProps } = props;
  const [startInputVal, setStartInputVal] = useState<string>();
  const [endInputVal, setEndInputVal] = useState<string>();
  const [selectedValue, setSelectedValue] = useState<[string, string]>();
  const [focusedType, setFocusedType] = useState<InputType>();
  const [viewDate, setViewDate] = useState<[string, string]>();
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<{ hide: () => void; show: () => void }>();
  const chosedRef = useRef<Set<string>>(new Set());
  const [hovering, setHovering] = useState<boolean>(false);

  useEffect(() => {
    if (!format) {
      if (resetProps.showTime) {
        format = `${DateFormat} ${TimeFormat}`;
      } else {
        format = DateFormat;
      }
    }
  });
  useEffect(() => {
    if (defaultValue) {
      setStartInputVal(defaultValue[0]);
      setEndInputVal(defaultValue[1]);
      setSelectedValue(defaultValue);
    }
  }, [defaultValue]);

  const hide = () => {
    dropdownRef.current?.hide();
  };
  const show = () => {
    dropdownRef.current?.show();
  };

  const dateChange = (e: string) => {
    let dateStr = e;
    let selDateValue: [string, string] = ['', ''];
    dateStr = dayjs(e).format(format);
    if (focusedType === 'start') {
      if (endInputVal) {
        if (dayjs(dateStr).isAfter(dayjs(endInputVal))) {
          selDateValue = [endInputVal, dateStr];
          setEndInputVal(dateStr);
        } else {
          selDateValue = [dateStr, endInputVal];
        }
      } else {
        selDateValue = [dateStr, ''];
      }
      setStartInputVal(selDateValue[0]);
      setSelectedValue(selDateValue);
      setTimeout(() => {
        if (!chosedRef.current.has('end')) {
          endInputRef.current?.focus();
          chosedRef.current.add('start');
        } else {
          chosedRef.current.clear();
          hide();
        }
      }, 0);
    } else if (focusedType === 'end') {
      if (startInputVal) {
        if (dayjs(dateStr).isBefore(dayjs(startInputVal))) {
          selDateValue = [dateStr, startInputVal];
          setStartInputVal(dateStr);
        } else {
          selDateValue = [startInputVal, dateStr];
        }
      } else {
        selDateValue = ['', dateStr];
      }
      setEndInputVal(selDateValue[1]);
      setSelectedValue(selDateValue);
      setTimeout(() => {
        if (!chosedRef.current.has('start')) {
          startInputRef.current?.focus();
          chosedRef.current.add('end');
        } else {
          chosedRef.current.clear();
          hide();
        }
      }, 0);
    }
    onChange?.(selDateValue);
  };

  const startInputChange = (e: string) => {
    setStartInputVal(e);
  };

  const endInputChange = (e: string) => {
    setEndInputVal(e);
  };

  const startInputBlur = () => {
    if (startInputVal) {
      if (dayjs(startInputVal).format(format) === startInputVal) {
        setSelectedValue([startInputVal, endInputVal || '']);
        onChange?.([startInputVal, endInputVal || '']);
      } else {
        setStartInputVal(selectedValue?.[0]);
      }
    } else {
      setStartInputVal(selectedValue?.[0]);
    }
  };

  const endInputBlur = () => {
    if (endInputVal) {
      if (dayjs(endInputVal).format(format) === endInputVal) {
        setSelectedValue([startInputVal || '', endInputVal]);
        onChange?.([startInputVal || '', endInputVal]);
      } else {
        setEndInputVal(selectedValue?.[1]);
      }
    } else {
      setEndInputVal(selectedValue?.[1]);
    }
  };

  const focusedHandler = (fType: InputType) => {
    setFocusedType(fType);
    if (!resetProps.showTime) {
      if (fType === 'start') {
        let view1 = selectedValue?.[0] || dayjs().format(format);
        setViewDate([view1, addMonth(view1, 1, format)]);
      } else if (fType === 'end') {
        let view1 = selectedValue?.[1] || dayjs().format(format);
        if (selectedValue?.[1] && dayjs(selectedValue?.[1]).isAfter(selectedValue?.[0], 'M')) {
          setViewDate([addMonth(view1, -1, format), view1]);
        } else {
          setViewDate([view1, addMonth(view1, 1, format)]);
        }
      }
    }
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const onClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartInputVal('');
    setEndInputVal('');
    setSelectedValue(['', '']);
    onChange?.(['', '']);
    hide();
  };

  const onViewDateChange = (isYear: boolean, diff: number) => {
    if (viewDate) {
      if (isYear) {
        setViewDate([addYear(viewDate[0], diff, format), addYear(viewDate[1], diff)]);
      } else {
        setViewDate([addMonth(viewDate[0], diff, format), addMonth(viewDate[1], diff, format)]);
      }
    }
  };

  useImperativeHandle(ref, () => ({
    hide,
    show,
  }));

  const renderPanel = () => {
    let obj: { [key: string]: any } = {
      ...resetProps,
      onChange: dateChange,
    };
    if (focusedType === 'start') {
      obj.defaultValue = selectedValue?.[0];
      if (selectedValue?.[1]) {
        obj.endValue = selectedValue?.[1];
      }
    } else {
      obj.defaultValue = selectedValue?.[1];
      if (selectedValue?.[0]) {
        obj.beginValue = selectedValue?.[0];
      }
    }
    let panelContent;
    // date-time
    if (resetProps.showTime) {
      panelContent = <PickerPanel {...obj} viewDate={focusedType === 'start' ? selectedValue?.[0] : selectedValue?.[1]}></PickerPanel>;
    } else {
      obj.onViewDateChange = onViewDateChange;
      const leftPanel = (
        <PanelContext.Provider value={{ hideNext: true }}>
          <PickerPanel {...obj} viewDate={viewDate?.[0]}></PickerPanel>
        </PanelContext.Provider>
      );
      const rightPanel = (
        <PanelContext.Provider value={{ hidePrev: true }}>
          <PickerPanel {...obj} viewDate={viewDate?.[1]}></PickerPanel>
        </PanelContext.Provider>
      );
      panelContent = (
        <>
          {leftPanel}
          {rightPanel}
        </>
      );
    }
    return (
      <div className={classNames('ud-date-picker-range-panel', panelClassName)} style={panelStyle}>
        {panelContent}
      </div>
    );
  };

  const renderPicker = () => {
    return (
      <div className={classNames('ud-date-picker-range', disabled ? 'ud-date-picker-range-disabled' : readonly ? '' : 'ud-date-picker-range-normal', className)} style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Input
          ref={startInputRef}
          value={startInputVal}
          onChange={startInputChange}
          onBlur={startInputBlur}
          onFocus={() => {
            focusedHandler('start');
          }}
          placeholder={placeHolder?.[0]}
          disabled={disabled}
          readOnly={readonly}
        />
        ~
        <Input
          ref={endInputRef}
          value={endInputVal}
          onChange={endInputChange}
          onBlur={endInputBlur}
          onFocus={() => {
            focusedHandler('end');
          }}
          placeholder={placeHolder?.[1]}
          disabled={disabled}
          readOnly={readonly}
        />
        <div className='suffix-icon'>
          {hovering && startInputVal && endInputVal ? (
            <label onClick={onClear}>
              <CloseCircleFilled className='clear-icon' />{' '}
            </label>
          ) : (
            <DateOutline size='middle' />
          )}
        </div>
      </div>
    );
  };

  return disabled || readonly ? (
    <>{renderPicker()}</>
  ) : (
    <Dropdown content={renderPanel()} trigger='click' placement={placement} className='ud-date-picker-range-dropdown' ref={dropdownRef} clickToHide={false}>
      {renderPicker()}
    </Dropdown>
  );
});

RangePicker.displayName = 'RangePicker';

export default RangePicker;
