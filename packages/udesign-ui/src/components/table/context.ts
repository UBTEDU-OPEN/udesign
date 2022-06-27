import React, { createContext, Context } from 'react';
import { columnType, rowSelectionType } from './types';

export const enum types {
  UPDATE_SELECTED = 'UPDATE_SELECTED',
}

export interface actionType {
  type: string;
  payload: any;
}
export function reducer(state: { [key: string]: any }, action: actionType) {
  switch (action.type) {
    case types.UPDATE_SELECTED:
      return action.payload;
    default:
      throw new Error();
  }
}

export interface TableContextState {
  columns?: columnType[];
  dataSource?: { [key: string]: any }[];
  dispatch?: React.Dispatch<actionType>;
  rowSelection?: rowSelectionType;
  bordered?: boolean;
  // selectedRowKeys?: string[];
}

export const TableContext: Context<TableContextState> = createContext({});
