import React from 'react';

export const RadioLight: React.FC<{ [key: string]: any }> = (props) => (
  <svg height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg' style={{ cursor: 'pointer' }}>
    <g fill='none' fillRule='evenodd'>
      <circle cx='20' cy='20' r='11' stroke='#7284fb' strokeWidth='2' />
      <circle cx='20' cy='20' fill='#7284fb' r='7' />
    </g>
  </svg>
);
