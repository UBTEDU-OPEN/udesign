import { createContext } from 'react';

import { TabType, TabSize } from './type';
import { Position } from '../../constants';

export type TabsContextProps = {
  type?: TabType;
  size?: TabSize;
  position?: Position;
  active?: boolean;
  onInnerClick?: (name: string) => void;
};

export default createContext<TabsContextProps>({});
