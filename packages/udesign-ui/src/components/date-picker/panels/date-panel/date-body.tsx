import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { BASE_CLASS_PREFIX, DateFormat } from '../../../../constants';
import { ShowDateType } from '../../../../utils/moment';
import './index.scss';

const prefixCls = `${BASE_CLASS_PREFIX}-date-panel`;

export type DatePanelProps = {
  defaultValue?: string; // 指定日期。默认值：-
  onSelect?: (dates: string) => void; // 切换日期时的回调。默认值：-
  nowDate?: string;
  cells: Array<string>;
  rows: Array<ShowDateType>;
  beginValue?: string; // 最早日期
  endValue?: string; // 最晚日期
};

const DateBody = ({ defaultValue, onSelect, rows, nowDate, cells, beginValue, endValue }: DatePanelProps) => {
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
    onSelect?.(nowValue);
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
        const isSelected = selectedValue === nowValue;
        let disabled = false;
        if (beginValue && dayjs(beginValue).isAfter(item.date)) {
          disabled = true;
        }
        if (endValue && dayjs(endValue).isBefore(item.date)) {
          disabled = true;
        }
        return (
          <div
            className={`${`${prefixCls}-month-days`} ${item.type === 'now' && item.date ? 'now-month-days' : 'other-month-days'} ${disabled ? 'disabled-month-days' : ''}`}
            key={`${item.type}-${item.value}`}
            onClick={() => {
              if (!disabled) handleClick(nowValue);
            }}
          >
            <div className={`${isSelected ? 'selected-day-active' : ''} ${'date-text'} ${nowDate === item.date ? 'now-day-active' : ''}`}>{item.value}</div>
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
