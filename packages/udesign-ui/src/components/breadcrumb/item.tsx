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
    const cls = classNames(`${prefixCls}-text`);
    return (
      <span ref={strRef} className={cls} style={style} onClick={onClick}>
        {'href' in restProps ? <a {...restProps}> {children}</a> : children}
      </span>
    );
  };

  const renderSeparator = () => {
    const cls = `${prefixCls}-separator`;
    return <span className={cls}>{separator} </span>;
  };

  const cls = classNames(prefixCls, className);

  return (
    <span className={cls}>
      {renderSeparator()}
      {renderLink()}
    </span>
  );
};
Item.displayName = 'Item';
