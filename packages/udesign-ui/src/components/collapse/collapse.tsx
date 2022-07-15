import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { toArray, NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-collapse`;
type ValueProps<T> = {
  accordion?: boolean; // 手风琴
  bordered?: boolean; // 是否显示边框
  showArrow?: boolean; // 是否展示当前面板上的箭头
  expandIcon?: ReactNode; // 自定义图标
  headerStyle?: object; // header自定义样式
  bodyStyle?: object; // body自定义样式
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
export const Collapse = ({ accordion, bordered, showArrow, expandIcon, activeKey, defaultActiveKey, className, headerStyle, bodyStyle, children }: CollapseProps) => {
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
    } else if (active) {
      setInnerActiveKey(activeKeyList.filter((k) => k !== key));
    } else {
      setInnerActiveKey([...activeKeyList, key]);
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
        bordered,
        showArrow,
        expandIcon,
        headerStyle,
        bodyStyle,
        onItemClick,
      };
      return React.cloneElement(child, childProps);
    });

  const cls = classNames(prefixCls, className);

  return (
    <>
      <div className={cls}>{getItems()}</div>
    </>
  );
};

Collapse.displayName = 'Collapse';
