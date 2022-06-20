import React, { createContext, Context } from 'react';
import { columnType, rowSelectionType } from './types';

export const enum types {
  UPDATE_SELECTED = 'UPDATE_SELECTED',
}

export function reducer(state: { [key: string]: any }, action: { type: string; payload: any }) {
  switch (action.type) {
    case types.UPDATE_SELECTED:
      return action.payload;
    default:
      throw new Error();
  }
}

export interface TableContextState {
  columns?: columnType[];
  dataSource?: { [key: string]: unknown }[];
  dispatch?: React.Dispatch<{ type: string; payload: unknown }>;
  rowSelection?: rowSelectionType;
  bordered?: boolean;
  // selectedRowKeys?: string[];
}

export const TableContext: Context<TableContextState> = createContext({});
