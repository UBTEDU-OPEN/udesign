import './checkbox.scss';
import { Checkbox } from './checkbox';
import { attachPropertiesToComponent } from '../../utils';
import { Group } from './group';

export type { CheckboxProps } from './checkbox';
export type { GroupProps as CheckboxGroupProps } from './group';

export default attachPropertiesToComponent(Checkbox, {
  Group,
});
