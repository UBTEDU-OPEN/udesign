import { PortalWrapper } from '../_portal/portal-wrapper';
import './spin.scss';
import { Spin as InnerSpin, SpinProps } from './spin';

const element = new PortalWrapper<typeof InnerSpin>(InnerSpin);
let timer: NodeJS.Timeout;
export default function showLoading(props?: SpinProps) {
  clearTimeout(timer);
  const timeOut = props?.timeOut || 60;

  element.show({
    ...props,
    timeOut: 0,
    _global: true,
  });

  timer = setTimeout(() => {
    element.close();
    console.log(11);
  }, timeOut * 1000);
}
export function hideLoading() {
  element.close();
}
