import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <rect fill='currentColor' height='20' rx='10' width='20' x='10' y='10' />
      <path
        d='m16.0256275 20.4378464h9.1557344c.4602373 0 .8333334.3730961.8333334.8333334 0 .4602372-.3730961.8333333-.8333334.8333333h-10c-.4602373 0-.8333333-.3730961-.8333333-.8333333 0-.0460779.0037397-.0912823.0109323-.1353263v-4.8687302c0-.4602373.373096-.8333334.8333333-.8333334s.8333333.3730961.8333333.8333334z'
        fill='#fff'
        transform='matrix(.70710678 -.70710678 .70710678 .70710678 -7.421568 19.62511)'
      />
    </g>
  </svg>
);

const CheckCircleFilled = convertIcon(SvgComponent);
export default CheckCircleFilled;

CheckCircleFilled.displayName = 'CheckCircleFilled';
