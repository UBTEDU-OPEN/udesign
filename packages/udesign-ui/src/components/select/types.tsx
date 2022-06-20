import { ReactNode } from 'react';

export type OptionItem = {
  value?: string; // value 值
  label?: ReactNode; // 显示的内容
  disabled?: boolean; // 是否禁用
};
