import './steps.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Steps } from './steps';
import { Item } from './item';

export type { StepProps } from './item';
export type { StepsProps } from './steps';

export default attachPropertiesToComponent(Steps, { Item });
