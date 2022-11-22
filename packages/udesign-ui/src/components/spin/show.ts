import { PortalWrapper } from '../_portal/portal-wrapper';
import './spin.scss';
import { Spin as InnerSpin, SpinProps } from './spin';

const element = new PortalWrapper<typeof InnerSpin>(InnerSpin);
let timer: NodeJS.Timeout;
export default function showLoading(props?: SpinProps) {
  clearTimeout(timer);
  const timeout = props?.timeout || 60000;

  element.show({
    ...props,
    timeout: 0,
    _global: true,
  });

  timer = setTimeout(() => {
    element.close();
    console.log(11);
  }, timeout);
}
export function hideLoading() {
  element.close();
}
