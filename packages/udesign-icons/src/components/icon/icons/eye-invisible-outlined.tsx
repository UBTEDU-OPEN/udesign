import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' stroke='currentColor'>
      <path d='m12.2120187 17.2631528c1.4744913 1.7464452 4.4088097 2.9368472 7.7879813 2.9368472 3.3520629 0 6.2663814-1.171379 7.7522135-2.8949233' strokeLinecap='round' strokeWidth='2' />
      <g strokeWidth='1.1'>
        <rect height='3.3' rx='.5' width='1' x='19.45' y='20.75' />
        <rect height='3.3' rx='.5' transform='matrix(.8660254 .5 -.5 .8660254 12.83449 -4.788457)' width='1' x='14.902628' y='19.905256' />
        <rect height='3.3' rx='.5' transform='matrix(.8660254 -.5 .5 .8660254 -7.541789 14.964171)' width='1' x='23.702628' y='19.905256' />
      </g>
    </g>
  </svg>
);

const EyeInvisibleOutlined = convertIcon(SvgComponent);
export default EyeInvisibleOutlined;

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';
