import React, { ComponentType, ReactNode } from 'react';
import classNames from 'classnames';
import { BASE_CLASS_PREFIX, Size } from '../../constants';
import { NativeProps } from '../../utils';

const prefixCls = `${BASE_CLASS_PREFIX}-icon`;

export type IconSize = Size | 'inherit';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement>, NativeProps {
  svg: ReactNode; // 自定义图标svg
  size?: IconSize; // 内置图标尺寸
  spin?: boolean; // 是否有旋转动画
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { svg, spin, size = 'inherit', className, style } = props;

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-spin`]: spin,
    },
    className,
  );

  return (
    <span className={cls} role='img' ref={ref} style={style}>
      {svg}
    </span>
  );
});

export function convertIcon(svg: ComponentType) {
  // eslint-disable-next-line react/display-name
  return React.forwardRef<HTMLSpanElement, Omit<IconProps, 'svg'>>((props, ref) => <Icon svg={React.createElement(svg)} ref={ref} {...props} />);
}

Icon.displayName = 'Icon';
