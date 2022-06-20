import { createContext, Context } from 'react';
import { OptionItem } from './types';

export const enum types {
  UPDATE_VALUE = 'UPDATE_VALUE',
}

export function reducer(state: any, action: any) {
  switch (action.type) {
    case types.UPDATE_VALUE:
      return action.payload;
    default:
      throw new Error();
  }
}

export interface SelectContextState {
  value?: string[];
  defaultValue?: string[];
  name?: string;
  onChange?: (value: string | string[]) => void;
  dispatch?: React.Dispatch<{ type: string; payload: any }>;
  mode?: 'multiple';
  setVisible?: (visible: boolean) => void;
  options?: OptionItem[];
  disabled?: boolean;
}

export const SelectContext: Context<SelectContextState> = createContext({});
