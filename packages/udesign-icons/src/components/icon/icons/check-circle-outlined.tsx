import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <rect height='18.5' rx='9.25' stroke='currentColor' strokeWidth='1.5' width='18.5' x='10.75' y='10.75' />
      <path
        d='m15.5267353 20.6266416h9.819692c.3451779 0 .625.279822.625.625s-.2798221.625-.625.625h-10.4166667c-.3058495 0-.5603876-.2196906-.6144196-.5098772-.024968-.0675252-.0386057-.1405431-.0386057-.2167463v-5.4166667c0-.345178.279822-.625.625-.625s.625.279822.625.625z'
        fill='currentColor'
        transform='matrix(.70710678 -.70710678 .70710678 .70710678 -7.219773 19.543018)'
      />
    </g>
  </svg>
);

const CheckCircleOutlined = convertIcon(SvgComponent);
export default CheckCircleOutlined;

CheckCircleOutlined.displayName = 'CheckCircleOutlined';
