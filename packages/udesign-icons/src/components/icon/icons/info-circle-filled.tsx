import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <rect fill='currentColor' height='20' rx='10' width='20' x='10' y='10' />
      <path
        d='m20.0735061 25.9959049c-.7670009 0-1.3888889-.6218037-1.3888889-1.3888801 0-.7670058.621888-1.3888977 1.3888889-1.3888977.7670715 0 1.3888889.6218919 1.3888889 1.3888977 0 .7670764-.6218174 1.3888801-1.3888889 1.3888801zm1.3657609-9.7769928-.4474195 4.8691705c-.0482931.5255628-.4891182.9277384-1.0168951.9277384-.5277768 0-.968602-.4021756-1.016895-.9277384l-.4474196-4.8691705c-.0743117-.8087187.5210427-1.5245562 1.3297613-1.598868.0447333-.0041104.0896315-.0061689.1345533-.0061689.8121257 0 1.4704836.6583579 1.4704836 1.4704835 0 .0449218-.0020585.08982-.006169.1345534z'
        fill='#fff'
      />
    </g>
  </svg>
);

const InfoCircleFilled = convertIcon(SvgComponent);
export default InfoCircleFilled;

InfoCircleFilled.displayName = 'InfoCircleFilled';
