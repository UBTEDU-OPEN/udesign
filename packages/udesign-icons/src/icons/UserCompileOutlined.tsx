import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' stroke='currentColor' strokeWidth={3.333333} transform='translate(5.333333 4)'>
        <rect height={13.333333} rx={5.333333} width={10.666667} x={6.667} />
        <path d='m17.4124343 19.9537018c-1.6261759-.8232056-3.4651385-1.2870351-5.4124343-1.2870351-6.627417 0-12 5.372583-12 12' strokeLinecap='round' />
        <path
          d='m5.96129031 14.9530524c.19247042.0005178.3790123-.0665565.52708393-.189521.08153551-.0496889.15685237-.108927.22435441-.1764586l8.86018725-8.83210848c.4683026-.46936136.4683026-1.22922391 0-1.69858529l-3.7054001-3.70517098c-.4692835-.4682774-1.2290727-.4682774-1.6983561-.00000003l-8.85927063 8.83073352c-.06829955.0679613-.12816162.14390448-.17829166.22618755-.12257905.14773904-.18955217.33373803-.18929183.52570888l-.91098082 4.14765313c-.15797126.7192358.29702353 1.4303526 1.0162593 1.5883239.16555637.0363624.3365278.0408239.50375531.0131454z'
          fillRule='nonzero'
          transform='translate(14.666667 16)'
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
