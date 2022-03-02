import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import Clipboard from 'clipboard';
import { NativeProps } from '../../utils';

export type CopyProps = {
  text: string;
  onSuccess: () => void;
  onError: () => void;
} & NativeProps;

export const Copy = ({ text, onSuccess, onError, children, className }: CopyProps) => {
  const copyBtnRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const copy = new Clipboard(copyBtnRef.current as HTMLAnchorElement);
    copy.on('success', onSuccess);
    copy.on('error', onError);
  }, []);

  const cls = classNames('', className);

  return (
    <a className={cls} ref={copyBtnRef} data-clipboard-text={text}>
      {children}
    </a>
  );
};
