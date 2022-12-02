import { PortalWrapper } from '../_portal/portal-wrapper';
import { Spin as InnerSpin, SpinProps } from './spin';
import './spin.scss';

const element = new PortalWrapper<typeof InnerSpin>(InnerSpin);

let timer: NodeJS.Timeout;

export function showLoading(props?: SpinProps) {
  clearTimeout(timer);
  const timeout = props?.timeout || 120000;

  element.show({
    timeout: 0,
    mask: true,
    fullscreen: true,
    ...props,
  });

  timer = setTimeout(() => {
    element.close();
  }, timeout);
}
export function hideLoading() {
  element.close();
}
