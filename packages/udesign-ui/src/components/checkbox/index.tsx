import './checkbox.scss';
import { Checkbox } from './checkbox';
import { attachPropertiesToComponent } from '../../utils';
import { Group } from './group';

export default attachPropertiesToComponent(Checkbox, {
  Group,
});
