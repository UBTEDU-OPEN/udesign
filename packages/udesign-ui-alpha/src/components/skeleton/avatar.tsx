import classNames from 'classnames';
import React from 'react';
import { AvatarShape, AvatarSize, getAvatarSizeClass, getAvatarShapeClass } from '../avatar/avatar';

export interface AvatarProps {
  shape?: AvatarShape;
  size?: AvatarSize;
}

export const Avatar = ({ shape = 'round', size = 'middle' }: AvatarProps) => {
  const cls = classNames('bg-gray-200', getAvatarSizeClass(size), getAvatarShapeClass(shape));

  return (
    <>
      <div className={cls}></div>
    </>
  );
};

Avatar.displayName = 'Skeleton.Avatar';
