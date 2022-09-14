/* eslint-disable camelcase */
import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ConfigProvider } from '@ubt/udesign-ui';
import zh_CN from '@ubt/udesign-ui/src/components/locale/source/zh_CN';
import 'tailwindcss/tailwind.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ConfigProvider locale={zh_CN}>
      <Component {...pageProps} />
    </ConfigProvider>,
  );
};

export default App;
