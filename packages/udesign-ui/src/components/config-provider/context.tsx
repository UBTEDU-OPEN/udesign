import React from 'react';
import { Locale } from '../locale/interface';

export interface ConfigContextProps {
  direction?: 'ltr' | 'rtl'; // 出现位置，可选：'ltr' | 'rtl'。默认值：ltr
  // timeZone?: string | number;
  locale?: Locale; // 语言包配置。默认值：DefaultLocale
  children?: React.ReactNode;
  // getPopupContainer?(): HTMLElement;
}

export const ConfigContext = React.createContext<ConfigContextProps>({});
