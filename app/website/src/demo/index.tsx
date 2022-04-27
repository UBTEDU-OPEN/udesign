import React from 'react';
import { Doc } from './doc';
import { Page } from './page';
import { Block } from './block';
import { attachPropertiesToComponent } from '@ubt/udesign-utils';

export const Demo = attachPropertiesToComponent(<></>, {
  Doc,
  Page,
  Block,
});
