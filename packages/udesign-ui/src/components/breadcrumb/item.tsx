import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-breadcrumb-item`;

export type ItemProps = {
  separator?: ReactNode; // 设置分隔符
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void; // 点击时的回调
} & NativeProps;

export const Item = ({ separator, onClick, className, children, style, ...restProps }: ItemProps) => {
  const strRef = useRef<HTMLSpanElement>(null);

  const renderLink = () => {
    if ('href' in restProps) return <a {...restProps}> {children}</a>;

    return children;
  };

  const renderIcon = () => {
    const cls = `${prefixCls}-separator`;
    return <span className={cls}>{separator} </span>;
  };

  const cls = classNames(prefixCls, className);

  return (
    <span className={cls}>
      {renderIcon()}
      <span ref={strRef} className={`${prefixCls}-text`} style={style} onClick={onClick}>
        {renderLink()}
      </span>
    </span>
  );
};
Item.displayName = 'Item';
