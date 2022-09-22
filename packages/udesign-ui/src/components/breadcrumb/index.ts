import './breadcrumb.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Breadcrumb } from './breadcrumb';
import { Item } from './item';

export type { BreadcrumbProps } from './breadcrumb';
export type { ItemProps as BreadcrumbItemProps } from './item';

export default attachPropertiesToComponent(Breadcrumb, {
  Item,
});
