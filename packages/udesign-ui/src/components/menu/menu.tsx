import React, { useState } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import MenuContext, { MenuMode } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-menu`;

export type MenuProps = {
  isCollapsed?: boolean; // 设置是否折叠
  hasLine?: boolean; // 设置悬停或选中时出现线条
  mode?: MenuMode; // 水平 or 垂直
  activeKey?: string; // 当前选中的菜单项
  defaultActiveKey?: string; // 默认选中的菜单项
  subActiveKey?: string; // 当前选中的菜单项
  defaultSubActiveKey?: string; // 默认选中的菜单项
  radius?: boolean;
  onlyOne?: boolean; // 只展开一个
  onChange?: (name: string) => void; // 选中的菜单项变化时触发
} & NativeProps;

export const Menu = ({ isCollapsed = false, mode = 'vertical', hasLine, onlyOne, onChange, className, radius, children, style, ...props }: MenuProps) => {
  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? '',
    onChange,
  });
  const [subActiveKey, setSubActiveKey] = usePropsValue({
    value: props.subActiveKey,
    defaultValue: props.defaultSubActiveKey ?? '',
    onChange,
  });
  const [affectedByChildrenSubActiveKey, setAffectedByChildrenSubActiveKey] = useState('');
  // affectedByChildren

  const onClick = (name: string) => {
    setActiveKey(name);
  };
  const handleClick = (name: string) => {
    setSubActiveKey(name);
  };
  const subClick = (name: string, item: string) => {
    console.log(name, item);
    setAffectedByChildrenSubActiveKey(item);
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${mode}`]: mode,
      [`${prefixCls}-is-collapsed`]: isCollapsed,
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
          hasLine,
          subActiveKey,
          affectedByChildrenSubActiveKey,
          onClick,
          handleClick,
          subClick,
          onlyOne,
          firstLevel: true,
          radius,
        }}
      >
        <ul className={cls} style={style}>
          {children}
        </ul>
      </MenuContext.Provider>
    </>
  );
};

Menu.displayName = 'Menu';
