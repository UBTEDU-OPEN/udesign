import React from 'react';

export const CheckboxLightDisabled: React.FC<{ [key: string]: any }> = () => (
  <svg height='40' viewBox='0 0 40 40' width='40' xmlns='http://www.w3.org/2000/svg' style={{ cursor: 'not-allowed' }}>
    <defs>
      <rect id='a' height='24' rx='12' width='24' />
      <mask id='b' fill='#fff'>
        <use fill='#fff' fillRule='evenodd' href='#a' />
      </mask>
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(-93 -36)'>
      <path d='m6 .5c-3.03756612 0-5.5 2.46243388-5.5 5.5v100c0 3.037566 2.46243388 5.5 5.5 5.5h1348c3.03757 0 5.5-2.462434 5.5-5.5v-100c0-3.03756612-2.46243-5.5-5.5-5.5z' fill='#f2f4fa' fillOpacity='.274796' stroke='#7284fb' />
      <g transform='translate(101 44)'>
        <use fill='#f2f4fa' stroke='#e9e9ec' strokeWidth='2' href='#a' />
        <path
          d='m7.14644661 12.3535534h10.99999999c.5522848 0 1 .4477152 1 1 0 .5522847-.4477152 1-1 1h-11.99999999c-.55228475 0-1-.4477153-1-1v-6.00000001c0-.55228475.44771525-1 1-1s1 .44771525 1 1z'
          fill='#d4d4da'
          mask='url(#b)'
          transform='matrix(.70710678 -.70710678 .70710678 .70710678 -3.763456 11.621321)'
        />
      </g>
    </g>
  </svg>
);
