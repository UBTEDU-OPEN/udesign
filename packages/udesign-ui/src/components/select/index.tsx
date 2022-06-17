import './select.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Select as InternalSelect } from './select';
import { Option } from './option';

export type { SelectProps } from './select';

const Select = attachPropertiesToComponent(InternalSelect, { Option });

export default Select;
