import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' stroke='currentColor' strokeWidth='2' transform='translate(11 8)'>
      <rect height='10' rx='4' width='8' x='5' />
      <path d='m18 23c0-4.9705627-4.0294373-9-9-9-4.97056275 0-9 4.0294373-9 9' strokeLinecap='round' />
    </g>
  </svg>
);

const UserOutlined = convertIcon(SvgComponent);
export default UserOutlined;

UserOutlined.displayName = 'UserOutlined';
