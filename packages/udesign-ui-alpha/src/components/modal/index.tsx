import classNames from 'classnames';
import React from 'react';
import { NativeProps } from '../../utils';
import { Button, ButtonProps } from '../button';
import { CloseIcon } from '../icon';
import { Mask } from '../mask';
import { Portal } from '../_portal';

export type ModalProps = {
  visible?: boolean; // 是否显示
  title?: string; // 标题，为空则无标题
  closeable?: boolean; // 是否显示右上角的关闭按钮
  mask?: boolean; // 是否展示遮罩，默认 true
  maskCloseable?: boolean; // 点击蒙层是否允许关闭
  onOk?: () => void; // 点击OK的回调函数
  okText?: string;
  onCancel?: () => void; // 点击cancel的回调函数
  cancelText?: string;
  okButtonProps?: ButtonProps; // ok 按钮 props
  cancelButtonProps?: ButtonProps; // cancel 按钮 props
  wrapClassName?: string;
  zIndex?: number;
  afterClose?: () => void; // Modal 完全关闭后的回调
} & NativeProps;

export const Modal = ({ visible, title, closeable = true, mask = true, maskCloseable = true, onOk, okText = '确定', onCancel, cancelText = '取消', wrapClassName, afterClose, zIndex, className, style, children }: ModalProps) => {
  const handleClickMask = () => {
    if (maskCloseable) {
      afterClose?.();
    }
  };

  const cls = classNames('relative text-left md:w-80 rounded border shadow-lg px-6 py-3 bg-white', wrapClassName);

  return visible ? (
    <Portal>
      {mask ? <Mask onClick={handleClickMask} /> : null}
      <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center'>
        <div className={cls} style={style}>
          {title && <h1 className='text-gray-800 font-bold text-lg'>{title}</h1>}
          {children}
          <div className='flex items-center justify-end pt-6 gap-5'>
            <Button type='default' onClick={onCancel}>
              {cancelText}
            </Button>
            <Button type='primary' onClick={onOk}>
              {okText}
            </Button>
          </div>
          {closeable ? (
            <div className='absolute top-0 right-0'>
              <Button type='link' onClick={afterClose} icon={<CloseIcon />} />
            </div>
          ) : null}
        </div>
      </div>
    </Portal>
  ) : null;
};

Modal.displayName = 'Modal';
