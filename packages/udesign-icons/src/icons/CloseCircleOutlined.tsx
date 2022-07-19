import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' transform='translate(2 2)'>
        <path
          d='m18.1821789 19.7535273-6.2853936 6.2853936c-.4339159.4339159-1.1374325.4339159-1.5713484 0-.43391587-.4339158-.43391587-1.1374325 0-1.5713484l6.2853936-6.2853936-6.2853936-6.2853936c-.43391587-.4339159-.43391587-1.1374325 0-1.5713484.4339159-.43391587 1.1374325-.43391587 1.5713484 0l6.2853936 6.2853936 6.2853936-6.2853936c.4339159-.43391587 1.1374326-.43391587 1.5713484 0 .4339159.4339159.4339159 1.1374325 0 1.5713484l-6.2853936 6.2853936 6.2853936 6.2853936c.4339159.4339159.4339159 1.1374326 0 1.5713484-.4339158.4339159-1.1374325.4339159-1.5713484 0z'
          fill='currentColor'
        />
        <rect height={32.888889} rx={16.444444} stroke='currentColor' strokeWidth={2.666667} width={32.888889} x={1.333} y={1.333} />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
