import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';
import Mask from '../mask';
import Portal from '../_portal';
import Space from '../space';
import Button, { ButtonProps } from '../button';
import { ButtonType } from '../button/button';
import LocaleConsumer from '../locale/consumer';
import { Locale } from '../locale/interface';
import Scrollbar from '../scrollbar';
import Close from '../close';
import Back from '../back';
import Minus from '../minus';
import Help from '../help';
import Drag from './drag';

const prefixCls = `${BASE_CLASS_PREFIX}-modal`;
export const destroyFns: any[] = [];

export type ModalSize = Size;

export type ModalProps = {
  afterClose?: () => void; // 对话框完全关闭后的回调。
  bodyStyle?: CSSProperties; //	对话框body的样式。
  cancelButtonProps?: ButtonProps; // 取消按钮的 props，继承 ButtonProps，优先级高。
  cancelText?: string; // 取消按钮的文字。
  cancelLoading?: boolean; // 取消按钮 loading。默认值：false
  centered?: boolean; // 是否居中显示。默认值：false
  closeable?: boolean; // 右上角的关闭按钮是否可点击。默认值：true
  showClose?: boolean; // 是否显示右上角的关闭按钮。默认值：true
  closeIcon?: ReactNode; //	自定义关闭按钮的图标。
  closeOnEsc?: boolean; // 允许通过键盘事件Esc触发关闭。默认值：
  confirmLoading?: boolean; // 确认按钮 loading。默认值：true
  content?: ReactNode; //	对话框内容，用于命令式调用。
  footer?: ReactNode; //	对话框底部。
  keepDOM?: boolean; // 关闭后是否不销毁。默认值：false
  fullscreen?: boolean; // 对话是否是全屏（会覆盖 width height）。默认值：false
  getContainer?: () => HTMLElement; //	指定父级 DOM，弹层将会渲染至该 DOM 中，自定义需要设置 position: relative。
  hasCancel?: boolean; //	是否显示取消按钮。默认值：
  header?: ReactNode; //	对话框头部。
  height?: number | string; //	自定义高度，内容溢出会出现滚动条，内容不足会补空白。
  icon?: ReactNode; // 自定义 icon。
  // keepDOM?: boolean; //	关闭对话框时是否销毁。默认值：false
  // lazyRender?: boolean; // 配合 keepDOM 使用，为 true 时挂载时不会渲染对话框组件 。默认值：true
  mask?: boolean; // 是否展示遮罩。默认值：true
  maskCloseable?: boolean; // 是否允许通过点击遮罩来关闭对话框。默认值：true
  maskStyle?: CSSProperties; //	遮罩的样式。
  okButtonProps?: ButtonProps; // 确认按钮的 props，继承 ButtonProps，优先级高。
  okText?: string; // 确认按钮的文字。
  okType?: ButtonType; //	确认按钮的类型。默认值：primary
  size?: ModalSize; //	对话框宽度尺寸，可选small,middle,large。默认值：small
  title?: ReactNode; // 对话框的标题，未设置时，则不渲染默认的 header。
  visible?: boolean; // 对话框是否可见。默认值：false
  width?: number | string; // 自定义宽度。
  zIndex?: number; // 对话框的 z-index 值。默认值：1000
  showScrollbar?: boolean; // 是否使用内置滚动条。默认值：true
  showBack?: boolean; // 是否显示左上角的回退按钮。默认值：false
  backIcon?: ReactNode; //	自定义回退按钮的图标。
  showAnimation?: boolean; // 动画开关。默认值：true
  animation?: 'fadeIn' | 'slideInUp'; // 动画方式，。默认值：fadeIn
  onBack?: (e: React.MouseEvent) => void; // 点击回退按钮时的回调函数。
  showHelp?: boolean; // 是否显示右上角的缩小按钮。默认值：false
  draggable?: boolean; // 是否开启拖拽。
  helpIcon?: ReactNode; //	自定义缩小按钮的图标。
  onHelp?: (e: React.MouseEvent) => void; // 点击缩小按钮时的回调函数。
  showMinus?: boolean; // 是否显示右上角的缩小按钮。默认值：false
  minusIcon?: ReactNode; //	自定义缩小按钮的图标。
  onMinus?: (e: React.MouseEvent) => void; // 点击缩小按钮时的回调函数。
  onCancel?: (e: React.MouseEvent) => void | Promise<any>; // 点击取消按钮或关闭按钮时的回调函数。
  onOk?: (e: React.MouseEvent) => void | Promise<any>; // 点击确认按钮时的回调函数。
} & NativeProps;

