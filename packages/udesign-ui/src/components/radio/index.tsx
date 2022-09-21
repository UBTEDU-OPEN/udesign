import './radio.scss';
import { Radio } from './radio';
import { attachPropertiesToComponent } from '../../utils';
import { Group } from './group';
import { Button } from './button';

export type { RadioProps } from './radio';
export type { GroupProps as RadioGroupProps } from './group';

export default attachPropertiesToComponent(Radio, {
  Group,
  Button,
});
