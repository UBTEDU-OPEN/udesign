import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' transform='translate(10 10)'>
      <rect height='18.5' rx='9.25' stroke='currentColor' strokeWidth='1.5' width='18.5' x='.75' y='.75' />
      <path
        d='m14.7916667 9.79166667v-4.79166667c0-.34517797.279822-.625.625-.625.3451779 0 .625.27982203.625.625v5.4166667c0 .3451779-.2798221.625-.625.625h-6.6666667c-.34517797 0-.625-.2798221-.625-.625 0-.345178.27982203-.62500003.625-.62500003z'
        fill='currentColor'
        transform='matrix(0 1 -1 0 19.791666 -4.375)'
      />
    </g>
  </svg>
);

const ClockCircleOutlined = convertIcon(SvgComponent);
export default ClockCircleOutlined;

ClockCircleOutlined.displayName = 'ClockCircleOutlined';
