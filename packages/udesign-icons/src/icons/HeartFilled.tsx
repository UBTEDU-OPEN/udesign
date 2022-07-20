import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 31 31' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <path
        d='m22.0601029 4c-2.8615232 0-5.3462517 1.41578967-6.560072 3.47659216-1.2137892-2.06080249-3.6985178-3.47659216-6.55929875-3.47659216-4.34479597 0-6.94073215 3.62370665-6.94073215 7.1272268 0 8.2967062 12.5680335 15.4677135 13.1031349 15.7690794.1227737.0692691.2594328.1036938.3968651.1036938s.2741223-.0344247.3968651-.1036938c.5351014-.3013359 13.1031349-7.4723732 13.1031349-15.7690794.0000619-3.50352015-2.5958433-7.1272268-6.9398971-7.1272268z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
