import React from 'react';
import { Demo } from 'demo';
import { Select } from '@ubt/udesign-ui-alpha';

export default function ModalPage() {
  const options = [
    {
      text: 'Option1',
      value: '1',
    },
    {
      text: 'Option2',
      value: '2',
    },
  ];
  return (
    <>
      <Demo.Page title='Select 选择器' description='下拉选择器。'>
        <Demo.Block title='基础用法' description='通过 disabled 来禁用指定项。'>
          <Select>
            <Select.Item options={options}>全部商品</Select.Item>
            <Select.Item options={options}>筛选</Select.Item>
          </Select>
        </Demo.Block>
        <Demo.Block title='禁用菜单' description='通过 disabled 属性来禁用全部或者指定项。'>
          <Select>
            <Select.Item options={options}>全部商品</Select.Item>
            <Select.Item options={options} disabled>
              筛选
            </Select.Item>
          </Select>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
