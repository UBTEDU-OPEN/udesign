import React from 'react';

export const RadioNormalDisabled: React.FC<{ [key: string]: any }> = (props) => (
  <svg height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg' style={{ cursor: 'not-allowed' }}>
    <g fill='none' fillRule='evenodd' stroke='#e9e9ec' strokeWidth='2'>
      <circle cx='20' cy='20' r='11' />
      <circle cx='20' cy='20' fill='#f2f4fa' r='11' />
    </g>
  </svg>
);
