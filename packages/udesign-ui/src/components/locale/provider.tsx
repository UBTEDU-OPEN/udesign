import React from 'react';
import LocaleContext from './context';
import DefaultLocale from './source/zh_CN';
import { Locale } from './interface';

export type LocaleProviderProps = {
  children?: React.ReactNode;
  locale?: Locale;
};

const LocaleProvider = (props: LocaleProviderProps) => {
  const { children, locale = DefaultLocale } = props;
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};

export default LocaleProvider;
