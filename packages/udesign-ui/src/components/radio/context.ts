import { createContext, Context } from 'react';

export interface RadioContextState {
  name?: string;
  value?: string;
  disabled?: boolean;
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (val: string, e: React.MouseEvent<HTMLInputElement>) => void;
}

export const RadioContext: Context<RadioContextState> = createContext({});
