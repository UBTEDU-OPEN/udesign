import classNames from 'classnames';
import React from 'react';
import { widthUnit } from './paragraph';

export interface TitleProps {
  width?: widthUnit;
}

export const Title = ({ width = '38%' }: TitleProps) => {
  const cls = classNames('mb-4 h-4 bg-gray-200 rounded');

  return (
    <>
      <div className={cls} style={{ width }}></div>
    </>
  );
};

Title.displayName = 'Skeleton.Title';
