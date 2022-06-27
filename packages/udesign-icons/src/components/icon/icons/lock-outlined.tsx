import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' transform='translate(11 8)'>
      <path
        d='m2.71384615 9.78182889h12.77698995c1.4988159 0 2.7138462 1.21503031 2.7138462 2.71384611v8.2668682c0 1.4988158-1.2150303 2.7138461-2.7138462 2.7138461h-12.77698995c-1.49881584 0-2.71384615-1.2150303-2.71384615-2.7138461v-8.2668682c0-1.4988158 1.21503031-2.71384611 2.71384615-2.71384611z'
        stroke='currentColor'
        strokeWidth='2'
      />
      <path d='m9.10234114 0c2.79282456 0 5.05685616 2.26403163 5.05685616 5.05685619v4.7249727h-10.11371235v-4.7249727c0-2.79282456 2.26403163-5.05685619 5.05685619-5.05685619z' stroke='currentColor' strokeWidth='2' />
      <ellipse cx='9.102341' cy='16.629109' fill='currentColor' rx='2.022742' ry='1.956366' />
    </g>
  </svg>
);

const LockOutlined = convertIcon(SvgComponent);
export default LockOutlined;

LockOutlined.displayName = 'LockOutlined';
