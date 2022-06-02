import './radio.scss';
import { Radio } from './radio';
import { attachPropertiesToComponent } from '../../utils';
import { Group } from './group';
import { Button } from './button';

export default attachPropertiesToComponent(Radio, {
  Group,
  Button,
});
