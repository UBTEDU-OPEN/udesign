import React, { useState, useImperativeHandle, forwardRef, CSSProperties, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ClockCircleOutlined, CloseCircleFilled } from '@ubt/udesign-icons';
import dayjs from 'dayjs';
import Input from '../input';
import Dropdown from '../dropdown';
import PickerPanel from './picker-panel';
import { Placement } from '../../constants';
import { NativeProps } from '../../utils';
import { isValidateTime } from './util';

type InputType = 'start' | 'end';
type ValuesType = [string, string];

export type TimerProps = {
  placement?: Placement; // 弹出层的位置。默认值：bottomLeft
  onChange?: (dateString: [string, string]) => void; // 时间发生变化的回调。默认值：-
  defaultValue?: [string, string]; // 输入框默认值。默认值：-
  placeHolder?: [string, string]; // 输入框提示文字。默认值：-
  panelStyle?: CSSProperties; // 时间面板内联样式。默认值：-
  panelClassName?: string; // 时间面板样式类名。默认值：-
  showNow?: boolean; // 面板是否显示“此刻”按钮。默认值：false
  disabled?: boolean; // 是否禁用。默认值：-
  readonly?: boolean; // 是否只读。默认值：-
} & NativeProps;

const RangePicker = forwardRef((props: TimerProps, ref) => {
  let { defaultValue = ['', ''], placeHolder, placement = 'bottomLeft', showNow = false, style, className, disabled, readonly, ...resetProps } = props;
  // 输入框值
  let [inputValues, setInputValues] = useState<ValuesType>(defaultValue);
  // 列表选中值
  let [inputSelValue, setInputSelValue] = useState<ValuesType>(defaultValue);
  // 确认值
  let [selectedValue, setSelectedValue] = useState<ValuesType>(defaultValue);
  const [focusedType, setFocusedType] = useState<InputType>();
  // dropdown visible值
  let [visible, setVisible] = useState<boolean>(false);
  const dropdownRef = useRef<{ hide: () => void; show: () => void }>();
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const chosedRef = useRef<Set<string>>(new Set());
  const [hovering, setHovering] = useState<boolean>(false);

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

  const startInputChange = (e: string) => {
    let values: ValuesType = [...inputValues];
    values[0] = e;
    setInputValues(values);
    if (isValidateTime(e)) setInputSelValue(values);
  };

  const endInputChange = (e: string) => {
    let values: ValuesType = [...inputValues];
    values[1] = e;
    setInputValues(values);
    if (isValidateTime(e)) setInputSelValue(values);
  };

  const focusedHandler = (fType: InputType) => {
    setFocusedType(fType);
  };

  // dropdown显示隐藏回调
  const onVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };

  const changeInputValues = (time: string) => {
    const values: ValuesType = [...inputValues];
    if (focusedType === 'start') {
      values[0] = time;
    }
    if (focusedType === 'end') {
      values[1] = time;
    }
    return values;
  };

  const isAfter = (values: ValuesType) => {
    let flag = false;
    const now = dayjs().format('YYYY-MM-DD');
    if (values && values[0] && values[1]) {
      flag = dayjs(`${now} ${values[0]}`).isAfter(dayjs(`${now} ${values[1]}`));
    }
    return flag;
  };

  const tiemChange = () => {
    if (focusedType === 'start') {
      if (!chosedRef.current.has('end')) {
        endInputRef.current?.focus();
        chosedRef.current.add('start');
      } else {
        chosedRef.current.clear();
        hide();
      }
    } else if (focusedType === 'end') {
      if (!chosedRef.current.has('start')) {
        startInputRef.current?.focus();
        chosedRef.current.add('end');
      } else {
        chosedRef.current.clear();
        hide();
      }
    }
  };

  // 确定
  const onConfirm = () => {
    let values = inputSelValue;
    if (isAfter(values)) {
      values.reverse();
      setInputValues(values);
      setInputSelValue(values);
    }
    setSelectedValue(values);
    resetProps.onChange?.(values);
    setTimeout(() => {
      tiemChange();
    }, 0);
  };

  // 此刻
  const onNow = (time: string) => {
    const values = changeInputValues(time);
    if (isAfter(values)) {
      values.reverse();
    }
    setInputValues(values);
    setInputSelValue(values);
    setSelectedValue(values);
    resetProps.onChange?.(values);
    setTimeout(() => {
      tiemChange();
    }, 0);
  };

  // 选择
  const onSelect = (time: string) => {
    const values = changeInputValues(time);
    setInputValues(values);
    setInputSelValue(values);
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  // 清除
  const onClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const initValues: ValuesType = ['', ''];
    setInputValues(initValues);
    setInputSelValue(initValues);
    setSelectedValue(initValues);
    resetProps.onChange?.(initValues);
    hide();
  };

  useEffect(() => {
    // 隐藏时置已确认的值
    if (!visible) {
      setInputValues(selectedValue);
      setInputSelValue(selectedValue);
    }
  }, [visible]);

  const renderPicker = () => {
    return (
      <div
        className={classNames('ud-time-picker-range', disabled ? 'ud-time-picker-range-disabled' : readonly ? 'ud-time-picker-range-readonly' : 'ud-time-picker-range-normal', className)}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Input
          ref={startInputRef}
          value={inputValues[0]}
          onChange={startInputChange}
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
          value={inputValues[1]}
          onChange={endInputChange}
          onFocus={() => {
            focusedHandler('end');
          }}
          placeholder={placeHolder?.[1]}
          disabled={disabled}
          readOnly={readonly}
        />
        <div className='suffix-icon'>
          {hovering && inputSelValue && inputSelValue[0] && inputSelValue[1] ? (
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
      className='ud-time-picker-range-dropdown'
      content={<PickerPanel selValue={focusedType === 'end' ? inputSelValue[1] : inputSelValue[0]} onChange={onSelect} onConfirm={onConfirm} onNow={onNow} showNow={showNow} style={resetProps.panelStyle} className={resetProps.panelClassName}></PickerPanel>}
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
RangePicker.displayName = 'RangePicker';

export default RangePicker;
