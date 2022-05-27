import React, { useState } from 'react';
import { Switch } from '@ubt/udesign-ui-alpha';
import { Button, Space } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function SwitchPage() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Demo.Page title='Switch 开关' description='开关是用于切换两种互斥状态的交互形式'>
        <Demo.Block title='基础用法' description='使用 defaultChecked 来设置初始选中'>
          <Space>
            <Switch />
            <Switch defaultChecked />
          </Space>
        </Demo.Block>
        {/* <Demo.Block title='尺寸' description='使用 size 来设置尺寸，可选值 large, default, small'>
          <Space>
            <Switch size='large' />
            <Switch />
            <Switch size='small' />
          </Space>
        </Demo.Block> */}
        <Demo.Block title='禁用状态' description='通过 disabled 属性来禁用开关，禁用状态下开关不可点击。'>
          <Space>
            <Switch disabled />
            <Switch defaultChecked disabled />
          </Space>
        </Demo.Block>
        <Demo.Block title='加载状态' description='通过 loading 属性设置开关为加载状态，加载状态下开关不可点击。'>
          <Space>
            <Switch loading />
            <Switch defaultChecked loading />
          </Space>
        </Demo.Block>
        <Demo.Block title='带文本' description='可以通过 checkedText 与 uncheckedText 设置开关时的文本'>
          <Space>
            <Switch checkedText='开' uncheckedText='关' />
            <Switch defaultChecked checkedText='开启' uncheckedText='关闭' />
          </Space>
        </Demo.Block>
        <Demo.Block title='受控组件' description='组件是否选中完全取决于传入的 checked 值，配合 onChange 回调函数使用'>
          <Space>
            <Switch checked={checked} onChange={(value) => setChecked(value)} />
            <Button onClick={() => setChecked(!checked)}>{String(checked)}</Button>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
