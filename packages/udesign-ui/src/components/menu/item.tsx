import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import MenuContext from './context';
import SubMenuContext from './SubMenuContext';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-menu-item`;

export type MenuItemProps = {
  name?: string; // 唯一标志符。默认值：''
  icon?: ReactNode; // 图标。
  disabled?: boolean; // 是否禁用。默认值：false
  link?: boolean; // 链接状态。默认值：false
} & NativeProps;

export const MenuItem = (props: MenuItemProps) => {
  const { name = '', disabled, link = false, children, className, style } = props;

  const context = useContext(MenuContext);
  const subContext = useContext(SubMenuContext);
  const active = context?.activeKey === name;
  const mode = context?.mode;
  const hasLine = context?.hasLine;
  const isCollapsed = context?.isCollapsed;
  const subName = subContext?.name;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    context?.onChangeItemKey?.(name);
    context?.subClick?.(name, subName === undefined ? '' : subName);
  };

  const renderIcon = () => {
    const { icon } = props;
    const cls = classNames(`${prefixCls}-icon`);
    return icon ? <div className={cls}>{icon}</div> : null;
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${mode}`]: mode,
      [`${prefixCls}-link`]: link,
      [`${prefixCls}-hasLine`]: hasLine,
      [`${prefixCls}-active`]: active,
    },
    className,
  );

  return (
    <>
      <li className={cls} onClick={handleClick} style={style}>
        {renderIcon()}
        {!isCollapsed || mode === 'inline' ? children : null}
      </li>
    </>
  );
};

MenuItem.displayName = 'Menu.Item';
