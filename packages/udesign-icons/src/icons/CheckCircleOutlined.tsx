import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd'>
        <rect height={32.89} rx={16.445} stroke='currentColor' strokeWidth={2.67} width={32.89} x={3.335} y={3.335} />
        <path
          d='m12.2914574 21.0096615h17.1009602c.6011262 0 1.0884353.4873092 1.0884353 1.0884354 0 .6011263-.4873091 1.0884354-1.0884353 1.0884354h-18.1405896c-.532636 0-.9759131-.3825904-1.0700097-.8879495-.0434816-.1175948-.0672317-.2447553-.0672317-.3774629v-9.4331066c0-.6011263.4873092-1.0884354 1.0884354-1.0884354.6011263 0 1.0884354.4873091 1.0884354 1.0884354z'
          fill='currentColor'
          transform='matrix(.70710678 -.70710678 .70710678 .70710678 -6.348818 19.237981)'
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
