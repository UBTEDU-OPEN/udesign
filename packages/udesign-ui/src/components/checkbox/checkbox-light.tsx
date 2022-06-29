import React from 'react';

export const CheckboxLight: React.FC<{ [key: string]: any }> = () => (
  <svg height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg' style={{ cursor: 'pointer' }}>
    <defs>
      <rect id='a' height='24' rx='12' width='24' />
      <mask id='b' fill='#fff'>
        <use fill='#fff' fillRule='evenodd' href='#a' />
      </mask>
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(8 6)'>
      <use fill='#7284fb' href='#a' />
      <path
        d='m7.14644661 12.3535534h10.99999999c.5522848 0 1 .4477152 1 1 0 .5522847-.4477152 1-1 1h-11.99999999c-.55228475 0-1-.4477153-1-1v-6.00000001c0-.55228475.44771525-1 1-1s1 .44771525 1 1z'
        fill='#fff'
        mask='url(#b)'
        transform='matrix(.70710678 -.70710678 .70710678 .70710678 -3.763456 11.621321)'
      />
    </g>
  </svg>
);
