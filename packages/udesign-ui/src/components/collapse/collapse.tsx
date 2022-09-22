import React, { ReactNode, useState, useEffect } from 'react';
import classNames from 'classnames';
import { DownOutlined, UpOutlined } from '@ubt/udesign-icons';
import CollapseContext from './context';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-collapse`;

export type CollapseProps = {
  accordion?: boolean; // 手风琴。默认值：false
  expandIcon?: ReactNode; // 自定义展开图标。默认值：<UpOutlined />
  closeIcon?: ReactNode; // 自定义折叠图标。默认值：<DownOutlined />
  activeKey?: string | string[]; // 当前展开时的name。默认值: -
  defaultActiveKey?: string | string[]; // 默认展开的name。默认值: -
  onChange?: (activeKey: string | string[]) => void; // 展开/收起时的回调。默认值：-
} & NativeProps;

export const Collapse = (props: CollapseProps) => {
  const { accordion, defaultActiveKey = '', expandIcon = <UpOutlined />, closeIcon = <DownOutlined />, children, onChange, style, className } = props;

  useEffect(() => {
    setActiveSet(new Set(initActiveKey()));
  }, [props.activeKey]);

  const initActiveKey = () => {
    let activeKeyList = props.activeKey || defaultActiveKey;
    if (accordion) {
      activeKeyList = Array.isArray(activeKeyList) ? activeKeyList[0] : activeKeyList;
    }
    if (activeKeyList && activeKeyList.length) {
      activeKeyList = Array.isArray(activeKeyList) ? activeKeyList : [activeKeyList];
      return activeKeyList;
    }
    return [];
  };

  const [activeSet, setActiveSet] = useState<Set<string>>(new Set(initActiveKey()));
  const onClick = (name: string) => {
    let newSet = new Set(activeSet);
    if (newSet.has(name)) {
      newSet.delete(name);
    } else if (accordion) {
      newSet = new Set([name]);
    } else {
      newSet.add(name);
    }
    if (typeof props.activeKey === 'undefined') {
      setActiveSet(newSet);
    }
    onChange?.(name);
  };

  const cls = classNames(prefixCls, className);

  return (
    <>
      <CollapseContext.Provider
        value={{
          expandIcon,
          closeIcon,
          activeSet,
          onClick,
        }}
      >
        <div className={cls} style={style}>
          {children}
        </div>
      </CollapseContext.Provider>
    </>
  );
};

Collapse.displayName = 'Collapse';
