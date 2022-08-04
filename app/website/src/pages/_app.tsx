/* eslint-disable camelcase */
import React from 'react';
import type { AppProps } from 'next/app';
import { ConfigProvider } from '@ubt/udesign-ui';
import zh_CN from '@ubt/udesign-ui/src/components/locale/source/zh_CN';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider locale={zh_CN}>
    <Component {...pageProps} />;
  </ConfigProvider>
);

export default App;
