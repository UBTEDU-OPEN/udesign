import React from 'react';
import { Demo } from 'demo';
import { Pagination } from '@ubt/udesign-ui';

export default function PaginationPage() {
  return (
    <>
      <Demo.Page title='Pagination 分页' description='采用分页的形式分隔长列表，每次只加载一个页面。'>
        <Demo.Block title='基础用法' description='常规分页用法'>
          <Pagination total={500} />
        </Demo.Block>
        <Demo.Block title='带缩略分页' description='一般用于超过10页面，或更多分页时。' todo='依赖 select 组件'>
          <Pagination total={500} showSizeChanger />
        </Demo.Block>
        <Demo.Block title='跳转页面' description='跳转至指定页面。'>
          <Pagination total={500} showQuickJumper />
        </Demo.Block>
        <Demo.Block title='总数' description='通过设置 showTotal 展示总共有多少数据。'>
          <Pagination total={500} showTotal />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
