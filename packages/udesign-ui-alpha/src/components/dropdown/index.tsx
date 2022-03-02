import { attachPropertiesToComponent } from '../../utils';
import { Dropdown as InternalDropdown } from './dropdown';
import { Item } from './item';

export type { DropdownProps } from './dropdown';

export const Dropdown = attachPropertiesToComponent(InternalDropdown, { Item });
