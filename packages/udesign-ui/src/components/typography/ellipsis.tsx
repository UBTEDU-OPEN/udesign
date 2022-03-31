import React, { ReactNode, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

const prefixCls = `ud-typography`;

export type EllipsisProps = {
  rows?: number; //	最多显示的行数
  expandable?: boolean; //是否可展开
  suffix?: string; //自定义省略内容后缀
  symbol?: ReactNode; //自定义展开描述文案
  onExpand?: Function; //点击展开时的回调
  tooltip?: false | ReactNode; //省略时，展示提示信息
} & NativeProps;

export const Ellipsis = ({ rows = 1, expandable, suffix, className, tooltip, symbol, children, onExpand }: EllipsisProps) => {
  const [isExpand, setIsExpand] = useState(true);
  let lineClamp = useRef<HTMLSpanElement>(null);
  let [tooltipText, setTooltipText] = useState(tooltip);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-paragraph-ellipsis-rows`]: rows,
    },
    className,
  );
  const symbolCss = `${prefixCls}-paragraph-ellipsis-symbol`;
  const tooltipCss = `${prefixCls}-paragraph-ellipsis-tooltip`;
  const suffixCss = `${prefixCls}-paragraph-ellipsis-suffix`;

  const onClick = () => {
    if (!expandable) return;
    setIsExpand(!isExpand);
    return onExpand?.();
  };

  useEffect(() => {
    if (tooltipText === true) {
      setTooltipText(children);
    }
    lineClamp.current!.style.webkitLineClamp = `${rows}`;
  }, [tooltipText]);
  return (
    <>
      <span ref={lineClamp} className={isExpand ? cls : undefined}>
        {children}
      </span>
      {isExpand ? (
        <span className={symbolCss} onClick={onClick}>
          {symbol}
        </span>
      ) : null}
      {tooltip ? <span className={tooltipCss}>{tooltipText}</span> : undefined}
      <span className={suffixCss}>{suffix}</span>
    </>
  );
};
Ellipsis.displayName = 'Ellipsis';
