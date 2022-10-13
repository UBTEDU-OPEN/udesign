import React, { createRef, useEffect, useRef } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Button from '../button';
import { TimeFormat } from '../../constants';
import { NativeProps } from '../../utils';

// 时|分|秒
type ColType = 'H' | 'm' | 's';

export type TimerProps = {
  selValue?: string; // 默认值：-
  showNow?: boolean;
  onChange?: (dateString: string) => void; // 选择回调
  onConfirm?: () => void; // 确认回调
  onNow?: (dateString: string) => void; // 此刻回调
  showFooter?: boolean;
} & NativeProps;

const PickerPanel = (props: TimerProps) => {
  let { selValue = '', showNow, style, className, showFooter = true, ...resetProps } = props;
  const hourRef = createRef<HTMLUListElement>();
  const minuteRef = createRef<HTMLUListElement>();
  const secondRef = createRef<HTMLUListElement>();
  const behavior = useRef<ScrollBehavior>('auto');
  // 列点击事件
  const colClick = (colValue: string, type: ColType) => {
    let valArr = (selValue || '00:00:00').split(':');
    switch (type) {
      case 'H':
        valArr[0] = colValue;
        break;
      case 'm':
        valArr[1] = colValue;
        break;
      case 's':
        valArr[2] = colValue;
        break;
      default:
    }
    let time = valArr.join(':');
    behavior.current = 'smooth';
    resetProps.onChange?.(time);
  };

  // 此刻
  const onNow = () => {
    const time = dayjs().format(TimeFormat);
    resetProps.onNow?.(time);
  };

  // 确定
  const onConfirm = () => {
    resetProps.onConfirm?.();
  };

  useEffect(() => {
    const valArr = selValue?.split(':') || [];
    // 选中的时间滚动到顶部
    [hourRef, minuteRef, secondRef].forEach((item, idx) => {
      if (item.current && valArr[idx] && valArr[idx].length === 2) item.current.scrollTo({ top: Number(valArr[idx] || 0) * 28, behavior: behavior.current });
    });
  }, [selValue]);

  // 时间列渲染
  const renderCols = (size: number, type: ColType) => {
    let sel;
    if (selValue) {
      let valArr = selValue.split(':');
      switch (type) {
        case 'H':
          sel = valArr[0];
          break;
        case 'm':
          sel = valArr[1];
          break;
        case 's':
          sel = valArr[2];
          break;
        default:
      }
    }
    let list = [];
    for (let i = 0; i < size; i++) {
      let colVal = i < 10 ? `0${i}` : i.toString();
      list.push(
        <li
          key={i}
          onClick={(e) => {
            e.stopPropagation();
            colClick(colVal, type);
          }}
          className={sel && sel === colVal ? 'selected' : ''}
        >
          {colVal}
        </li>,
      );
    }
    return list;
  };

  return (
    <div className={classNames('ud-time-picker-panel', className)} style={style}>
      <div className='time-box'>
        <ul ref={hourRef}>{renderCols(24, 'H')}</ul>
        <ul ref={minuteRef}>{renderCols(60, 'm')}</ul>
        <ul ref={secondRef}>{renderCols(60, 's')}</ul>
      </div>
      {showFooter && (
        <div className='btn-box'>
          <Button onClick={onConfirm} className='confirm' type='primary' size='small' disabled={!selValue}>
            确定
          </Button>
          {showNow && (
            <label className='now' onClick={onNow}>
              此刻
            </label>
          )}
        </div>
      )}
    </div>
  );
};

export default PickerPanel;
