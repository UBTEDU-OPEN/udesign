import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-breadcrumb`;

export type ItemProps = {
  separator?: ReactNode; // 设置分隔符
  href?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>; // 点击时的回调
} & NativeProps;

export const Item = ({ separator, onClick, className, children, style, ...restProps }: ItemProps) => {
  const strRef = useRef<HTMLSpanElement>(null);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-item`]: children,
    },
    className,
  );

  const conCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-wrapper`]: children,
    },
    className,
  );

  const iconCls = `${prefixCls}-separator`;

  let link;
  if ('href' in restProps) {
    link = (
      <span ref={strRef} className={cls} style={style}>
        <a {...restProps}> {children}</a>
      </span>
    );
  } else {
    link = (
      <span ref={strRef} className={cls} style={style} {...restProps}>
        {children}
      </span>
    );
  }

  return (
    <>
      <span className={conCls} onClick={onClick}>
        <span className={iconCls}>{separator} </span>
        {link}
      </span>
    </>
  );
};

Item.displayName = 'Item';
