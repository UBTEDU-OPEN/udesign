import React from 'react';
import { Locale } from './interface';

const LocaleContext = React.createContext<Locale>({} as Locale);

export default LocaleContext;
