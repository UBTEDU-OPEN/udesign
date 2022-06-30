import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='41' viewBox='0 0 40 41' width='40' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m30.5922454 6.0827903c.4246631.42466314.6873227 1.01132981.6873227 1.65934392v19.19555558c0 1.2960282-1.0506384 2.3466666-2.3466666 2.3466666h-.0474074c-1.2960282 0-2.3466667-1.0506384-2.3466667-2.3466666v-16.7644445h-16.61629629c-1.29602821 0-2.34666667-1.05063843-2.34666667-2.34666664v-.08444444c0-1.29602822 1.05063846-2.34666667 2.34666667-2.34666667h19.01037039c.6480141 0 1.2346808.26265961 1.6593439.68732275z'
      fill='currentColor'
      fillRule='evenodd'
      transform='matrix(.70710678 .70710678 .70710678 -.70710678 -6.570923 13.863612)'
    />
  </svg>
);

const DownOutlined = convertIcon(SvgComponent);
export default DownOutlined;

DownOutlined.displayName = 'DownOutlined';
