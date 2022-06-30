import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m20.8853506 10.1661633 11.3796534 18.1280462c.5220099.8315735.2710589 1.9288697-.5605146 2.4508796-.2832037.1777776-.6108037.2720806-.9451825.2720806h-22.7593069c-.98183956 0-1.77777778-.7959382-1.77777778-1.7777777 0-.3343788.09430308-.6619789.27208063-.9451825l11.37965345-18.1280462c.5220099-.8315736 1.619306-1.08252456 2.4508796-.56051469.2266423.14227182.4182429.33387243.5605147.56051469z'
      fill='currentColor'
      fillRule='evenodd'
      transform='matrix(1 0 0 -1 0 40)'
    />
  </svg>
);

const CaretDownOutlined = convertIcon(SvgComponent);
export default CaretDownOutlined;

CaretDownOutlined.displayName = 'CaretDownOutlined';
