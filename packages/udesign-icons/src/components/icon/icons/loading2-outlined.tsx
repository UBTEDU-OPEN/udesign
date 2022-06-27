import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <circle cx='27' cy='21' fill='#272848' r='2' />
      <circle cx='25.388916' cy='15.885986' fill='#6a7078' r='1.75' />
      <circle cx='19.803955' cy='13.838379' fill='#afb4bb' r='1.5' />
      <circle cx='15.11377' cy='15.76709' fill='#c9ccd1' r='1.25' />
      <circle cx='12.563965' cy='20.943359' fill='#eeeeef' r='1.25' />
      <circle cx='14.92749' cy='25.937012' fill='#f6f6f6' r='1.25' />
      <circle cx='19.991455' cy='28.117432' fill='#f7f7f7' r='1.25' />
      <circle cx='25.25' cy='26.25' fill='#f6f6f6' r='1.25' />
    </g>
  </svg>
);

const Loading2Outlined = convertIcon(SvgComponent);
export default Loading2Outlined;

Loading2Outlined.displayName = 'Loading2Outlined';
