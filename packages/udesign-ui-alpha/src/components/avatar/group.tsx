import React from 'react';
import { NativeProps } from '../../utils';

export type GroupProps = NativeProps;

export const Group = ({ children }: GroupProps) => {
  return (
    <>
      <div className='flex -space-x-8'>{children}</div>
    </>
  );
};

Group.displayName = 'Avatar.Group';
