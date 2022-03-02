import { attachPropertiesToComponent } from '../../utils';
import { Collapse as internalCollapse } from './collapse';
import { Item } from './item';

export const Collapse = attachPropertiesToComponent(internalCollapse, { Item });
