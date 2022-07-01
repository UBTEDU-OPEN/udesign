import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Shape, Size } from '../../constants';

export type AvatarSize = Size | 'mini';
export type AvatarShape = Shape;

export const getAvatarSizeClass = (size: AvatarSize) => {
  let cls;
  switch (size) {
    case 'large':
      cls = 'w-20 h-20 text-4xl';
      break;

    case 'middle':
      cls = 'w-16 h-16 text-3xl';
      break;

    case 'small':
      cls = 'w-12 h-12 text-2xl';
      break;

    case 'mini':
      cls = 'w-8 h-8 text-xl';
      break;
  }
  return cls;
};

export const getAvatarShapeClass = (shape: AvatarShape) => {
  let cls;
  switch (shape) {
    case 'round':
      cls = 'rounded-full';
      break;

    case 'square':
      cls = '';
      break;

    default:
      cls = 'rounded';
      break;
  }
  return cls;
};

export type AvatarProps = {
  src?: string;
  icon?: ReactNode;
  size?: AvatarSize;
  shape?: AvatarShape;
} & NativeProps;

export const Avatar = ({ src, icon, size = 'middle', shape = 'default', className, children, ...restProps }: AvatarProps) => {
  const cls = classNames('inline-flex justify-center items-center overflow-hidden', !src ? 'bg-gray-200 text-white capitalize' : '', getAvatarSizeClass(size), getAvatarShapeClass(shape), className);

  const content = useMemo(() => {
    if (src) {
      return <img className='inline object-cover' src={src} alt='' />;
    } else if (icon) {
      return icon;
    } else {
      return children;
    }
  }, [src, icon, children]);

  return (
    <>
      <div className={cls}>{content}</div>
    </>
  );
};

Avatar.displayName = 'Avatar';
