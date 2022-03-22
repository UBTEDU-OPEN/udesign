import React from 'react';
import classNames from 'classnames';
import { Position } from '../../constants';
import { NativeProps } from '../../utils';
import { Button } from '../button';
import { CloseIcon } from '../icon';
import { Mask } from '../mask';
import { Portal } from '../_portal';

const getPositionCls = (position: Position, round: boolean) => {
  let cls = '';
  switch (position) {
    case 'top':
      cls = 'w-full top-0 left-0';
      cls += round ? ' rounded-b-xl' : '';
      break;
    case 'bottom':
      cls = 'w-full bottom-0 left-0';
      cls += round ? ' rounded-t-xl' : '';
      break;
    case 'left':
      cls = 'h-full top-0 left-0';
      cls += round ? ' rounded-r-xl' : '';
      break;
    case 'right':
      cls = 'h-full top-0 right-0';
      cls += round ? ' rounded-l-xl' : '';
      break;
    case 'center':
    default:
      cls = 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      cls += round ? ' rounded-xl' : '';
      break;
  }
  return cls;
};

export type PopupProps = {
  round?: boolean; // 是否显示圆角
  position?: Position; // 弹出层的位置
  closeable?: boolean; // 是否显示右上角的关闭按钮
  mask?: boolean; // 是否有遮罩，默认 true
  maskCloseable?: boolean; // 点击蒙层是否允许关闭
  onClose?: () => void; // Popup 关闭后的回调
  getContainer?: () => HTMLElement; // 渲染的父节点，默认 document.body
} & NativeProps;

export const Popup = ({ round, position = 'center', closeable, mask = true, maskCloseable = true, onClose, getContainer, className, style, children }: PopupProps) => {
  const handleClickMask = () => {
    if (maskCloseable) {
      onClose?.();
    }
  };

  const cls = classNames('fixed z-20 bg-white max-h-full overflow-y-auto', getPositionCls(position, Boolean(round)), className);

  return (
    <Portal getContainer={getContainer}>
      {mask ? <Mask onClick={handleClickMask} /> : null}
      <div className={cls} style={style}>
        {children}
        {closeable ? (
          <div className='absolute top-0 right-0'>
            <Button type='link' onClick={onClose}>
              <CloseIcon />
            </Button>
          </div>
        ) : null}
      </div>
    </Portal>
  );
};

Popup.displayName = 'Popup';
