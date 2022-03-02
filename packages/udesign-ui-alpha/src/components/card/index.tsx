import classNames from 'classnames';
import React, { CSSProperties, ReactNode } from 'react';
import { When } from '../../constants';
import { NativeProps } from '../../utils';

export type CardProps = {
  title?: ReactNode;
  extra?: ReactNode;
  cover?: ReactNode;
  border?: boolean; // 是否设置卡片的外边框
  bodyStyle?: CSSProperties; // 卡片内容区内联样式
  header?: ReactNode;
  headerLine?: boolean; // 标题区与内容区是否有下边线
  headerStyle?: CSSProperties; // 卡片标题区内联样式
  footer?: ReactNode;
  footerLine?: boolean; // 内容区和页尾区是否有边线
  footerStyle?: CSSProperties; // 卡片页脚区内联样式
  shadow?: When;
} & NativeProps;

export const Card = ({ title, extra, cover, border = true, bodyStyle, header, headerLine = true, headerStyle, footer, footerLine = true, footerStyle, shadow, className, children, ...restProps }: CardProps) => {
  const cls = classNames('bg-white overflow-hidden rounded-lg mb-3', border ? 'border' : '', shadow === 'hover' ? 'hover:shadow-lg' : shadow === 'always' ? 'shadow-lg' : '', className);
  const headerCls = classNames('flex items-center ', !headerLine || (!title && !extra) ? '' : 'border-b');
  return (
    <>
      <div className={cls} {...restProps}>
        {header ? (
          header
        ) : title || extra ? (
          <div className={classNames('p-3', headerCls)} style={headerStyle}>
            <div className='flex-1 font-bold'>{title}</div>
            <div className='text-right'>{extra}</div>
          </div>
        ) : null}
        {cover}
        <div className={classNames('p-3')} style={bodyStyle}>
          {children}
        </div>
        {footer ? (
          <div className={classNames('p-3', footerLine ? 'border-t' : '')} style={footerStyle}>
            {footer}
          </div>
        ) : null}
      </div>
    </>
  );
};

Card.displayName = 'Card';
