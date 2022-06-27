import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' transform='translate(9 9)'>
      <path d='m6 3h10c1.6568542 0 3 1.34314575 3 3v10c0 1.6568542-1.3431458 3-3 3h-10c-1.65685425 0-3-1.3431458-3-3v-10c0-1.65685425 1.34314575-3 3-3z' stroke='currentColor' strokeWidth='2' />
      <rect fill='currentColor' height='8' rx='1' width='2' x='6' y='7' />
      <path d='m10 8v6h2.5c1.3807119 0 2.5-1.1192881 2.5-2.5v-1c0-1.38071187-1.1192881-2.5-2.5-2.5z' stroke='currentColor' strokeWidth='2' />
    </g>
  </svg>
);

const IdcardOutlined = convertIcon(SvgComponent);
export default IdcardOutlined;

IdcardOutlined.displayName = 'IdcardOutlined';
