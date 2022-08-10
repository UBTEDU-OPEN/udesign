import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import CollapseContext from './context';

const prefixCls = `${BASE_CLASS_PREFIX}-collapse-item`;

export type ItemProps = {
  title: string; // 标题。默认值：-
  name: string | number; // 唯一标识符。默认值：-
  disabled?: boolean; // 是否禁用。默认值：false
  showArrow?: boolean; // 是否展示当前面板上的箭头
} & NativeProps;

export const Item = ({ title, disabled = false, showArrow = true, name, className, children, style }: ItemProps) => {
  const context = useContext(CollapseContext);
  const { expandIcon, accordion, activeKey, headerStyle, bodyStyle } = context;
  let active: boolean;
  const expandControl = () => {
    if (typeof activeKey === 'string' || typeof activeKey === 'number') {
      active = activeKey === name;
    }
  };

  const renderItem = () => {
    expandControl();
    const [isActive, setIsActive] = useState(active);

    const handleClick = () => {
      if (disabled) return;
      context?.onClick?.(name, active);
      !accordion ? setIsActive(!isActive) : null;
    };
    const wrapperCls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-border`]: accordion ? active : isActive,
      [`${prefixCls}-radius`]: true,
    });
    const headerCls = classNames(
      {
        [`${prefixCls}-header`]: true,
        [`${prefixCls}-header-active`]: accordion ? active : isActive,
        [`${prefixCls}-header-disabled`]: disabled,
        [`${prefixCls}-header-border`]: true,
        [`${prefixCls}-header-active-border-radius`]: accordion ? false : isActive,
      },
      className,
    );
    const bodyCls = classNames(`${prefixCls}-body`, {
      [`${prefixCls}-body-active`]: accordion ? active : isActive,
      [`${prefixCls}-body-hidden`]: accordion ? !active : !isActive,
    });
    const iconCls = classNames({
      [`${prefixCls}-header-icon`]: accordion ? !active : !isActive,
      [`${prefixCls}-header-icon-rotate`]: accordion ? active : isActive,
    });

    return (
      <div className={wrapperCls} style={style}>
        <div className={headerCls} onClick={handleClick} style={headerStyle}>
          <span>{title}</span>
          {showArrow ? <span className={iconCls}>{expandIcon}</span> : null}
        </div>
        <div className={bodyCls} style={bodyStyle}>
          {children}
        </div>
      </div>
    );
  };

  return <>{renderItem()}</>;
};

Item.displayName = 'Item';
