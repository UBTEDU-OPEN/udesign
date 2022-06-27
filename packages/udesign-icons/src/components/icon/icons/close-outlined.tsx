import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m17.8419829 20-5.3950429-5.3950429c-.59592-.5959199-.59592-1.5620971 0-2.1580171s1.5620972-.59592 2.1580171 0l5.3950429 5.3950429 5.3950429-5.3950429c.5959199-.59592 1.5620971-.59592 2.1580171 0s.59592 1.5620972 0 2.1580171l-5.3950429 5.3950429 5.3950429 5.3950429c.59592.5959199.59592 1.5620971 0 2.1580171s-1.5620972.59592-2.1580171 0l-5.3950429-5.3950429-5.3950429 5.3950429c-.5959199.59592-1.5620971.59592-2.1580171 0s-.59592-1.5620972 0-2.1580171z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
);

const CloseOutlined = convertIcon(SvgComponent);
export default CloseOutlined;

CloseOutlined.displayName = 'CloseOutlined';
