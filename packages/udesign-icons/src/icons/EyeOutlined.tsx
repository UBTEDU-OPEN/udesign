import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' stroke='currentColor' strokeWidth={3.555556} transform='translate(2.222222 6.222222)'>
        <path d='m32.7491697 12.8019653c-3.9132941-7.07361006-8.991762-10.49434003-15.3664537-10.49434003-6.3746916 0-11.45315946 3.42072997-15.36645365 10.49434003 3.89460734 7.0709659 8.97224455 10.4904094 15.36645365 10.4904094 6.3942092 0 11.4718464-3.4194435 15.3664537-10.4904094z' />
        <circle cx={17.382716} cy={12.8} r={4.54321} />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
