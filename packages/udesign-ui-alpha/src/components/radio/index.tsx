import { Radio as InternalRadio, RadioProps } from './radio';
import { Group } from './group';

interface CompoundedComponent extends React.FC<RadioProps> {
  Group: typeof Group;
}

export const Radio = InternalRadio as CompoundedComponent;

Radio.Group = Group;
