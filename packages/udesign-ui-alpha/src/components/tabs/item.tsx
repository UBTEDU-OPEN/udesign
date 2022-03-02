import React from 'react';
import { TabProps } from './tab';

export type ItemProps = Omit<TabProps, 'type' | 'active' | 'onItemClick'>;

export const Item = ({ children }: ItemProps) => {
  return <>{children}</>;
};

Item.displayName = 'Tabs.Item';
