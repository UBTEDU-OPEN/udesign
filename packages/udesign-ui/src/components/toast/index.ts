import { PortalWrapper } from '../_portal/portal-wrapper';
import './toast.scss';
import { Toast as InnerToast, ToastProps } from './toast';

const element = new PortalWrapper<typeof InnerToast>(InnerToast);

let isShowing = false;

export default function Toast(p: ToastProps | string): Promise<void> {
  const props = typeof p === 'string' ? { content: p } : p;

  return new Promise((resolve, reject) => {
    if (isShowing) {
      resolve();
      return;
    }
    isShowing = true;
    const duration = props?.duration || 2000;
    const delay = props?.delay ?? 1000;
    setTimeout(() => {
      element.show({
        ...props,
      });
      setTimeout(() => {
        element.close();
        isShowing = false;
        props?.afterClose?.();
      }, duration);
    }, delay);
  });
}
