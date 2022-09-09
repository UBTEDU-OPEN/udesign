import React from 'react';
import { Space, Calendar } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function CalendarPage() {
  return (
    <>
      <Demo.Page title='Calendar 日历' description='按照日历形式展示数据的容器。'>
        <Demo.Block title='何时使用' description='当数据是日期或按照日期划分时。目前支持年/月切换。' />
        <Demo.Block title='基本使用'>
          <Space>
            <Calendar
              style={{ width: ' 300px' }}
              onChange={(item) => {
                console.log(item);
              }}
            ></Calendar>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

CalendarPage.getLayout = getLayout;
