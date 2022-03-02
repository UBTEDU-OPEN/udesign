import React, { useState } from 'react';
import classNames from 'classnames';
import { toArray, NativeProps } from '../../utils';

type ValueProps<T> = {
  activeKey?: T;
  defaultActiveKey?: T;
  onChange?: (activeKey: T) => void;
};

export type CollapseProps = (
  | ({
      accordion?: false;
    } & ValueProps<string[]>)
  | ({
      accordion: true;
    } & ValueProps<string | null>)
) &
  NativeProps;

export const Collapse = ({ activeKey, defaultActiveKey, accordion, className, children }: CollapseProps) => {
  const [innerActiveKey, setInnerActiveKey] = useState(activeKey || defaultActiveKey || []);
  const activeKeyList = innerActiveKey === null ? [] : Array.isArray(innerActiveKey) ? innerActiveKey : [innerActiveKey];

  const onItemClick = (key: string) => {
    const active = activeKeyList.includes(key);
    if (accordion) {
      if (active) {
        setInnerActiveKey([]);
      } else {
        setInnerActiveKey([key]);
      }
    } else {
      if (active) {
        setInnerActiveKey(activeKeyList.filter((k) => k !== key));
      } else {
        setInnerActiveKey([...activeKeyList, key]);
      }
    }
  };

  // 为 Item 挂载 active 属性和点击事件
  const getItems = () =>
    toArray(children).map((child: React.ReactElement, index: number) => {
      const key = child.props.name || String(index);
      let active = false;
      if (accordion) {
        active = innerActiveKey[0] === key;
      } else {
        active = innerActiveKey.includes(key);
      }
      const childProps = {
        key,
        active,
        onItemClick,
      };
      return React.cloneElement(child, childProps);
    });

  const cls = classNames('bg-white', className);

  return (
    <>
      <div className={cls}>{getItems()}</div>
    </>
  );
};

Collapse.displayName = 'Collapse';
