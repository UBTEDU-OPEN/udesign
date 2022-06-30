import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m27.1527778 30.0104585h3.2617972c4.3734095 0 7.9187583-3.5453489 7.9187583-7.9187584 0-4.3734094-3.5453488-7.9187583-7.9187583-7.9187583h-3.2617972c-.8821215 0-1.5972222-.7090698-1.5972222-1.5837517s.7151007-1.5837517 1.5972222-1.5837517h3.2887383c6.1227732 0 11.0862617 4.9634885 11.0862617 11.0862617 0 6.1227733-4.9634885 11.0862617-11.0862617 11.0862617h-3.2887383c-.8821215 0-1.5972222-.7090697-1.5972222-1.5837516s.7151007-1.5837517 1.5972222-1.5837517zm-9.5833334 0c.8821215 0 1.5972223.7090698 1.5972223 1.5837517s-.7151008 1.5837516-1.5972223 1.5837516h-3.2887382c-6.12277332 0-11.08626176-4.9634884-11.08626176-11.0862617 0-6.1227732 4.96348844-11.0862617 11.08626176-11.0862617h3.2887382c.8821215 0 1.5972223.7090698 1.5972223 1.5837517s-.7151008 1.5837517-1.5972223 1.5837517h-3.2617971c-4.37340953 0-7.91875841 3.5453489-7.91875841 7.9187583 0 4.3734095 3.54534888 7.9187584 7.91875841 7.9187584zm-1.6106927-9.50251h12.8047188c.8746819 0 1.5837517.7090697 1.5837517 1.5837516s-.7090698 1.5837517-1.5837517 1.5837517h-12.8047188c-.8746819 0-1.5837517-.7090698-1.5837517-1.5837517s.7090698-1.5837516 1.5837517-1.5837516z'
      fill='currentColor'
      fillRule='evenodd'
      transform='matrix(.70710678 -.70710678 .70710678 .70710678 -11.432884 19.921091)'
    />
  </svg>
);

const LinkOutlined = convertIcon(SvgComponent);
export default LinkOutlined;

LinkOutlined.displayName = 'LinkOutlined';
