import { Tabbar as InternalTabbar } from './tabbar';
import { Item } from './item';
import { attachPropertiesToComponent } from '../../utils';

export const Tabbar = attachPropertiesToComponent(InternalTabbar, { Item });
