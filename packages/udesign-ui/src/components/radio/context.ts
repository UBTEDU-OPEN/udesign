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

export interface RadioContextState {
  value?: any;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dispatch?: any;
}

export const RadioContext: Context<RadioContextState> = createContext({});
