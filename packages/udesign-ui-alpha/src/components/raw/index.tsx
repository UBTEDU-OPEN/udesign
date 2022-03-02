import React, { ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { NativeProps } from '../../utils';

export type RawProps = NativeProps;

export const Raw = ({ children }: RawProps) => {
  const rawMarkup = reactElementToJSXString(children);
  console.log(rawMarkup);
  return (
    <div className='bg-gray-100'>
      <pre>
        <code>{rawMarkup}</code>
      </pre>
    </div>
  );
};

Raw.displayName = 'Raw';
