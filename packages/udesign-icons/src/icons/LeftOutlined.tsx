import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 41 41' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <path
        d='m30.5922454 5.63487364c.4246631.42466314.6873227 1.0113298.6873227 1.65934391v19.19555555c0 1.2960282-1.0506384 2.3466667-2.3466666 2.3466667h-.0474074c-1.2960282 0-2.3466667-1.0506385-2.3466667-2.3466667v-16.76444444h-16.61629629c-1.29602821 0-2.34666667-1.05063845-2.34666667-2.34666666v-.08444445c0-1.29602821 1.05063846-2.34666667 2.34666667-2.34666667h19.01037039c.6480141 0 1.2346808.26265962 1.6593439.68732276z'
        fill='currentColor'
        fillRule='evenodd'
        transform='matrix(-.70710678 -.70710678 .70710678 -.70710678 28.401031 46.754198)'
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
