import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <rect fill='currentColor' height='35.555556' rx='17.777778' width='35.555556' x='2.222222' y='2.222222' />
      <path
        d='m12.9344489 20.7783936h16.2768612c.8181996 0 1.4814815.6632819 1.4814815 1.4814815s-.6632819 1.4814815-1.4814815 1.4814815h-17.7777778c-.8181996 0-1.48148147-.6632819-1.48148147-1.4814815 0-.0819162.00664843-.1622796.01943514-.24058v-8.6555204c0-.8181996.66328183-1.4814815 1.48148153-1.4814815.8181996 0 1.4814814.6632819 1.4814814 1.4814815z'
        fill='#fff'
        transform='matrix(.70710678 -.70710678 .70710678 .70710678 -6.750576 19.33353)'
      />
    </g>
  </svg>
);

const CheckCircleFilled = convertIcon(SvgComponent);
export default CheckCircleFilled;

CheckCircleFilled.displayName = 'CheckCircleFilled';
