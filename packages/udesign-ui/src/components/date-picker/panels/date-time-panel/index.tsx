import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Button from '../../../button';
import DatePanel from '../date-panel';
import TimePanel from '../../../time-picker/picker-panel';
import LocaleConsumer from '../../../locale/consumer';
import { Locale } from '../../../locale/interface';
import { DateFormat, TimeFormat } from '../../../../constants/date';
import './index.scss';

type DateTimeProps = {
  defaultValue?: string;
  beginValue?: string; // 最早日期
  endValue?: string; // 最晚日期
  showNow?: boolean;
  onChange?: (dateString: string) => void;
};

const DateTimePanel = (props: DateTimeProps) => {
  const { defaultValue, showNow, onChange, ...resetProps } = props;
  const [selDate, setSelDate] = useState<string>();
  const [selTime, setSelTime] = useState<string>();
  useEffect(() => {
    if (defaultValue) {
      setSelDate(dayjs(defaultValue).format(DateFormat));
      setSelTime(dayjs(defaultValue).format(TimeFormat));
    }
  }, [defaultValue]);

  const onSelectDate = (date: string) => {
    setSelDate(date);
  };

  const onSelectTime = (time: string) => {
    setSelTime(time);
  };

  const onConfirm = () => {
    onChange?.(`${selDate} ${selTime}`);
  };

  const onNow = () => {
    onChange?.(dayjs().format(`${DateFormat} ${TimeFormat}`));
  };

  return (
    <LocaleConsumer componentName='DateTimePicker'>
      {(locale: Locale) => (
        <div className='ud-date-time-panel'>
          <div className='ud-date-time-panel-content'>
            <DatePanel defaultValue={selDate} onChange={onSelectDate} viewDate={selDate} {...resetProps}></DatePanel>
            <TimePanel showFooter={false} selValue={selTime} onChange={onSelectTime}></TimePanel>
          </div>
          <div className='btn-box'>
            <Button onClick={onConfirm} className='confirm' type='primary' size='small' disabled={!selDate || !selTime}>
              {locale.confirm}
            </Button>
            {showNow && (
              <label className='now' onClick={onNow}>
                {locale.now}
              </label>
            )}
          </div>
        </div>
      )}
    </LocaleConsumer>
  );
};

export default DateTimePanel;
