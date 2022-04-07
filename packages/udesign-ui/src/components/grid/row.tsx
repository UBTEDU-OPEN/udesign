import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
const prefixCls = `ud-grid-row`;

export type RowProps = {
  align?: 'top' | 'middle' | 'bottom'; // 垂直对齐方式
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'; // 水平排列方式
  wrap?: Boolean; // 是否自动换行
  gutter?: number | Array<number> | object; // 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]
} & NativeProps;
export const Row = ({ align = 'top', justify = 'start', wrap = true, gutter = 0, className, children, style }: RowProps) => {
  const gutterRef = useRef<HTMLDivElement>(null);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-justify-${justify}`]: justify,
      [`${prefixCls}-wrap`]: wrap,
    },
    className,
  );
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
    let gutHor = 0,
      gutVer = 0;

    if (gutter instanceof Array) {
      (gutHor = gutter[0] / 2), (gutVer = gutter[1]);
      gutterRef.current!.style.margin = '0px ' + -gutHor + 'px';
      gutterRef.current!.style.rowGap = gutVer + 'px';
      let i = 0;
      for (i; i < gutterRef.current!.children.length; i++) {
        gutterRef.current!.children[i].style.padding = '0px ' + gutHor + 'px';
        gutterRef.current!.children[i].style.background = 'transparent';
      }
    } else if (typeof gutter === 'number' && gutter) {
      gutHor = gutter / 2;
      gutterRef.current!.style.marginLeft = -gutHor + 'px';
      gutterRef.current!.style.marginRight = -gutHor + 'px';
      gutterRef.current!.style.rowGap = gutVer + 'px';
      let i = 0;
      for (i; i < gutterRef.current!.children.length; i++) {
        gutterRef.current!.children[i].style.padding = '0px ' + gutHor + 'px';
        gutterRef.current!.children[i].style.margin = '0px';
        gutterRef.current!.children[i].style.background = 'transparent';
      }
    } else if (typeof gutter === 'object') {
      if (size <= 576 && gutter.xs) {
        gutHor = gutter.xs / 2;
      } else if (size <= 768 && gutter.sm) {
        gutHor = gutter.sm / 2;
      } else if (size <= 992 && gutter.md) {
        gutHor = gutter.md / 2;
      } else if (size <= 1200 && gutter.lg) {
        gutHor = gutter.lg / 2;
      } else if (size <= 1600 && gutter.xl) {
        gutHor = gutter.xl / 2;
      } else if (size > 1600 && gutter.xxl) {
        gutHor = gutter.xxl / 2;
      }

      gutterRef.current!.style.marginLeft = -gutHor + 'px';
      gutterRef.current!.style.marginRight = -gutHor + 'px';
      gutterRef.current!.style.rowGap = gutVer + 'px';
      let i = 0;
      for (i; i < gutterRef.current!.children.length; i++) {
        gutterRef.current!.children[i].style.padding = '0px ' + gutHor + 'px';
        gutterRef.current!.children[i].style.margin = '0px';
        gutterRef.current!.children[i].style.background = 'transparent';
      }
    }
  }, [size]);

  return (
    <div ref={gutterRef} className={cls} style={style}>
      {children}
    </div>
  );
};

Row.displayName = 'Row';
