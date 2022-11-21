import React, { useEffect, useState, useContext } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';
import PanelHeader from '../panel-header';
import DateBody from './date-body';
import PanelContext from '../../generatePicker/panel-context';

import { getMonth } from '../../../../utils/moment';
import { BASE_CLASS_PREFIX, DateFormat } from '../../../../constants';
import LocaleConsumer from '../../../locale/consumer';
import { Locale } from '../../../locale/interface';
import { NativeProps } from '../../../../utils';
import './index.scss';

const prefixCls = `${BASE_CLASS_PREFIX}-date-panel`;

export type DatePanelProps = {
  defaultValue?: string; // 默认值：-
  beginValue?: string; // 最早日期
  endValue?: string; // 最晚日期
  onChange?: (dates: string) => void; // 切换日期时的回调。默认值：-
  onViewDateChange?: (isYear: boolean, diff: number) => void;
  viewDate?: string; // 面板日期
} & Omit<NativeProps, 'children'>;
const DatePanel = ({ onChange, style, className, onViewDateChange, viewDate, ...restProps }: DatePanelProps) => {
  const nowDate = dayjs().format(DateFormat);
  const [yearNumber, setYearNumber] = useState<string>();
  const [monthNumber, setMonthNumber] = useState<string>(); // MM
  const daysList = getMonth(yearNumber, monthNumber);

  useEffect(() => {
    if (viewDate) {
      let date = dayjs(viewDate).format(DateFormat);
      setYearNumber(date.split('-')[0]);
      setMonthNumber(date.split('-')[1]); // MM
    } else {
      let dateArr = nowDate.split('-');
      setYearNumber(dateArr[0]);
      setMonthNumber(dateArr[1]); // MM
    }
  }, [viewDate]);

  const changMonth = (diff: number) => {
    let number = Number(monthNumber) + diff;
    let yearStr = yearNumber;
    if (number === 13) {
      number = 1;
      yearStr = String(Number(yearNumber) + 1);
    } else if (number === 0) {
      number = 12;
      yearStr = String(Number(yearNumber) - 1);
    }
    let mothStr = number < 10 ? `0${number}` : String(number);
    setYearNumber(yearStr);
    setMonthNumber(mothStr);
    onViewDateChange?.(false, diff);
  };

  const yearChange = (diff: number) => {
    let year = String(Number(yearNumber) + diff);
    setYearNumber(year);
    onViewDateChange?.(true, diff);
    console.log('yearChange');
  };

  const handleSelect = (nowValue: string, diff: number) => {
    if (dayjs(nowValue).month() + 1 !== Number(monthNumber)) changMonth(diff);
    onChange?.(nowValue);
  };
  const cls = classNames(`${prefixCls}`, className);
  const panelContext = useContext(PanelContext);
  return (
    <LocaleConsumer componentName='DateTimePicker'>
      {(locale: Locale['DateTimePicker']) => (
        <div
          className={cls}
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={style}
        >
          <PanelHeader
            onSuperPrev={() => {
              yearChange(-1);
            }}
            onSuperNext={() => {
              yearChange(1);
            }}
            onPrev={() => {
              changMonth(-1);
            }}
            onNext={() => {
              changMonth(1);
            }}
            hideNext={panelContext.hideNext}
            hidePrev={panelContext.hidePrev}
          >
            <div className={`${prefixCls}-year-number`}>
              <span>{locale.monthArr[Number(monthNumber) - 1]}</span>
              <span className={`${prefixCls}-year`}>{yearNumber}</span>
            </div>
          </PanelHeader>
          <DateBody cells={locale.weekArr} rows={daysList} onChange={handleSelect} nowDate={nowDate} {...restProps}></DateBody>
        </div>
      )}
    </LocaleConsumer>
  );
};

export default DatePanel;
