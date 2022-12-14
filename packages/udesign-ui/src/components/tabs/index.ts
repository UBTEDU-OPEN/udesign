import './tabs.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Tabs } from './tabs';
import { Item } from './item';

export type { ItemProps } from './item';
export type { TabsProps } from './tabs';

export default attachPropertiesToComponent(Tabs, { Item });
