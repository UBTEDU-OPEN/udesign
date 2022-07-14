import React, { ReactNode } from 'react';
import { Select, Space, Tag } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export type CustomTagProps = {
  label?: React.ReactNode; // tag 显示内容
  value?: string; // tag value
  disabled?: boolean; // 是否禁用
  onClose?: (data: { value: string; label: ReactNode }, event: React.MouseEvent<HTMLElement, MouseEvent>) => void; // 关闭回调
  closeable?: boolean; // 是否显示关闭按钮
};

export default function SelectPage() {
  const options = [
    { value: 'gold', closeable: true, label: 'gold' },
    { value: 'lime', closeable: true, label: 'lime' },
    { value: 'green', closeable: true, label: 'green' },
    { value: 'cyan', closeable: false, label: 'cyan' },
  ];

  const tagRender = (CustomTagProps: CustomTagProps) => {
    const { label, value, closeable, onClose } = CustomTagProps;
    return (
      <Tag value={value} closeable={closeable} onClose={onClose} color={value}>
        {label}
      </Tag>
    );
  };
  return (
    <div>
      <Demo.Page title='Select 选择器' description='下拉选择器。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              *弹出一个下拉菜单给用户选择操作，选择后内容填入。
              <br />
              <br />
              *当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。
            </>
          }
        ></Demo.Block>
        <Demo.Block title='基础用法' description={<>基础的单项选择器,defaultValue设置初始值，disabled可以禁用, option 的disabled 禁用单个option</>}>
          <div style={{ height: '200px' }}>
            <Space>
              <Select defaultValue='option1'>
                <Select.Option value='option1'>option1(101)</Select.Option>
                <Select.Option value='option2' disabled>
                  option2(101)
                </Select.Option>
                <Select.Option value='option3'>option3(101)</Select.Option>
              </Select>
              <Select
                defaultValue='option1'
                options={[
                  {
                    label: 'option1(label)',
                    value: 'option1',
                  },
                  {
                    label: 'option2(label)',
                    value: 'option2',
                  },
                  {
                    label: 'option3(label)',
                    value: 'option3',
                  },
                ]}
              ></Select>
              <Select defaultValue='option1' disabled>
                <Select.Option value='option1'>option1</Select.Option>
              </Select>
            </Space>
          </div>
        </Demo.Block>
        <Demo.Block title='带搜索框' description={<>展开后可对选项进行搜索。</>}>
          <div style={{ height: '200px' }}>
            <Space>
              <Select defaultValue='option1' showSearch>
                <Select.Option value='option1'>option1(101)</Select.Option>
                <Select.Option value='option2' disabled>
                  option2(101)
                </Select.Option>
                <Select.Option value='option3'>option3(101)</Select.Option>
              </Select>
              <Select
                style={{ width: '100%' }}
                showSearch
                filterOption={(searchValue: string, option: any) => option.value.includes(searchValue)}
                allowClear
                placeholder='请选择'
                options={[
                  {
                    label: 'option1(label)',
                    value: 'option1',
                  },
                  {
                    label: 'option2(label)',
                    value: 'option2',
                  },
                  {
                    label: 'option3(label)',
                    value: 'option3',
                  },
                ]}
              ></Select>
            </Space>
          </div>
        </Demo.Block>
        <Demo.Block title='多选' description={<>多选，从已有条目中选择</>}>
          <div style={{ height: '200px' }}>
            <Space>
              <Select mode='multiple' style={{ width: '100%' }} allowClear maxTagCount={2} placeholder='请选择'>
                <Select.Option value='option1'>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <img src='/icon_cn.svg' style={{ width: '34xp', height: '34px', marginRight: '10px' }} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>中国</div>
                  </div>
                </Select.Option>
                <Select.Option value='option2'>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <img src='/icon_us.svg' style={{ width: '34xp', height: '34px', marginRight: '10px' }} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>美国</div>
                  </div>
                </Select.Option>
                <Select.Option value='option3'>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <img src='/icon_gl.svg' style={{ width: '34xp', height: '34px', marginRight: '10px' }} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>全球</div>
                  </div>
                </Select.Option>
                <Select.Option value='option4'>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <img src='/icon_bl.svg' style={{ width: '34xp', height: '34px', marginRight: '10px' }} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>波兰</div>
                  </div>
                </Select.Option>
              </Select>
            </Space>
            <br></br>
            <Space>
              <Select
                mode='multiple'
                style={{ width: '100%' }}
                allowClear
                options={[
                  {
                    label: 'option1(label)',
                    value: 'option1',
                  },
                  {
                    label: 'option2(label)',
                    value: 'option2',
                  },
                  {
                    label: 'option3(label)',
                    value: 'option3',
                  },
                ]}
              ></Select>
            </Space>
            <br></br>
            <Space>
              <Select
                mode='multiple'
                style={{ width: '100%' }}
                defaultValue={['option1']}
                disabled
                allowClear
                options={[
                  {
                    label: 'option1(label)',
                    value: 'option1',
                  },
                  {
                    label: 'option2(label)',
                    value: 'option2',
                  },
                  {
                    label: 'option3(label)',
                    value: 'option3',
                  },
                ]}
              ></Select>
            </Space>
          </div>
        </Demo.Block>
        <Demo.Block title='不同尺寸' description={<>三种尺寸的选择器</>}>
          <div style={{ height: '150px' }}>
            <Select size='small'>
              <Select.Option value='option1'>option1</Select.Option>
              <Select.Option value='option2' disabled>
                option2
              </Select.Option>
              <Select.Option value='option3'>option3</Select.Option>
            </Select>
          </div>
        </Demo.Block>
        <Demo.Block>
          <div style={{ height: '150px' }}>
            <Select>
              <Select.Option value='option1'>option1</Select.Option>
              <Select.Option value='option2'>option2</Select.Option>
              <Select.Option value='option3'>option3</Select.Option>
            </Select>
          </div>
        </Demo.Block>
        <Demo.Block>
          <div style={{ height: '150px' }}>
            <Select size='large'>
              <Select.Option value='option1'>option1</Select.Option>
              <Select.Option value='option2'>option2</Select.Option>
              <Select.Option value='option3'>option3</Select.Option>
            </Select>
          </div>
        </Demo.Block>
        <Demo.Block title='自定义状态' description={<>使用 status 为 Select 添加状态，可选 error 或者 warning。</>}>
          <div style={{ height: '200px' }}>
            <Space>
              <Select style={{ width: '100%' }} status='error'>
                <Select.Option value='option1'>option1(101)</Select.Option>
                <Select.Option value='option2'>option2(101)</Select.Option>
                <Select.Option value='option3'>option3(101)</Select.Option>
              </Select>
            </Space>
            <br></br>
            <Space>
              <Select
                mode='multiple'
                style={{ width: '100%' }}
                status='warning'
                allowClear
                options={[
                  {
                    label: 'option1(label)',
                    value: 'option1',
                  },
                  {
                    label: 'option2(label)',
                    value: 'option2',
                  },
                  {
                    label: 'option3(label)',
                    value: 'option3',
                  },
                ]}
              ></Select>
            </Space>
          </div>
        </Demo.Block>
        <Demo.Block title='自定义选择标签' description={<>允许自定义选择标签的样式。</>}>
          <div style={{ height: '200px' }}>
            <Space>
              <Select mode='multiple' style={{ width: '100%' }} allowClear tagRender={tagRender} options={options}></Select>
            </Space>
          </div>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}