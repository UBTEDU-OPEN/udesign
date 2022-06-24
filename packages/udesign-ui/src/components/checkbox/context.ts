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

export interface CheckboxContextState {
  value?: string[];
  name?: string;
  onChange?: (checkedValue: string[]) => void;
  dispatch?: React.Dispatch<actionType>;
}

export const CheckboxContext: Context<CheckboxContextState> = createContext({});
