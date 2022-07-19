import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <path
        d='m17.4444098.44447907c-9.38798113 0-16.99996536 7.61181111-16.99996536 16.99996533 0 9.3883274 7.61167263 17.0000347 16.99996536 17.0000347.9193307 0 1.664586-.74529 1.664586-1.664586 0-.9193307-.7452553-1.664586-1.664586-1.664586-7.54966609 0-13.67082797-6.1211619-13.67082797-13.6708627 0-7.54949296 6.12147347-13.67082795 13.67086257-13.67082795 7.5496662 0 13.670828 6.12116189 13.670828 13.67086265 0 .919296.7452554 1.664586 1.664586 1.664586.9192961 0 1.664586-.74529 1.664586-1.664586 0-9.3883274-7.6117072-17.00003466-17.0000346-17.00003466z'
        fill='currentColor'
        fillRule='evenodd'
        transform='translate(2.555556 2.555556)'
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
