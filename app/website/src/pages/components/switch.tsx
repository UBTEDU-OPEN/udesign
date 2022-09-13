import React from 'react';
import { Space, Switch } from '@ubt/udesign-ui';
import { CloseOutlined, CheckOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function SwitchPage() {
  return (
    <>
      <Demo.Page title='Switch 开关' description='开关选择器。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              *需要表示开关状态或两种状态之间的切换时；
              <br />
              *和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
            </>
          }
        />
        <Demo.Block title='基础用法' description='默认的开关'>
          <Space>
            <Switch defaultChecked />
          </Space>
        </Demo.Block>
        <Demo.Block title='不可用状态' description='开关不可用状态'>
          <Space>
            <Switch disabled />
          </Space>
        </Demo.Block>
        <Demo.Block title='带有文字' description='开关中带有文字'>
          <Space direction='vertical' align='start'>
            <Switch defaultChecked checkedText='开启' uncheckedText='关闭' />
            <Switch checkedText='开启' uncheckedText='关闭' />
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space direction='vertical' align='start'>
            <Switch defaultChecked checkedText='1' uncheckedText='0' />
            <Switch checkedText='1' uncheckedText='0' />
          </Space>
        </Demo.Block>
        <Demo.Block title='带有图标' description='开关中带有图标'>
          <Space direction='vertical' align='start'>
            <Switch defaultChecked checkedText={<CheckOutlined />} uncheckedText={<CloseOutlined />} />
            <Switch checkedText={<CheckOutlined />} uncheckedText={<CloseOutlined />} />
          </Space>
        </Demo.Block>
        <Demo.Block title='其它尺寸' description='两种大小的开关。'>
          <Space direction='vertical' align='start'>
            <Switch defaultChecked />
            <Switch defaultChecked size='small' />
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

SwitchPage.getLayout = getLayout;
