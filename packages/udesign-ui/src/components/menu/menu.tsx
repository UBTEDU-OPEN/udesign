import React, { useState } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import MenuContext, { MenuMode } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-menu`;

export type MenuProps = {
  isCollapsed?: boolean; // 设置是否折叠。默认值：false
  hasLine?: boolean; // 设置悬停或选中时出现线条。默认值：false
  mode?: MenuMode; // 水平 or 垂直。默认值：vertical
  activeKey?: string; // 当前选中的菜单项。默认值：-
  defaultActiveKey?: string; // 默认选中的菜单项。默认值：-
  subActiveKey?: string;
  defaultSubActiveKey?: string;
  radius?: boolean; // 是否设置圆角。默认值：false
  onlyOne?: boolean; // 只展开一个。默认值：false
  onChange?: (name: string) => void; // 选中的菜单项变化时触发。默认值：-
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
