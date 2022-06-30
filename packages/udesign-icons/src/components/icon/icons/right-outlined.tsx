import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='41' viewBox='0 0 41 41' width='41' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m31.9255787 6.55693023c.4246632.42466314.6873228 1.0113298.6873228 1.65934391v18.81921146c0 1.2960282-1.0506385 2.3466667-2.3466667 2.3466667h-.0474074c-1.2960282 0-2.3466667-1.0506385-2.3466667-2.3466667v-16.4633692h-16.6162963c-1.29602817 0-2.34666662-1.05063842-2.34666662-2.34666663v-.00917563c0-1.29602821 1.05063845-2.34666667 2.34666662-2.34666667h19.0103704c.6480141 0 1.2346808.26265962 1.6593439.68732276z'
      fill='currentColor'
      fillRule='evenodd'
      transform='matrix(.70710678 .70710678 -.70710678 .70710678 13.90898 -5.882609)'
    />
  </svg>
);

const RightOutlined = convertIcon(SvgComponent);
export default RightOutlined;

RightOutlined.displayName = 'RightOutlined';
