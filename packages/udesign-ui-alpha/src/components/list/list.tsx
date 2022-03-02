import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

export type ListProps = {
  border?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  dataSource?: any[]; // 列表数据源
  renderItem?: (item: any, index: number) => ReactNode; // 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项
  // size?: ListSize;
} & NativeProps;

export const List = ({
  border = true,
  header,
  footer,
  // size = 'middle',
  dataSource = [],
  renderItem,
  children,
}: ListProps) => {
  const wrapperClass = classNames('w-full', border ? 'border' : '');

  return (
    <>
      <div className={wrapperClass}>
        {header ? (
          // <div className={classNames('border-b', getListSizeClass(size))}>
          <div className={classNames('border-b')}>{header}</div>
        ) : null}
        {/* {children} */}
        {dataSource.length ? dataSource.map((item, index) => renderItem?.(item, index)) : children}
        {/* {footer ? <div className={getListSizeClass(size)}>{footer}</div> : null} */}
        {footer ? <div className=''>{footer}</div> : null}
      </div>
    </>
  );
};

List.displayName = 'List';