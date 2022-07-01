import { attachPropertiesToComponent } from '../../utils';
import { Tabs as InnerTabs } from './tabs';
import { Item } from './item';
import './tabs.scss';

export const Tabs = attachPropertiesToComponent(InnerTabs, { Item });
