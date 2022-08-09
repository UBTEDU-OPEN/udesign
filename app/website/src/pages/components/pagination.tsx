import React, { useState } from 'react';
import { Button, Pagination, Space } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function PaginationPage() {
  const [total, setTotal] = useState(500);

  return (
    <>
      <Demo.Page title='Pagination 分页' description='采用分页的形式分隔长列表，每次只加载一个页面。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              *当加载/渲染所有数据将花费很多时间时；
              <br />
              *当超过1页，需要切换页码浏览数据。
            </>
          }
        />
        <Demo.Block title='基础用法' description='常规分页用法'>
          <Pagination total={500} />
        </Demo.Block>
        <Demo.Block title='翻页文本' description='通过 prevText 指定上一页文本，nextText 指定下一页文本'>
          <Pagination total={500} prevText='上一页' nextText='下一页' />
        </Demo.Block>
        {/* <Demo.Block title='带缩略分页' description='一般用于超过10页面，或更多分页时。' todo='依赖 select 组件'>
          <Pagination total={500} showSizeChanger />
        </Demo.Block> */}
        <Demo.Block title='跳转页面' description='跳转至指定页面。'>
          <Pagination total={500} showQuickJumper />
        </Demo.Block>
        <Demo.Block title='总数' description='通过设置 showTotal 展示总共有多少数据。'>
          <Pagination total={500} showTotal />
        </Demo.Block>
        <Demo.Block title='动态更新' description='响应外部 total 变化'>
          <Space>
            Total:
            <Button type={total === 100 ? 'primary' : 'default'} onClick={() => setTotal(100)}>
              100
            </Button>
            <Button type={total === 500 ? 'primary' : 'default'} onClick={() => setTotal(500)}>
              500
            </Button>
          </Space>
          <br />
          <br />
          <Pagination total={total} />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
