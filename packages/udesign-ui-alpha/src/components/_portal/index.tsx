import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { NativeProps } from '../../utils';

const getDefaultContainer = () => document.body;

export type PortalProps = {
  getPopupContainer?: () => HTMLElement;
} & NativeProps;

export const Portal = ({ getPopupContainer, className, style, children }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | undefined>(undefined);
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    if (!el.current) {
      el.current = document.createElement('div');
    }

    const getContainer = getPopupContainer || getDefaultContainer;
    const newContainer = getContainer();
    if (newContainer !== container) {
      newContainer.appendChild(el.current);
      // addStyle(style);
      addCls();
      setContainer(newContainer);
    }

    return () => {
      el.current.remove();
    };
  }, []);

  // const addStyle = (style = {}) => {
  //   if (el.current) {
  //     for (const key of Object.keys(style)) {
  //       el.current.style[key] = style[key];
  //     }
  //   }
  // };

  const addCls = () => {
    const cls = classNames(className);
    if (el.current) {
      el.current.className = cls;
    }
  };

  if (container) {
    return createPortal(children, el.current);
  }

  return null;
};
