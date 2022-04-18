import React from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { Mode } from '../../constants';
import MenuContext from './context';

const prefixCls = `ud-menu`;

export type MenuMode = Mode;

export type MenuProps = {
  isCollapsed?: boolean; // 设置是否折叠
  mode?: MenuMode; // 水平 or 垂直
  activeKey?: string; // 当前选中的菜单项
  defaultActiveKey?: string; // 默认选中的菜单项
  onChange?: (name: string) => void; // 选中的菜单项变化时触发
} & NativeProps;

export const Menu = ({ isCollapsed = false, mode = 'vertical', onChange, className, children, ...props }: MenuProps) => {
  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? '',
    onChange,
  });

  const onClick = (name: string) => {
    setActiveKey(name);
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${mode}`]: mode,
    },
    className,
  );

  return (
    <>
      <MenuContext.Provider
        value={{
          mode,
          prefixCls,
          isCollapsed,
          activeKey,
          onClick,
          firstLevel: true,
        }}
      >
        <ul className={cls}>{children}</ul>
      </MenuContext.Provider>
    </>
  );
};

Menu.displayName = 'Menu';
