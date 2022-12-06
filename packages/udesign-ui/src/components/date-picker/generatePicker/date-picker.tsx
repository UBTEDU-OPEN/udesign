import React, { useState, createRef, useImperativeHandle, forwardRef, CSSProperties, ReactNode, useEffect } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { DateOutline, CloseCircleFilled } from '@ubt/udesign-icons';
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
  showTody?: boolean; // 日期面板是否显示“今天”按钮。当showTime设置为true时,该属性设置不生效。默认值：-
  disabled?: boolean; // 是否禁用。默认值：-
  readonly?: boolean; // 是否只读。默认值：-
};

const Picker = forwardRef((props: PickerProps, ref) => {
  let { format, defaultValue = '', placeHolder, placement = 'top', style, className, panelClassName, panelStyle, children, disabled, readonly, ...resetProps } = props;
  let [inputValue, setInputValue] = useState<string>(defaultValue);
  let [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [hovering, setHovering] = useState<boolean>(false);
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

  const onClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInputValue('');
    setSelectedValue('');
    resetProps.onChange?.('');
    hide();
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  useImperativeHandle(ref, () => ({
    hide,
    show,
  }));

  const renderDatePicker = () => {
    return (
      children || (
        <div className={classNames('ud-date-picker', disabled ? 'ud-date-picker-disabled' : readonly ? 'ud-date-picker-readonly' : 'ud-date-picker-normal', className)} style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Input className='picker-input' value={inputValue} onChange={inputChange} onBlur={inputBlur} placeholder={placeHolder} disabled={disabled} readOnly={readonly} />
          <div className='suffix-icon'>
            {hovering && inputValue ? (
              <label onClick={onClear}>
                <CloseCircleFilled className='clear-icon' />
              </label>
            ) : (
              <DateOutline size='middle' />
            )}
          </div>
        </div>
      )
    );
  };

  return disabled || readonly ? (
    <>{renderDatePicker()}</>
  ) : (
    <Dropdown
      className='ud-date-picker-dropdown'
      content={
        <div className='ud-date-picker-panel'>
          <PickerPanel {...resetProps} className={panelClassName} style={panelStyle} onChange={dateChange} defaultValue={selectedValue} viewDate={selectedValue}></PickerPanel>
        </div>
      }
      trigger='click'
      placement={placement}
      ref={dropdownRef}
    >
      {renderDatePicker()}
    </Dropdown>
  );
});
Picker.displayName = 'DatePicker';

export default Picker;
