import React, { useState, createRef, useImperativeHandle, forwardRef, CSSProperties, ReactNode, useEffect } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import Input from '../../input';
import PickerPanel, { PickerPanelBaseProps } from '../panels/picker-panel';
import Dropdown from '../../dropdown';
import { DateFormat, TimeFormat, Placement } from '../../../constants';

export type PickerProps = PickerPanelBaseProps & {
  picker?: 'date'; // 设置选择器类型。默认值：date
  format?: string; // 展示的日期格式，配置参考 dayjs。默认值：YYYY-MM-DD
  placement?: Placement; // 弹出层的位置。默认值：top
  onChange?: (dateString: string) => void; // 日期发生变化的回调。默认值：-
  defaultValue?: string; // 输入框默认值。默认值：-
  placeHolder?: string; // 输入框提示文字。默认值：-
  panelStyle?: CSSProperties; // 日期面板内联样式。默认值：-
  panelClassName?: string; // 日期面板样式类名。默认值：-
  children?: ReactNode;
  showTime?: boolean; // 是否显示时间。默认值：-
  showNow?: boolean; // 当设定了 showTime 的时候，面板是否显示“此刻”按钮。默认值：-
};

const Picker = forwardRef((props: PickerProps, ref) => {
  let { format, defaultValue = '', placeHolder, placement = 'top', style, className, panelClassName, panelStyle, children, ...resetProps } = props;
  let [inputValue, setInputValue] = useState<string>(defaultValue);
  let [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const dropdownRef = createRef<{ hide: () => void; show: () => void }>();

  useEffect(() => {
    if (!format) {
      format = resetProps.showTime ? `${DateFormat} ${TimeFormat}` : DateFormat;
    }
  });

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
    resetProps.onChange?.(dateStr);
  };

  const inputChange = (e: string) => {
    setInputValue(e);
  };

  const inputBlur = () => {
    if (inputValue) {
      if (dayjs(inputValue).format(format) === inputValue) {
        setSelectedValue(inputValue);
        resetProps.onChange?.(inputValue);
      } else {
        setInputValue(selectedValue);
      }
    } else {
      setInputValue(selectedValue);
      setSelectedValue(selectedValue);
      resetProps.onChange?.(selectedValue);
    }
  };

  const onClear = () => {
    setInputValue('');
    setSelectedValue('');
    resetProps.onChange?.('');
    hide();
  };

  useImperativeHandle(ref, () => ({
    hide,
    show,
  }));

  return (
    <div className={classNames('ud-date-picker', className)} style={style}>
      <Dropdown
        className='ud-date-picker-dropdown'
        content={<PickerPanel {...resetProps} className={panelClassName} style={panelStyle} onChange={dateChange} defaultValue={selectedValue} viewDate={selectedValue}></PickerPanel>}
        trigger='click'
        placement={placement}
        ref={dropdownRef}
      >
        {children || <Input value={inputValue} onChange={inputChange} onBlur={inputBlur} placeholder={placeHolder} showClear={true} onClear={onClear} />}
      </Dropdown>
    </div>
  );
});
Picker.displayName = 'DatePicker';

export default Picker;
