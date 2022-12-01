import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
      <filter id='a' height='130.6%' width='120.8%' x='-10.4%' y='-15.3%'>
        <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='12' />
        <feColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' type='matrix' values='0 0 0 0 0.132903124   0 0 0 0 0.192820166   0 0 0 0 0.410835598  0 0 0 0.197279283 0' />
        <feMerge>
          <feMergeNode in='shadowMatrixOuter1' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
      <g fill='none' fillRule='evenodd' filter='url(#a)' stroke='#323c57' strokeWidth='2' transform='translate(-62 -90.5)'>
        <g transform='translate(72 100.083333)'>
          <g transform='translate(0 .75)'>
            <path d='m2.8 2h14.4c1.5463973 0 2.8 1.2536027 2.8 2.8v13.4c0 1.5463973-1.2536027 2.8-2.8 2.8h-14.4c-1.5463973 0-2.8-1.2536027-2.8-2.8v-13.4c0-1.5463973 1.2536027-2.8 2.8-2.8z' />
            <g strokeLinecap='square'>
              <path d='m5.5.44444444v3.33333334' />
              <path d='m14.5.44444444v3.33333334' />
            </g>
          </g>
          <path d='m5.1962642 12.25 3.74484103 3.744841 6.73476657-6.73476654' strokeLinecap='square' strokeLinejoin='round' />
        </g>
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
