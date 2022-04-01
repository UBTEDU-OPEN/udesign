import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
const prefixCls = `ud-grid-col`;

export type ColProps = {
  flex?: string | number; // flex 布局属性
  offset?: number; // 栅格左侧的间隔格数，间隔内不可以有栅格
  order?: number; // 栅格顺序
  pull?: number; // 栅格向左移动格数
  push?: number; // 栅格向右移动格数
  span?: number; // 栅格占位格数，为 0 时相当于 display: none
  xs?: number | object; // 屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
  sm?: number | object; // 屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
  md?: number | object; // 屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象
  lg?: number | object; // 屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象
  xl?: number | object; // 屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
  xxl?: number | object; // 屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象
} & NativeProps;
export const Col = ({ flex, offset = 0, order = 0, pull = 0, push = 0, span, xs, sm, md, lg, xl, xxl, children }: ColProps) => {
  const colRef = useRef<HTMLDivElement>(null);

  const cls = classNames(prefixCls, {
    [`${prefixCls}-span-${span}`]: span,
    [`${prefixCls}-pull-${pull}`]: pull,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-order-${order}`]: order,

    [`${prefixCls}-xs-${xs}`]: xs && typeof xs === 'number',
    [`${prefixCls}-xs-${xs?.span}`]: xs?.span,
    [`${prefixCls}-xs-offset-${xs?.offset}`]: xs?.offset,
    [`${prefixCls}-xs-push-${xs?.push}`]: xs?.push,
    [`${prefixCls}-xs-pull-${xs?.pull}`]: xs?.pull,
    [`${prefixCls}-xs-order-${xs?.order}`]: xs?.order,

    [`${prefixCls}-sm-${sm}`]: sm && typeof sm === 'number',
    [`${prefixCls}-sm-${sm?.span}`]: sm?.span,
    [`${prefixCls}-sm-offset-${sm?.offset}`]: sm?.offset,
    [`${prefixCls}-sm-push-${sm?.push}`]: sm?.push,
    [`${prefixCls}-sm-pull-${sm?.pull}`]: sm?.pull,
    [`${prefixCls}-sm-order-${sm?.order}`]: sm?.order,

    [`${prefixCls}-md-${md}`]: md && typeof md === 'number',
    [`${prefixCls}-md-${md?.span}`]: md?.span,
    [`${prefixCls}-md-offset-${md?.offset}`]: md?.offset,
    [`${prefixCls}-md-push-${md?.push}`]: md?.push,
    [`${prefixCls}-md-pull-${md?.pull}`]: md?.pull,
    [`${prefixCls}-md-order-${md?.order}`]: md?.order,

    [`${prefixCls}-lg-${lg}`]: lg && typeof lg === 'number',
    [`${prefixCls}-lg-${lg?.span}`]: lg?.span,
    [`${prefixCls}-lg-offset-${lg?.offset}`]: lg?.offset,
    [`${prefixCls}-lg-push-${lg?.push}`]: lg?.push,
    [`${prefixCls}-lg-pull-${lg?.pull}`]: lg?.pull,
    [`${prefixCls}-lg-order-${lg?.order}`]: lg?.order,

    [`${prefixCls}-xl-${xl}`]: xl && typeof xl === 'number',
    [`${prefixCls}-xl-${xl?.span}`]: xl?.span,
    [`${prefixCls}-xl-offset-${xl?.offset}`]: xl?.offset,
    [`${prefixCls}-xl-push-${xl?.push}`]: xl?.push,
    [`${prefixCls}-xl-pull-${xl?.pull}`]: xl?.pull,
    [`${prefixCls}-xl-order-${xl?.order}`]: xl?.order,

    [`${prefixCls}-xxl-${xxl}`]: xxl && typeof xxl === 'number',
    [`${prefixCls}-xxl-${xxl?.span}`]: xxl?.span,
    [`${prefixCls}-xxl-offset-${xxl?.offset}`]: xxl?.offset,
    [`${prefixCls}-xxl-push-${xxl?.push}`]: xxl?.push,
    [`${prefixCls}-xxl-pull-${xxl?.pull}`]: xxl?.pull,
    [`${prefixCls}-xxl-order-${xxl?.order}`]: xxl?.order,
  });

  useEffect(() => {
    flex ? (colRef.current!.style.flex = `${flex}`) : null;
  }, [flex]);

  return (
    <div ref={colRef} className={cls}>
      {children}
    </div>
  );
};
Col.displayName = 'Col';
