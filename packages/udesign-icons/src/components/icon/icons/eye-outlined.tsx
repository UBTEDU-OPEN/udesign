import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' stroke='currentColor' strokeWidth='2' transform='translate(10 13)'>
      <path d='m18.421408 7.20110546c-2.201228-3.97890564-5.0578662-5.90306624-8.64363022-5.90306624-3.58576404 0-6.44240222 1.9241606-8.64363021 5.90306624 2.19071663 3.97741834 5.04688758 5.90085534 8.64363021 5.90085534 3.59674262 0 6.45291362-1.923437 8.64363022-5.90085534z' />
      <circle cx='9.777778' cy='7.2' r='2.555556' />
    </g>
  </svg>
);

const EyeOutlined = convertIcon(SvgComponent);
export default EyeOutlined;

EyeOutlined.displayName = 'EyeOutlined';
