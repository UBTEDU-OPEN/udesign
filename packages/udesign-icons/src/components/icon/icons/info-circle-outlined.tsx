import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <mask id='a' fill='#fff'>
      <rect fill='#fff' fillRule='evenodd' height='20' rx='10' width='20' />
    </mask>
    <g fill='none' fillRule='evenodd' transform='translate(10 10)'>
      <rect height='18.5' rx='9.25' stroke='currentColor' strokeWidth='1.5' width='18.5' x='.75' y='.75' />
      <path
        d='m10.0761676 16.25c-.64823803 0-1.17383241-.6145909-1.17383241-1.3727693 0-.7581087.52559438-1.3727867 1.17383241-1.3727867.6482976 0 1.1738324.614678 1.1738324 1.3727867 0 .7581784-.5255348 1.3727693-1.1738324 1.3727693zm1.1722296-9.89195882-.4064568 5.17307252c-.0348177.4431331-.4045675.7849707-.84906638.7849707-.44449884 0-.81424871-.3418376-.8490664-.7849707l-.40645675-5.17307252c-.05448207-.69340629.46346835-1.29968959 1.15687464-1.35417166.03281962-.00257869.06572773-.00386952.09864851-.00386952.69554338 0 1.25939268.56384931 1.25939268 1.25939267 0 .03292077-.0012908.06582889-.0038695.09864851z'
        fill='currentColor'
        mask='url(#a)'
      />
    </g>
  </svg>
);

const InfoCircleOutlined = convertIcon(SvgComponent);
export default InfoCircleOutlined;

InfoCircleOutlined.displayName = 'InfoCircleOutlined';
