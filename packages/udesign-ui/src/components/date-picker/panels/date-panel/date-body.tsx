import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { BASE_CLASS_PREFIX, DateFormat } from '../../../../constants';
import { ShowDateType } from '../../../../utils/moment';
import './index.scss';

const prefixCls = `${BASE_CLASS_PREFIX}-date-panel`;

export type DatePanelProps = {
  defaultValue?: string; // 指定日期。默认值：-
  onChange?: (dates: string) => void; // 切换日期时的回调。默认值：-
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

  const handleClick = (nowValue: string) => {
    setSelectedValue(nowValue);
    onChange?.(nowValue);
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
        let rangeLimit = false;
        // 开始日期
        if (beginValue) {
          if (dayjs(beginValue).isAfter(item.date)) disabled = true;
          if (selectedValue && item.type === 'now') {
            if (dayjs(item.date).isAfter(beginValue) && dayjs(item.date).isBefore(selectedValue)) isRange = true;
          }
          rangeLimit = item.type === 'now' && nowValue === dayjs(beginValue).format(DateFormat);
        }
        // 结束日期
        if (endValue) {
          if (dayjs(endValue).isBefore(item.date)) disabled = true;
          if (selectedValue && item.type === 'now') {
            if (dayjs(item.date).isAfter(selectedValue) && dayjs(item.date).isBefore(endValue)) isRange = true;
          }
          rangeLimit = item.type === 'now' && nowValue === dayjs(endValue).format(DateFormat);
        }
        return (
          <div
            className={`${`${prefixCls}-month-days`} ${item.type === 'now' && item.date ? 'now-month-days' : 'other-month-days'} ${disabled ? 'disabled-month-days' : ''} ${isRange ? 'range-day-active' : ''}`}
            key={`${item.type}-${item.value}`}
            onClick={() => {
              if (!disabled) handleClick(nowValue);
            }}
          >
            <div className={`${isSelected || rangeLimit ? 'selected-day-active' : ''} ${'date-text'} ${nowDate === item.date ? 'now-day-active' : ''}`}>{item.value}</div>
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
