import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='41' viewBox='0 0 40 41' width='40' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' transform='matrix(1 0 0 -1 0 43)'>
      <path d='m2.666667 15.229167h33.777778v19.708333h-33.777778z' />
      <path
        d='m30.5922454 6.53070697c.4246631.42466314.6873227 1.01132981.6873227 1.65934391v19.19555552c0 1.2960283-1.0506384 2.3466667-2.3466666 2.3466667h-.0474074c-1.2960282 0-2.3466667-1.0506384-2.3466667-2.3466667v-16.7644444h-16.61629629c-1.29602821 0-2.34666667-1.05063846-2.34666667-2.34666667v-.08444445c0-1.29602821 1.05063846-2.34666666 2.34666667-2.34666666h19.01037039c.6480141 0 1.2346808.26265961 1.6593439.68732275z'
        fill='currentColor'
        transform='matrix(.70710678 .70710678 .70710678 -.70710678 -6.887648 16.628254)'
      />
    </g>
  </svg>
);

const UserOutlined = convertIcon(SvgComponent);
export default UserOutlined;

UserOutlined.displayName = 'UserOutlined';
