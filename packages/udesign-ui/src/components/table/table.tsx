/* eslint-disable array-callback-return */
import React, { ReactNode, useReducer } from 'react';
import { BASE_CLASS_PREFIX } from '../../constants';
import { TableContext, reducer } from './context';
import { Header } from './header';
import { Body } from './body';
import { columnType, rowSelectionType } from './types';

interface IProps {
  dataSource: { [key: string]: unknown }[];
  columns: columnType[];
  rowSelection?: rowSelectionType;
  bordered?: boolean;
  rowKey?: string; // todo
  scroll?: { [key: string]: unknown }; // todo
  showHeader?: boolean; // todo
  summary?: ReactNode; // todo
  onHeaderRow?: () => void; // todo
}

const prefixCls = `${BASE_CLASS_PREFIX}-table`;

export const Table = (props: IProps) => {
  const { dataSource, columns, rowSelection, bordered } = props;
  const initialState = { rowSelection };
  const [state, dispatch] = useReducer(reducer, initialState);
  const getInnerColumns = () => {
    let result: columnType[] = columns;
    if (rowSelection) {
      result = [{ type: rowSelection.type || 'checkbox' }, ...columns];
    }
    return result;
  };
  return (
    <TableContext.Provider
      value={{
        columns: getInnerColumns(),
        dataSource,
        dispatch,
        rowSelection: state.rowSelection,
        bordered,
      }}
    >
      <div className={prefixCls}>
        <table className={`${prefixCls}-wrapper`} cellPadding='0' cellSpacing='0'>
          <colgroup>
            {getInnerColumns().map((column: columnType, index) => (
              <col width={column.width} style={{ width: column.width }} key={index} />
            ))}
          </colgroup>
          <Header />
          <Body />
        </table>
      </div>
    </TableContext.Provider>
  );
};
