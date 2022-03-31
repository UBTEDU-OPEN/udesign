import React, { ReactNode, useRef, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { PageIcon, CheckIcon, Tooltip } from '@ubt/udesign-ui-alpha';

const prefixCls = `ud-typography`;

export type CopyableProps = {
  tooltip?: ReactNode; //自定义提示文案，为 false 时隐藏文案
  icon?: ReactNode; //自定义拷贝图标
  text?: string; //拷贝到剪切板里的文本
  onCopy?: Function; //拷贝成功的回调函数
} & NativeProps;

export const Copyable = ({ tooltip, className, icon = <PageIcon />, text, onCopy, children }: CopyableProps) => {
  let [stateIcon, setStateIcon] = useState(icon);
  let [stateTooltip, setStateTooltip] = useState(tooltip);
  let [isShow, setIsShow] = useState(false);

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
      setStateIcon(<CheckIcon style={{ color: '#7fdd7f' }} />);
      setStateTooltip('复制成功!');
      setIsShow(true);
      onCopy?.();
      setTimeout(() => {
        setStateIcon(icon);
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
        {stateTooltip ? <Tooltip content={stateTooltip}>{stateIcon}</Tooltip> : <span style={{ color: '#7284FB' }}>{stateIcon}</span>}
      </span>
    </>
  );
};

Copyable.displayName = 'Copyable';
