import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <g fill='currentColor' fillRule='evenodd'>
      <rect height='4' rx='2' transform='matrix(.70710678 -.70710678 .70710678 .70710678 -8.991378 20.292893)' width='38' x='1' y='19' />
      <rect height='4' rx='2' transform='matrix(-.70710678 -.70710678 -.70710678 .70710678 48.991378 20.292893)' width='38' x='1' y='19' />
    </g>
  </svg>
);

const CloseOutlined = convertIcon(SvgComponent);
export default CloseOutlined;

CloseOutlined.displayName = 'CloseOutlined';
