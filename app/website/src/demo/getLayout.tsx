import React, { ReactElement } from 'react';
import { PageLayout } from './layout';

export function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
}
