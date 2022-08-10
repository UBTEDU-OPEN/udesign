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
} & NativeProps;

export const Item = ({ title, disabled = false, name, className, children, style }: ItemProps) => {
  const context = useContext(CollapseContext);
  const { expandIcon, showArrow, accordion, activeKey, headerStyle, bodyStyle, radius, bordered } = context;
  let active: boolean;
  const expandControl = () => {
    if (typeof activeKey === 'string' || typeof activeKey === 'number') {
      active = activeKey === name;
    }
  };
  // eslint-disable-next-line consistent-return
  const renderItem = () => {
    expandControl();
    const [isActive, setIsActive] = useState(active);
    if (accordion) {
      const handleClick = () => {
        if (disabled) return;
        context?.onClick?.(name, active);
      };
      const wrapperCls = classNames(prefixCls, {
        // [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-border`]: active && bordered,
        [`${prefixCls}-radius`]: radius,
      });
      const headerCls = classNames(
        // prefixCls,
        {
          [`${prefixCls}-header`]: true,
          [`${prefixCls}-header-active`]: active,
          [`${prefixCls}-header-disabled`]: disabled,
          [`${prefixCls}-header-border`]: bordered,
        },
        className,
      );
      const bodyCls = classNames({
        [`${prefixCls}-body`]: true,
        [`${prefixCls}-body-active`]: active,
        [`${prefixCls}-body-hidden`]: !active,
      });
      const iconCls = classNames({
        [`${prefixCls}-header-icon`]: !active,
        [`${prefixCls}-header-icon-rotate`]: active,
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
    }

    if (!accordion) {
      const handleClick = () => {
        context?.onClick?.(name, active);
        setIsActive(!isActive);
      };
      const wrapperCls = classNames({
        [`${prefixCls}`]: true,
        [`${prefixCls}-border`]: isActive && bordered,
        [`${prefixCls}-radius`]: radius,
      });
      const headerCls = classNames(
        // prefixCls,
        {
          [`${prefixCls}-header`]: true,
          [`${prefixCls}-header-active`]: isActive,
          [`${prefixCls}-header-disabled`]: disabled,
          [`${prefixCls}-header-border`]: bordered,
          [`${prefixCls}-header-active-border-radius`]: bordered && isActive,
        },
        className,
      );
      const bodyCls = classNames({
        [`${prefixCls}-body`]: true,
        [`${prefixCls}-body-active`]: isActive,
        [`${prefixCls}-body-hidden`]: !isActive,
      });
      const iconCls = classNames({
        [`${prefixCls}-header-icon`]: !isActive,
        [`${prefixCls}-header-icon-rotate`]: isActive,
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
    }
  };

  return <>{renderItem()}</>;
};

Item.displayName = 'Collapse.Item';
