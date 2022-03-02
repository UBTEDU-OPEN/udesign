import { ElementWrapper } from '../wrapper';
import { Toast as InternalToast, ToastProps } from './toast';

const element = new ElementWrapper<typeof InternalToast>(InternalToast);

let isShowing = false;

export function Toast(content: string, options?: Omit<ToastProps, 'content'>): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isShowing) {
      resolve();
      return;
    }
    isShowing = true;
    const duration = options?.duration || 2000;
    element.show({
      ...options,
      content,
    });
    setTimeout(() => {
      element.close();
      isShowing = false;
      options?.afterClose?.();
    }, duration);
  });
}
