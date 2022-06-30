import { attachPropertiesToComponent } from '../../utils';
import { Collapse as internalCollapse } from './collapse';
import { Item } from './item';
import './collapse.scss';

export const Collapse = attachPropertiesToComponent(internalCollapse, { Item });
