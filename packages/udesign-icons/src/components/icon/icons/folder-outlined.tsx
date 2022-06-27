import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg height='1em' viewBox='0 0 40 40' width='1em' xmlns='http://www.w3.org/2000/svg'>
    <mask id='a' fill='#fff'>
      <path d='m0 0h22v22h-22z' fill='#fff' fillRule='evenodd' />
    </mask>
    <g fill='none' fillRule='evenodd' mask='url(#a)' stroke='currentColor' strokeWidth='2' transform='translate(9 9)'>
      <g transform='translate(1)'>
        <path d='m17.895914 6.47758412.0001145-.0001968c.1503033-.25832258.0535819-.58185744-.2867435-.76414872l-7.3169429-4.41148017c-.2008956-.10659256-.45043986-.10659256-.60387518-.026872l-7.41189704 4.46512856c-.10303017.05469508-.18557098.13355277-.23955273.22635159-.15023994.25812903-.05351094.58159391.28696096.76395158l7.31688684 4.41154334c.20092715.1066034.45047145.1066034.60387895.0268928l7.4116152-4.46516133c.103307-.05485784.1858733-.13369929.2395549-.22600885z' />
        <g strokeLinecap='round' strokeLinejoin='round'>
          <path d='m18 10.0385192c0 .9614808-.5170132 1.42158-.7570718 1.5561989l-6.5279818 4.2184411c-.4446053.2491211-.98523892.2491211-1.42986898 0l-6.52795705-4.2184411c-.71053578-.398184-.9663802-1.3018072-.57153623-2.01820848' />
          <path d='m18 14.4620096c0 .9614808-.5170132 1.42158-.7570718 1.5561989l-6.5279818 4.218441c-.4446053.2491212-.98523892.2491212-1.42986898 0l-6.52795705-4.218441c-.71053578-.398184-.9663802-1.3018072-.57153623-2.0182085' />
        </g>
      </g>
    </g>
  </svg>
);

const FolderOutlined = convertIcon(SvgComponent);
export default FolderOutlined;

FolderOutlined.displayName = 'FolderOutlined';
