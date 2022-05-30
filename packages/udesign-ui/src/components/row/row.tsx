import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import RowContext from './rowContext';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-grid-row`;

export type RowProps = {
  align?: 'top' | 'middle' | 'bottom'; // 垂直对齐方式
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'; // 水平排列方式
  wrap?: boolean; // 是否自动换行
  gutter?: number | Array<number> | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }; // 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]
} & NativeProps;
export const Row = ({ align = 'top', justify = 'start', wrap = true, gutter, className, children, style }: RowProps) => {
  const gutterRef = useRef<HTMLDivElement>(null);

  let gutterHorizontal = 0;
  let gutterVertical = 0;

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
    if (gutter instanceof Array) {
      gutterHorizontal = gutter[0] / 2;
      gutterVertical = gutter[1];

      gutterRef.current!.style.margin = `0px ${-gutterHorizontal}px`;
      gutterRef.current!.style.rowGap = `${gutterVertical}px`;
    } else if (typeof gutter === 'number' && gutter) {
      gutterHorizontal = gutter / 2;
      gutterRef.current!.style.marginLeft = `${-gutterHorizontal}px`;
      gutterRef.current!.style.marginRight = `${-gutterHorizontal}px`;
      gutterRef.current!.style.rowGap = `${gutterVertical}px`;
    } else if (typeof gutter === 'object') {
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

      gutterRef.current!.style.marginLeft = `${-gutterHorizontal}px`;
      gutterRef.current!.style.marginRight = `${-gutterHorizontal}px`;
      gutterRef.current!.style.rowGap = `${gutterVertical}px`;
    }
  }, [size]);

  return (
    <RowContext.Provider value={{ gutter }}>
      <div ref={gutterRef} className={cls} style={style}>
        {children}
      </div>
    </RowContext.Provider>
  );
};

Row.displayName = 'Row';
