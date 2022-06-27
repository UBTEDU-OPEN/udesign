import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='currentColor' fillRule='evenodd' transform='translate(10 11)'>
      <rect height='19' rx='1.470588' width='2.941176' x='9.264706' />
      <path
        d='m10.4411765.38511029c.8197976 0 1.484375.66457733 1.484375 1.484375v15.85477941c0 .8197977-.6645774 1.484375-1.484375 1.484375-.8197977 0-1.48437503-.6645773-1.48437503-1.484375v-15.85477941c0-.81979767.66457733-1.484375 1.48437503-1.484375z'
        transform='matrix(0 1 -1 0 20.238051 -.644301)'
      />
    </g>
  </svg>
);

const PlusOutlined = convertIcon(SvgComponent);
export default PlusOutlined;

PlusOutlined.displayName = 'PlusOutlined';
