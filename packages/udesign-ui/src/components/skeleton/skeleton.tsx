import React from 'react';
import classNames from 'classnames';
import { Avatar, AvatarProps } from './avatar';
import { Paragraph, ParagraphProps } from './paragraph';
import { Title, TitleProps } from './title';
import { NativeProps } from '../../utils';
import { Size } from '../../constants';
import { prefixCls } from './constants';

export type SkeletonProps = {
  active?: boolean; // 是否展示动画效果
  avatar?: boolean | AvatarProps; // 是否显示头像占位图
  loading?: boolean; // 为 true 时，显示占位图。反之则直接展示子组件
  paragraph?: boolean | ParagraphProps; // 是否显示段落占位图
  title?: boolean | TitleProps; // 是否显示标题占位图
  size?: Size; // type size small | middle | large  默认middle
} & NativeProps;

export const Skeleton = ({ size = 'middle', active = false, avatar = true, loading = true, paragraph = true, title = true, children, className, style }: SkeletonProps) => {
  function getComponentProps<T>(prop: T | boolean | undefined): T | Record<string, never> | { size: Size } {
    if (prop && typeof prop === 'object') {
      return { ...prop, size };
    }
    return { size };
  }

  const wrapperClass = classNames(
    prefixCls,
    `${prefixCls}-full`,
    {
      [`${prefixCls}-active`]: active,
    },
    className,
  );

  return (
    <>
      {loading ? (
        <>
          <div className={wrapperClass} style={style}>
            {avatar ? <Avatar {...getComponentProps(avatar)} /> : null}
            <div className={classNames(`${prefixCls}-grow`)}>
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
