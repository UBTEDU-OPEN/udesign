import React, { ReactNode, SetStateAction } from 'react';

export interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React.ReactNode;
  onExpand?: () => void;
  tooltip?: React.ReactNode;
}

export interface TextConfig {
  type?: string;
  mark?: boolean;
  disabled?: boolean;
  code?: boolean;
  underline?: boolean;
  del?: boolean;
  italic?: boolean;
  link?: boolean;
  strong?: boolean;
  ellipsis?: EllipsisConfig | boolean;
  icon?: ReactNode;
}

export interface CopyableConfig {
  tooltip?: ReactNode;
  icon?: [ReactNode, ReactNode];
  text?: string;
  onCopy?: () => void;
}

export interface EditableConfig {
  icon?: ReactNode;
  tooltip?: boolean | ReactNode;
  editing?: boolean;
  maxLength?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onCancel?: () => void;
  autoSize?: { minRows?: number; maxRows?: number };
}
