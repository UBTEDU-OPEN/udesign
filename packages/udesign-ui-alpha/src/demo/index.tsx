import React from 'react';
import { attachPropertiesToComponent } from '../utils';
import { Doc } from './doc';
import { Page } from './page';
import { Block } from './block';

export const Demo = attachPropertiesToComponent(() => <></>, {
  Doc,
  Page,
  Block,
});
