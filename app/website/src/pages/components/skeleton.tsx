import React, { useState } from 'react';
import { Button, Space, Divider, Skeleton, Switch } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function SkeletonPage() {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
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
          <Space className='mb-10'>
            <Button type={loading ? 'primary' : 'default'} onClick={() => setLoading(!loading)}>
              加载占位图
            </Button>
            <Button type={active ? 'primary' : 'default'} onClick={() => setActive(!active)}>
              动画效果
            </Button>
          </Space>
          <Skeleton active={active} loading={loading}>
            <h4>This is the title</h4>
            <p>Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
          </Skeleton>
        </Demo.Block>
        <Demo.Block title='按钮头像文本标题段落' description='骨架头像、按钮、标题、段落和图像。'>
          <Space direction='vertical' align='start'>
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
          <div className='flex justify-center p-5'>
            <div className='bg-white pb-5 rounded-xl'>
              <Space direction='vertical' align='start'>
                <Skeleton.Image width='280px' height='178px' />
                <div className='px-5 py-0'>
                  <Space direction='vertical' align='start'>
                    <Skeleton.Paragraph rows={3} width={[120, 240, 240]} size='small' />
                  </Space>
                </div>
              </Space>
            </div>
          </div>
        </Demo.Block>
        <Demo.Block>
          <div className='flex justify-center p-5'>
            <div className='bg-white p-5 rounded-xl'>
              <Space direction='vertical' align='start'>
                <div className='flex w-full'>
                  <Skeleton.Avatar />
                  <div className='grow ml-6'>
                    <Space direction='vertical' align='start'>
                      <Skeleton.Paragraph rows={2} width={[120, 180]} size='small' />
                    </Space>
                  </div>
                </div>

                <Space direction='vertical' align='start'>
                  <Skeleton.Paragraph rows={3} width={[120, 244, 244]} size='small' />
                </Space>
              </Space>
            </div>
          </div>
        </Demo.Block>
        <Demo.Block>
          <div className='flex justify-center p-5'>
            <div className='bg-white p-5 rounded-xl' style={{ width: '700px' }}>
              <div className={`flex w-full mb-6`}>
                <Skeleton.Avatar />
                <div className='grow  ml-6'>
                  <Space direction='vertical' align='start'>
                    <Skeleton.Paragraph rows={3} width={['100%', '100%', '100%']} size='small' />
                  </Space>
                </div>
              </div>
              <div className={`flex w-full mb-6`}>
                <Skeleton.Avatar />
                <div className='grow ml-6'>
                  <Space direction='vertical' align='start'>
                    <Skeleton.Paragraph rows={3} width={[220, '100%', '100%']} size='small' />
                  </Space>
                </div>
              </div>
              <div className={`flex w-full mb-6`}>
                <Skeleton.Image width='152px' height='152px' />
                <div className='grow ml-6'>
                  <Space direction='vertical' align='start'>
                    <Skeleton.Paragraph rows={3} width={['100%', '100%', '100%']} size='small' />
                  </Space>
                </div>
              </div>
              <div className={`flex w-full`}>
                <Skeleton.Image width='152px' height='152px' />
                <div className='grow ml-6'>
                  <Space direction='vertical' align='start'>
                    <Skeleton.Paragraph rows={3} width={[220, '100%', '100%']} size='small' />
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </Demo.Block>

        <Demo.Block title='列表用法' description='在列表组件中使用加载占位符。'>
          <div className='mb-4'>
            <Switch
              defaultChecked={active2}
              onChange={(checked: boolean) => {
                setActive2(checked);
              }}
            />
          </div>

          <div className='flex justify-center p-5'>
            <div className='bg-white p-5 rounded-xl' style={{ width: '700px' }}>
              {active2 ? (
                <Space direction='vertical' align='start'>
                  <div className='flex justify-between w-full items-end'>
                    <div style={{ color: '#25303F', fontSize: '20px' }}>帖子</div>
                    <div>
                      最新 <span style={{ color: '#5E69E9' }}>最热</span>
                    </div>
                  </div>
                  <Divider />
                  <div style={{ color: '#25303F', fontSize: '18px' }}>帖子标题帖子标题帖子标题帖子标题，帖子标题帖子标题帖子标题显示到最后一…</div>
                  <div>小伙子我看你骨骼清奇，天庭饱满，并非凡人，乃是百年不遇的奇才，我们公会缺人150Q币，来不来？</div>
                  <div className='flex'>
                    <img style={{ width: '26px', height: '26px', borderRadius: '100%', marginRight: '10px' }} src='https://ubtrobot-edu.oss-cn-shenzhen.aliyuncs.com/timg%2Cjpg_1606101400880' />
                    <div style={{ lineHeight: '26px' }}>超级小熊布迪</div>
                  </div>
                  <Divider />
                  <div className='flex justify-between w-full'>
                    <div className='grow mr-6'>
                      <Space direction='vertical' align='start'>
                        <div style={{ color: '#25303F', fontSize: '18px' }}>帖子标题帖子标题帖子标题帖子标题，帖子标题…</div>
                        <div>小伙子我看你骨骼清奇，天庭饱满，并非凡人，乃是，来不来？</div>
                        <div className='flex'>
                          <img style={{ width: '26px', height: '26px', borderRadius: '100%', marginRight: '10px' }} src='https://ubtrobot-edu.oss-cn-shenzhen.aliyuncs.com/timg%2Cjpg_1606101400880' />
                          <div style={{ lineHeight: '26px' }}>超级小熊布迪</div>
                        </div>
                      </Space>
                    </div>
                    <img style={{ width: '162px', borderRadius: '4px' }} src='https://ubtrobot-edu.oss-cn-shenzhen.aliyuncs.com/activity/aPw2GoflP8-1654518271841_416x249@1x.jpg' alt='' />
                  </div>
                  <Divider />
                  <div style={{ color: '#25303F', fontSize: '18px' }}>正经帖子标题</div>
                  <div>正经帖子正文，至少8个字以上</div>
                  <div className='flex'>
                    <img style={{ width: '26px', height: '26px', borderRadius: '100%', marginRight: '10px' }} src='https://ubtrobot-edu.oss-cn-shenzhen.aliyuncs.com/timg%2Cjpg_1606101400880' />
                    <div style={{ lineHeight: '26px' }}>超级小熊布迪</div>
                  </div>
                  <Divider />
                  <div className='flex justify-between w-full'>
                    <div className='grow mr-6'>
                      <Space direction='vertical' align='start'>
                        <div style={{ color: '#25303F', fontSize: '18px' }}>正经帖子标题</div>
                        <div>正经帖子正文，至少8个字以上。还是带封面的，封面截取视频的。</div>
                        <div className='flex'>
                          <img style={{ width: '26px', height: '26px', borderRadius: '100%', marginRight: '10px' }} src='https://ubtrobot-edu.oss-cn-shenzhen.aliyuncs.com/timg%2Cjpg_1606101400880' />
                          <div style={{ lineHeight: '26px' }}>超级小熊布迪</div>
                        </div>
                      </Space>
                    </div>
                    <img style={{ width: '162px', borderRadius: '4px' }} src='https://ubtrobot-edu.oss-cn-shenzhen.aliyuncs.com/activity/aPw2GoflP8-1654518271841_416x249@1x.jpg' alt='' />
                  </div>
                  <Divider />
                </Space>
              ) : (
                <Space direction='vertical' align='start'>
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
                      <Space direction='vertical' align='start'>
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
                      <Space direction='vertical' align='start'>
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
              )}
            </div>
          </div>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}
