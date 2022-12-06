import React, { useContext, ReactNode, useState, useEffect } from 'react';
import { DownOutlined, RightOutlined, UpOutlined } from '@ubt/udesign-icons';
import classNames from 'classnames';
import { MenuItem, MenuItemProps } from './item';
import Tooltip from '../tooltip';
import MenuContext from './context';
import SubMenuContext from './SubMenuContext';

export type SubmenuProps = MenuItemProps & {
  title: string; // 子菜单显示文案。
  icon?: ReactNode; // 左侧图标。
  name?: string; // 唯一标志。
  subActive?: boolean; // 父级菜单选中状态。默认值：false
};

export const Submenu = ({ title, children, icon, subActive, name = '', style, ...restProps }: SubmenuProps) => {
  const context = useContext(MenuContext);
  const { mode, prefixCls, isCollapsed, subActiveKey, affectedByChildrenSubActiveKey } = context;
  const [active, setActive] = useState(subActiveKey?.has(name));
  const [subFocus, setSubFocus] = useState(name);

  useEffect(() => {
    setActive(subActiveKey?.has(name));
  }, [subActiveKey]);

  const renderInline = () => {
    const handleClick = () => {
      context.onChange?.(name);
      if (context.subKey !== undefined) {
        return;
      }
      context?.handleClick?.(name);
      setActive(!active);
    };

    const cls = classNames({
      [`${prefixCls}-submenu-header`]: true,
      [`${prefixCls}-submenu-header-focus`]: affectedByChildrenSubActiveKey === subFocus,
    });

    const itemCls = classNames({
      [`${prefixCls}-submenu-body`]: active,
      [`${prefixCls}-submenu-body-hidden`]: !active,
    });

    return (
      <>
        <SubMenuContext.Provider
          value={{
            name: name === undefined ? '' : name,
          }}
        >
          <li className={`${prefixCls}-submenu-wrapper`}>
            <div className={cls} onClick={handleClick}>
              <span className={`${prefixCls}-submenu-header-left`}>
                <span className={`${prefixCls}-item-icon`}>{icon}</span>
                <span>{title}</span>
              </span>
              <span>{!active ? <DownOutlined /> : <UpOutlined />}</span>
            </div>
            <ul className={itemCls}>{children}</ul>
          </li>
        </SubMenuContext.Provider>
      </>
    );
  };

  const renderTitle = () => (!isCollapsed ? <span className={`${prefixCls}-item-title`}>{title}</span> : null);

  return (
    <>
      {mode === 'inline' && !isCollapsed ? (
        renderInline()
      ) : (
        <Tooltip className={`${prefixCls}-submenu-${mode}`} prefixCls={`${prefixCls}-submenu`} showArrow={false} content={children} placement={mode === 'horizontal' ? 'bottomLeft' : 'rightTop'} {...restProps} style={{ width: '100%' }}>
          <MenuItem name={name} style={style} className={isCollapsed ? `${prefixCls}-submenu-is-collapsed` : ``}>
            <span className={`${prefixCls}-item-icon`}>{icon}</span>
            {renderTitle()}
            {mode === 'vertical' ? (
              <span>
                <RightOutlined />
              </span>
            ) : null}
          </MenuItem>
        </Tooltip>
      )}
    </>
  );
};

Submenu.displayName = 'Menu.Submenu';
