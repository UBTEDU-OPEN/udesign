import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <path
        d='m20 2.22222222c9.8183956 0 17.7777778 7.95938218 17.7777778 17.77777778s-7.9593822 17.7777778-17.7777778 17.7777778-17.77777778-7.9593822-17.77777778-17.7777778 7.95938218-17.77777778 17.77777778-17.77777778zm-2.9119961 22.65781408-5.2429274-5.2429273c-.5785545-.5785545-1.5165767-.5785545-2.09513118 0-.57855451.5785545-.57855451 1.5165767 0 2.0951312l6.12037718 6.1203772c.0463252.0644083.0984495.1259349.156373.1838585.5785545.5785545 1.5165767.5785545 2.0951312 0l12.5707873-12.5707873c.5785545-.5785545.5785545-1.5165767 0-2.0951312s-1.5165767-.5785545-2.0951312 0z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;
