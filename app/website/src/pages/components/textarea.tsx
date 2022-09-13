import React, { useState } from 'react';
import { Button, Space, TextArea } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function TextareaPage() {
  const [value, setValue] = useState('controlled');
  return (
    <>
      <Demo.Page title='TextArea 多行输入框' description='用于输入多行文本信息'>
        <Demo.Block title='多行输入框' description='通过 rows 属性控制高度'>
          <TextArea placeholder='给你的作品写一个操作指南，并告诉大家如何操作' />
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过 disabled 属性设置禁用状态'>
          <TextArea placeholder='disabled' disabled />
        </Demo.Block>
        <Demo.Block title='字数提示' description='通过 maxLength 属性限定总输入字数，showCount 来显示可输入字数提示'>
          <TextArea defaultValue='论一个优秀的操作指南' maxLength={100} showCount />
        </Demo.Block>
        {/* <Demo.Block title='适应文本高度的文本域' description='autoSize 属性适用于 textarea 节点，并且只有高度会自动变化。'>
          <TextArea placeholder='Autosize height based on content lines' autoSize />
          <TextArea placeholder='Autosize height with minimum and maximum number of lines' autoSize={{ minRows: 2, maxRows: 6 }} />
          <TextArea value={value} onChange={setValue} placeholder='Controlled autosize' autoSize={{ minRows: 3, maxRows: 5 }} />
        </Demo.Block> */}
        <Demo.Block title='带删除图标' description='通过 showClear 属性设置移除图标，点击图标删除所有内容'>
          <TextArea defaultValue='论一个优秀的操作指南' showClear />
        </Demo.Block>
        <Demo.Block title='自定义状态' description='使用 status 为输入框添加状态，可选 error 或者 warning。'>
          <Space direction='vertical'>
            <TextArea status='error' placeholder='Error' />
            <TextArea status='warning' placeholder='Warning' />
          </Space>
        </Demo.Block>
        <Demo.Block title='受控组件' description='当传入 value 时，输入框将变成受控组件，必须配合 onChange 回调函数使用。如果不希望使用受控组件，请使用 defaultValue。'>
          <TextArea
            value={value}
            onChange={(value) => {
              console.log(value);
              setValue(value);
            }}
          />
          <br />
          <br />
          <Button onClick={() => setValue('new value')}>Change Value</Button>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

TextareaPage.getLayout = getLayout;
