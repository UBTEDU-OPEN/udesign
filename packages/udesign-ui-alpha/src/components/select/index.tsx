import { attachPropertiesToComponent } from '../../utils';
import { Select as InternalSelect } from './select';
import { Item } from './item';

export type { SelectProps } from './select';

export const Select = attachPropertiesToComponent(InternalSelect, { Item });
