/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import Checkbox from '../checkbox';
import { TableContext, types } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';
import { rowSelectionType, columnType } from './types';

const prefixCls = `${BASE_CLASS_PREFIX}-table`;

export const Header = () => {
  const context = useContext(TableContext);
  const { dataSource = [], columns = [], rowSelection, dispatch, bordered } = context;
  const selectedRowKeys = (rowSelection as rowSelectionType)?.selectedRowKeys;
  const [checkAll, setCheckAll] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  useEffect(() => {
    setIsIndeterminate((selectedRowKeys || [])?.length < dataSource.length && (selectedRowKeys || [])?.length > 0);
    setCheckAll((selectedRowKeys || [])?.length === dataSource.length);
  }, [selectedRowKeys]);

  const getAllKeys = (data: { [key: string]: unknown }[]) => data.map((item: { [key: string]: unknown }) => item.key);

  const borderStyle = classNames({
    [`${prefixCls}-border`]: bordered,
  });
  return (
    <thead className={`${prefixCls}-thead`}>
      <tr>
        {columns.map((column: columnType) => {
          if (column.type === 'checkbox') {
            return (
              <th key={`${column.type}`} className={borderStyle} style={{ borderTop: bordered ? '1px solid #ECF0F3' : 'none', width: '80px' }}>
                <div className={classNames(`${prefixCls}-thead-content`)}>
                  {rowSelection?.hideSelectAll ? null : (
                    <Checkbox
                      checked={checkAll}
                      indeterminate={isIndeterminate}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const checked = event.target.checked;
                        if (dispatch) {
                          dispatch({
                            type: types.UPDATE_SELECTED,
                            payload: { rowSelection: { ...rowSelection, selectedRowKeys: checked ? getAllKeys(dataSource) : [] } },
                          });
                        }
                        if (rowSelection?.onSelectAll) {
                          rowSelection.onSelectAll(checked, checked ? dataSource : []);
                        }
                        setIsIndeterminate(false);
                      }}
                    />
                  )}
                </div>
              </th>
            );
          }
          if (column.type === 'radio') {
            return (
              <th key={`${column.type}`} className={borderStyle} style={{ borderTop: bordered ? '1px solid #ECF0F3' : 'none', width: '80px' }}>
                <div className={classNames(`${prefixCls}-thead-content`)}> </div>
              </th>
            );
          }
          return (
            <th className={borderStyle} key={Math.random()} style={{ borderTop: bordered ? '1px solid #ECF0F3' : 'none', width: column.width }}>
              <div className={classNames(`${prefixCls}-thead-content`)}>{column.title}</div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
