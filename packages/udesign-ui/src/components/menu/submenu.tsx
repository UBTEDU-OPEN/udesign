import React, { useContext, ReactNode, useState } from 'react';
import { DownOutlined, RightOutlined, UpOutlined } from '@ubt/udesign-icons';
import classNames from 'classnames';
import { MenuItem, MenuItemProps } from './item';
import Tooltip from '../tooltip';
import MenuContext from './context';
import SubMenuContext from './SubMenuContext';

export type SubmenuProps = MenuItemProps & {
  title: string; // 子菜单显示文案。默认值：-
  icon?: ReactNode; // 左侧图标。默认值：-
  expendIcon?: ReactNode; // 展开收起图标。默认值：-
  subMode?: 'vertical' | 'horizontal' | 'inline'; // 设置子级菜单水平 or 垂直显示。默认值：-
  name?: string; // 唯一标志。默认值：-
  subActive?: boolean; // 父级菜单选中状态。默认值：false
};

export const Submenu = ({ title, children, icon, subMode, subActive, name = '', style, ...restProps }: SubmenuProps) => {
  const context = useContext(MenuContext);
  const { mode, prefixCls, isCollapsed, subActiveKey, affectedByChildrenSubActiveKey, onlyOne } = context;

  const renderInline = () => {
    if (onlyOne) {
      let active = subActiveKey === name;
      const handleClick = () => {
        context?.handleClick?.(name);
      };
      const cls = classNames(prefixCls, {
        [`${prefixCls}-submenu-header`]: true,
        [`${prefixCls}-submenu-header-focus`]: active,
      });
      const itemCls = classNames(prefixCls, {
        [`${prefixCls}-submenu-body`]: active,
        [`${prefixCls}-submenu-body-hidden`]: !active,
      });
      return (
        <>
          <li className={`${prefixCls}-submenu-wrapper`}>
            <div className={cls} onClick={handleClick}>
              <span className={`${prefixCls}-submenu-header-left`}>
                {icon}
                <span>{title}</span>
              </span>
              <span>{!active ? <DownOutlined /> : <UpOutlined />}</span>
            </div>
            <ul className={itemCls}>{children}</ul>
          </li>
        </>
      );
      // eslint-disable-next-line no-else-return
    } else {
      const [active, setActive] = useState(subActive);
      const [subFocus, setSubFocus] = useState(name);
      const handleClick = () => {
        setActive(!active);
      };
      const cls = classNames(prefixCls, {
        [`${prefixCls}-submenu-header`]: true,
        [`${prefixCls}-submenu-header-focus`]: affectedByChildrenSubActiveKey === subFocus,
      });
      const itemCls = classNames(prefixCls, {
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
                  {icon}
                  <span>{title}</span>
                </span>
                <span>{!active ? <DownOutlined /> : <UpOutlined />}</span>
              </div>
              <ul className={itemCls}>{children}</ul>
            </li>
          </SubMenuContext.Provider>
        </>
      );
    }
  };
  const renderTitle = () => <>{!isCollapsed ? <span style={{ flexGrow: '0.9' }}>{title}</span> : null}</>;

  return (
    <>
      {(mode === 'inline' || subMode === 'inline') && !isCollapsed ? (
        renderInline()
      ) : (
        <Tooltip className={`${prefixCls}-submenu-horizontal`} prefixCls={`${prefixCls}-submenu`} showArrow={false} content={children} placement={mode === 'horizontal' ? 'bottomLeft' : 'rightTop'} {...restProps} style={{ width: '100%' }}>
          <MenuItem name={name} style={style} className={isCollapsed ? `${prefixCls}-submenu-is-collapsed` : ``}>
            {icon}
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
