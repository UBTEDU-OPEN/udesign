import moment from 'dayjs';

export const weekArr = ['一', '二', '三', '四', '五', '六', '七'];
export const monthArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];

// 获取上个月的数组
const getDateArr = (start: string, end: string) => {
  const min = start.split('-');
  let str = `${min[0]}-${min[1]}`;
  const max = end.split('-');
  let data: {
    value: number;
    type: string;
    date: string;
    isSelected: boolean;
  }[] = [];
  for (let i = 0; i < Number(max[2]) - Number(min[2]); i++) {
    const value: number = Number(min[2]) + i + 1;
    data.push({ value, type: 'last', date: `${str}-${value}`, isSelected: false });
  }
  return data;
};
// 获取上个月的日期参数
const getLastDays = (date: string) => {
  const start = moment(date).startOf('week').format('YYYY-MM-DD');
  const end = moment(start).endOf('month').format('YYYY-MM-DD');
  if (start === moment(date).format('YYYY-MM-DD')) {
    const start1 = moment(start).subtract(7, 'days').format('YYYY-MM-DD');
    const end1 = moment(start).subtract(1, 'days').format('YYYY-MM-DD');
    return getDateArr(start1, end1);
  }
  return getDateArr(start, end);
};
// 获取size长度的数组
const getDays = (size: number, type: string, str: string) => {
  const data: { value: number; type: string; date: string; isSelected: boolean }[] = [];
  for (let i = 0; i < size; i++) {
    data.push({ value: i + 1, type, date: `${str}-${i + 1}`, isSelected: false });
  }
  return data;
};
export const getMonth = (year: string, month: string) => {
  const date = `${year}-${month}`;
  const lastArr = getLastDays(date);
  const nowMonthDays: string = moment(date).endOf('month').format('YYYY-MM-D').split('-')[2];
  const size = 42 - Number(nowMonthDays) - lastArr.length;
  let nextStr = moment(date).add(1, 'month').format('YYYY-MM');
  const nowArr = getDays(Number(nowMonthDays), 'now', date);
  const nextArr = getDays(size, 'next', nextStr);
  return [...lastArr, ...nowArr, ...nextArr];
};
