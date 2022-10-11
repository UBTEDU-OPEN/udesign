import moment from 'dayjs';
import { DateFormat } from '../constants';

export type MonthType = 'last' | 'now' | 'next'; // 上个月|当月|下个月

export type ShowDateType = {
  value: string; // DD
  type: MonthType;
  date: string; // YYYY-MM-DD
};

// 获取上个月日期对象的数组
const getLastMothArr = (start: string, end: string) => {
  const min = start.split('-');
  let str = `${min[0]}-${min[1]}`;
  const max = end.split('-');
  let data: ShowDateType[] = [];
  for (let i = 0; i < Number(max[2]) - Number(min[2]); i++) {
    const value: number = Number(min[2]) + i + 1;
    const valStr: string = value < 10 ? `0${value}` : value.toString();
    data.push({ value: valStr, type: 'last', date: `${str}-${valStr}` });
  }
  return data;
};

// 获取上个月的天数
const getLastDays = (date: string) => {
  const start = moment(date).startOf('week').format(DateFormat);
  const end = moment(start).endOf('month').format(DateFormat);
  if (start === moment(date).format(DateFormat)) {
    const start1 = moment(start).subtract(7, 'days').format(DateFormat);
    const end1 = moment(start).subtract(1, 'days').format(DateFormat);
    return getLastMothArr(start1, end1);
  }
  return getLastMothArr(start, end);
};
// 获取size长度的数组
const getDays = (size: number, type: MonthType, str: string) => {
  const data: ShowDateType[] = [];
  let date;
  for (let i = 0; i < size; i++) {
    date = i + 1 < 10 ? `0${i + 1}` : (i + 1).toString();
    data.push({ value: date, type, date: `${str}-${date}` });
  }
  return data;
};

export const getMonth = (year?: string, month?: string) => {
  if (!year || !month) return [];
  const date = `${year}-${month}`;
  const lastArr = getLastDays(date);
  const nowMonthDays: string = moment(date).endOf('month').format(DateFormat).split('-')[2];
  const size = 42 - Number(nowMonthDays) - lastArr.length;
  let nextStr = moment(date).add(1, 'month').format('YYYY-MM');
  const nowArr = getDays(Number(nowMonthDays), 'now', date);
  const nextArr = getDays(size, 'next', nextStr);
  return [...lastArr, ...nowArr, ...nextArr];
};

export const addMonth = (date: string, diff = 1, format = DateFormat) => {
  if (date) {
    return moment(date).add(diff, 'M').format(format);
  }
  return '';
};

export const addYear = (date: string, diff: number, format: string = DateFormat) => {
  if (date) {
    return moment(date).add(diff, 'y').format(format);
  }
  return '';
};
