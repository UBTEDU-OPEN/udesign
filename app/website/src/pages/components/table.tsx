import React, { ReactNode, useState } from 'react';
import { Table, Radio, Tooltip, Pagination } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

interface column {
  title: string;
  key: string;
  render?: (record: { [key: string]: any }) => ReactNode;
  ellipsis?: boolean;
  width?: string;
}
const columns: column[] = [
  {
    title: 'Name',
    key: 'name',
    render: (record: { [key: string]: any }) => `${record.name}-render`,
  },
  {
    title: 'Age',
    key: 'age',
    width: '40px',
  },
  {
    title: 'Address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
    // width: '100px',
    render: (record: { [key: string]: any }) => (
      <React.Fragment>
        <a type='text' style={{ marginRight: '20px' }}>
          edit
        </a>

        <a type='text'>delete</a>
      </React.Fragment>
    ),
  },
];
const columns1: column[] = [
  {
    title: 'Name',
    key: 'name',
    render: (record: { [key: string]: any }) => `${record.name}-render`,
    ellipsis: true,
  },
  {
    title: 'Age',
    key: 'age',
    width: '40px',
  },
  {
    title: 'Address',
    key: 'address',
    ellipsis: true,
  },
  {
    title: 'Tags',
    key: 'tags',
    ellipsis: true,
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: { [key: string]: any }) => (
      <React.Fragment>
        <a type='text' style={{ marginRight: '20px' }}>
          edit
        </a>

        <a type='text'>delete</a>
      </React.Fragment>
    ),
  },
];

const columns2: column[] = [
  {
    title: 'Name',
    key: 'name',
    render: ({ name }) => <a>{name}</a>,
    width: '150px',
  },
  {
    title: 'Age',
    key: 'age',
    width: '80px',
  },
  {
    title: 'Address',
    key: 'address 1',
    render: ({ address }) => <Tooltip content={address}>{address}</Tooltip>,
  },
  {
    title: 'Long Column Long Column',
    key: 'address 4',
    render: ({ address }) => <Tooltip content={address}>{address}</Tooltip>,
  },
];

const data: any[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 37,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function TablePage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div>
      <Demo.Page title='Table 表格' description='展示行列数据。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              *当有大量结构化的数据需要展现时；
              <br />
              *当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。
            </>
          }
        ></Demo.Block>
        <Demo.Block
          title='基础用法'
          description={
            <>
              基础用法
              <br />
              基础用法中，简单的表格，最后一列是各种操作。
            </>
          }
        >
          <Table columns={columns} dataSource={data} />
        </Demo.Block>
        <Demo.Block
          title='带勾选'
          description={
            <>
              基础用法
              <br />
              第一列是联动的选择框。可以通过 rowSelection.type 属性指定选择类型，默认为 checkbox。
            </>
          }
        >
          <Radio.Group
            name='type'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setChecked(!checked);
            }}
          >
            <React.Fragment>
              <Radio checked={!checked}>多选</Radio>
              <Radio checked={checked}>单选</Radio>
            </React.Fragment>
          </Radio.Group>
          <Table
            columns={columns}
            dataSource={data}
            rowKey='name'
            rowSelection={{
              type: `${checked ? 'radio' : 'checkbox'}`,
              onChange: (selectedRowKey, record) => {
                console.log(selectedRowKey, record, 'select');
              },
              onSelectAll: (selected, selectedRows) => {
                console.log(selected, selectedRows, 'selectall');
              },
              selectedRowKeys,
              getCheckboxProps: (record: any) => ({
                disabled: record.age === 37,
              }),
              hideSelectAll: false,
            }}
          />
        </Demo.Block>
        <Demo.Block title='自定义单元格省略提示' description={<>使用 Tooltip 替代。</>}>
          <Table columns={columns2} dataSource={data} />
        </Demo.Block>
        <Demo.Block title='带边框' description={<>添加表格边框线。</>}>
          <Table columns={columns1} dataSource={data} bordered />
        </Demo.Block>

        <Demo.Block title='分页设置' description={<>与分页组件配合使用</>}>
          <Table columns={columns1} dataSource={data} />
          <div style={{ marginTop: '20px' }}>
            <Pagination total={100} />
          </div>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}
