import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <mask id='a' fill='#fff'>
      <rect fill='#fff' fillRule='evenodd' height='35.555556' rx='17.777778' width='35.555556' />
    </mask>
    <g fill='none' fillRule='evenodd' transform='translate(2.222222 2.222222)'>
      <rect height='32.888889' rx='16.444444' stroke='currentColor' strokeWidth='2.666667' width='32.888889' x='1.333333' y='1.333333' />
      <path
        d='m17.9131868 28.8888889c-1.1524231 0-2.0868131-1.092606-2.0868131-2.4404788 0-1.3477488.93439-2.4405097 2.0868131-2.4405097 1.1525292 0 2.0868132 1.0927609 2.0868132 2.4405097 0 1.3478728-.934284 2.4404788-2.0868132 2.4404788zm2.0839637-17.5857046-.7225898 9.1965735c-.0618981.7877921-.7192312 1.3955034-1.5094513 1.3955034-.7902202 0-1.4475533-.6077113-1.5094514-1.3955034l-.7225898-9.1965735c-.096857-1.2327223.8239438-2.31055926 2.056666-2.40741626.058346-.00458434.1168493-.00687915.1753752-.00687915 1.2365215 0 2.2389203 1.00239876 2.2389203 2.23892031 0 .0585258-.0022948.1170291-.0068792.1753751z'
        fill='currentColor'
        mask='url(#a)'
      />
    </g>
  </svg>
);

const ExclamationCircleOutlined = convertIcon(SvgComponent);
export default ExclamationCircleOutlined;

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
