import './dropdown.scss';
import { Dropdown } from './dropdown';
import { attachPropertiesToComponent } from '../../utils';
import { Menu } from './menu';
import { Item } from './item';

export type { DropdownProps } from './dropdown';

export default attachPropertiesToComponent(Dropdown, { Menu, Item });
