import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <rect height='18.5' rx='9.25' stroke='currentColor' strokeWidth='1.5' width='18.5' x='10.75' y='10.75' />
      <path d='m19 24.5833333v-8.8333333c0-.4142136.3357864-.75.75-.75.4142136 0 .75.3357864.75.75v8.8333333c0 .4142136-.3357864.75-.75.75-.4142136 0-.75-.3357864-.75-.75z' fill='currentColor' transform='matrix(0 1 -1 0 39.916667 .416667)' />
    </g>
  </svg>
);

const MinusCircleOutlined = convertIcon(SvgComponent);
export default MinusCircleOutlined;

MinusCircleOutlined.displayName = 'MinusCircleOutlined';
