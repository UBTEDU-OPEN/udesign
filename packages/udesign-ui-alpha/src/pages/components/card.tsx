import React from 'react';
import { Demo } from 'demo';
import { Card, Button, SettingIcon, MoreIcon, HeartIcon, Space } from '@ubt/udesign-ui-alpha';

export default function CardPage() {
  return (
    <>
      <Demo.Page title='Card 卡片' description='常规的卡片容器，承载标题、段落、图片、列表等内容。'>
        <Demo.Block title='基础卡片' description='基础卡片包含标题、内容等部分。'>
          <Card title='Card title' extra='更多' style={{ maxWidth: 360 }}>
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </Card>
        </Demo.Block>
        <Demo.Block title='简洁卡片' description='卡片只设置内容区域。'>
          <Card style={{ maxWidth: 360 }}>Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</Card>
        </Demo.Block>
        <Demo.Block title='封面' description='使用 cover 属性设置封面。'>
          <Card style={{ maxWidth: 360 }} cover={<img className='object-cover w-full h-48' alt='example' src='/demo.jpg' />}>
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </Card>
        </Demo.Block>
        <Demo.Block background title='边框' description='使用 border 设置 Card 是否有外边框，默认为 true 。'>
          <Card title='Card title' border={false} style={{ maxWidth: 360 }}>
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </Card>
        </Demo.Block>
        <Demo.Block title='阴影' description='使用 shadow 设置显示阴影的时机，可选值为: hover（hover 时显示阴影）、always（始终显示阴影），如果不设置该属性则没有阴影。'>
          <Card style={{ maxWidth: 360 }} shadow='always'>
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </Card>
        </Demo.Block>
        <Demo.Block title='嵌套' description='卡片内部可以嵌套其他卡片。'>
          <Card title='Card title'>
            <Card title='Card title'>Inner Card content</Card>
            <br />
            <Card title='Card title'>Inner Card content</Card>
          </Card>
        </Demo.Block>
        <Demo.Block title='更多内容展示' description='通过 footer 属性设置卡片底部内容'>
          <Card
            title='Card title'
            style={{ maxWidth: 360 }}
            cover={<img className='object-cover w-full h-48' alt='example' src='/demo.jpg' />}
            footer={
              <Space className='divide-x divide-gray-200 cursor-pointer' justify='evenly'>
                <div className='py-4 px-2 flex-1 flex items-center justify-center' onClick={() => alert('SettingIcon clicked')}>
                  <SettingIcon className='text-gray-500 text-xl' />
                </div>
                <div className='py-4 px-2 flex-1 flex items-center justify-center' onClick={() => alert('HeartIcon clicked')}>
                  <HeartIcon className='text-gray-500 text-xl' />
                </div>
                <div className='py-4 px-2 flex-1 flex items-center justify-center' onClick={() => alert('MoreIcon clicked')}>
                  <MoreIcon className='text-gray-500 text-xl' />
                </div>
              </Space>
            }
          >
            Inner Card content
            <Space className='pt-5' justify='end'>
              <Button type='default'>精选案例</Button>
              <Button type='primary'>开始使用</Button>
            </Space>
          </Card>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
