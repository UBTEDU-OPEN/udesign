import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <path
        d='m16.9248267 24.4492795c5.3919579-5.1916021 10.7922624-10.379031 16.1633536-15.58732642 1.3020827-1.26034072 2.6625922-1.8946844 4.2568089-.57591729 1.3354694 1.10175481 1.135149 2.63753421-.5258411 4.24426001-6.3643466 6.1598109-12.7495599 12.3154485-19.1389465 18.4585662-2.0032042 1.9238976-3.0924465 1.9364175-5.0580905.0625997-3.46804726-3.313611-6.8985344-6.6689552-10.37075496-9.9783929-1.31042939-1.2478208-1.97399078-2.5624146-.60930793-4.1023673 1.14349571-1.2895539 2.73771236-1.1017548 4.40287582.4966243 2.97559286 2.8587199 5.92197237 5.7508262 8.97268537 8.7180522.7512015-.6802501 1.3438161-1.1935677 1.9072173-1.7360985z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;