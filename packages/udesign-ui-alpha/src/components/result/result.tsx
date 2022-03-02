import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Mode } from '../../constants';

export type ResultProps = {
  image?: ReactNode | string; // 占位图
  title?: ReactNode;
  description?: ReactNode;
  mode?: Mode;
} & NativeProps;

export const Result = ({ image, title, description, mode = 'vertical', className, style, children }: ResultProps) => {
  const isVertical = mode === 'vertical';
  const cls = classNames('flex flex-col items-center justify-center', className);
  return (
    <div className={cls} style={style}>
      {image ? <div className='flex justify-center'>{typeof image === 'string' ? <img src={image} alt='' draggable='false' /> : image}</div> : null}
      <div className={classNames(isVertical ? 'mt-6' : 'ml-6')}>
        {title ? <h4 className={classNames('text-2xl font-semibold', isVertical ? 'text-center' : '')}>{title}</h4> : null}
        {description ? <div className={classNames('mt-4 text-gray-500', isVertical ? 'text-center' : '')}>{description}</div> : null}
        {children ? <div className={classNames('mt-4', isVertical ? 'text-center' : '')}>{children}</div> : null}
      </div>
    </div>
  );
};

Result.displayName = 'Result';
