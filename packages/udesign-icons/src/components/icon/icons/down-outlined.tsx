import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m26.708138 11.1480428c.238873.238873.3866191.568873.3866191.9333809v10.6933334c0 .7290159-.5909841 1.32-1.32 1.32h-.0266667c-.7290159 0-1.32-.5909841-1.32-1.32v-9.3466667h-9.3466667c-.7290158 0-1.32-.5909841-1.32-1.32v-.0266667c0-.7290158.5909842-1.32 1.32-1.32h10.6933334c.3645079 0 .6945079.1477461.9333809.3866191z'
      fill='currentColor'
      fillRule='evenodd'
      transform='matrix(.70710678 .70710678 .70710678 -.70710678 -6.340272 15.30677)'
    />
  </svg>
);

const DownOutlined = convertIcon(SvgComponent);
export default DownOutlined;

DownOutlined.displayName = 'DownOutlined';
