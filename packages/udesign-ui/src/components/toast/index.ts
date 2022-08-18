import { PortalWrapper } from '../_portal/portal-wrapper';
import './toast.scss';
import { Toast as InnerToast, ToastProps } from './toast';

const element = new PortalWrapper<typeof InnerToast>(InnerToast);

let timer: NodeJS.Timeout;

export default function Toast(p: ToastProps | string): Promise<void> {
  const props = typeof p === 'string' ? { content: p } : p;
  return new Promise((resolve, reject) => {
    timer && clearTimeout(timer);
    const duration = props?.duration || 2000;
    const delay = props?.delay ?? 0;

    setTimeout(() => {
      element.show({
        ...props,
      });
      timer = setTimeout(() => {
        element.close();
        props?.afterClose?.();
      }, duration);
    }, delay);
  });
}
