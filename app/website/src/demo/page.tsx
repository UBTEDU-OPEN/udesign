import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '@ubt/udesign-utils';

export type PageProps = {
  title?: string;
  description?: string;
  todo?: string;
} & NativeProps;

export const Page = ({ title, description, todo, children, className }: PageProps) => {
  const cls = classNames('mx-auto', className);
  return (
    <>
      <div className={cls}>
        {title ? <div className='text-3xl font-bold'>{title}</div> : null}
        {description ? <div className='text-gray-600 text-xl my-5'>{description}</div> : null}
        {todo ? <div className='text-indigo-600 my-5'>{todo}</div> : null}
        {children}
      </div>
    </>
  );
};

Page.displayName = 'Demo.Page';
