import React, { CSSProperties, ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';
import Mask from '../mask';
import Portal from '../_portal';
import Space from '../space';
import Button, { ButtonProps } from '../button';
import { ButtonType } from '../button/button';
import { CloseIcon } from './close';

const prefixCls = `${BASE_CLASS_PREFIX}-modal`;
export const destroyFns: any[] = [];

export type ModalSize = Size;

export type ModalProps = {
  afterClose?: () => void; // Modal 完全关闭后的回调
  bodyStyle?: CSSProperties; //	对话框内容的样式
  cancelButtonProps?: ButtonProps; // 取消按钮的 props
  cancelText?: string; // 取消按钮的文字
  cancelLoading?: boolean; // 取消按钮 loading
  centered?: boolean; // 是否居中显示
  closeable?: boolean; // 是否显示右上角的关闭按钮
  closeIcon?: ReactNode; //	关闭按钮的icon
  closeOnEsc?: boolean; // 允许通过键盘事件Esc触发关闭
  confirmLoading?: boolean; // 确认按钮 loading
  content?: ReactNode; //	对话框内容，用于命令式调用
  footer?: ReactNode; //	对话框底部
  fullscreen?: boolean; // 对话是否是全屏（会覆盖 width height）
  getContainer?: () => HTMLElement; //	指定父级 DOM，弹层将会渲染至该 DOM 中，自定义需要设置 position: relative
  hasCancel?: boolean; //	是否显示取消按钮
  header?: ReactNode; //	对话框头部
  height?: number; //	高度
  icon?: ReactNode; // 自定义 icon
  keepDOM?: boolean; //	关闭对话框时是否销毁, 默认false
  lazyRender?: boolean; // 配合 keepDOM 使用，为 true 时挂载时不会渲染对话框组件，默认 true
  mask?: boolean; // 是否展示遮罩，默认 true
  maskCloseable?: boolean; // 是否允许通过点击遮罩来关闭对话框，默认 true
  maskStyle?: CSSProperties; //	遮罩的样式
  okButtonProps?: ButtonProps; // 确认按钮的 props
  okText?: string; // 确认按钮的文字
  okType?: ButtonType; //	确认按钮的类型
  size?: ModalSize; //	对话框宽度尺寸，默认small，可选middle,large
  title?: ReactNode; // 对话框的标题，未设置时，则不渲染默认的 header
  visible?: boolean; // 对话框是否可见
  width?: number; // 宽度
  zIndex?: number; // 遮罩的 z-index 值，默认 1000
  onCancel?: (e: React.MouseEvent) => void | Promise<any>; // 点击取消按钮或关闭按钮时的回调函数
  onOk?: (e: React.MouseEvent) => void | Promise<any>; // 点击确认按钮时的回调函数
} & NativeProps;

export const Modal = (props: ModalProps) => {
  useEffect(() => {
    function handleKeydown(e: any) {
      const { closeOnEsc = true, onCancel } = props;
      if (closeOnEsc && e.keyCode === 27) {
        e.stopPropagation();
        onCancel?.(e);
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  const renderMask = () => {
    const { mask = true, maskCloseable = true, maskStyle, onCancel } = props;

    const handleClickMask = (e: React.MouseEvent) => {
      if (maskCloseable) {
        onCancel?.(e);
      }
    };

    return mask ? <Mask onClick={handleClickMask} style={maskStyle} /> : null;
  };

  const renderIcon = () => {
    const { icon } = props;
    return icon ? <div className={`${prefixCls}-icon-wrapper`}>{icon}</div> : null;
  };

  const renderCloseBtn = () => {
    const { closeable = true, closeIcon, onCancel } = props;
    const handleClose = (e: React.MouseEvent) => {
      onCancel?.(e);
    };
    return closeable ? (
      <div className={`${prefixCls}-close`}>
        <Button size='small' type='link' onClick={handleClose} icon={closeIcon || <CloseIcon />} />
      </div>
    ) : null;
  };

  const renderHeader = () => {
    if ('header' in props) {
      return props.header;
    }

    const { title } = props;
    const icon = renderIcon();
    const closer = renderCloseBtn();
    return title === null || title === undefined ? null : (
      <div className={`${prefixCls}-header`}>
        {icon}
        <h5 className={`${prefixCls}-title`}>{title}</h5>
        {closer}
      </div>
    );
  };

  const renderBody = () => {
    const { bodyStyle, children } = props;
    return (
      <div className={`${prefixCls}-body`} style={bodyStyle}>
        {children}
      </div>
    );
  };

  const renderFooter = () => {
    if ('footer' in props) {
      return props.footer;
    }

    const { hasCancel = true, onOk, okText = '确定', okType = 'primary', okButtonProps, confirmLoading, onCancel, cancelText = '取消', cancelLoading, cancelButtonProps } = props;

    return (
      <div className={`${prefixCls}-footer`}>
        <Space justify='center'>
          {hasCancel ? (
            <Button type='default' onClick={onCancel} loading={cancelLoading} {...cancelButtonProps}>
              {cancelText}
            </Button>
          ) : null}
          <Button type={okType} onClick={onOk} loading={confirmLoading} {...okButtonProps}>
            {okText}
          </Button>
        </Space>
      </div>
    );
  };

  const renderContent = () => {
    const { centered, className, fullscreen, size = 'small', width, height } = props;

    const style: CSSProperties = {};
    if (width) {
      style.width = width;
    }
    if (height) {
      style.height = height;
    }
    if (fullscreen) {
      style.width = '100%';
      style.height = '100%';
      style.margin = 'unset';
    }

    const cls = classNames(
      prefixCls,
      {
        [`${prefixCls}-fullscreen`]: fullscreen,
        [`${prefixCls}-centered`]: centered,
        [`${prefixCls}-${size}`]: size,
      },
      className,
    );

    return (
      <div className={cls} style={style}>
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
      </div>
    );
  };

  const renderModal = () => {
    const { centered = true, zIndex = 1000, getContainer, className, style } = props;

    const cls = classNames({ [`${prefixCls}-wrap`]: true, [`${prefixCls}-wrap-centered`]: centered }, className);

    const mergedStyle: React.CSSProperties = {
      ...style,
    };
    if (zIndex) {
      mergedStyle.zIndex = zIndex;
    }
    if (getContainer) {
      mergedStyle.position = 'static';
    }

    return (
      <Portal getContainer={getContainer}>
        {renderMask()}
        <div className={cls} style={mergedStyle}>
          {renderContent()}
        </div>
      </Portal>
    );
  };

  return props.visible ? renderModal() : null;
};

Modal.displayName = 'Modal';
