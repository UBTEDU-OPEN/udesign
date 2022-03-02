import React from 'react';

export type widthUnit = number | string;

export interface ParagraphProps {
  width?: widthUnit | Array<widthUnit>;
  rows?: number;
}

export const Paragraph = ({ width = ['100%', '100%', '60%'], rows = 3 }: ParagraphProps) => {
  const getWidth = (index: number) => {
    if (Array.isArray(width)) {
      return width[index];
    }
    if (rows === index + 1) {
      return width;
    }
    return undefined;
  };

  return (
    <>
      {[...Array(rows)].map((_, index) => {
        return <div key={index} className='mb-2 h-4 bg-gray-200 rounded' style={{ width: getWidth(index) }}></div>;
      })}
    </>
  );
};

Paragraph.displayName = 'Skeleton.Paragraph';
