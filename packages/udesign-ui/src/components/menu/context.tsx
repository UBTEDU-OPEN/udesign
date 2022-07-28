import { createContext } from 'react';
import { Direction } from '../../constants';

export type MenuMode = Direction;

export type MenuContextProps = {
  mode?: MenuMode;
  prefixCls: string;
  firstLevel: boolean;
  isCollapsed: boolean;
  activeKey?: string | number;
  subActiveKey?: string | number;
  hasLine?: boolean;
  radius?: boolean;
  onlyOne?: boolean;
  affectedByChildrenSubActiveKey?: string | number;
  onClick?: (name: string) => void;
  handleClick?: (name: string) => void;
  subClick?: (name: string, item: string) => void;
};

export default createContext<MenuContextProps>({
  prefixCls: '',
  firstLevel: true,
  isCollapsed: false,
});
