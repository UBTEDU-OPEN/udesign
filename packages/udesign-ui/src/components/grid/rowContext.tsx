import { createContext, Context } from 'react';

export interface RowContextState {
  gutter?: number | Array<number> | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number };
}

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;
