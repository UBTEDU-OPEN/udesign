import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <mask id='a' fill='#fff'>
      <rect fill='#fff' fillRule='evenodd' height='20' rx='10' width='20' />
    </mask>
    <g fill='none' fillRule='evenodd' transform='translate(10 10)'>
      <rect height='18.5' rx='9.25' stroke='currentColor' strokeWidth='1.5' width='18.5' x='.75' y='.75' />
      <g fill='currentColor' mask='url(#a)'>
        <rect height='1.25' rx='.625' transform='matrix(.70710678 -.70710678 .70710678 .70710678 2.48699 10.183058)' width='12.5' x='-1.25' y='5' />
        <rect height='1.25' rx='.625' transform='matrix(-.70710678 -.70710678 -.70710678 .70710678 17.51301 10.183058)' width='12.5' x='-1.25' y='5' />
      </g>
    </g>
  </svg>
);

const CloseCircleOutlined = convertIcon(SvgComponent);
export default CloseCircleOutlined;

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
