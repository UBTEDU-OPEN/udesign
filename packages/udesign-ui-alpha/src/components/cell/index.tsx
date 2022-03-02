import React from 'react';
import { Cell as InternalCell, CellProps } from './cell';
import { CellGroup } from './group';

export type { CellProps } from './cell';

interface CompoundedComponent extends React.FC<CellProps> {
  Group: typeof CellGroup;
}

export const Cell = InternalCell as CompoundedComponent;
Cell.Group = CellGroup;
