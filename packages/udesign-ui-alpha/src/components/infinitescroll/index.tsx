import React, { ReactNode, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';
import { NativeProps } from '../../utils';

export type InfiniteScrollProps = {
  useBodyScroll?: boolean; // 使用 html 的 body 作为滚动容器
  hasMore?: boolean;
  loadmore?: () => Promise<void>;
  threshold?: number; // 触发加载事件的滚动触底距离阈值，单位为像素
  loader?: ReactNode; // 指示器
} & NativeProps;

export const InfiniteScroll = ({ useBodyScroll, hasMore, loadmore, threshold = 250, loader = <LoadingOutlined />, className, children }: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentTarget = containerRef.current!;

  // const handleScroll = ({ currentTarget }: React.UIEvent<HTMLElement>) => {
  const handleScroll = () => {
    console.log('handlescroll');

    // console.log(
    //   'handlescroll',
    //   currentTarget.scrollHeight,
    //   currentTarget.clientHeight,
    //   currentTarget.scrollTop,
    //   threshold
    // );

    if (currentTarget.scrollTop + currentTarget.clientHeight + Number(threshold) >= currentTarget.scrollHeight) {
      if (hasMore) {
        loadmore?.();
      }
    }
  };

  useEffect(() => {
    if (useBodyScroll) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [useBodyScroll]);

  // useEffect(() => {
  //   if (!useBodyScroll && currentTarget) {
  //     currentTarget.addEventListener('scroll', handleScroll);
  //   }
  //   return () => currentTarget.removeEventListener('scroll', handleScroll);
  // }, [useBodyScroll, currentTarget]);

  const wrapperClass = classNames('w-full', className);

  return (
    <>
      <div className={wrapperClass} ref={containerRef}>
        {children}
        <div className='p-5 text-center text-gray-400'>{hasMore ? loader : '我是有底线的'}</div>
      </div>
    </>
  );
};

InfiniteScroll.displayName = 'InfiniteScroll';
