import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m2.0000001.00000002h8c1.1045695 0 2 .8954305 2 2v9.99999998c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-9.99999998c0-1.1045695.8954305-2 2-2zm.99999992 1.99999998c-.55228475 0-1 .44771525-1 1v8c0 .5522847.44771525 1 1 1h6c.55228475 0 .99999998-.4477153.99999998-1v-8c0-.55228475-.44771523-1-.99999998-1zm11.00000008 2.00000003c1.1045695 0 2 .8954305 2 2v9.99999997c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2h3.9996554 4.0003446c1.1045694 0 1.9999999-.8954305 2-1.9999999v-6.00000007z'
      fill='currentColor'
      fillRule='evenodd'
      transform='translate(12 11)'
    />
  </svg>
);

const CopyOutlined = convertIcon(SvgComponent);
export default CopyOutlined;

CopyOutlined.displayName = 'CopyOutlined';
