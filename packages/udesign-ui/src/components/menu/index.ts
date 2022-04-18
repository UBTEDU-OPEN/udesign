import './menu.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Menu } from './menu';
import { MenuItem as Item } from './item';
import { Submenu } from './submenu';

export type { MenuProps } from './menu';
export type { MenuItemProps } from './item';

export default attachPropertiesToComponent(Menu, { Item, Submenu });
