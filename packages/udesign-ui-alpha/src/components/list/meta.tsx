import React, { ReactNode } from 'react';

export type MetaProps = {
  avatar?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
};

export const Meta = ({ avatar, title, description }: MetaProps) => {
  return (
    <div className='flex'>
      {avatar ? <div className='flex mr-2'>{avatar}</div> : null}
      <div className='flex-1'>
        <div className='text-gray-800'>{title}</div>
        {description ? <div className='text-sm text-gray-500'>{description}</div> : null}
      </div>
    </div>
  );
};
