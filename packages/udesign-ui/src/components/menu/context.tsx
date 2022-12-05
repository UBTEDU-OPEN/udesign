import { createContext } from 'react';
import { Direction } from '../../constants';

export type MenuMode = Direction;

export type MenuContextProps = {
  mode?: MenuMode;
  prefixCls: string;
  firstLevel: boolean;
  isCollapsed: boolean;
  activeKey?: string | number;
  subActiveKey?: Set<string>;
  hasLine?: boolean;
  subKey?: string[];
  affectedByChildrenSubActiveKey?: string | number;
  onChangeItemKey?: (name: string) => void;
  onChange?: (name: string) => void;
  handleClick?: (name: string) => void;
  subClick?: (name: string, item: string) => void;
};

export default createContext<MenuContextProps>({
  prefixCls: '',
  firstLevel: true,
  isCollapsed: false,
});
