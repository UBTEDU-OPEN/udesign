import { createContext, ReactNode } from 'react';

export type CollapseContextProps = {
  expandIcon?: ReactNode;
  accordion?: boolean;
  activeKey?: string | number | string[] | number[];
  headerStyle?: object; // header自定义样式
  bodyStyle?: object; // body自定义样式
  radius?: boolean;
  showArrow?: boolean; // 是否展示当前面板上的箭头
  bordered?: boolean; // 是否显示边框
  onClick?: (activeKey: string | number, active: boolean) => void;
};

export default createContext<CollapseContextProps>({});
