import { createContext } from 'react';

export type PanelContextProps = {
  hidePrev?: boolean;
  hideNext?: boolean;
};
const PanelContext = createContext<PanelContextProps>({});

export default PanelContext;
