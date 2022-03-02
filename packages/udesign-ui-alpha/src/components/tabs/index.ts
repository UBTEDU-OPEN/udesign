import { attachPropertiesToComponent } from '../../utils';
import { Tabs as InnerTabs } from './tabs';
import { Item } from './item';

export const Tabs = attachPropertiesToComponent(InnerTabs, { Item });
