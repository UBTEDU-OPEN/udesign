import React from 'react';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Placement, Trigger } from '../../constants';
import Tooltip from '../tooltip';

const prefixCls = `${BASE_CLASS_PREFIX}-dropdown`;

export type DropdownProps = {
  clickToHide?: boolean; //	在弹出层内点击时是否自动关闭弹出层。默认值：true
  showArrow?: boolean; // 是否显示箭头。默认值：false
  content?: React.ReactNode; // 弹出层的内容。默认值：-
  placement?: Placement; // 弹出层的位置。默认值：bottomLeft
  stopPropagation?: boolean; //	是否阻止弹出层上的点击事件冒泡。默认值：false
  trigger?: Trigger; // 触发下拉的行为, 移动端不支持 hover。默认值：-
  defaultVisible?: boolean; //	默认是否显隐。默认值：false
  visible?: boolean; //	当trigger为custom时，通过该属性控制是否展示弹出层。默认值：false
  zIndex?: number; //	弹层层级。默认值：-
  getContainer?: () => HTMLElement; // 渲染的父节点，默认值：document.body
  onVisibleChange?: (visible: boolean) => void; //	显示隐藏的回调。默认值：-
} & NativeProps;

export const Dropdown = React.forwardRef(({ clickToHide = true, showArrow = false, placement = 'bottomLeft', children, ...restProps }: DropdownProps, ref) => (
  <>
    <Tooltip prefixCls={prefixCls} clickToHide={clickToHide} showArrow={showArrow} placement={placement} {...restProps} ref={ref}>
      {children}
    </Tooltip>
  </>
));

Dropdown.displayName = 'Dropdown';
