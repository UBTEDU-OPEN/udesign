import React, { useState } from 'react';
import { Steps, Button, Toast } from '@ubt/udesign-ui';
import { SearchOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';

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
      <Demo.Page title='Steps 步骤条' description='分步骤引导用户按照流程完成任务的导航条。'>
        <Demo.Block title='何时使用' description='当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。' />
        <Demo.Block title='基本用法' description='常规步骤条用法。'>
          <Steps current={1}>
            <Steps.Item title='Finished' description='This is a description.' />
            <Steps.Item title='In Progress' description='This is a description.' />
            <Steps.Item title='Waiting' description='This is a description.' />
          </Steps>
        </Demo.Block>
        <Demo.Block title='不带描述的步骤条' description='简化版的步骤条，通过不设置 description 启用。'>
          <Steps current={1}>
            <Steps.Item title='Finished' />
            <Steps.Item title='In Progress' />
            <Steps.Item title='Waiting' />
          </Steps>
        </Demo.Block>
        <Demo.Block title='步骤条的状态' description='通过设置 Steps.Item 的 status 属性，可以自定义每个 step 的状态'>
          <Steps current={1}>
            <Steps.Item title='Finished' />
            <Steps.Item title='In Progress' status='error' />
            <Steps.Item title='In Progress' status='warning' />
            <Steps.Item title='Waiting' />
          </Steps>
        </Demo.Block>
        <Demo.Block title='虚线步骤条' description='通过设置 dash 属性，可以使用虚线。'>
          <Steps current={1} dashed>
            <Steps.Item title='Finished' />
            <Steps.Item title='In Progress' />
            <Steps.Item title='Waiting' />
          </Steps>
        </Demo.Block>
        <Demo.Block title='带图标的步骤条' description='通过设置 icon 属性，可以启用自定义图标。'>
          <Steps current={1} type='custom'>
            <Steps.Item title='创建数据集' icon={<SearchOutlined />} />
            <Steps.Item title='训练' icon={<SearchOutlined />} />
            <Steps.Item title='预测' icon={<SearchOutlined />} />
          </Steps>
        </Demo.Block>
        <Demo.Block title='步骤切换' description='通常配合内容及按钮使用，表示一个流程的处理进度。'>
          <Steps current={current}>
            <Steps.Item title='First' />
            <Steps.Item title='Second' />
            <Steps.Item title='Last' />
          </Steps>
          <div className='h-40 my-5 bg-gray-100 rounded flex items-center justify-center'>{steps[current].content}</div>
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