export const Modal = (props: ModalProps) => {
  const { keepDOM = false, visible, showAnimation = true, animation = 'fadeIn' } = props;
  const [hidden, setHidden] = useState(true);
  const [displayNone, setDisplayNone] = useState(true);

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

    const mergedStyle: React.CSSProperties = {
      ...maskStyle,
    };

    if (displayNone) {
      mergedStyle.display = 'none';
    }

    const cls = classNames({
      [`${prefixCls}-fadeIn`]: visible && !displayNone && showAnimation,
      [`${prefixCls}-fadeOut`]: !visible && !displayNone && showAnimation,
    });

    return mask ? <Mask className={cls} onClick={handleClickMask} style={mergedStyle} /> : null;
  };

  const renderIcon = () => {
    const { icon } = props;
    return icon ? <div className={`${prefixCls}-icon-wrapper`}>{icon}</div> : null;
  };

  const renderBackBtn = () => {
    const { showBack, backIcon, onBack } = props;
    const handleClick = (e: React.MouseEvent) => {
      onBack?.(e);
    };
    return showBack ? (
      <div className={`${prefixCls}-header-icon`} onClick={handleClick}>
        {backIcon ? <Icon size='middle' svg={backIcon} /> : <Back size='middle' />}
      </div>
    ) : null;
  };

  const renderHelpBtn = () => {
    const { showHelp, helpIcon, onHelp } = props;
    const handleClick = (e: React.MouseEvent) => {
      onHelp?.(e);
    };
    return showHelp ? (
      <div className={`${prefixCls}-header-icon`} onClick={handleClick}>
        {helpIcon ? <Icon size='middle' svg={helpIcon} /> : <Help size='middle' />}
      </div>
    ) : null;
  };

  const renderMinusBtn = () => {
    const { showMinus, minusIcon, onMinus } = props;
    const handleClick = (e: React.MouseEvent) => {
      onMinus?.(e);
    };
    return showMinus ? (
      <div className={`${prefixCls}-header-icon`} onClick={handleClick}>
        {minusIcon ? <Icon size='middle' svg={minusIcon} /> : <Minus size='middle' />}
      </div>
    ) : null;
  };

  const renderCloseBtn = () => {
    const { showClose = true, closeable = true, closeIcon, onCancel } = props;
    const handleClick = (e: React.MouseEvent) => {
      if (!closeable) return;
      onCancel?.(e);
    };

    const cls = classNames(`${prefixCls}-header-icon`, {
      [`${prefixCls}-header-icon-disabled`]: !closeable,
    });
    return showClose ? (
      <div className={cls} onClick={handleClick}>
        {closeIcon ? <Icon size='middle' svg={closeIcon} /> : <Close size='middle' />}
      </div>
    ) : null;
  };

  const renderHeader = () => {
    if ('header' in props) {
      return props.header;
    }

    const { title } = props;
    return title === null || title === undefined ? null : (
      <div className={`${prefixCls}-header`}>
        {renderIcon()}
        <div className={`${prefixCls}-title`}>{title}</div>
        <div className={`${prefixCls}-header-left`}>{renderBackBtn()}</div>
        <div className={`${prefixCls}-header-right`}>
          {renderHelpBtn()}
          {renderMinusBtn()}
          {renderCloseBtn()}
        </div>
      </div>
    );
  };

  const renderBody = () => {
    const { bodyStyle, showScrollbar = true, children } = props;
    return (
      <div className={`${prefixCls}-body`} style={bodyStyle}>
        {showScrollbar ? <Scrollbar className={`${prefixCls}-body-scrollbar`}>{children}</Scrollbar> : children}
      </div>
    );
  };

  const renderFooter = () => {
    if ('footer' in props) {
      return props.footer;
    }

    const { hasCancel = true, onOk, okText, okType = 'primary', okButtonProps, confirmLoading, onCancel, cancelText, cancelLoading, cancelButtonProps } = props;

    return (
      <LocaleConsumer componentName='Modal'>
        {(locale: Locale['Modal']) => (
          <div className={`${prefixCls}-footer`}>
            <Space justify='center'>
              {hasCancel ? (
                <Button type='default' onClick={onCancel} loading={cancelLoading} {...cancelButtonProps}>
                  {cancelText || locale.cancel}
                </Button>
              ) : null}
              <Button type={okType} onClick={onOk} loading={confirmLoading} {...okButtonProps}>
                {okText || locale.confirm}
              </Button>
            </Space>
          </div>
        )}
      </LocaleConsumer>
    );
  };

  const renderContent = () => {
    const { centered, fullscreen, size = 'small', width, height, draggable = false } = props;

    const style: CSSProperties = {};
    if (width) {
      style.width = width;
    }
    if (height) {
      style.height = height;
    }
    if (draggable) {
      style.userSelect = 'none';
    }

    const cls = classNames(prefixCls, {
      [`${prefixCls}-fullscreen`]: fullscreen,
      [`${prefixCls}-centered`]: centered,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${animation}`]: visible && showAnimation,
      [`${prefixCls}-${animation === 'fadeIn' ? 'fadeOut' : 'slideOutDown'}`]: !visible && showAnimation,
    });

    return (
      <div
        className={cls}
        style={{
          ...style,
        }}
      >
        {draggable ? <Drag updateTransform={updateTransform}>{renderHeader()}</Drag> : renderHeader()}
        {renderBody()}
        {renderFooter()}
      </div>
    );
  };

  useEffect(() => {
    if (!visible) {
      if (!showAnimation) toggleHidden();
    } else {
      setHidden(false);
      setDisplayNone(false);
    }
  }, [visible]);

  const onAnimationEnd = () => {
    if (visible) {
      setDisplayNone(false);
    } else toggleHidden();
  };

  const toggleHidden = () => {
    setDisplayNone(true);
    !keepDOM && setHidden(true);
    props.afterClose?.();
  };

  const renderModal = () => {
    const { centered = true, zIndex = 1000, getContainer, fullscreen, className, style } = props;
    const cls = classNames(
      {
        [`${prefixCls}-wrap`]: true,
        [`${prefixCls}-wrap-centered`]: centered,
        [`${prefixCls}-wrap-fullscreen`]: fullscreen,
      },
      className,
    );
    const mergedStyle: React.CSSProperties = {
      ...style,
    };
    if (zIndex) {
      mergedStyle.zIndex = zIndex;
    }
    if (getContainer) {
      mergedStyle.position = 'static';
    }

    if (displayNone) {
      mergedStyle.display = 'none';
    }

    return (
      <Portal getContainer={getContainer}>
        {renderMask()}
        <div className={cls} style={mergedStyle} ref={modalRef} onAnimationEnd={onAnimationEnd}>
          {renderContent()}
        </div>
      </Portal>
    );
  };

  return hidden ? null : renderModal();
};

let modalDom: HTMLDivElement;
const modalRef = () => {
  modalDom = document.getElementsByClassName('ud-modal-wrap')[0] as HTMLDivElement;
};
const updateTransform = (transformStr: string) => {
  if (modalDom) modalDom.style.transform = transformStr;
};

Modal.displayName = 'Modal';
