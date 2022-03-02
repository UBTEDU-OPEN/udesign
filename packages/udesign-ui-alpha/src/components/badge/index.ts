import { attachPropertiesToComponent } from '../../utils';
import { Badge as innerBadge, Dot } from './badge';

export const Badge = attachPropertiesToComponent(innerBadge, { Dot });
