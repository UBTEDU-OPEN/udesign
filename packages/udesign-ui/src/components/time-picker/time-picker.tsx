import React, { useState, createRef, useImperativeHandle, forwardRef, CSSProperties, useEffect } from 'react';
import classNames from 'classnames';
import { ClockCircleOutlined, CloseCircleFilled } from '@ubt/udesign-icons';
import Input from '../input';
import Dropdown from '../dropdown';
import PickerPanel from './picker-panel';
import { Placement } from '../../constants';
import { NativeProps } from '../../utils';
import { isValidateTime } from './util';

export type TimerProps = {
  // format?: string; // 展示的时间格式，配置参考 dayjs。默认值：HH:mm:ss
  placement?: Placement; // 弹出层的位置。默认值：bottomLeft
  onChange?: (dateString: string) => void; // 时间发生变化的回调。默认值：-
  defaultValue?: string; // 输入框默认值。默认值：-
  placeHolder?: string; // 输入框提示文字。默认值：-
  panelStyle?: CSSProperties; // 时间面板内联样式。默认值：-
  panelClassName?: string; // 时间面板样式类名。默认值：-
  showNow?: boolean; // 面板是否显示“此刻”按钮。默认值：false
  disabled?: boolean; // 是否禁用。默认值：-
  readonly?: boolean; // 是否只读。默认值：-
} & NativeProps;

const TimePicker = forwardRef((props: TimerProps, ref) => {
  let { defaultValue = '', placeHolder, placement = 'bottomLeft', showNow = false, style, className, children, disabled, readonly, ...resetProps } = props;
  // 输入框值
  let [inputValue, setInputValue] = useState<string>(defaultValue);
  // 列表选中值
  let [inputSelValue, setInputSelValue] = useState<string>(defaultValue);
  // 确认值
  let [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [hovering, setHovering] = useState<boolean>(false);

  // dropdown visible值
  let [visible, setVisible] = useState<boolean>(false);
  const dropdownRef = createRef<{ hide: () => void; show: () => void }>();

  // 隐藏dropdown
  const hide = () => {
    dropdownRef.current?.hide();
  };

  // 显示dropdown
  const show = () => {
    dropdownRef.current?.show();
  };

  useImperativeHandle(ref, () => ({
    hide,
    show,
  }));

  // input onChange
  const inputChange = (e: string) => {
    setInputValue(e);
    if (isValidateTime(e)) setInputSelValue(e);
  };

  // dropdown显示隐藏回调
  const onVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };

  // 确定
  const onConfirm = () => {
    setSelectedValue(inputSelValue);
    resetProps.onChange?.(inputSelValue);
    hide();
  };

  // 此刻
  const onNow = (time: string) => {
    onSelect(time);
    setSelectedValue(time);
    resetProps.onChange?.(time);
    hide();
  };

  // 选择
  const onSelect = (time: string) => {
    setInputValue(time);
    setInputSelValue(time);
  };

  // 清除
  const onClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const value = '';
    setInputValue(value);
    setInputSelValue(value);
    setSelectedValue(value);
    resetProps.onChange?.(value);
    hide();
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  useEffect(() => {
    // 隐藏时置已确认的值
    if (!visible) {
      setInputValue(selectedValue);
      setInputSelValue(selectedValue);
    }
  }, [visible]);

  const renderPicker = () => {
    return (
      <div className={classNames('ud-time-picker', disabled ? 'ud-time-picker-disabled' : readonly ? 'ud-time-picker-readonly' : 'ud-time-picker-normal', className)} style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children || <Input className='picker-input' value={inputValue} onChange={inputChange} placeholder={placeHolder} disabled={disabled} readOnly={readonly} />}
        <div className='suffix-icon'>
          {hovering && inputValue ? (
            <label onClick={onClear}>
              <CloseCircleFilled className='clear-icon' />
            </label>
          ) : (
            <ClockCircleOutlined size='small' />
          )}
        </div>
      </div>
    );
  };

  return disabled || readonly ? (
    <>{renderPicker()}</>
  ) : (
    <Dropdown
      content={<PickerPanel selValue={inputSelValue} onChange={onSelect} onConfirm={onConfirm} onNow={onNow} showNow={showNow} style={resetProps.panelStyle} className={resetProps.panelClassName}></PickerPanel>}
      trigger='click'
      placement={placement}
      ref={dropdownRef}
      clickToHide={false}
      onVisibleChange={onVisibleChange}
    >
      {renderPicker()}
    </Dropdown>
  );
});
TimePicker.displayName = 'TimePicker';

export default TimePicker;
