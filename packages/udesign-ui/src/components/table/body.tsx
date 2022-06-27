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
  const { dataSource = [], columns = [], rowSelection, dispatch, bordered } = context;
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
      {dataSource.map((outerItem: { [key: string]: any }, index: number) => (
        <tr key={index}>
          {columns.map((column: columnType, i: number) => {
            if (column.type === 'checkbox') {
              return (
                <td key={`${i}`} className={borderStyle}>
                  <div className={classNames(`${prefixCls}-tbody-content`)} style={{ width: '80px' }}>
                    <Checkbox
                      disabled={(rowSelection?.getCheckboxProps && rowSelection?.getCheckboxProps(outerItem).disabled) || false}
                      checked={rowSelection?.selectedRowKeys?.includes(outerItem.key as string)}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const newSelectedRowkeys = getSelectedRowKeys(event.target.checked, outerItem.key as string);
                        if (dispatch) {
                          dispatch({
                            type: types.UPDATE_SELECTED,
                            payload: { rowSelection: { ...rowSelection, selectedRowKeys: newSelectedRowkeys } },
                          });
                        }
                        rowSelection?.onChange && rowSelection?.onChange(newSelectedRowkeys, outerItem);
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
                      name={outerItem.key as string}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (dispatch) {
                          dispatch({
                            type: types.UPDATE_SELECTED,
                            payload: { rowSelection: { ...rowSelection, selectedRowKeys: [outerItem.key] } },
                          });
                        }
                        rowSelection?.onChange && rowSelection?.onChange([outerItem.key as string], outerItem);
                      }}
                    >
                      <Radio disabled={rowSelection?.getCheckboxProps && rowSelection?.getCheckboxProps(outerItem).disabled} checked={[...(rowSelection?.selectedRowKeys || [])]?.shift() === outerItem.key} />
                    </Radio.Group>
                  </div>
                </td>
              );
            }
            return (
              <td className={borderStyle} key={`${Math.random()}_${i}`} title={column.ellipsis ? (outerItem[column.key as string] as string) : ''} style={{ textOverflow: column.ellipsis ? 'ellipsis' : 'clip' }}>
                {column.render ? column.render(outerItem) : (outerItem[column.key as string] as React.ReactNode) || null}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
