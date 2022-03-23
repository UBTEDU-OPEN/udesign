import { attachPropertiesToComponent } from '../../utils';
import { Steps as InnerSteps } from './steps';
import { Item } from './step';

export type { StepsProps } from './steps';

export const Steps = attachPropertiesToComponent(InnerSteps, { Item });
