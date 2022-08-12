import { createContext, ReactNode } from 'react';

export type CollapseContextProps = {
  expandIcon?: ReactNode;
  closeIcon?: ReactNode;
  activeSet: Set<string>;
  onClick?: (activeKey: string) => void;
};

export default createContext<CollapseContextProps>({} as CollapseContextProps);
