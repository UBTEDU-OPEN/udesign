import { createContext, ReactNode } from 'react';

export type CollapseContextProps = {
  expandIcon?: ReactNode;
  accordion?: boolean;
  activeKey?: string | number | string[] | number[];
  headerStyle?: object; // header自定义样式
  bodyStyle?: object; // body自定义样式
  onClick?: (activeKey: string | number, active: boolean) => void;
};

export default createContext<CollapseContextProps>({});
