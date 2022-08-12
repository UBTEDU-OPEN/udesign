import React, { useContext } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import CollapseContext from './context';

const prefixCls = `${BASE_CLASS_PREFIX}-collapse-item`;

export type ItemProps = {
  title: string; // 标题。默认值：-
  name: string; // 唯一标识符。默认值：-
  disabled?: boolean; // 是否禁用。默认值：false
  showArrow?: boolean; // 是否展示当前面板上的箭头
} & NativeProps;

export const Item = ({ title, disabled = false, showArrow = true, name, className, children, style }: ItemProps) => {
  const context = useContext(CollapseContext);
  const { expandIcon, closeIcon, activeSet, headerStyle, bodyStyle } = context;

  const active = activeSet.has(name);

  const renderIcon = () => {
    const iconCls = classNames({
      [`${prefixCls}-header-icon`]: active,
    });
    const iconElement = <span className={iconCls}>{active ? expandIcon : closeIcon}</span>;
    return showArrow ? iconElement : null;
  };

  const renderHeader = () => {
    const cls = classNames(
      {
        [`${prefixCls}-header`]: true,
        [`${prefixCls}-header-active`]: active,
        [`${prefixCls}-header-disabled`]: disabled,
        [`${prefixCls}-header-border`]: active,
        [`${prefixCls}-header-active-border-radius`]: active,
      },
      className,
    );

    const handleClick = () => {
      if (disabled) return;
      context?.onClick?.(name);
    };

    return (
      <div className={cls} onClick={handleClick} style={headerStyle}>
        <span>{title}</span>
        {renderIcon()}
      </div>
    );
  };

  const renderBody = () => {
    const cls = classNames(`${prefixCls}-body`, {
      [`${prefixCls}-body-active`]: active,
      [`${prefixCls}-body-hidden`]: !active,
      [`${prefixCls}-body-active-border-radius`]: true,
    });
    return (
      <div className={cls} style={bodyStyle}>
        {children}
      </div>
    );
  };

  const cls = classNames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-border`]: active,
    [`${prefixCls}-radius`]: true,
  });

  return (
    <div className={cls} style={style}>
      {renderHeader()}
      {renderBody()}
    </div>
  );
};

Item.displayName = 'Collapse.Item';
