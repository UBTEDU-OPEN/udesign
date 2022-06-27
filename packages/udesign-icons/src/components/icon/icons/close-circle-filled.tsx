import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <title>icon_input_error</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <rect id='path-1' x='0' y='0' width='20' height='20' rx='10'></rect>
    </defs>
    <g id='页面-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='图标' transform='translate(-730.000000, -1332.000000)'>
        <g id='分组-27' transform='translate(730.000000, 1332.000000)'>
          <g id='icon_input_error' transform='translate(10.000000, 10.000000)'>
            <mask id='mask-2' fill='white'>
              <use xlinkHref='#path-1'></use>
            </mask>
            <use id='蒙版' fill='currentColor' xlinkHref='#path-1'></use>
            <g id='分组-11' mask='url(#mask-2)' fill='#FFFFFF'>
              <g transform='translate(4.615385, 5.384615)' id='形状结合'>
                <rect transform='translate(5.064103, 5.011113) rotate(-45.000000) translate(-5.064103, -5.011113) ' x='-0.769230769' y='4.17777939' width='11.6666667' height='1.66666667' rx='0.833333333'></rect>
                <rect transform='translate(5.064103, 5.011113) scale(-1, 1) rotate(-45.000000) translate(-5.064103, -5.011113) ' x='-0.769230769' y='4.17777939' width='11.6666667' height='1.66666667' rx='0.833333333'></rect>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const CloseCircleFilled = convertIcon(SvgComponent);
export default CloseCircleFilled;

CloseCircleFilled.displayName = 'CloseCircleFilled';
