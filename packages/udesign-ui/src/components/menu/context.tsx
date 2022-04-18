import { createContext } from 'react';
import { Mode } from '../../constants';

export type MenuContextProps = {
  mode?: Mode;
  prefixCls: string;
  firstLevel: boolean;
  isCollapsed: boolean;
  activeKey?: string | number;
  onClick?: (name: string) => void;
};

export default createContext<MenuContextProps>({
  prefixCls: '',
  firstLevel: true,
  isCollapsed: false,
});
