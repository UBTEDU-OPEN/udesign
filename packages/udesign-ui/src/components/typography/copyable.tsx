import React, { ReactNode, useRef, useState } from 'react';
import classNames from 'classnames';
import { CopyOutlined, CheckOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import Tooltip from '../tooltip';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-typography`;

export type CopyableProps = {
  tooltip?: ReactNode; // 自定义提示文案，为 false 时隐藏文案
  icon?: [ReactNode, ReactNode]; // [复制图标,复制成功图标]
  text?: string; // 拷贝到剪切板里的文本
  onCopy?: () => void; // 拷贝成功的回调函数
} & NativeProps;

export const Copyable = ({ tooltip, className, icon = [<CopyOutlined key='copy-icon' />, <CheckOutlined key='copied-icon' />], text, onCopy, children }: CopyableProps) => {
  const [copyIcon, setCopyIcon] = useState(icon[0]);
  const [stateTooltip, setStateTooltip] = useState(tooltip);
  const [isShow, setIsShow] = useState(false);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-copy`]: true,
      [`${prefixCls}-copy-clicked`]: isShow,
    },
    className,
  );

  const textRef = useRef<HTMLSpanElement>(null);

  const onClick = () => {
    const textCopy = textRef.current!.innerText;
    const textareaEl = document.createElement('textarea');

    textareaEl.setAttribute('readonly', 'readonly');
    text ? (textareaEl.value = text) : (textareaEl.value = textCopy);
    document.body.appendChild(textareaEl);
    textareaEl.select();

    if (document.execCommand('copy')) {
      setCopyIcon(icon[1]);
      setStateTooltip('复制成功!');
      setIsShow(true);
      onCopy?.();
      setTimeout(() => {
        setCopyIcon(icon[0]);
        setStateTooltip(tooltip);
        setIsShow(false);
      }, 3000);
    }
    document.body.removeChild(textareaEl);
  };

  return (
    <>
      <span ref={textRef}> {children}</span>
      <span className={cls} onClick={onClick} style={{ cursor: 'pointer' }}>
        {stateTooltip ? <Tooltip content={stateTooltip}>{copyIcon}</Tooltip> : <span className={`${prefixCls}-copy-icon`}>{copyIcon}</span>}
      </span>
    </>
  );
};

Copyable.displayName = 'Copyable';
