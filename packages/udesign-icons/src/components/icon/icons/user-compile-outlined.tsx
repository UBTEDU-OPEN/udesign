import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' stroke='currentColor' strokeWidth='2' transform='translate(11 8)'>
      <rect height='10' rx='4' width='8' x='5' />
      <path d='m13.0593257 14.9652763c-1.2196319-.6174042-2.5988539-.9652763-4.0593257-.9652763-4.97056275 0-9 4.0294373-9 9' strokeLinecap='round' />
      <path
        d='m4.47096773 11.2147893c.14435282.0003883.28425923-.0499174.39531295-.1421408.06115164-.0372666.11763928-.0816952.16826581-.1323439l6.64514041-6.62408136c.351227-.35202102.351227-.92191794 0-1.27393897l-2.77905006-2.77887823c-.35196258-.35120805-.92180449-.35120805-1.27376709-.00000002l-6.64445295 6.62305013c-.05122466.05097098-.09612122.10792836-.13371874.16964067-.09193429.11080428-.14216413.25030352-.14196888.39428166l-.68323561 3.11073992c-.11847845.5394268.22276764 1.0727644.76219447 1.1912428.12416728.0272718.25239585.0306179.37781649.0098591z'
        fillRule='nonzero'
        transform='translate(11 12)'
      />
    </g>
  </svg>
);

const UserCompileOutlined = convertIcon(SvgComponent);
export default UserCompileOutlined;

UserCompileOutlined.displayName = 'UserCompileOutlined';
