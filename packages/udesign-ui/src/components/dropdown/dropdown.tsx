import React from 'react';
import { NativeProps } from '../../utils';
import { Placement, Trigger } from '../../constants';
import Tooltip from '../tooltip';

const prefixCls = `ud-dropdown`;

export type DropdownProps = {
  showArrow?: boolean; // 是否显示箭头
  content?: React.ReactNode; // 弹出层的内容
  placement?: Placement; // 弹出层的位置
  trigger?: Trigger; // 触发下拉的行为, 移动端不支持 hover
  getContainer?: () => HTMLElement; // 渲染的父节点，默认 document.body
} & NativeProps;

export const Dropdown = ({ showArrow = false, placement = 'bottomLeft', children, className, ...restProps }: DropdownProps) => (
  <>
    <Tooltip prefixCls={prefixCls} showArrow={showArrow} placement={placement} {...restProps}>
      {children}
    </Tooltip>
  </>
);

Dropdown.displayName = 'Dropdown';
