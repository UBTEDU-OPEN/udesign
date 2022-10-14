import React from 'react';
import { Button, Result, Space } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { Img } from '../../components';
import { getLayout } from '../../demo/getLayout';

export default function ResultPage() {
  return (
    <>
      <Demo.Page title='Result 结果反馈' description='用于反馈一系列操作任务的处理结果。'>
        <Demo.Block title='何时使用' description='当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。' />
        <Demo.Block title='Success' description='成功的结果。'>
          <Result status='success' title='Successfully' subtitle='Your requirement has been successful' icon={<Img src='/icon_info.svg' alt='' />}>
            <Space justify='center'>
              <Button type='primary'>确认</Button>
              <Button type='default'>返回</Button>
            </Space>
          </Result>
        </Demo.Block>
        <Demo.Block title='Info' description='展示处理结果。'>
          <Result title='Your operation has been executed' icon={<Img src='/icon_info.svg' alt='' />}>
            <Button type='primary'>确认</Button>
          </Result>
        </Demo.Block>
        <Demo.Block title='Warning' description='警告类型的结果。'>
          <Result status='warning' title='There are some problems with your operation.' icon={<Img src='/icon_warning.svg' alt='' />}>
            <Button type='primary'>确认</Button>
          </Result>
        </Demo.Block>
        <Demo.Block title='403' description='你没有此页面的访问权限。'>
          <Result status='403' title='403' subtitle='Sorry, you are not authorized to access this page.' icon={<Img src='/icon_403.svg' alt='' />}>
            <Button type='primary'>返回主页</Button>
          </Result>
        </Demo.Block>
        <Demo.Block title='404' description='此页面未找到。'>
          <Result status='404' title='404' subtitle='Sorry, the page you visited does not exist.' icon={<Img src='/icon_404.svg' alt='' />}>
            <Button type='primary'>返回主页</Button>
          </Result>
        </Demo.Block>
        <Demo.Block title='500' description='服务器发生了错误。'>
          <Result status='500' title='500' subtitle='Sorry, something went wrong.' icon={<Img src='/icon_500.svg' alt='' />}>
            <Button type='primary'>返回主页</Button>
          </Result>
        </Demo.Block>
        <Demo.Block title='自定义 icon' description='自定义 icon'>
          <Result title='Great, we have done all the operations!' icon={<Img src='/icon_lion.svg' alt='' />}>
            <Button type='primary'>下一步</Button>
          </Result>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

ResultPage.getLayout = getLayout;
