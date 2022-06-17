import { ReactNode } from 'react';

export interface columnType {
  title?: string;
  key?: string;
  type?: string;
  ellipsis?: boolean;
  render?: (record: { [key: string]: unknown }) => ReactNode;
  width?: string;
}

export interface rowSelectionType {
  type?: 'checkbox' | 'radio' | string;
  selectedRowKeys?: string[];
  onChange?: (rowSelectedKeys: string[], record: { [key: string]: unknown }) => void;
  onSelectAll?: (selected: boolean, selectedRows: { [key: string]: unknown }[]) => void;
  getCheckboxProps?: (record: { [key: string]: unknown }) => { disabled?: boolean };
  hideSelectAll?: boolean;
}
