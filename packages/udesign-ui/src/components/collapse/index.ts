import './collapse.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Collapse } from './collapse';
import { Item } from './item';

export type { CollapseProps } from './collapse';
export type { ItemProps as CollapseItemProps } from './item';

export default attachPropertiesToComponent(Collapse, { Item });
