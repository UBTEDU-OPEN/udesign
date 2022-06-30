import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' stroke='currentColor' strokeWidth='3.333333' transform='translate(8 5.333333)'>
      <rect height='13.333333' rx='5.333333' width='10.666667' x='6.666667' />
      <path d='m24 30.6666667c0-6.627417-5.372583-12-12-12s-12 5.372583-12 12' strokeLinecap='round' />
    </g>
  </svg>
);

const UserOutlined = convertIcon(SvgComponent);
export default UserOutlined;

UserOutlined.displayName = 'UserOutlined';
