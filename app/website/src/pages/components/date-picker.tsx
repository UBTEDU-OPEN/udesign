import React from 'react';
import { Space, DatePicker } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

const { RangePicker } = DatePicker;

export default function DatePickerPage() {
  return (
    <>
      <Demo.Page title='DatePicker日期选择框' description='输入或选择日期的控件。'>
        <Demo.Block title='何时使用' description='当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。' />
        <Demo.Block title='基本使用'>
          <Space>
            <DatePicker
              format='YYYY/MM/DD'
              onChange={(e: string) => {
                console.log(e);
              }}
              placeHolder='请选择日期'
            ></DatePicker>
          </Space>
          <br />
          <Space>
            <RangePicker
              format='YYYY/MM/DD'
              onChange={(e: [string, string]) => {
                console.log(e);
              }}
              placeHolder={['开始日期', '结束日期']}
            ></RangePicker>
          </Space>
          <br />
          <Space>
            <DatePicker
              onChange={(e: string) => {
                console.log(e);
              }}
              placeHolder='请选择日期'
              showTime={true}
              showNow={true}
              style={{ width: '300px' }}
            ></DatePicker>
          </Space>
          <br />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

DatePickerPage.getLayout = getLayout;
