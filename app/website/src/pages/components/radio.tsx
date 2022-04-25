import React, { useState } from 'react';
import { Demo } from 'demo';
import { Button } from '@ubt/udesign-ui';
import { Radio } from '@ubt/udesign-ui-alpha';

export default function RadioPage() {
  const [checked, setChecked] = useState(false);

  // const optionsWithDisabled = [
  //   { label: 'A', value: 'A' },
  //   { label: 'B', value: 'B' },
  //   { label: 'C', value: 'C', disabled: true },
  // ];

  return (
    <>
      <Demo.Page title='Radio 单选框' description='用于在选中和非选中状态之间进行切换。'>
        <Demo.Block title='基础用法' description='通过 defaultChecked 指定单选框的初始勾选状态。'>
          <Radio>单选框</Radio>
          <Radio defaultChecked>单选框</Radio>
        </Demo.Block>
        <Demo.Block title='辅助文本' description='通过 extra 设置辅助文本，可以是任意类型的 ReactNode'>
          <Radio extra='勾选即表示您同意该协议'>单选框</Radio>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过设置 disabled 属性可以禁用单选框。'>
          <Radio disabled>单选框</Radio>
          <Radio defaultChecked disabled>
            单选框
          </Radio>
        </Demo.Block>
        {/* <Demo.Block title='自定义形状' description='将 shape 属性设置为 round，单选框的形状会变成方形。'>
          <Radio>单选框</Radio>
          <Radio round>单选框</Radio>
        </Demo.Block> */}
        <Demo.Block title='受控组件' description='组件是否选中完全取决于传入的 checked 值，配合 onChange 回调函数使用'>
          <Radio checked={checked} onChange={(value) => setChecked(value)} onClick={() => console.log('onClick')}>
            单选框
          </Radio>
          <Button onClick={() => setChecked(!checked)}>{String(checked)}</Button>
        </Demo.Block>
        <Demo.Block title='单选组合' description='一组互斥的 Radio 配合使用'>
          <Radio.Group options={['A', 'B', 'C']} />
        </Demo.Block>
        <Demo.Block title='垂直排列' description='将 vertical 属性设置为 true 后，单选框组会变成垂直排列。'>
          <Radio.Group options={['A', 'B', 'C']} vertical={true} />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
