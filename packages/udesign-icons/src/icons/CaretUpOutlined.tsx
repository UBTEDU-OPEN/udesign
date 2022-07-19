import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='none' fillRule='evenodd' transform='matrix(1 0 0 -1 0 40)'>
        <path d='m2.222222 2.222222h35.555556v35.555556h-35.555556z' />
        <path
          d='m22.2186839 10.1661633 11.3796535 18.1280462c.5220098.8315735.2710589 1.9288697-.5605147 2.4508796-.2832037.1777776-.6108037.2720806-.9451825.2720806h-22.75930687c-.98183955 0-1.77777777-.7959382-1.77777777-1.7777777 0-.3343788.09430308-.6619789.27208063-.9451825l11.37965341-18.1280462c.5220099-.8315736 1.6193061-1.08252456 2.4508797-.56051469.2266422.14227182.4182428.33387243.5605146.56051469z'
          fill='currentColor'
          transform='matrix(1 0 0 -1 0 40.350504)'
        />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
