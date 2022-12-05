import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import MenuContext, { MenuMode } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-menu`;

export type MenuProps = {
  isCollapsed?: boolean; // 设置是否折叠。默认值：false
  hasLine?: boolean; // 设置悬停或选中时出现线条。默认值：false
  mode?: MenuMode; // 水平 or 垂直。默认值：vertical
  activeKey?: string; // 当前选中的菜单项。
  defaultActiveKey?: string; // 默认选中的菜单项。
  subActiveKey?: string[];
  defaultSubActiveKey?: string[];
  accordion?: boolean; // 只展开一个。默认值：false
  onChange?: (name: string) => void; // SubMenu 展开/关闭的回调
  onClick?: (name: string) => void; // 选中的菜单项变化时触发。
} & NativeProps;

export const Menu = ({ isCollapsed = false, mode = 'vertical', hasLine, accordion, onChange, className, children, style, onClick, ...props }: MenuProps) => {
  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? '',
  });

  const [subActiveKey, setSubActiveKey] = useState<Set<string>>(new Set(props.subActiveKey || props.defaultSubActiveKey));
  const [affectedByChildrenSubActiveKey, setAffectedByChildrenSubActiveKey] = useState('');

  const onChangeItemKey = (name: string) => {
    onClick?.(name);
    setActiveKey(name);
  };

  useEffect(() => {
    setSubActiveKey(new Set(props.subActiveKey));
  }, [props.subActiveKey]);

  const handleClick = (name: string) => {
    let newSet = new Set(subActiveKey);
    if (newSet.has(name)) {
      newSet.delete(name);
    } else if (accordion) {
      newSet = new Set([name]);
    } else {
      newSet.add(name);
    }
    setSubActiveKey(newSet);
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
          onChangeItemKey,
          handleClick,
          subClick,
          onChange,
          subKey: props.subActiveKey,
          firstLevel: true,
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
