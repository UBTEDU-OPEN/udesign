import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <path
        d='m14.2222222 7.11111111c-1.9636791 0-3.5555555-1.59187644-3.5555555-3.55555555s1.5918764-3.55555556 3.5555555-3.55555556 3.5555556 1.59187645 3.5555556 3.55555556-1.5918765 3.55555555-3.5555556 3.55555555zm10.6666667 0c-1.9636791 0-3.5555556-1.59187644-3.5555556-3.55555555s1.5918765-3.55555556 3.5555556-3.55555556 3.5555555 1.59187645 3.5555555 3.55555556-1.5918764 3.55555555-3.5555555 3.55555555zm-21.33333334 0c-1.96367911 0-3.55555556-1.59187644-3.55555556-3.55555555s1.59187645-3.55555556 3.55555556-3.55555556 3.55555555 1.59187645 3.55555555 3.55555556-1.59187644 3.55555555-3.55555555 3.55555555z'
        fill='currentColor'
        fillRule='evenodd'
        transform='translate(5.777778 16.444444)'
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
