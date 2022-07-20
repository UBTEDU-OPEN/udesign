import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' transform='translate(7.111111 7.111111)'>
        <path
          d='m4-1.33333333h17.7777778c2.9455186 0 5.3333333 2.38781466 5.3333333 5.33333333v17.7777778c0 2.9455186-2.3878147 5.3333333-5.3333333 5.3333333h-17.7777778c-2.94551867 0-5.33333333-2.3878147-5.33333333-5.3333333v-17.7777778c0-2.94551867 2.38781466-5.33333333 5.33333333-5.33333333z'
          stroke='currentColor'
          strokeWidth={3.555556}
        />
        <rect fill='currentColor' height={14.222222} rx={1.777778} width={3.555556} x={4} y={5.778} />
        <path d='m11.1111111 7.55555556v10.66666664h4.4444445c2.4545988 0 4.4444444-1.9898455 4.4444444-4.4444444v-1.7777778c0-2.45459889-1.9898456-4.44444444-4.4444444-4.44444444z' stroke='currentColor' strokeWidth={3.555556} />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
