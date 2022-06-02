import { createContext, Context } from 'react';

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

export interface CheckboxContextState {
  value?: any;
  name?: string;
  onChange?: (checkedValue: string[]) => void;
  dispatch?: any;
}

export const CheckboxContext: Context<CheckboxContextState> = createContext({});
