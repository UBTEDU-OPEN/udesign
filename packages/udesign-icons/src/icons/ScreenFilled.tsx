import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <path
        d='m12.6651638 26.9994752c-.1939991 0-.3765866-.0914722-.479292-.0914722-.2852929-.1943784-.4792921-.5717013-.4792921-.857552v-8.2782348l-8.36478763-12.09719957c-.19399917-.28585065-.28529289-.6631735-.09129373-1.0519304.19399917-.28585065.47929205-.48022909.85587867-.48022909h20.91767499c.3765866 0 .6618795.19437844.8558786.48022909.1939992.28585064.0912938.6631735-.0912937.94902417l-8.3647876 12.2001058v6.3801865c0 .3773229-.1939992.6631735-.5705858.857552l-3.8001013 1.9094823c-.1027055.0800382-.1939992.0800382-.3879984.0800382z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
