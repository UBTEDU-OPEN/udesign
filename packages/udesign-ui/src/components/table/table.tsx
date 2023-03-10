/* eslint-disable array-callback-return */
import React, { ReactNode, useReducer } from 'react';
import classNames from 'classnames';
import { BASE_CLASS_PREFIX } from '../../constants';
import { TableContext, reducer } from './context';
import { Header } from './header';
import { Body } from './body';
import { columnType, rowSelectionType } from './types';
import { NativeProps } from '../../utils';

export type TableProps<T> = {
  dataSource: { [key: string]: T }[]; // table 行数据。默认值：-
  columns: columnType[]; // table 列数据。默认值：-
  rowSelection?: rowSelectionType; // 选择行 相关参数。默认值：-
  bordered?: boolean; // 是否显示border。默认值：false
  rowKey?: string; // 表格行 key 的取值。默认值：-
  showHeader?: boolean; // 是否显示表头。默认值：true
  // scroll?: { [key: string]: any };
  // summary?: ReactNode;
  // onHeaderRow?: () => void;
} & NativeProps;

const prefixCls = `${BASE_CLASS_PREFIX}-table`;

export const Table = <T,>(props: TableProps<T>) => {
  const { dataSource, columns, rowSelection, bordered, className, style, rowKey, showHeader = true } = props;
  const cls = classNames(prefixCls, className);
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
        rowKey,
        dispatch,
        rowSelection: state.rowSelection,
        bordered,
      }}
    >
      <div className={cls} style={style}>
        <table className={`${prefixCls}-wrapper`} cellPadding='0' cellSpacing='0'>
          <colgroup>
            {getInnerColumns().map((column: columnType, index) => (
              <col width={column.width} style={{ width: column.width }} key={index} />
            ))}
          </colgroup>
          {showHeader ? <Header /> : null}

          <Body />
        </table>
      </div>
    </TableContext.Provider>
  );
};
