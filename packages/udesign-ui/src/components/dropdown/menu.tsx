import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils/native-props';
import { BASE_CLASS_PREFIX } from '../../constants';
import DropdownContext from './context';

const prefixCls = `${BASE_CLASS_PREFIX}-dropdown-menu`;

export type DropdownMenuProps = {
  onClick?: (name: string) => void; // 点击菜单项时触发
} & NativeProps;

export const Menu = (props: DropdownMenuProps) => {
  const { onClick, children } = props;
  const cls = classNames(prefixCls);
  return (
    <>
      <DropdownContext.Provider
        value={{
          onClick,
        }}
      >
        <ul className={cls}>{children}</ul>
      </DropdownContext.Provider>
    </>
  );
};

Menu.displayName = 'DropdownMenu';
