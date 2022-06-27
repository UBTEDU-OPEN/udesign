import { ReactNode } from 'react';

export interface columnType {
  title?: string; // 列数据显示内容
  key?: string; // 当前列的字段名
  type?: string; //
  ellipsis?: boolean; // 是否默认出现提示信息
  render?: (record: { [key: string]: any }) => ReactNode; // 自定义显示内容函数
  width?: string; // 列宽
}

export interface rowSelectionType {
  type?: 'checkbox' | 'radio' | string; // 选择行类型，默认多选 checkbox | radio
  selectedRowKeys?: string[]; // 选中行的key（唯一）值集合
  onChange?: (rowSelectedKeys: string[], record: { [key: string]: any }) => void; // 选中回调
  onSelectAll?: (selected: boolean, selectedRows: { [key: string]: any }[]) => void; // 全选回调
  getCheckboxProps?: (record: { [key: string]: any }) => { disabled?: boolean }; // 选择框的默认属性配置
  hideSelectAll?: boolean; // 是否隐藏全选
}
