import React from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { Mode } from '../../constants';
import { MenuContext } from './context';

export type MenuMode = Mode;

export type MenuProps = {
  isCollapsed?: boolean; // 设置是否折叠
  mode?: MenuMode; // 水平 or 垂直
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (name: string) => void;
} & NativeProps;

export const Menu = ({ isCollapsed = false, mode = 'vertical', onChange, className, children, ...restProps }: MenuProps) => {
  const [activeKey, setActiveKey] = usePropsValue({
    value: restProps.activeKey,
    defaultValue: restProps.defaultActiveKey ?? '',
    onChange,
  });

  const onClick = (name: string) => {
    setActiveKey(name);
  };

  const cls = classNames('overflow-hidden', mode === 'horizontal' ? 'inline-flex flex-row' : 'flex flex-col', className);
  return (
    <>
      <MenuContext.Provider
        value={{
          isCollapsed,
          activeKey,
          onClick,
        }}
      >
        <ul className={cls}>{children}</ul>
      </MenuContext.Provider>
    </>
  );
};

Menu.displayName = 'Menu';
