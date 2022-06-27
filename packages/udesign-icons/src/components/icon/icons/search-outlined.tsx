import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' transform='matrix(-.70710678 .70710678 .70710678 .70710678 18.980618 8.695428)'>
      <circle cx='7.272727' cy='7.272727' r='6.363636' stroke='currentColor' strokeWidth='1.818182' />
      <rect fill='currentColor' height='7.272727' rx='.909091' width='1.818182' x='6.363636' y='12.727273' />
    </g>
  </svg>
);

const SearchOutlined = convertIcon(SvgComponent);
export default SearchOutlined;

SearchOutlined.displayName = 'SearchOutlined';
