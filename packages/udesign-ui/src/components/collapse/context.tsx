import { createContext, ReactNode } from 'react';

export type CollapseContextProps = {
  expandIcon?: ReactNode;
  closeIcon?: ReactNode;
  headerStyle?: object; // header自定义样式
  bodyStyle?: object; // body自定义样式
  activeSet: Set<string>;
  onClick?: (activeKey: string) => void;
};

export default createContext<CollapseContextProps>({} as CollapseContextProps);
