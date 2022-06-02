import React from 'react';
import classNames from 'classnames';
import { Avatar, AvatarProps } from './avatar';
import { Paragraph, ParagraphProps } from './paragraph';
import { Title, TitleProps } from './title';
import { NativeProps } from '../../utils';

export type SkeletonProps = {
  active?: boolean;
  avatar?: boolean | AvatarProps;
  loading?: boolean;
  paragraph?: boolean | ParagraphProps;
  title?: boolean | TitleProps;
} & NativeProps;

export const Skeleton = ({ active = false, avatar = false, loading = true, paragraph = true, title = true, children }: SkeletonProps) => {
  function getComponentProps<T>(prop: T | boolean | undefined): T | Record<string, never> {
    if (prop && typeof prop === 'object') {
      return prop;
    }
    return {};
  }

  const wrapperClass = classNames('flex w-full space-x-4', active ? 'animate-pulse' : '');

  return (
    <>
      {loading ? (
        <>
          <div className={wrapperClass}>
            {avatar ? <Avatar {...getComponentProps(avatar)} /> : null}
            <div className='flex-1 space-y-4'>
              {title ? <Title {...getComponentProps(title)} /> : null}
              {paragraph ? <Paragraph {...getComponentProps(paragraph)} /> : null}
            </div>
          </div>
        </>
      ) : (
        children
      )}
    </>
  );
};

Skeleton.displayName = 'Skeleton';
