import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m7 2v-1c0-.55228475.44771525-1 1-1h2c.5522847 0 1 .44771525 1 1v1h6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-1v14c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-14h-1c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm2 5c-.55228475 0-1 .44771525-1 1v6c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-6c0-.55228475-.44771525-1-1-1zm4 0c-.5522847 0-1 .44771525-1 1v6c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-6c0-.55228475-.4477153-1-1-1zm-8 0c-.55228475 0-1 .44771525-1 1v6c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-6c0-.55228475-.44771525-1-1-1z'
      fill='currentColor'
      fillRule='evenodd'
      transform='translate(11 10)'
    />
  </svg>
);

const DeleteFilled = convertIcon(SvgComponent);
export default DeleteFilled;

DeleteFilled.displayName = 'DeleteFilled';
