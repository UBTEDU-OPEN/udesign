import React, { useState } from 'react';
import { Button } from '@ubt/udesign-ui';
import { Checkbox } from '@ubt/udesign-ui-alpha';
import { Demo } from '../../demo';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  const optionsWithDisabled = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C', disabled: true },
  ];
  return (
    <>
      <Demo.Page title='Checkbox 复选框' description='用于在选中和非选中状态之间进行切换。'>
        <Demo.Block title='基础用法' description='通过 defaultChecked 指定复选框的初始勾选状态。'>
          <Checkbox defaultChecked>复选框</Checkbox>
        </Demo.Block>
        <Demo.Block title='辅助文本' description='通过 extra 设置辅助文本，可以是任意类型的 ReactNode'>
          <Checkbox extra='勾选即表示您同意该协议'>复选框</Checkbox>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过设置 disabled 属性可以禁用复选框。'>
          <Checkbox disabled>复选框</Checkbox>
          <Checkbox defaultChecked disabled>
            复选框
          </Checkbox>
        </Demo.Block>
        {/* <Demo.Block title='形状' description='通过设置 round 可以将复选框的形状变成圆形。'>
          <Checkbox round>复选框</Checkbox>
        </Demo.Block> */}
        <Demo.Block title='受控组件' description='组件是否选中完全取决于传入的 checked 值，配合 onChange 回调函数使用'>
          <Checkbox checked={checked} onChange={(value) => setChecked(value)} onClick={() => console.log('onClick')}>
            复选框
          </Checkbox>
          <Button onClick={() => setChecked(!checked)}>{String(checked)}</Button>
        </Demo.Block>
        <Demo.Block title='复选框组' description='通过在 CheckboxGroup 内部放置 Checkbox 元素，可以声明 Checkbox 组'>
          <Checkbox.Group defaultValue={['A']}>
            <Checkbox>A</Checkbox>
            <Checkbox>B</Checkbox>
            <Checkbox disabled>C</Checkbox>
          </Checkbox.Group>
        </Demo.Block>
        <Demo.Block title='复选框组（数组方式）' description='复选框组可以通过 options 属性生成 Checkbox。'>
          <Checkbox.Group options={['A', 'B', 'C']} onChange={(value) => console.log(value)} />
          <Checkbox.Group options={['A', 'B', 'C']} disabled />
          <Checkbox.Group options={optionsWithDisabled} defaultValue={['A']} />
        </Demo.Block>
        <Demo.Block title='垂直排列' description='将 vertical 属性设置为 true 后，复选框组会变成垂直排列。'>
          <Checkbox.Group options={['A', 'B', 'C']} vertical={true} />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
