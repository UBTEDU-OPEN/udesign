import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, toArray } from '../../utils';
import { Item } from './item';
import { BASE_CLASS_PREFIX } from '../../constants';
import { BreadcrumbContext } from './context';

const prefixCls = `${BASE_CLASS_PREFIX}-breadcrumb`;

export type BreadcrumbProps = {
  separator?: ReactNode; // 设置分隔符。默认值：\
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void; // 点击Breadcrumb时的回调函数。
} & NativeProps;

export const Breadcrumb = ({ separator = '\\', className, children, style, onClick }: BreadcrumbProps) => {
  const cls = classNames(prefixCls, className);

  return (
    <BreadcrumbContext.Provider
      value={{
        onClick,
        separator,
      }}
    >
      <div className={cls} style={style}>
        {children}
      </div>
    </BreadcrumbContext.Provider>
  );
};
Breadcrumb.displayName = 'Breadcrumb';
