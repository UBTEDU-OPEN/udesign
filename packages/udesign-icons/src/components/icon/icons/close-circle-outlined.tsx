import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <mask id='a' fill='#fff'>
      <rect fill='#fff' fillRule='evenodd' height='35.555556' rx='17.777778' width='35.555556' />
    </mask>
    <g fill='none' fillRule='evenodd' transform='translate(2.222222 2.222222)'>
      <rect height='32.888889' rx='16.444444' stroke='currentColor' strokeWidth='2.666667' width='32.888889' x='1.333333' y='1.333333' />
      <g fill='currentColor' mask='url(#a)'>
        <rect height='2.222222' rx='1.111111' transform='matrix(.70710678 -.70710678 .70710678 .70710678 5.128423 18.810322)' width='22.222222' x='-2.222222' y='7.888889' />
        <rect height='2.222222' rx='1.111111' transform='matrix(-.70710678 -.70710678 -.70710678 .70710678 30.427133 18.810322)' width='22.222222' x='-2.222222' y='7.888889' />
      </g>
    </g>
  </svg>
);

const CloseCircleOutlined = convertIcon(SvgComponent);
export default CloseCircleOutlined;

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
