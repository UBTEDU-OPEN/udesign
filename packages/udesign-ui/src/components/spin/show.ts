import { PortalWrapper } from '../_portal/portal-wrapper';
import { Spin as InnerSpin, SpinProps } from './spin';
import './spin.scss';

const element = new PortalWrapper<typeof InnerSpin>(InnerSpin);

export function showLoading(props?: SpinProps) {
  element.show({
    timeout: 60000,
    mask: true,
    fullscreen: true,
    ...props,
  });
}
export function hideLoading() {
  element.close();
}
