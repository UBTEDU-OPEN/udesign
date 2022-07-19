import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' transform='translate(2.222222 2.222222)'>
        <rect height={32.888889} rx={16.444444} stroke='currentColor' strokeWidth={2.666667} width={32.888889} x={1.333} y={1.333} />
        <path
          d='m18.3576313 28c-1.1524232 0-2.0868132-1.092606-2.0868132-2.4404787 0-1.3477488.93439-2.4405098 2.0868132-2.4405098 1.1525291 0 2.0868131 1.092761 2.0868131 2.4405098 0 1.3478727-.934284 2.4404787-2.0868131 2.4404787zm2.0839637-17.5857046-.7225898 9.1965735c-.0618981.7877922-.7192312 1.3955034-1.5094514 1.3955034-.7902202 0-1.4475532-.6077112-1.5094514-1.3955034l-.7225897-9.1965735c-.0968571-1.23272227.8239437-2.31055924 2.056666-2.40741625.058346-.00458434.1168493-.00687915.1753751-.00687915 1.2365215 0 2.2389203 1.00239877 2.2389203 2.2389203 0 .0585258-.0022948.1170291-.0068791.1753751z'
          fill='currentColor'
          transform='matrix(-1 0 0 -1 36.444444 36)'
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
