import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { NativeProps, toArray } from '../../utils';
import { Item } from './item';

export type TabbarProps = {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
} & NativeProps;

export const Tabbar = ({ activeKey, defaultActiveKey, onChange, className, children, ...restProps }: TabbarProps) => {
  const tabs = useMemo(() => toArray(children), []);

  const [innerActiveKey, setInnerActiveKey] = useState<string>(activeKey || defaultActiveKey || tabs[0].props.name);

  useEffect(() => {
    if (activeKey) {
      setInnerActiveKey(activeKey);
    }
  }, [activeKey]);

  const onItemClick = (name: string) => {
    setInnerActiveKey(name);
    onChange?.(name);
  };

  const renderContent = () => {
    const cls = classNames('flex flex-1 justify-around overflow-hidden');
    return (
      <ul className={cls}>
        {tabs.map((child) => {
          const { name } = child.props;
          const active = innerActiveKey === name;
          const newProps = {
            ...child.props,
            active,
            onItemClick,
          };
          return <Item key={name} {...newProps} />;
        })}
      </ul>
    );
  };

  const cls = classNames('fixed bottom-0 left-0 right-0 z-10 h-14 flex bg-white text-xs', className);
  return <>{tabs.length ? <div className={cls}>{renderContent()}</div> : null}</>;
};

Tabbar.displayName = 'Tabbar';
