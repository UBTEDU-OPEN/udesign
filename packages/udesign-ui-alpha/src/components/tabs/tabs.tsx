import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { Tab, TabType } from './tab';
import { NativeProps, toArray, usePropsValue } from '../../utils';
import { Position } from '../../constants';

const getTypeClass = (type: TabType) => {
  let cls = '';
  switch (type) {
    case 'line':
      cls = classNames('gap-5 border-b');
      break;

    case 'card':
      cls = classNames('gap-5 border-b');
      break;

    case 'button':
      cls = classNames('gap-5');
      break;

    case 'switch':
      cls = classNames('rounded-full bg-gray-100');
      break;
  }
  return cls;
};

const getPositionCls = (position: Position) => {
  let cls;
  switch (position) {
    case 'top':
    case 'bottom':
      cls = 'flex-col';
      break;
    case 'left':
    case 'right':
      cls = 'flex-row';
      break;
    default:
      break;
  }
  return cls;
};

export type TabsProps = {
  type?: TabType; // 样式，默认line
  position?: Position;
  centered?: boolean; // 标签居中展示
  around?: boolean; // 自动平铺，justify-content: around;
  activeKey?: string; // 当前激活 tab 面板的 key
  defaultActiveKey?: string; // 初始化选中面板的 key，如果没有设置 activeKey
  onChange?: (name: string) => void;
} & NativeProps;

export const Tabs = ({ type = 'line', position = 'top', centered, around, activeKey, defaultActiveKey, onChange, className, children }: TabsProps) => {
  // 1. 提取所有子元素
  // const tabs = useMemo(() => toArray(children), []);
  const tabs = toArray(children);

  const [innerActiveKey, setInnerActiveKey] = usePropsValue({
    value: activeKey,
    defaultValue: defaultActiveKey ?? tabs[0].props.name,
    onChange,
  });

  // const [innerActiveKey, setInnerActiveKey] = useState<string>(activeKey || defaultActiveKey || tabs[0].props.name);

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
  const renderControls = () => {
    const cls = classNames('flex overflow-hidden', getTypeClass(type), around ? 'justify-around' : centered ? 'justify-center' : '', position === 'right' || position === 'bottom' ? 'order-1' : '', position === 'left' || position === 'right' ? 'flex-col' : '', className);
    return (
      <ul className={cls}>
        {tabs.map((child) => {
          const { name } = child.props;
          const active = innerActiveKey === name;
          const newProps = {
            ...child.props,
            type,
            position,
            active,
            onInnerClick,
          };
          return <Tab key={name} {...newProps} />;
        })}
      </ul>
    );
  };

  // 使用 hidden 属性来显示和隐藏内容
  const renderContent = () => {
    const cls = classNames('bg-white flex-1', position === 'right' || position === 'bottom' ? 'order-none' : '');
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

  const cls = classNames('flex flex-1', getPositionCls(position));
  return (
    <>
      {tabs.length ? (
        <div className={cls}>
          {renderControls()}
          {renderContent()}
        </div>
      ) : null}
    </>
  );
};

Tabs.displayName = 'Tabs';
