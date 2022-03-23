import React from 'react';
import { Demo } from 'demo';
import { Steps } from '@ubt/udesign-ui-alpha';

export default function StepsPage() {
  return (
    <>
      <Demo.Page title='Steps 步骤条' description='引导用户按照流程完成任务的导航条。'>
        <Demo.Block title='基本用法' description='简单的步骤条。'>
          <Steps mode='horizontal' current={1}>
            <Steps.Item title='Finished' description='This is a description.' />
            <Steps.Item title='In Progress' description='This is a description.' />
            <Steps.Item title='Waiting' description='This is a description.' />
          </Steps>
        </Demo.Block>
        <Demo.Block title='不带描述的步骤条'>
          <Steps mode='horizontal' current={1}>
            <Steps.Item title='Finished' />
            <Steps.Item title='In Progress' />
            <Steps.Item title='Waiting' />
          </Steps>
        </Demo.Block>
        <Demo.Block title='竖直方向的步骤条' description='通过设置 mode，使用竖直方向的步骤条'>
          <Steps mode='vertical' current={1}>
            <Steps.Item title='Finished' description='This is a description.' />
            <Steps.Item title='In Progress' description='This is a description.' />
            <Steps.Item title='Waiting' description='This is a description.' />
          </Steps>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
