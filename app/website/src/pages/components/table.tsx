import React, { ReactNode, useState } from 'react';
import { Table, Radio, Tooltip, Pagination } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { menus } from '../../constants/menus';

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
    <>
      <Demo.Doc base='components' menus={menus}>
        <Demo.Page title='Table ??????' description='?????????????????????'>
          <Demo.Block
            title='????????????'
            description={
              <>
                *????????????????????????????????????????????????
                <br />
                *???????????????????????????????????????????????????????????????????????????????????????
              </>
            }
          ></Demo.Block>
          <Demo.Block
            title='????????????'
            description={
              <>
                ????????????
                <br />
                ??????????????????????????????????????????????????????????????????
              </>
            }
          >
            <div className='bg-white p-5'>
              <Table columns={columns} dataSource={data} />
            </div>
          </Demo.Block>
          <Demo.Block
            title='?????????'
            description={
              <>
                ????????????
                <br />
                ????????????????????????????????????????????? rowSelection.type ???????????????????????????????????? checkbox???
              </>
            }
          >
            <div className='bg-white p-5'>
              <Radio.Group
                name='type'
                onChange={() => {
                  setChecked(!checked);
                }}
              >
                <React.Fragment>
                  <Radio checked={!checked}>??????</Radio>
                  <Radio checked={checked}>??????</Radio>
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
            </div>
          </Demo.Block>
          <Demo.Block title='??????????????????????????????' description={<>?????? Tooltip ?????????</>}>
            <div className='bg-white p-5'>
              <Table columns={columns2} dataSource={data} />
            </div>
          </Demo.Block>
          <Demo.Block title='?????????' description={<>????????????????????????</>}>
            <div className='bg-white p-5'>
              <Table columns={columns1} dataSource={data} bordered />
            </div>
          </Demo.Block>

          <Demo.Block title='????????????' description={<>???????????????????????????</>}>
            <div className='bg-white p-5'>
              <Table columns={columns1} dataSource={data} />
              <div style={{ marginTop: '20px' }}>
                <Pagination total={100} />
              </div>
            </div>
          </Demo.Block>
        </Demo.Page>
      </Demo.Doc>
    </>
  );
}
