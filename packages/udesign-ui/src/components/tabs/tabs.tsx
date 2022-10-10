import React from 'react';
import classNames from 'classnames';
import { Tab } from './tab';
import { NativeProps, toArray, usePropsValue } from '../../utils';
import { Position, BASE_CLASS_PREFIX } from '../../constants';
import TabsContext from './context';
import { TabType, TabSize } from './type';

const prefixCls = `${BASE_CLASS_PREFIX}-tabs`;

export type TabsProps = {
  type?: TabType; // 样式。默认值：line
  size?: TabSize; // 大小。默认值：middle
  position?: Position; // 标签位置。默认值：top
  centered?: boolean; // 标签居中展示。默认值：false
  tabBarStyle?: React.CSSProperties; // tab bar 的样式
  around?: boolean; // 自动平铺'justify-content: around;'。默认值：false
  activeKey?: string; // 当前激活 tab 面板的 key。默认值：-
  defaultActiveKey?: string; // 初始化选中面板的 key，如果没有设置 activeKey。默认值：-
  onChange?: (name: string) => void; // 切换时的回调。默认值：-
} & NativeProps;

export const Tabs = ({ type = 'card', tabBarStyle, position = 'top', size = 'middle', centered, around, activeKey, defaultActiveKey, onChange, className, style, children }: TabsProps) => {
  // 1. 提取所有子元素
  // const tabs = useMemo(() => toArray(children), []);
  const tabs = toArray(children);

  const [innerActiveKey, setInnerActiveKey] = usePropsValue({
    value: activeKey,
    defaultValue: defaultActiveKey ?? tabs[0]?.props.name,
    onChange,
  });

  const onInnerClick = (name: string) => {
    setInnerActiveKey(name);
    // onChange?.(name);
  };

  // 2. 为子元素挂载事件和选中状态
  const renderControls = () => {
    const cls = classNames(`${prefixCls}-header`, {
      [`${prefixCls}-type-${type}`]: type,
      [`${prefixCls}-position-center`]: centered,
      [`${prefixCls}-position-around`]: around,
    });
    return (
      <ul className={cls} style={tabBarStyle}>
        {tabs.map((child) => {
          const { name } = child.props;
          const active = innerActiveKey === name;
          const newProps = {
            ...child.props,
            //  active,
          };
          return (
            <TabsContext.Provider
              value={{
                type,
                position,
                active,
                size,
                onInnerClick,
              }}
              key={name}
            >
              <Tab {...newProps} />
            </TabsContext.Provider>
          );
        })}
      </ul>
    );
  };

  // 使用 hidden 属性来显示和隐藏内容
  const renderContent = () => {
    const cls = classNames(`${prefixCls}-content`, className);
    return (
      <div className={cls}>
        {tabs.map((child) => {
          const { name, children } = child.props;
          return (
            <div key={name} hidden={name !== innerActiveKey}>
              {children}
            </div>
          );
        })}
      </div>
    );
  };

  const cls = classNames(prefixCls, {
    [`${prefixCls}-position-${position}`]: position,
  });
  return (
    <>
      {tabs.length ? (
        <div className={cls} style={style}>
          {renderControls()}
          {renderContent()}
        </div>
      ) : null}
    </>
  );
};

Tabs.displayName = 'Tabs';
