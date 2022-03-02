import React, { useState } from 'react';
import { Demo } from 'demo';
import { InfiniteScroll, List } from '@ubt/udesign-ui-alpha';

const demo = Array.from(Array(10).keys());

export default function InfinitescrollPage() {
  const [data, setData] = useState<number[]>(demo);
  const [hasMore, setHasMore] = useState(true);

  const loadmore = async () => {
    console.log('loadmore');

    setTimeout(() => {
      setData((state) => [...state, ...data]);
      if (data.length > 20) {
        setHasMore(false);
      }
    }, 2000);
  };

  return (
    <>
      <Demo.Page title='InfiniteScroll 无限滚动' description='当 hasMore 属性为 true 时，用户页面滚动到底部 threshold (默认为 250px)时，此组件会调用 loadMore 函数。'>
        <Demo.Block>
          <InfiniteScroll loadmore={loadmore} hasMore={hasMore} className='h-96 overflow-auto'>
            <List>
              {data.map((item, index) => (
                <List.Item key={index}>{item}</List.Item>
              ))}
            </List>
          </InfiniteScroll>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
