import React from 'react';
import { Space, TimePicker } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

const { RangePicker } = TimePicker;

export default function DatePickerPage() {
  return (
    <>
      <Demo.Page title='TimePicker时间选择框' description='输入或选择时间的控件。'>
        <Demo.Block title='何时使用' description='当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。' />
        <Demo.Block title='基本使用'>
          <Space>
            <TimePicker
              onChange={(e: string) => {
                console.log(e);
              }}
              placeHolder='请选择时间'
              showNow={true}
            ></TimePicker>
          </Space>
          <br />
          <Space></Space>
          <br />
          <RangePicker
            onChange={(e: [string, string]) => {
              console.log(e);
            }}
            placeHolder={['开始时间', '结束时间']}
            showNow={true}
          ></RangePicker>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

DatePickerPage.getLayout = getLayout;
