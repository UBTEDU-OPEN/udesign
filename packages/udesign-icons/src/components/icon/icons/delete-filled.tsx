import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m11.3131313 3.23232323v-1.61616161c0-.89258142.7235802-1.61616162 1.6161616-1.61616162h3.2323233c.8925814 0 1.6161616.7235802 1.6161616 1.61616162v1.61616161h9.6969697c.8925814 0 1.6161616.7235802 1.6161616 1.61616162 0 .89258141-.7235802 1.61616161-1.6161616 1.61616161h-1.6161616v22.62626264c0 1.7851628-1.4471604 3.2323232-3.2323233 3.2323232h-16.16161614c-1.78516282 0-3.23232323-1.4471604-3.23232323-3.2323232v-22.62626264h-1.61616161c-.89258142 0-1.61616162-.7235802-1.61616162-1.61616161 0-.89258142.7235802-1.61616162 1.61616162-1.61616162zm3.2323232 8.08080807c-.8925814 0-1.6161616.7235802-1.6161616 1.6161616v9.6969697c0 .8925814.7235802 1.6161616 1.6161616 1.6161616.8925815 0 1.6161617-.7235802 1.6161617-1.6161616v-9.6969697c0-.8925814-.7235802-1.6161616-1.6161617-1.6161616zm6.4646465 0c-.8925814 0-1.6161616.7235802-1.6161616 1.6161616v9.6969697c0 .8925814.7235802 1.6161616 1.6161616 1.6161616s1.6161616-.7235802 1.6161616-1.6161616v-9.6969697c0-.8925814-.7235802-1.6161616-1.6161616-1.6161616zm-12.92929292 0c-.89258141 0-1.61616162.7235802-1.61616162 1.6161616v9.6969697c0 .8925814.72358021 1.6161616 1.61616162 1.6161616s1.61616162-.7235802 1.61616162-1.6161616v-9.6969697c0-.8925814-.72358021-1.6161616-1.61616162-1.6161616z'
      fill='currentColor'
      fillRule='evenodd'
      transform='translate(5.454545 3.838384)'
    />
  </svg>
);

const DeleteFilled = convertIcon(SvgComponent);
export default DeleteFilled;

DeleteFilled.displayName = 'DeleteFilled';
