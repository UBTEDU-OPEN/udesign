import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <defs>
      <rect id='a' height='35.555556' rx='17.777778' width='35.555556' />
      <mask id='b' fill='#fff'>
        <use fill='#fff' fillRule='evenodd' xlinkHref='#a' />
      </mask>
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(2.222222 2.222222)'>
      <use fill='currentColor' xlinkHref='#a' />
      <g fill='#fff' mask='url(#b)'>
        <rect height='2.962963' rx='1.481481' transform='matrix(.70710678 -.70710678 .70710678 .70710678 4.542638 18.547907)' width='20.740741' x='-1.367521' y='7.427163' />
        <rect height='2.962963' rx='1.481481' transform='matrix(-.70710678 -.70710678 -.70710678 .70710678 29.873316 18.547907)' width='20.740741' x='-1.367521' y='7.427163' />
      </g>
    </g>
  </svg>
);

const CloseCircleFilled = convertIcon(SvgComponent);
export default CloseCircleFilled;

CloseCircleFilled.displayName = 'CloseCircleFilled';
