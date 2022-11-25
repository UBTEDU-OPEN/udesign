import { createContext, Context } from 'react';

export interface CheckboxContextState {
  value?: string[];
  name?: string;
  onChange?: (e: string[]) => void;
  disabled?: boolean;
}

export const CheckboxContext: Context<CheckboxContextState> = createContext({});
