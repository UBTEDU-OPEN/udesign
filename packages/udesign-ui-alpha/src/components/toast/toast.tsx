import React, { useMemo, useRef } from 'react';
import { CheckIcon, CloseIcon, LoadingIcon } from '../icon';
import { Mask } from '../mask';

export type ToastProps = {
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode;
  mask?: boolean; // 是否显示透明蒙层，防止触摸穿透
  content: React.ReactNode;
  duration?: number; // 提示持续时间，若为 0 则不会自动关闭
  position?: 'top' | 'bottom' | 'center'; // TODO: 暂未实现
  afterClose?: () => void; // 关闭后的回调
};

export const Toast = ({ icon, mask = false, content }: ToastProps) => {
  const toastRef = useRef();

  const iconElement = useMemo(() => {
    let result;
    switch (icon) {
      case 'success':
        result = <CheckIcon />;
        break;
      case 'fail':
        result = <CloseIcon />;
        break;
      case 'loading':
        result = <LoadingIcon />;
        break;

      default:
        result = icon;
        break;
    }
    return result;
  }, [icon]);

  return (
    <div className='fixed z-20 w-full h-full top-0 left-0 flex items-center justify-center overflow-auto'>
      {mask ? <Mask /> : null}
      <div className='relative px-5 py-3 max-w-xs flex items-center justify-center flex-col bg-gray-900 bg-opacity-80 text-white rounded shadow-lg break-words'>
        {icon ? <div className='text-4xl mb-1'>{iconElement}</div> : null}
        {content}
      </div>
    </div>
  );
};

Toast.displayName = 'Toast';
