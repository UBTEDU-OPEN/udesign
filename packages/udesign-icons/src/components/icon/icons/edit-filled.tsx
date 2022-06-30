import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m19 4.75111487h-10v-1.75111487c0-2.76142375 2.2385763-5 5-5s5 2.23857625 5 5zm0 1.68777871v21.94112332h-10v-21.94112332zm-10 23.62890202h10l-3.5526755 6.0814769c-.4669554.7993352-1.4934869 1.0687823-2.2928221.6018268-.2490472-.1454883-.4563386-.3527797-.6018269-.6018268z'
      fill='currentColor'
      fillRule='evenodd'
      transform='matrix(.8660254 .5 -.5 .8660254 16.33993 -1.988778)'
    />
  </svg>
);

const EditFilled = convertIcon(SvgComponent);
export default EditFilled;

EditFilled.displayName = 'EditFilled';
