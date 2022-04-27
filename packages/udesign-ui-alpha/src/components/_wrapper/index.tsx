/**
 * conditional wrapper
 * https://gist.github.com/kitze/23d82bb9eb0baabfd03a6a720b1d637f
 */
import React from 'react';

export type WrapperProps = {
  if: boolean | any;
  with: (children: React.ReactNode) => JSX.Element;
  children?: React.ReactNode;
};

export const Wrapper = ({ if: condition, with: wrap, children }: WrapperProps) => {
  return condition ? wrap(children) : <>{children}</>;
};
