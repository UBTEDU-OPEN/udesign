import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { BASE_CLASS_PREFIX, DateFormat } from '../../../../constants';
import { ShowDateType, MonthType } from '../../../../utils/moment';
import './index.scss';

const prefixCls = `${BASE_CLASS_PREFIX}-date-panel`;

export type DatePanelProps = {
  defaultValue?: string; // 指定日期。默认值：-
  onChange?: (dates: string, diff: number) => void; // 切换日期时的回调。默认值：-
  nowDate?: string;
  cells: Array<string>;
  rows: Array<ShowDateType>;
  beginValue?: string; // 最早日期
  endValue?: string; // 最晚日期
};

const DateBody = ({ defaultValue, onChange, rows, nowDate, cells, beginValue, endValue }: DatePanelProps) => {
  const [selectedValue, setSelectedValue] = useState<string>();

  useEffect(() => {
    if (defaultValue) {
      let date = dayjs(defaultValue).format(DateFormat);
      setSelectedValue(date);
    } else {
      setSelectedValue('');
    }
  }, [defaultValue]);

  const handleClick = (nowValue: string, type: MonthType) => {
    setSelectedValue(nowValue);
    let diff = 0;
    if (type === 'last') {
      diff = -1;
    } else if (type === 'next') {
      diff = 1;
    }
    onChange?.(nowValue, diff);
  };

  const renderWeekBox = () => (
    <div className={`${prefixCls}-week-box`}>
      {cells.map((item: string) => (
        <div className={`${prefixCls}-week-days`} key={`week-${item}`}>
          {item}
        </div>
      ))}
    </div>
  );
  const renderDays = () => (
    <div className={`${prefixCls}-date-box`}>
      {rows.map((item: ShowDateType) => {
        const nowValue = dayjs(item.date).format(DateFormat);
        const isSelected = item.type === 'now' && selectedValue === nowValue;
        let disabled = false;
        let isRange = false; // 是否是开始和结束范围内日期
        let isBegin = false;
        let isEnd = false;
        // 开始日期
        if (beginValue) {
          let begin = dayjs(beginValue).format(DateFormat);
          if (dayjs(begin).isAfter(item.date)) disabled = true;
          if (selectedValue && item.type === 'now') {
            if (dayjs(item.date).isAfter(beginValue) && dayjs(item.date).isBefore(selectedValue)) isRange = true;
          }
          isBegin = item.type === 'now' && nowValue === begin;
        }
        // 结束日期
        if (endValue) {
          let end = dayjs(endValue).format(DateFormat);
          if (dayjs(end).isBefore(item.date)) disabled = true;
          if (selectedValue && item.type === 'now') {
            if (dayjs(item.date).isAfter(selectedValue) && dayjs(item.date).isBefore(endValue)) isRange = true;
          }
          isEnd = item.type === 'now' && nowValue === end;
        }
        return (
          <div
            className={`${`${prefixCls}-month-days`} ${item.type === 'now' && item.date ? 'now-month-days' : 'other-month-days'} ${disabled ? 'disabled-month-days' : ''} ${
              selectedValue && (isBegin || (endValue && isSelected)) ? 'range-day-selected-start' : ''
            }  ${selectedValue && (isEnd || (beginValue && isSelected)) ? 'range-day-selected-end' : ''} ${isRange ? 'range-day-active' : ''}`}
            key={`${item.type}-${item.value}`}
            onClick={() => {
              if (!disabled) handleClick(nowValue, item.type);
            }}
          >
            <div className={`${isSelected || isBegin || isEnd ? 'selected-day-active' : ''} ${'date-text'} ${nowDate === item.date ? 'now-day-active' : ''}`}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
  return (
    <div className={`${prefixCls}-content`}>
      {renderWeekBox()}
      {renderDays()}
    </div>
  );
};

export default DateBody;
