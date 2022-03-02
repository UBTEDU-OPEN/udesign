import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { NativeProps, toArray, usePropsValue } from '../../utils';
import { Item } from './item';

export type MenuProps = {
  activeKey?: string;
  defaultActiveKey?: string;
  vertical?: boolean; // 设置是否垂直模式
  onChange?: (key: string) => void;
} & NativeProps;

export const Menu = ({ activeKey, defaultActiveKey, vertical, onChange, className, children, ...restProps }: MenuProps) => {
  // 1. 提取所有子元素
  const menus = useMemo(() => toArray(children), []);

  const [innerActiveKey, setInnerActiveKey] = usePropsValue({
    value: activeKey,
    defaultValue: defaultActiveKey ?? menus[0].props.name,
    onChange,
  });

  // const [innerActiveKey, setInnerActiveKey] = useState<string>(activeKey || defaultActiveKey || menus[0].props.name);

  // useEffect(() => {
  //   if (activeKey) {
  //     setInnerActiveKey(activeKey);
  //   }
  // }, [activeKey]);

  const onInnerClick = (name: string) => {
    setInnerActiveKey(name);
    // onChange?.(name);
  };

  // 2. 为子元素挂载事件和选中状态
  const renderContent = () => {
    return (
      <>
        {menus.map((child) => {
          const { name } = child.props;
          const active = innerActiveKey === name;
          const newProps = {
            ...child.props,
            active,
            onInnerClick,
          };
          return <Item key={name} {...newProps} />;
        })}
      </>
    );
  };

  const cls = classNames('overflow-hidden', vertical ? 'flex flex-col' : 'inline-flex flex-row', className);
  return <>{menus.length ? <ul className={cls}>{renderContent()}</ul> : null}</>;
};

Menu.displayName = 'Menu';
