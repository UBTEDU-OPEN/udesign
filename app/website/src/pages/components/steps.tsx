import React, { useState } from 'react';
import { Demo } from 'demo';
import { Button } from '@ubt/udesign-ui';
import { Steps, Toast } from '@ubt/udesign-ui-alpha';

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

export default function StepsPage() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
        <Demo.Block title='步骤切换' description='通常配合内容及按钮使用，表示一个流程的处理进度。'>
          <Steps mode='horizontal' current={current}>
            <Steps.Item title='Finished' />
            <Steps.Item title='In Progress' />
            <Steps.Item title='Waiting' />
          </Steps>
          <div className='h-40 my-5 bg-gray-100 rounded'>{steps[current].content}</div>
          <div className='steps-action'>
            {current < steps.length - 1 && (
              <Button type='primary' onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type='primary' onClick={() => Toast('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
