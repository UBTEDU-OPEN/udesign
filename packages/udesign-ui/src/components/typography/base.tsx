import React, { ReactNode, SetStateAction } from 'react';

export interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React.ReactNode;
  onExpand?: ()=> void;
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
  icon?: [ReactNode, ReactNode];
  text?: string;
  onCopy?: ()=> void;
}

export interface EditableConfig {
  icon?: ReactNode;
  tooltip?: boolean | ReactNode;
  editing?: boolean;
  maxLength?: number;
  onStart?: ()=> void;
  onEnd?: ()=> void;
  onCancel?: ()=> void;
  autoSize?: { minRows?: number; maxRows?: number };
}
