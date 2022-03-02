import classNames from 'classnames';
import React, { useRef } from 'react';
import { NativeProps } from '../../utils';

export type MaskProps = {
  // visible?: boolean;
  onClick?: () => void; // 点击蒙层自身触发
} & NativeProps;

export const Mask = ({ onClick, children }: MaskProps) => {
  // const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // if (!ref?.current?.contains(e.target as HTMLElement)) {
    //   onClick?.();
    // }
    if (e.target === e.currentTarget) {
      onClick?.();
    }
  };

  const cls = 'absolute w-full h-full top-0 left-0 opacity-50 bg-black';
  // const maskCls = classNames('p-4 pointer-events-none opacity-50 bg-black', fixedCls);
  // const cls = classNames('flex items-center justify-center overflow-auto', fixedCls);

  return (
    <div className={cls} onClick={handleClick}>
      {/* {visible ? <div className={maskCls}></div> : null} */}
      {/* <div className='relative z-20' ref={ref}>
        {children}
      </div> */}
    </div>
  );
};

Mask.displayName = 'Mask';
