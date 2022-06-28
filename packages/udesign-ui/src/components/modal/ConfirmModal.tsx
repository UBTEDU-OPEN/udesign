import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { Modal, ModalProps } from './modal';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-modal`;

export interface ConfirmModalProps extends ModalProps {
  type: 'success' | 'info' | 'warning' | 'error' | 'confirm';
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [confirmLoading, setConfirmLoading] = useState<boolean>();
  const [cancelLoading, setCancelLoading] = useState<boolean>();

  const { content, icon, type, onCancel, onOk, className, ...restProps } = props;

  const handleOk = useCallback(
    (e: React.MouseEvent) => {
      const res = onOk && onOk(e);
      if (res && res.then) {
        setConfirmLoading(true);
        res.then(
          (...args) => {
            setVisible(false);
            setConfirmLoading(false);
          },
          (err) => {
            setConfirmLoading(false);
          },
        );
      } else {
        setVisible(false);
      }
    },
    [onOk],
  );

  const handleCancel = useCallback(
    (e) => {
      const res = onCancel && onCancel(e);
      if (res && res.then) {
        setCancelLoading(true);
        res.then(
          (...args) => {
            setVisible(false);
            setCancelLoading(false);
          },
          (err) => {
            setCancelLoading(false);
          },
        );
      } else {
        setVisible(false);
      }
    },
    [onCancel],
  );

  const cls = classNames(
    `${prefixCls}-confirm`,
    {
      [`${prefixCls}-${type}`]: type,
    },
    className,
  );
  return (
    <Modal className={cls} confirmLoading={confirmLoading} cancelLoading={cancelLoading} onOk={handleOk} onCancel={handleCancel} icon={icon} visible={visible} {...restProps}>
      {content}
    </Modal>
  );
};

export default ConfirmModal;
