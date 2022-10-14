import React, { useEffect, useRef, useContext, useState } from 'react';
import classNames from 'classnames';
import RowContext from '../row/rowContext';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-grid-col`;

export interface ColSize {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
}

export type ColProps = {
  flex?: string | number; // flex 布局属性。默认值：-
  offset?: number; // 栅格左侧的间隔格数，间隔内不可以有栅格。默认值：0
  order?: number; // 栅格顺序。默认值：0
  pull?: number; // 栅格向左移动格数。默认值：0
  push?: number; // 栅格向右移动格数。默认值：0
  span?: number; // 栅格占位格数，为 0 时相当于 display: none。默认值：-
  xs?: number | ColSize; // 屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象。默认值：-
  sm?: number | ColSize; // 屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象。默认值：-
  md?: number | ColSize; // 屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象。默认值：-
  lg?: number | ColSize; // 屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象。默认值：-
  xl?: number | ColSize; // 屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象。默认值：-
  xxl?: number | ColSize; // 屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象。默认值：-
} & NativeProps;

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export const Col = (props: ColProps) => {
  const { flex, offset = 0, order = 0, pull = 0, push = 0, span, xs, sm, md, lg, xl, xxl, children, className, style } = props;
  const colRef = useRef<HTMLDivElement>(null);
  const { gutter } = useContext(RowContext);
  let sizeClassObj = {};
  sizes.forEach((size) => {
    let sizeProps: ColSize = {};
    const propSize = props[size];
    if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }
    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull,
    };
  });

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-span-${span}`]: span,
    [`${prefixCls}-pull-${pull}`]: pull,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-xs-${xs}`]: xs && typeof xs === 'number',
    [`${prefixCls}-sm-${sm}`]: sm && typeof sm === 'number',
    [`${prefixCls}-md-${md}`]: md && typeof md === 'number',
    [`${prefixCls}-lg-${lg}`]: lg && typeof lg === 'number',
    [`${prefixCls}-xl-${xl}`]: xl && typeof xl === 'number',
    [`${prefixCls}-xxl-${xxl}`]: xxl && typeof xxl === 'number',
    ...sizeClassObj,
  });

  useEffect(() => {
    flex ? (colRef.current!.style.flex = `${flex}`) : null;
  }, [flex]);
  const [styleCss, setStyleCss] = useState<React.CSSProperties>();
  const [size, setSize] = useState(0);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (gutter instanceof Array) {
      setStyleCss({
        paddingLeft: `${gutter[0] / 2}px`,
        paddingRight: `${gutter[0] / 2}px`,
        marginTop: `${gutter[1]}px`,
      });
    } else if (typeof gutter === 'number' && gutter) {
      setStyleCss({
        padding: `0px ${gutter / 2}px`,
        margin: '0px',
        marginTop: `${gutter}px`,
      });
    } else if (typeof gutter === 'object') {
      let gutterHorizontal;
      if (size <= 576 && gutter.xs) {
        gutterHorizontal = gutter.xs / 2;
      } else if (size <= 768 && gutter.sm) {
        gutterHorizontal = gutter.sm / 2;
      } else if (size <= 992 && gutter.md) {
        gutterHorizontal = gutter.md / 2;
      } else if (size <= 1200 && gutter.lg) {
        gutterHorizontal = gutter.lg / 2;
      } else if (size <= 1600 && gutter.xl) {
        gutterHorizontal = gutter.xl / 2;
      } else if (size > 1600 && gutter.xxl) {
        gutterHorizontal = gutter.xxl / 2;
      }
      setStyleCss({
        padding: `0px ${gutterHorizontal}px`,
        margin: '0px',
      });
    }
  }, [size]);

  return (
    <div ref={colRef} className={cls} style={{ ...style, ...styleCss }}>
      {children}
    </div>
  );
};
Col.displayName = 'Col';
