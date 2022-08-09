import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-layout-sider`;

export type CollapseType = 'clickTrigger' | 'responsive';

export type SiderProps = {
  // collapsible?: boolean; // 是否可收起。默认值：
  trigger?: ReactNode; // 自定义 侧边栏底部trigger，设置为 null 时隐藏 trigger。默认值：-
  defaultCollapsed?: boolean; // 是否默认收起。默认值：false
  triggerTop?: ReactNode; // 自定义 trigger，设置为 null 时隐藏 trigger。默认值：-
  onCollapse?: (collapsed: boolean) => void; // 展开-收起时的回调函数。默认值：-
  collapsed?: boolean; // 当前收起状态。默认值：-
} & NativeProps;

export const Sider = ({ defaultCollapsed = false, style, trigger, triggerTop, onCollapse, children, className, ...props }: SiderProps) => {
  const [collapsed, setCollapsed] = usePropsValue({
    value: props.collapsed,
    defaultValue: defaultCollapsed,
    onChange: onCollapse,
  });

  const cls = classNames(prefixCls, className);

  const toggleHandler = () => {
    onCollapse?.(collapsed);
  };

  const renderTrigger = () => {
    const triggerCls = classNames(`${prefixCls}-trigger`, {
      [`${prefixCls}-trigger-rotate`]: collapsed,
    });
    return trigger ? (
      <div onClick={toggleHandler} className={triggerCls}>
        {trigger}
      </div>
    ) : null;
  };
  const renderTriggerTop = () => {
    const triggerTopCls = classNames({
      [`${prefixCls}-trigger-top`]: true,
      [`${prefixCls}-trigger-top-flod`]: collapsed,
      [`${prefixCls}-trigger-top-extend`]: !collapsed,
    });
    return triggerTop ? (
      <div onClick={toggleHandler} className={triggerTopCls}>
        {triggerTop}
      </div>
    ) : null;
  };
  return (
    <>
      <aside
        className={cls}
        style={{
          ...style,
        }}
      >
        {renderTriggerTop()}
        {children}

        {renderTrigger()}
      </aside>
    </>
  );
};

Sider.displayName = 'Sider';
