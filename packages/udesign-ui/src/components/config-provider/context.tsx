import React from 'react';
import { Locale } from '../locale/interface';

export interface ConfigContextProps {
  direction?: 'ltr' | 'rtl';
  // timeZone?: string | number;
  locale?: Locale;
  children?: React.ReactNode;
  // getPopupContainer?(): HTMLElement;
}

export const ConfigContext = React.createContext<ConfigContextProps>({});
