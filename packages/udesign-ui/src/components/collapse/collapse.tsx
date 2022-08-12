import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { DownOutlined, UpOutlined } from '@ubt/udesign-icons';
import CollapseContext from './context';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-collapse`;

type CollapseProps = {
  accordion?: boolean; // 手风琴。默认值：false
  bordered?: boolean; // 是否显示边框。默认值：false
  expandIcon?: ReactNode; // 自定义展开图标。默认值：<UpOutlined />
  closeIcon?: ReactNode; // 自定义折叠图标。默认值：<DownOutlined />
  headerStyle?: object; // header自定义样式。默认值：-
  bodyStyle?: object; // body自定义样式。默认值：-
  radius?: boolean; // 设置圆角。默认值：false
  activeKey?: string | string[]; // 当前展开时的name。默认值: -
  defaultActiveKey?: string | string[]; // 默认展开的name。默认值: -
  onChange?: (activeKey: string | string[]) => void; // 展开/收起时的回调。默认值：-
} & NativeProps;

export const Collapse = ({ accordion = false, activeKey, defaultActiveKey, radius, bordered, expandIcon = <UpOutlined />, closeIcon = <DownOutlined />, headerStyle, bodyStyle, children, onChange, style, className }: CollapseProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-radius`]: radius,
    },
    className,
  );

  const initActiveKey = () => {
    let activeKeyList = activeKey || defaultActiveKey;
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
    } else if (!newSet.has(name)) {
      if (accordion) {
        newSet = new Set([name]);
      } else {
        newSet.add(name);
      }
    }
    setActiveSet(newSet);
    onChange?.(name);
  };

  return (
    <>
      <CollapseContext.Provider
        value={{
          expandIcon,
          closeIcon,
          activeSet,
          headerStyle,
          bodyStyle,
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
