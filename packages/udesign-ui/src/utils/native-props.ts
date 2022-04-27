import React, { ReactNode } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import classNames from 'classnames';

export interface NativeProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

// export interface NativeProps<S extends string = never> {
//   className?: string;
//   style?: CSSProperties & Partial<Record<S, string>>;
//   children?: ReactNode;
// }

export function withNativeProps<P extends NativeProps>(props: P, element: ReactElement) {
  const p = {
    ...element.props,
  };
  if (props.className) {
    p.className = classNames(element.props.className, props.className);
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    };
  }
  for (const key in props) {
    if (!Object.prototype.hasOwnProperty.call(props, key)) continue;
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key];
    }
  }
  return React.cloneElement(element, p);
}
