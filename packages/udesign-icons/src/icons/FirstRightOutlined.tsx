import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <title>{'ic_dropdown1'}</title>
      <desc>{'Created with Sketch.'}</desc>
      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'>
          <stop stopColor='currentColor' offset='0%' />
          <stop stopColor='currentColor' offset='100%' />
        </linearGradient>
        <filter x='-17%' y='-19.4%' width='134.0%' height='138.9%' filterUnits='objectBoundingBox' id='filter-2'>
          <feOffset dx={0} dy={9} in='SourceAlpha' result='shadowOffsetOuter1' />
          <feGaussianBlur stdDeviation={14} in='shadowOffsetOuter1' result='shadowBlurOuter1' />
          <feColorMatrix values='0 0 0 0 0.243137255   0 0 0 0 0.28627451   0 0 0 0 0.403921569  0 0 0 0.152261801 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1' />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g id='\u7EAF\u8F6F\u4EF6\u7248\u4E00\u671F_\u6697\u8272\u7248\u7EC8' stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
        <g id='\u4EBA\u8138\u767B\u5F5501\u5907\u4EFD' transform='translate(-1118.000000, -591.000000)'>
          <g id='\u7F16\u7EC4-2\u5907\u4EFD' filter='url(#filter-2)' transform='translate(750.000000, 573.000000)'>
            <g id='ic_dropdown1\u5907\u4EFD-3' transform='translate(382.666667, 32.666667) scale(-1, 1) rotate(-270.000000) translate(-382.666667, -32.666667) translate(368.666667, 18.666667)'>
              <g id='\u7F16\u7EC4-15'>
                <rect id='\u77E9\u5F62' x={0} y={0} width={28} height={28} />
                <g id='\u7F16\u7EC4-14' transform='translate(8.166667, 7.000000)' stroke='currentColor' strokeLinejoin='round' strokeWidth={1.75}>
                  <polyline id='\u8DEF\u5F84' transform='translate(6.416667, 10.500000) rotate(-180.000000) translate(-6.416667, -10.500000) ' points='0 14 6.417 7 6.417 7 12.833 14' />
                  <polyline id='\u8DEF\u5F84' transform='translate(6.416667, 3.500000) rotate(-180.000000) translate(-6.416667, -3.500000) ' points='0 7 6.417 0 6.417 0 12.833 7' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
