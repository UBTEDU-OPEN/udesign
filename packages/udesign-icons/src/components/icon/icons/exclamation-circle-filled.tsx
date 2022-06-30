import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <rect fill='currentColor' height='35.555556' rx='17.777778' width='35.555556' x='2.222222' y='2.222222' />
      <path
        d='m20.1306776 30.6593864c-1.3635573 0-2.4691358-1.1054288-2.4691358-2.4691201 0-1.3635659 1.1055785-2.4691515 2.4691358-2.4691515 1.3636826 0 2.4691358 1.1055856 2.4691358 2.4691515 0 1.3636913-1.1054532 2.4691201-2.4691358 2.4691201zm2.4280194-17.3813205-.7954126 8.6563032c-.0858543.9343338-.8695435 1.6493127-1.8078134 1.6493127-.93827 0-1.7219591-.7149789-1.8078134-1.6493127l-.7954126-8.6563032c-.1321098-1.437722.9262981-2.7103221 2.3640201-2.8424319.0795259-.0073075.1593449-.010967.2392059-.010967 1.4437789 0 2.614193 1.1704141 2.614193 2.614193 0 .0798609-.0036596.15968-.010967.2392059z'
        fill='#fff'
      />
    </g>
  </svg>
);

const ExclamationCircleFilled = convertIcon(SvgComponent);
export default ExclamationCircleFilled;

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
