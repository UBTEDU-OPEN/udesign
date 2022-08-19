import { createContext, Context } from 'react';
import { OptionItem } from './types';

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

export interface SelectContextState {
  value?: any[];
  defaultValue?: any[];
  name?: string;
  onChange?: (value: string | string[]) => void;
  onSelect?: (value: string | number | OptionItem) => void;
  dispatch?: React.Dispatch<actionType>;
  mode?: 'multiple';
  setVisible?: (visible: boolean) => void;
  options?: OptionItem[];
  disabled?: boolean;
  autoFocus?: boolean;
}

export const SelectContext: Context<SelectContextState> = createContext({});
