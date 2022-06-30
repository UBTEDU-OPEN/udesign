import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' transform='translate(8 4)'>
      <path
        d='m3.61846154 13.0424385h17.03598666c1.9984211 0 3.6184615 1.6200404 3.6184615 3.6184616v11.0224908c0 1.9984211-1.6200404 3.6184616-3.6184615 3.6184616h-17.03598666c-1.99842113 0-3.61846154-1.6200405-3.61846154-3.6184616v-11.0224908c0-1.9984212 1.62004041-3.6184616 3.61846154-3.6184616z'
        stroke='currentColor'
        strokeWidth='3.333333'
      />
      <path d='m12.1364548 0c3.7237661 0 6.742475 3.01870884 6.742475 6.74247492v6.29996358h-13.48494987v-6.29996358c0-3.72376608 3.01870885-6.74247492 6.74247487-6.74247492z' stroke='currentColor' strokeWidth='3.333333' />
      <ellipse cx='12.136455' cy='22.172146' fill='currentColor' rx='2.69699' ry='2.608488' />
    </g>
  </svg>
);

const LockOutlined = convertIcon(SvgComponent);
export default LockOutlined;

LockOutlined.displayName = 'LockOutlined';
