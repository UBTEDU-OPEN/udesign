import React from 'react';
import { MoneyCollectOutlined } from '@ant-design/icons';
import { Demo } from 'demo';
import { Avatar, List, SettingIcon } from '@ubt/udesign-ui-alpha';

const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.'];

export default function ListPage() {
  return (
    <>
      <Demo.Page title='List 列表' description='瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。' todo='集成滚动加载、下拉刷新'>
        <Demo.Block title='简单'>
          <List>
            <List.Item>1</List.Item>
            <List.Item>2</List.Item>
            <List.Item>3</List.Item>
          </List>
        </Demo.Block>
        <Demo.Block title='可点击的功能列表' description='添加onClick事件后，列表会有点击效果'>
          <List>
            <List.Item prefix={<MoneyCollectOutlined />} arrow onClick={() => {}}>
              children
            </List.Item>
            <List.Item prefix={<SettingIcon />} arrow onClick={() => {}}>
              children
            </List.Item>
          </List>
        </Demo.Block>
        <Demo.Block title='复杂布局'>
          <List>
            <List.Item prefix={<Avatar src='/demo.svg' />} title='Title' description='description' extra={<span>extra</span>} arrow />
          </List>
        </Demo.Block>
        <Demo.Block title='使用dataSource自定义列表内容'>
          <List dataSource={data} renderItem={(item, index) => <List.Item key={index}>{item}</List.Item>} />
        </Demo.Block>
        {/* <Demo.Block title='使用map自定义列表内容'>
          <List>
            {data.map((item, index) => (
              <List.Item key={index} extra={<span>extra</span>} arrow>
                <List.Item.Meta avatar={<Avatar src='/demo.png' />} title='title' description={item} />
              </List.Item>
            ))}
          </List>
        </Demo.Block> */}
      </Demo.Page>
    </>
  );
}
