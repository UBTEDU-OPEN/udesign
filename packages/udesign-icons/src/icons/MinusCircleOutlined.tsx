import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd'>
        <rect height={32.888889} rx={16.444444} stroke='currentColor' strokeWidth={2.666667} width={32.888889} x={3.556} y={3.556} />
        <path
          d='m18.2222222 28.1481481v-15.7037037c0-.7363796.5969537-1.3333333 1.3333334-1.3333333.7363796 0 1.3333333.5969537 1.3333333 1.3333333v15.7037037c0 .7363797-.5969537 1.3333334-1.3333333 1.3333334-.7363797 0-1.3333334-.5969537-1.3333334-1.3333334z'
          fill='currentColor'
          transform='matrix(0 1 -1 0 39.851852 .74074)'
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
