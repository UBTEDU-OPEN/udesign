import React, { ReactNode } from 'react';

export interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React.ReactNode;
  onExpand?: Function;
  tooltip?: React.ReactNode;
}

export interface TextConfig {
  type?: string;
  mark?: Boolean;
  disabled?: Boolean;
  code?: Boolean;
  underline?: Boolean;
  del?: Boolean;
  italic?: Boolean;
  link?: Boolean;
  strong?: Boolean;
  ellipsis?: EllipsisConfig | boolean;
  icon?: ReactNode;
}

export interface CopyableConfig {
  tooltip?: ReactNode;
  icon?: ReactNode;
  text?: string;
  onCopy?: Function;
}

export interface EditableConfig {
  icon?: ReactNode;
  tooltip?: boolean | ReactNode;
  editing?: boolean;
  maxLength?: number;
  onStart?: Function;
  onEnd?: Function;
  onCancel?: Function;
  autoSize?: { minRows?: number; maxRows?: number };
}
