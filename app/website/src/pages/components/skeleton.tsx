import React, { useState } from 'react';
import { Button, Space, Divider, Skeleton, Switch } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function SkeletonPage() {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Demo.Page title='Skeleton 骨架屏' description='在需要等待加载内容的位置提供一个占位图形组合。'>
        <Demo.Block title='基本'>
          <Skeleton size='small' />
        </Demo.Block>
        <Demo.Block title='动画效果' description='显示动画效果。'>
          <div className='mb-4'>
            <Switch
              defaultChecked={active1}
              onChange={(checked: boolean) => {
                setActive1(checked);
              }}
            />
          </div>
          <Skeleton active={active1} />
        </Demo.Block>
        <Demo.Block title='更复杂的组合'>
          <Skeleton active avatar paragraph={{ width: ['60%', '100%', '100%', '80%'], rows: 4 }} />
        </Demo.Block>
        <Demo.Block title='包含子组件' description='加载占位图包含子组件。'>
          <div className='mb-6'>
            <Button onClick={() => setLoading(!loading)}>loading:{String(loading)}</Button>
            <Button onClick={() => setActive(!active)}>active:{String(active)}</Button>
          </div>
          <Skeleton active={active} loading={loading}>
            <h4>This is the title</h4>
            <p>Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
          </Skeleton>
        </Demo.Block>
        <Demo.Block title='按钮头像文本标题段落' description='骨架头像、按钮、标题、段落和图像。'>
          <Space direction='vertical'>
            <Space>
              <Skeleton.Avatar />
              <Skeleton.Avatar shape={'square'} />
            </Space>
            <Space>
              <Skeleton.Button />
              <Skeleton.Button shape={'square'} />
              <Skeleton.Button shape={'circle'} />
            </Space>

            <Skeleton.Image />
            <Skeleton.Title />
            <Skeleton.Paragraph rows={1} />
            <Skeleton.Paragraph rows={2} width={['100%', 60]} />
          </Space>
        </Demo.Block>
        <Demo.Block title='图文用法' description='复杂的组合。'>
          <Space direction='vertical'>
            <Skeleton.Image width='280px' height='178px' />
            <div className='px-5 py-0'>
              <Space direction='vertical'>
                <Skeleton.Paragraph rows={3} width={[120, 240, 240]} size='small' />
              </Space>
            </div>
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space direction='vertical'>
            <div className='flex w-full'>
              <Skeleton.Avatar />
              <div className='grow ml-6'>
                <Space direction='vertical'>
                  <Skeleton.Paragraph rows={2} width={[120, 180]} size='small' />
                </Space>
              </div>
            </div>

            <Space direction='vertical'>
              <Skeleton.Paragraph rows={3} width={[120, 244, 244]} size='small' />
            </Space>
          </Space>
        </Demo.Block>
        <Demo.Block>
          <div className={`flex w-full mb-6`}>
            <Skeleton.Avatar />
            <div className='grow  ml-6'>
              <Space direction='vertical'>
                <Skeleton.Paragraph rows={3} width={['100%', '100%', '100%']} size='small' />
              </Space>
            </div>
          </div>
          <div className={`flex w-full mb-6`}>
            <Skeleton.Avatar />
            <div className='grow ml-6'>
              <Space direction='vertical'>
                <Skeleton.Paragraph rows={3} width={[220, '100%', '100%']} size='small' />
              </Space>
            </div>
          </div>
          <div className={`flex w-full mb-6`}>
            <Skeleton.Image width='152px' height='152px' />
            <div className='grow ml-6'>
              <Space direction='vertical'>
                <Skeleton.Paragraph rows={3} width={['100%', '100%', '100%']} size='small' />
              </Space>
            </div>
          </div>
          <div className={`flex w-full`}>
            <Skeleton.Image width='152px' height='152px' />
            <div className='grow ml-6'>
              <Space direction='vertical'>
                <Skeleton.Paragraph rows={3} width={[220, '100%', '100%']} size='small' />
              </Space>
            </div>
          </div>
        </Demo.Block>

        <Demo.Block title='列表用法' description='在列表组件中使用加载占位符。'>
          <div>
            <Space direction='vertical'>
              <div className='flex justify-between w-full items-end'>
                <Skeleton.Paragraph width={100} rows={1} />
                <Skeleton.Title size={'small'} />
              </div>
              <Divider />
              <Skeleton.Paragraph rows={2} width={['100%', '100%']} size='small' />
              <div className='flex'>
                <Skeleton.Avatar style={{ marginRight: '10px' }} size='small'></Skeleton.Avatar>
                <Skeleton.Paragraph rows={1} width={[120]} size='small'></Skeleton.Paragraph>
              </div>
              <Divider />
              <div className='flex justify-between w-full'>
                <div className='grow mr-6'>
                  <Space direction='vertical'>
                    <Skeleton.Paragraph rows={2} width={['100%', '100%']} size='small' />
                    <div className='flex'>
                      <Skeleton.Avatar style={{ marginRight: '10px' }} size='small'></Skeleton.Avatar>
                      <Skeleton.Paragraph rows={1} width={[120]} size='small'></Skeleton.Paragraph>
                    </div>
                  </Space>
                </div>
                <Skeleton.Image></Skeleton.Image>
              </div>
              <Divider />
              <Skeleton.Paragraph rows={2} width={['100%', '100%']} size='small' />
              <div className='flex'>
                <Skeleton.Avatar style={{ marginRight: '10px' }} size='small'></Skeleton.Avatar>
                <Skeleton.Paragraph rows={1} width={[120]} size='small'></Skeleton.Paragraph>
              </div>
              <Divider />
              <div className='flex justify-between w-full'>
                <div className='grow mr-6'>
                  <Space direction='vertical'>
                    <Skeleton.Paragraph rows={2} width={['100%', '100%']} size='small' />
                    <div className='flex'>
                      <Skeleton.Avatar style={{ marginRight: '10px' }} size='small'></Skeleton.Avatar>
                      <Skeleton.Paragraph rows={1} width={[120]} size='small'></Skeleton.Paragraph>
                    </div>
                  </Space>
                </div>
                <Skeleton.Image></Skeleton.Image>
              </div>
              <Divider />
            </Space>
          </div>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}
