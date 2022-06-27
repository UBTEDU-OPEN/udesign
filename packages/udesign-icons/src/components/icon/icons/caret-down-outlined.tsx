import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd' transform='matrix(1 0 0 -1 0 40)'>
      <path d='m10 10h20v20h-20z' />
      <path
        d='m21.2480097 14.4684668 6.4010551 10.197026c.2936305.4677602.1524706 1.0849893-.3152895 1.3786198-.1593021.0999999-.3435771.1530454-.5316652.1530454h-12.8021101c-.5522847 0-1-.4477153-1-1 0-.1880881.0530455-.3723631.1530454-.5316652l6.401055-10.197026c.2936306-.4677601.9108597-.60892 1.3786198-.3152895.1274863.0800279.2352616.1878033.3152895.3152895z'
        fill='currentColor'
      />
    </g>
  </svg>
);

const CaretDownOutlined = convertIcon(SvgComponent);
export default CaretDownOutlined;

CaretDownOutlined.displayName = 'CaretDownOutlined';
