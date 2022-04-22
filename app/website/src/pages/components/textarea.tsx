import React, { useState } from 'react';
import { Demo } from 'demo';
import { Button, Textarea } from '@ubt/udesign-ui-alpha';

export default function TextareaPage() {
  const [value, setValue] = useState('Hi');
  return (
    <>
      <Demo.Page title='Textarea 多行输入框' description='用于输入多行文本信息'>
        <Demo.Block title='基础用法' description='通过 rows 属性控制高度'>
          <Textarea placeholder='请输入内容' />
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过 disabled 属性设置禁用状态'>
          <Textarea placeholder='disabled' disabled />
        </Demo.Block>
        <Demo.Block title='字数统计' description='通过设置 maxCount 属性可以进行字数限制并显示字数统计。'>
          <Textarea placeholder='请输入内容' />
        </Demo.Block>
        <Demo.Block title='可清空' description='通过 clearable 属性设置移除图标，点击图标删除所有内容'>
          <Textarea defaultValue='Hi' clearable />
        </Demo.Block>
        <Demo.Block title='受控组件' description='Textarea 值完全取决于传入的 value 值，配合 onChange 回调函数使用'>
          <Textarea value={value} />
          <br />
          <br />
          <Button onClick={() => setValue('new value')}>改值</Button>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
