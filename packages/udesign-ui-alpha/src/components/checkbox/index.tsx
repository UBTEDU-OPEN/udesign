import React from 'react';
import { Checkbox as InternalCheckbox, CheckboxProps } from './checkbox';
import { Group } from './group';

interface CompoundedComponent extends React.FC<CheckboxProps> {
  Group: typeof Group;
}

export const Checkbox = InternalCheckbox as CompoundedComponent;

Checkbox.Group = Group;
