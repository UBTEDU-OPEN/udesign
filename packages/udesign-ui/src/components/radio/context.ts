import { createContext, Context } from 'react';

export const enum types {
  UPDATE_VALUE = 'UPDATE_VALUE',
}

export interface actionType {
  type: string;
  payload: any;
}

export function reducer(state: { [key: string]: any }, action: actionType) {
  switch (action.type) {
    case types.UPDATE_VALUE:
      return action.payload;
    default:
      throw new Error();
  }
}

export interface RadioContextState {
  value?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dispatch?: React.Dispatch<actionType>;
}

export const RadioContext: Context<RadioContextState> = createContext({});
