import React, { useEffect, useState, createRef, useRef, useImperativeHandle, CSSProperties } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import Input from '../../input';
import PickerPanel, { PickerPanelBaseProps } from '../panels/picker-panel';
import Dropdown from '../../dropdown';
import PanelContext from './panel-context';
import { DateFormat, Placement } from '../../../constants';
import { addMonth, addYear } from '../../../utils/moment';

export type RangePickerBaseProps = PickerPanelBaseProps & {
  picker?: 'date'; // 设置选择器类型。默认值：date
  format?: string; // 展示的日期格式，配置参考 dayjs。默认值：YYYY-MM-DD
  placement?: Placement; // 弹出层的位置。默认值：top
  onSelect?: (dateString: [string, string]) => void; // 日期发生变化的回调。默认值：-
  defaultValue?: [string, string]; // 输入框默认值。默认值：-
  placeHolder?: [string, string]; // 输入框提示文字。默认值：-
  panelStyle?: CSSProperties; // 日期面板内联样式。默认值：-
  panelClassName?: string; // 日期面板样式类名。默认值：-
};

export type InputType = 'start' | 'end';

const RangePicker = React.forwardRef((props: RangePickerBaseProps, ref) => {
  const { format = DateFormat, defaultValue, onSelect, placeHolder, placement = 'top', style, className, panelClassName, panelStyle, ...resetProps } = props;
  const [startInputVal, setStartInputVal] = useState<string>();
  const [endInputVal, setEndInputVal] = useState<string>();
  const [selectedValue, setSelectedValue] = useState<[string, string]>();
  const [focusedType, setFocusedInput] = useState<InputType>();
  const [viewDate, setViewDate] = useState<[string, string]>();
  const startInputRef = createRef<HTMLInputElement>();
  const endInputRef = createRef<HTMLInputElement>();
  const dropdownRef = createRef<{ hide: () => void; show: () => void }>();
  const chosedRef = useRef<Set<string>>(new Set());

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
      selDateValue = [dateStr, endInputVal || ''];
      setStartInputVal(dateStr);
      setSelectedValue(selDateValue);
      if (!chosedRef.current.has('end')) {
        endInputRef.current?.focus();
        chosedRef.current.add('start');
      } else {
        chosedRef.current.clear();
        hide();
      }
    } else if (focusedType === 'end') {
      selDateValue = [startInputVal || '', dateStr];
      setEndInputVal(dateStr);
      setSelectedValue(selDateValue);
      if (!chosedRef.current.has('start')) {
        startInputRef.current?.focus();
        chosedRef.current.add('end');
      } else {
        chosedRef.current.clear();
        hide();
      }
    }
    onSelect?.(selDateValue);
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
        onSelect?.([startInputVal, endInputVal || '']);
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
        onSelect?.([startInputVal || '', endInputVal]);
      } else {
        setEndInputVal(selectedValue?.[1]);
      }
    } else {
      setEndInputVal(selectedValue?.[1]);
    }
  };

  const focusedHandler = (fType: InputType) => {
    setFocusedInput(fType);
    if (fType === 'start') {
      let view1 = selectedValue?.[0] || dayjs().format(format);
      setViewDate([view1, addMonth(view1)]);
    } else if (fType === 'end') {
      let view1 = selectedValue?.[1] || dayjs().format(format);
      if (selectedValue?.[1] && dayjs(selectedValue?.[1]).isAfter(selectedValue?.[0], 'M')) {
        setViewDate([addMonth(view1, -1), view1]);
      } else {
        setViewDate([view1, addMonth(view1)]);
      }
    }
  };

  const onViewDateChange = (isYear: boolean, diff: number) => {
    if (viewDate) {
      if (isYear) {
        setViewDate([addYear(viewDate[0], diff), addYear(viewDate[1], diff)]);
      } else {
        setViewDate([addMonth(viewDate[0], diff), addMonth(viewDate[1], diff)]);
      }
    }
  };

  const renderPanel = () => {
    let obj: { [key: string]: any } = {
      ...resetProps,
      onSelect: dateChange,
      onViewDateChange,
      className: panelClassName,
      style: panelStyle,
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

    return (
      <div className='ud-date-picker-range-panel'>
        {leftPanel}
        {rightPanel}
      </div>
    );
  };

  useImperativeHandle(ref, () => ({
    hide,
    show,
  }));

  return (
    <div>
      <Dropdown content={renderPanel()} trigger='click' placement={placement} className='ud-date-picker-range-dropdown' ref={dropdownRef}>
        <div className={classNames('ud-date-picker-range', className)} style={style}>
          <Input
            ref={startInputRef}
            value={startInputVal}
            onChange={startInputChange}
            onBlur={startInputBlur}
            onFocus={() => {
              focusedHandler('start');
            }}
            placeholder={placeHolder?.[0]}
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
          />
        </div>
      </Dropdown>
    </div>
  );
});

RangePicker.displayName = 'RangePicker';

export default RangePicker;
