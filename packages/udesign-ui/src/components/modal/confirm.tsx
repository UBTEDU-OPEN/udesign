import React from 'react';
import ReactDOM from 'react-dom';
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled } from '@ubt/udesign-icons';
import { destroyFns, ModalProps } from './modal';
import ConfirmModal, { ConfirmModalProps } from './ConfirmModal';

export type showModalProps = ConfirmModalProps;

export default function show(props: showModalProps) {
  // create a dom in adapter?
  const div = document.createElement('div');

  let currentConfig = { ...props };

  const destroy = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  };

  function render(renderProps: showModalProps) {
    ReactDOM.render(<ConfirmModal {...renderProps} />, div);
  }

  function close() {
    currentConfig = {
      ...currentConfig,
      visible: false,
    };
    render(currentConfig);
  }

  function update(newConfig: ModalProps) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    render(currentConfig);
  }

  render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update,
  };
}

export function withInfo(props: ModalProps) {
  return {
    type: 'info' as const,
    icon: <InfoCircleFilled />,
    ...props,
  };
}

export function withSuccess(props: ModalProps) {
  return {
    type: 'success' as const,
    icon: <CheckCircleFilled />,
    ...props,
  };
}

export function withError(props: ModalProps) {
  return {
    type: 'error' as const,
    icon: <CloseCircleFilled />,
    ...props,
  };
}

export function withWarning(props: ModalProps) {
  return {
    type: 'warning' as const,
    icon: <ExclamationCircleFilled />,
    ...props,
  };
}

export function withConfirm(props: ModalProps) {
  return {
    type: 'confirm' as const,
    icon: null,
    ...props,
  };
}

export function info(props: ModalProps) {
  return show(withInfo(props));
}

export function success(props: ModalProps) {
  return show(withSuccess(props));
}

export function error(props: ModalProps) {
  return show(withError(props));
}

export function warning(props: ModalProps) {
  return show(withWarning(props));
}

export function confirm(props: ModalProps) {
  return show(withConfirm(props));
}
