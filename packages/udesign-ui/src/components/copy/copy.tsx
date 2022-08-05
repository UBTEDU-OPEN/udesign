import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import Clipboard from 'clipboard';
import { NativeProps } from '../../utils';
// import Tooltip from '../tooltip';

export type CopyProps = {
  text?: string; // 要复制文本。默认值：-
  onSuccess?: () => void; // 复制成功时的回调。默认值：-
  onError?: () => void; // 复制失败时的回调。默认值：-
} & NativeProps;

export const Copy = ({ text, onSuccess, onError, children, className, style }: CopyProps) => {
  const copyBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const copy = new Clipboard(copyBtnRef.current as HTMLAnchorElement);
    onSuccess && copy.on('success', onSuccess);
    onError && copy.on('error', onError);
  }, []);

  const cls = classNames('cursor-pointer', className);

  return (
    <>
      <span className={cls} ref={copyBtnRef} data-clipboard-text={text} style={style}>
        {children}
      </span>
    </>
  );
};
