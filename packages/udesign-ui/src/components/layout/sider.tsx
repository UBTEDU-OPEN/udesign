import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

const prefixCls = 'ud-layout-sider';

export type CollapseType = 'clickTrigger' | 'responsive';

export type SiderProps = {
  width?: number | string; // 宽度
  theme?: 'light' | 'dark'; //主题颜色
  collapsible?: boolean; // 是否可收起
  trigger?: ReactNode; //自定义 trigger，设置为 null 时隐藏 trigger
  collapsedWidth?: number; // 收缩宽度，设置为 0 会出现特殊 trigger
  defaultCollapsed ?:boolean;
  onCollapse?: (collapsed: boolean, type: CollapseType) => void; //展开-收起时的回调函数
  collapsed?: boolean; //是否可收起
} & NativeProps;
export const Sider = ({ width = 200, theme = 'dark', defaultCollapsed = false, collapsed, style, collapsible = false, trigger, collapsedWidth = 100, onCollapse, children, className }: SiderProps) => {
  const [toggle, steToggle] = useState(false);
  const [stateWidth, setStateWidth] = useState(width);
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-theme-${theme}`]: theme,
      [`${prefixCls}-toggle`]: toggle,
    },
    className,
  );

  const triggerCls = classNames(
    `${prefixCls}-trigger`,
    {
      [`${prefixCls}-trigger-rotate`]: stateWidth !== width,
    },
    className,
  );
  
  useEffect(() => {
    if (collapsed === false) {
      setStateWidth(width);
    } else if(collapsed === true) {
      setStateWidth(collapsedWidth);
    }else{
      setStateWidth(width);
    }
    setStateWidth(defaultCollapsed ? collapsedWidth : width)
  }, [collapsed, width]);

  const togglehandler = () => {
    if (collapsed !== undefined) return;
    if (collapsible) {
      steToggle(!toggle);
      setStateWidth(stateWidth === width ? collapsedWidth : width);
      onCollapse?.(toggle, 'clickTrigger');
    } else {
      defaultCollapsed ? setStateWidth(collapsedWidth) :  setStateWidth(width);
    }
  };
  return (
    <>
      <aside className={cls} style={{ width: `${stateWidth}px`, ...style }}>
        {children}
        {(collapsedWidth == 0 || trigger === null) && stateWidth == 0 ? <span onClick={togglehandler} className={`${prefixCls}-special-trigger`}>{trigger}</span> : null}
        {collapsible && trigger ? (
          <div onClick={togglehandler} className={triggerCls}>
            {trigger}
          </div>
        ) : null}
      </aside>
    </>
  );
};

Sider.displayName = 'Sider';
