import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' transform='matrix(-.70710678 .70710678 .70710678 .70710678 18.187765 1.236318)'>
        <circle cx={12.929293} cy={12.929293} r={11.313131} stroke='currentColor' strokeWidth={3.232323} />
        <rect fill='currentColor' height={12.929293} rx={1.616162} width={3.232323} x={11.313} y={22.626} />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
