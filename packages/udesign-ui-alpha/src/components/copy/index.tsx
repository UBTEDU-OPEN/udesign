import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import Clipboard from 'clipboard';
import { NativeProps } from '../../utils';

export type CopyProps = {
  text?: string;
  onSuccess?: () => void;
  onError?: () => void;
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
    <span className={cls} ref={copyBtnRef} data-clipboard-text={text} style={style}>
      {children}
    </span>
  );
};
