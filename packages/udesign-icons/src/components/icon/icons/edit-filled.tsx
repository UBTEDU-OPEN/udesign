import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <circle cx='20' cy='20' opacity='.1' r='20' />
      <path
        d='m23 13h-6v-1c0-1.6568542 1.3431458-3 3-3s3 1.3431458 3 3zm0 1v13h-6v-13zm-6 14h6l-2.1393264 3.6162946c-.2811996.4753369-.8944937.6327163-1.3698306.3515166-.1448929-.0857156-.265801-.2066237-.3515166-.3515166z'
        fill='currentColor'
        transform='matrix(.8660254 .5 -.5 .8660254 12.956315 -7.246333)'
      />
    </g>
  </svg>
);

const EditFilled = convertIcon(SvgComponent);
export default EditFilled;

EditFilled.displayName = 'EditFilled';
