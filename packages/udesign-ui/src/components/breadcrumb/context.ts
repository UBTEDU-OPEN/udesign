import React, { createContext, ReactNode } from 'react';

export interface ConfigContextProps {
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  separator?: ReactNode;
}

export const BreadcrumbContext = createContext<ConfigContextProps>({});
