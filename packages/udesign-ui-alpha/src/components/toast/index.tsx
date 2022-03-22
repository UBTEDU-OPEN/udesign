import { ElementWrapper } from '../wrapper';
import { Toast as InnerToast, ToastProps } from './toast';

const element = new ElementWrapper<typeof InnerToast>(InnerToast);

let isShowing = false;

export function Toast(p: ToastProps | string): Promise<void> {
  const props = typeof p === 'string' ? { content: p } : p;

  return new Promise((resolve, reject) => {
    if (isShowing) {
      resolve();
      return;
    }
    isShowing = true;
    const duration = props?.duration ?? 2000;
    element.show({
      ...props,
    });
    setTimeout(() => {
      element.close();
      isShowing = false;
      props?.afterClose?.();
    }, duration);
  });
}
