import * as React from 'react';
import { convertIcon } from '../components/icon/icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' focusable={false} aria-hidden={true} {...props}>
      <g fill='currentColor' transform='translate(3.809524 5.333333)'>
        <path d='m19.8617297 9.38778214h-6.5039197c-.6349981 0-1.154542-.55072269-1.154542-1.2238282v-6.91462932c0-.67310551.5195439-1.2238282 1.154542-1.2238282h6.5039197c.634998 0 1.1545419.55072269 1.1545419 1.2238282v6.89423218c0 .69350265-.5195439 1.24422534-1.1545419 1.24422534zm12.5075379 21.07024216h-6.5039197c-.6349981 0-1.154542-.5507227-1.154542-1.2238282v-6.8942322c0-.6731055.5195439-1.2238282 1.154542-1.2238282h6.5039197c.634998 0 1.1545419.5507227 1.1545419 1.2238282v6.8942322c0 .6731055-.5195439 1.2238282-1.1545419 1.2238282zm-12.5075379 0h-6.5039197c-.6349981 0-1.154542-.5507227-1.154542-1.2238282v-6.8942322c0-.6731055.5195439-1.2238282 1.154542-1.2238282h6.5039197c.634998 0 1.1545419.5507227 1.1545419 1.2238282v6.8942322c0 .6731055-.5195439 1.2238282-1.1545419 1.2238282zm-12.18041772 0h-6.52316208c-.63499807 0-1.15454196-.5507227-1.15454196-1.2238282v-6.8942322c0-.6731055.51954389-1.2238282 1.15454196-1.2238282h6.50391971c.63499808 0 1.15454196.5507227 1.15454196 1.2238282v6.8942322c.01924237.6731055-.50030151 1.2238282-1.13529959 1.2238282zm21.58993462-13.8088615h-25.01507577c-.63499808 0-1.15454196-.5507227-1.15454196-1.2238282v-.3467513c0-.6731056.51954388-1.2238282 1.15454196-1.2238282h25.01507577c.6349981 0 1.154542.5507226 1.154542 1.2238282v.3467513c0 .6731055-.5195439 1.2238282-1.154542 1.2238282z' />
        <path d='m15.3012889 23.9513377v-15.39983817c0-.67310551.5195439-1.22382819 1.154542-1.22382819h.3271202c.6349981 0 1.154542.55072268 1.154542 1.22382819v15.39983817c0 .6731055-.5195439 1.2238282-1.154542 1.2238282h-.3271202c-.6349981 0-1.154542-.5507227-1.154542-1.2238282zm-12.19966003 0v-8.8727544c0-.6731056.51954388-1.2238282 1.15454196-1.2238282h.32712022c.63499808 0 1.15454196.5507226 1.15454196 1.2238282v8.8727544c0 .6731055-.51954388 1.2238282-1.15454196 1.2238282h-.32712022c-.63499808 0-1.15454196-.5507227-1.15454196-1.2238282zm24.68795563 0v-8.8727544c0-.6731056.5195438-1.2238282 1.1545419-1.2238282h.3271202c.6349981 0 1.154542.5507226 1.154542 1.2238282v8.8727544c0 .6731055-.5195439 1.2238282-1.154542 1.2238282h-.3271202c-.6349981 0-1.1545419-.5507227-1.1545419-1.2238282z' />
      </g>
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent);
IconComponent.displayName = 'IconComponent';
export default IconComponent;