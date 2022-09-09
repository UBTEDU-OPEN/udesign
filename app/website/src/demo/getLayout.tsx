import React from 'react';
import { PageLayout } from './layout';

export function getLayout(page: any) {
  return <PageLayout>{page}</PageLayout>;
}
