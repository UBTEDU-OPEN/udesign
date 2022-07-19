import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='currentColor' fillRule='evenodd' transform='translate(1.888889 2.222222)'>
        <rect height={35} rx={2} width={4} x={16} />
        <path d='m18 0c1.1045695 0 2 .8954305 2 2v31c0 1.1045695-.8954305 2-2 2-1.1045695 0-2-.8954305-2-2v-31c0-1.1045695.8954305-2 2-2z' transform='matrix(0 1 -1 0 35.5 -.5)' />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
