import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' stroke='currentColor' transform='translate(5.777778 16)'>
        <path d='m.3769222.46782726c2.62131777 3.10479149 7.8378838 5.22106163 13.8453 5.22106163 5.9592229 0 11.1402336-2.08245159 13.7817128-5.14653027' strokeLinecap='round' strokeWidth={3.555556} />
        <g strokeWidth={1.955556}>
          <rect height={5.866667} rx={0.8} width={1.6} x={13.244} y={6.667} />
          <rect height={5.866667} rx={0.8} transform='matrix(.8660254 .5 -.5 .8660254 4.847636 -1.895156)' width={1.6} x={5.16} y={5.165} />
          <rect height={5.866667} rx={0.8} transform='matrix(.8660254 -.5 .5 .8660254 -1.154639 11.887293)' width={1.6} x={20.805} y={5.165} />
        </g>
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
