import { PortalWrapper } from '../_portal/portal-wrapper';
import './spin.scss';
import { Spin as InnerSpin, SpinProps } from './spin';

const element = new PortalWrapper<typeof InnerSpin>(InnerSpin);

export default function showLoading(props: SpinProps) {
  element.show({
    ...props,
    timeOut: 60,
    _global: true,
  });
}
export function hideLoading() {
  element.close();
}
