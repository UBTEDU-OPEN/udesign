/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import classNames from 'classnames';
import Checkbox from '../checkbox';
import Radio from '../radio';
import { TableContext, types } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';
import { rowSelectionType, columnType } from './types';

const prefixCls = `${BASE_CLASS_PREFIX}-table`;

export const Body = () => {
  const context = useContext(TableContext);
  const { dataSource = [], columns = [], rowSelection, dispatch, bordered, rowKey = 'key' } = context;
  const selectedRowKeys = (rowSelection as rowSelectionType)?.selectedRowKeys;
  const getSelectedRowKeys = (checked: boolean, key: string) => {
    let result = selectedRowKeys;
    if (checked) {
      result = [...(selectedRowKeys || []), key];
    } else {
      result = (selectedRowKeys || []).filter((item: string) => item !== key);
    }
    return result;
  };

  const borderStyle = classNames({
    [`${prefixCls}-border`]: bordered,
  });
  return (
    <tbody className={`${prefixCls}-tbody`}>
      {dataSource.map((data: { [key: string]: any }, index: number) => (
        <tr key={index}>
          {columns.map((column: columnType, i: number) => {
            if (column.type === 'checkbox') {
              return (
                <td key={`${i}`} className={borderStyle}>
                  <div className={classNames(`${prefixCls}-tbody-content`)} style={{ width: '80px' }}>
                    <Checkbox
                      disabled={(rowSelection?.getCheckboxProps && rowSelection?.getCheckboxProps(data).disabled) || false}
                      checked={rowSelection?.selectedRowKeys?.includes(data[rowKey] as string)}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const newSelectedRowKeys = getSelectedRowKeys(event.target.checked, data[rowKey] as string);
                        if (dispatch) {
                          dispatch({
                            type: types.UPDATE_SELECTED,
                            payload: { rowSelection: { ...rowSelection, selectedRowKeys: newSelectedRowKeys } },
                          });
                        }
                        rowSelection?.onChange && rowSelection?.onChange(newSelectedRowKeys, data);
                      }}
                    />
                  </div>
                </td>
              );
            }
            if (column.type === 'radio') {
              return (
                <td key={`${i}`} className={borderStyle}>
                  <div className={classNames(`${prefixCls}-tbody-content`)} style={{ width: '80px' }}>
                    <Radio.Group
                      name={data[rowKey] as string}
                      onChange={() => {
                        if (dispatch) {
                          dispatch({
                            type: types.UPDATE_SELECTED,
                            payload: { rowSelection: { ...rowSelection, selectedRowKeys: [data[rowKey]] } },
                          });
                        }
                        rowSelection?.onChange && rowSelection?.onChange([data[rowKey] as string], data);
                      }}
                    >
                      <Radio disabled={rowSelection?.getCheckboxProps && rowSelection?.getCheckboxProps(data).disabled} checked={[...(rowSelection?.selectedRowKeys || [])]?.shift() === data[rowKey]} />
                    </Radio.Group>
                  </div>
                </td>
              );
            }
            return (
              <td className={borderStyle} key={`${Math.random()}_${i}`} title={column.ellipsis ? (data[column.key as string] as string) : ''} style={{ textOverflow: column.ellipsis ? 'ellipsis' : 'clip' }}>
                {column.render ? column.render(data) : (data[column.key as string] as React.ReactNode) || null}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
