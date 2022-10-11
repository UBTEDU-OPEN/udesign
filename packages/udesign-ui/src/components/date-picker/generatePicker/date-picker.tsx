import React, { useState, createRef, useImperativeHandle, forwardRef, CSSProperties, ReactNode } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import Input from '../../input';
import PickerPanel, { PickerPanelBaseProps } from '../panels/picker-panel';
import Dropdown from '../../dropdown';
import { DateFormat, Placement } from '../../../constants';

export type PickerProps = PickerPanelBaseProps & {
  picker?: 'date'; // 设置选择器类型。默认值：date
  format?: string; // 展示的日期格式，配置参考 dayjs。默认值：YYYY-MM-DD
  placement?: Placement; // 弹出层的位置。默认值：top
  onSelect?: (dateString: string) => void; // 日期发生变化的回调。默认值：-
  defaultValue?: string; // 输入框默认值。默认值：-
  placeHolder?: string; // 输入框提示文字。默认值：-
  panelStyle?: CSSProperties; // 日期面板内联样式。默认值：-
  panelClassName?: string; // 日期面板样式类名。默认值：-
  children?: ReactNode;
};

const Picker = forwardRef((props: PickerProps, ref) => {
  let { format = DateFormat, defaultValue = '', placeHolder, placement = 'top', style, className, panelClassName, panelStyle, children, ...resetProps } = props;
  let [inputValue, setInputValue] = useState<string>(defaultValue);
  let [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const dropdownRef = createRef<{ hide: () => void; show: () => void }>();

  const hide = () => {
    dropdownRef.current?.hide();
  };
  const show = () => {
    dropdownRef.current?.show();
  };

  const dateChange = (e: string) => {
    let dateStr = e;
    dateStr = dayjs(e).format(format);
    setInputValue(dateStr);
    setSelectedValue(dateStr);
    hide();
    resetProps.onSelect?.(dateStr);
  };

  const inputChange = (e: string) => {
    setInputValue(e);
  };

  const inputBlur = () => {
    if (inputValue) {
      if (dayjs(inputValue).format(format) === inputValue) {
        setSelectedValue(inputValue);
        resetProps.onSelect?.(inputValue);
      } else {
        setInputValue(selectedValue);
      }
    } else {
      setInputValue(selectedValue);
      setSelectedValue(selectedValue);
      resetProps.onSelect?.(selectedValue);
    }
  };

  const onClear = () => {
    setInputValue('');
    setSelectedValue('');
    resetProps.onSelect?.('');
    hide();
  };

  useImperativeHandle(ref, () => ({
    hide,
    show,
  }));

  return (
    <div className={classNames('ud-date-picker', className)} style={style}>
      <Dropdown content={<PickerPanel {...resetProps} className={panelClassName} style={panelStyle} onSelect={dateChange} defaultValue={selectedValue} viewDate={selectedValue}></PickerPanel>} trigger='click' placement={placement} ref={dropdownRef}>
        {children || <Input value={inputValue} onChange={inputChange} onBlur={inputBlur} placeholder={placeHolder} showClear={true} onClear={onClear} />}
      </Dropdown>
    </div>
  );
});
Picker.displayName = 'DatePicker';

export default Picker;
