import React from 'react';
import { Breadcrumb, Space } from '@ubt/udesign-ui';
import { CopyOutlined, IdcardOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function BreadcrumbPage() {
  return (
    <>
      <Demo.Page title='Breadcrumb 面包屑' description='显示当前页面在系统层级结构中的位置，并能向上返回。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              *当系统拥有超过两级以上的层级结构时；
              <br />
              *当需要告知用户『你在哪里』时；
              <br />
              *当需要向上导航的功能时。
            </>
          }
        />
        <Demo.Block title='基础用法' description='最简单的面包屑。'>
          <Space size='large'>
            <Breadcrumb separator='\'>
              <Breadcrumb.Item>
                <a href='#'>Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='#'>Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href='#'>Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Space>
        </Demo.Block>
        <Demo.Block title='带有图标的面包屑' description='图标放在文字前面。'>
          <Space size='large'>
            <Breadcrumb separator='\'>
              <Breadcrumb.Item>
                <CopyOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item href=''>
                <IdcardOutlined style={{ marginRight: '5px' }} />
                <span> Application Center</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href=''>Application List</Breadcrumb.Item>
              <Breadcrumb.Item href=''>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Space>
        </Demo.Block>
        <Demo.Block title='分隔符' description='可自定义分隔符，提供4种建议样式。'>
          <Space size='large'>
            <Breadcrumb>
              <Breadcrumb.Item separator='\'>
                <a href=''>Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item separator='_'>
                <a href=''>Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item separator='>'>
                <a href=''>Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item separator='|'>
                <a href=''>Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

BreadcrumbPage.getLayout = getLayout;
