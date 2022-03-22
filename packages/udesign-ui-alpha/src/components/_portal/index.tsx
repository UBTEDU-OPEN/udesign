/**
 * https://www.jayfreestone.com/writing/react-portals-with-hooks/
 */
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { NativeProps } from '../../utils';

export type PortalProps = {
  getContainer?: () => HTMLElement;
} & NativeProps;

const getDefaultContainer = () => document.body;

export const Portal = ({ getContainer, className, style, children }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | undefined>(undefined);
  // Usage note: if you need the result of useRef to be directly mutable, include | null in the type of the generic argument.
  const rootElemRef = useRef<HTMLElement | null>(null);

  // https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
  function getRootElem() {
    if (rootElemRef.current === null) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  useEffect(() => {
    const newContainer = getContainer?.() || getDefaultContainer();
    if (newContainer !== container) {
      newContainer.appendChild(getRootElem());
      addStyle(style);
      addCls();
      setContainer(newContainer);
    }

    return () => {
      getRootElem().remove();
    };
  }, []);

  const addStyle = (style = {}) => {
    // https://stackoverflow.com/questions/37655393/how-to-set-multiple-css-style-properties-in-typescript-for-an-element
    for (const key of Object.keys(style)) {
      (getRootElem().style as any)[key] = (style as any)[key]; // 如果使用 setProperty，类似 fontSize 的样式会失败
    }
  };

  const addCls = () => {
    const cls = classNames('absolute w-full top-0 left-0 z-20', className);
    getRootElem().className = cls;
  };

  if (container) {
    return createPortal(children, getRootElem());
  }

  return null;
};
