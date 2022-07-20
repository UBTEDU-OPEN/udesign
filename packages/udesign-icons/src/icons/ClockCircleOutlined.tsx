import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' transform='translate(2.222222 2.222222)'>
        <rect height={32.888889} rx={16.444444} stroke='currentColor' strokeWidth={2.666667} width={32.888889} x={1.333} y={1.333} />
        <path
          d='m26.2962963 17.4074074v-8.51851851c0-.61364972.4974614-1.11111111 1.1111111-1.11111111s1.1111111.49746139 1.1111111 1.11111111v9.62962961c0 .6136497-.4974614 1.1111111-1.1111111 1.1111111h-11.8518518c-.6136498 0-1.1111112-.4974614-1.1111112-1.1111111s.4974614-1.1111111 1.1111112-1.1111111z'
          fill='currentColor'
          transform='matrix(0 1 -1 0 35.185185 -7.777777)'
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
