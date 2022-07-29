import { ReactNode } from 'react';
import type { CSSProperties } from 'react';

export interface NativeProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties | any;
}
