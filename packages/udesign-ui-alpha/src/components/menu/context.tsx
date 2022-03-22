import { createContext } from 'react';

export const MenuContext = createContext<{
  isCollapsed: boolean;
  activeKey: string | number;
  onClick: (name: string) => void;
} | null>(null);
