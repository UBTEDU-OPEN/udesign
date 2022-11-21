import React, { ReactNode, useContext, createElement } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { BreadcrumbContext } from './context';

const prefixCls = `${BASE_CLASS_PREFIX}-breadcrumb-item`;

export type ItemProps = {
  separator?: ReactNode; // 设置分隔符。
  href?: string; // 链接的目的地。
  icon?: ReactNode; // 标签的显示图标。
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void; // 点击时item时的回调函数。
} & NativeProps;

export const Item = (props: ItemProps) => {
  const { onClick, className, children, style, icon, href } = props;
  const context = useContext(BreadcrumbContext);
  const separator = props.separator || context.separator;
  const clickHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onClick?.(e);
    context.onClick?.(e);
  };
  const renderLink = () => {
    const cls = classNames(`${prefixCls}-text`);
    const childrenHtml = createElement(
      href !== undefined ? 'a' : 'span',
      {
        className: `${cls}`,
        style,
        onClick: clickHandler,
        href,
      },
      <>
        {icon}
        {children}
      </>,
    );
    return childrenHtml;
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
