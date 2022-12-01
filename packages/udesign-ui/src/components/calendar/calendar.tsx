import React, { useState } from 'react';
import moment from 'dayjs';
import { FirstRightOutlined, RightOutlined, LeftOutlined } from '@ubt/udesign-icons';
import classNames from 'classnames';
import LocaleConsumer from '../locale/consumer';
import { Locale } from '../locale/interface';
import { getMonth, ShowDateType } from '../../utils/moment';
import { BASE_CLASS_PREFIX } from '../../constants';
import { NativeProps } from '../../utils';

const prefixCls = `${BASE_CLASS_PREFIX}-calendar`;

export type CalendarProps = {
  selectedValue?: string; // 指定日期。默认值：-
  onChange?: (dates: string) => void; // 切换日期时的回调。默认值：-
} & NativeProps;
const Calendar = (props: CalendarProps) => {
  const nowDate = moment().format('YYYY-MM').split('-');
  const { selectedValue = moment().format('YYYY-MM-D'), onChange, style, className } = props;
  const [yearNumber, setYearNumber] = useState(nowDate[0]);
  const [monthNumber, setMonthNumber] = useState<string>(nowDate[1]);
  const [isSelect, setIsSelect] = useState(selectedValue);
  const daysList = getMonth(yearNumber, monthNumber);

  const changAddNumber = () => {
    let number = Number(monthNumber) + 1;
    if (number === 13) {
      number = 1;
      setYearNumber(String(Number(yearNumber) + 1));
    }
    setMonthNumber(String(number));
  };
  function changLessMonth() {
    let number = Number(monthNumber) - 1;
    if (number === 0) {
      number = 12;
      setYearNumber(String(Number(yearNumber) - 1));
    }
    setMonthNumber(String(number));
  }
  const handleClick = (nowValue: string) => {
    setIsSelect(nowValue);
    onChange?.(nowValue);
  };
  const YearAddClick = () => {
    setYearNumber(String(Number(yearNumber) + 1));
  };
  const YearDecreaseClick = () => {
    setYearNumber(String(Number(yearNumber) - 1));
  };
  const renderWeekBox = (locale: Locale['DateTimePicker']) => (
    <div className={`${prefixCls}-week-box`}>
      {locale.weekArr.map((item: string) => (
        <div className={`${prefixCls}-week-days`} key={`week-${item}`}>
          {item}
        </div>
      ))}
    </div>
  );
  const renderDays = () => (
    <div className={`${prefixCls}-date-box`}>
      {daysList.map((item: ShowDateType) => {
        const nowValue = moment(item.date).format('YYYY-MM-D');
        let isSelected = isSelect === nowValue;
        return (
          <div
            className={`${`${prefixCls}-common-days`} ${item.type === 'now' && item.date ? 'now-days' : 'other-days'}`}
            key={`${item.type}-${item.value}`}
            onClick={() => {
              handleClick(nowValue);
            }}
          >
            <div className={`${isSelected ? 'common-days-active' : ''} ${'date-text'}`}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
  const cls = classNames(`${prefixCls}`, className);
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
          <div className={`${prefixCls}-title`}>
            <div className={`${prefixCls}-titleImgBox`} onClick={YearDecreaseClick}>
              <FirstRightOutlined className={classNames(`left-icon`, `${prefixCls}-title-left-icon`)} size='small' />
            </div>
            <div className={`${prefixCls}-titleImgBox`} onClick={changLessMonth}>
              <LeftOutlined size='small' className={`${prefixCls}-title-left-icon`} />
            </div>
            <div className={`${prefixCls}-year-number`}>
              <span>{locale.monthArr[Number(monthNumber) - 1]}</span>
              <span className={`${prefixCls}-year`}>{yearNumber}</span>
            </div>
            <div className={`${prefixCls}-titleImgBox`} onClick={changAddNumber}>
              <RightOutlined size='small' />
            </div>
            <div className={`${prefixCls}-titleImgBox`} onClick={YearAddClick}>
              <FirstRightOutlined size='small' />
            </div>
          </div>
          <div className={`${prefixCls}-content`}>
            {renderWeekBox(locale)}
            {renderDays()}
          </div>
        </div>
      )}
    </LocaleConsumer>
  );
};

export default Calendar;
